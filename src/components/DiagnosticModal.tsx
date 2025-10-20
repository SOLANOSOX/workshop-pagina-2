import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// Assume useToast, Dialog components, and utility components are available
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
}
  from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


// =============================================================
// 1. SCHEMA DE VALIDAÇÃO ZOD ATUALIZADO
// =============================================================
const formSchema = z.object({
  nomeCompleto: z.string().min(1, "Nome completo é obrigatório"),
  email: z.string().email("E-mail inválido").min(1, "E-mail é obrigatório"),
  celular: z.string().min(1, "Celular/WhatsApp é obrigatório"),
  // O campo 'tipoUsuario' foi mantido.
  tipoUsuario: z.string().min(1, "Selecione uma opção"),
  // Campos ocultos injetados manualmente, opcionais para o Zod
  fbp: z.string().optional(),
  fbc: z.string().optional(),
});

// Definimos um tipo para os dados do formulário sem os campos ocultos,
// mas a função onSubmit aceitará este tipo e adicionará os cookies.
type FormInputs = z.infer<typeof formSchema>;

// Tipo para o payload de UTMs
type UTMParams = {
  pageUrl: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
};

// Tipo para o payload completo enviado ao webhook (AGORA INCLUI UTMS)
type WebhookPayload = FormInputs & {
  fbp?: string;
  fbc?: string;
} & UTMParams;


interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// =============================================================
// HELPER PARA EXTRAIR COOKIES _fbp e _fbc
// =============================================================
const getCookie = (name: string): string | undefined => {
  if (typeof document === 'undefined') return undefined;
  const cookieMatch = document.cookie.split('; ').find(row => row.trim().startsWith(name + '='));
  return cookieMatch ? cookieMatch.split('=')[1] : undefined;
};

// =============================================================
// HELPER PARA EXTRAIR URL E UTMS (AJUSTADO PARA RETORNAR UNDEFINED SE VAZIO)
// =============================================================
const getUTMParams = (): UTMParams => {
  if (typeof window === 'undefined') return { pageUrl: '' };
  try {
    const urlParams = new URLSearchParams(window.location.search);
    // Helper interno para obter o parâmetro ou undefined se for nulo ou vazio
    const getParam = (key: string): string | undefined => {
      const value = urlParams.get(key);
      return (value && value.trim() !== '') ? value.trim() : undefined;
    };

    return {
      pageUrl: window.location.href,
      utmSource: getParam('utm_source'),
      utmMedium: getParam('utm_medium'),
      utmCampaign: getParam('utm_campaign'),
      utmContent: getParam('utm_content'),
      utmTerm: getParam('utm_term'),
    };
  } catch (e) {
    console.error("Erro ao extrair parâmetros UTM:", e);
    // Em caso de erro, retorna o que for possível, garantindo que `pageUrl` exista.
    return { pageUrl: window.location.href || '' };
  }
};


const DiagnosticModal: React.FC<DiagnosticModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeCompleto: "",
      email: "",
      celular: "",
      tipoUsuario: "",
    },
  });

  const onSubmit = async (data: FormInputs) => {
    setIsLoading(true);

    // 1. Construir URL do checkout com os dados do usuário
    const checkoutUrl = new URL("https://pay.hub.la/CDPxuhw2s0rKWQY5MJ7v");

    // Configurado para enviar Nome, Email e Telefone
    checkoutUrl.searchParams.append("name", data.nomeCompleto);
    checkoutUrl.searchParams.append("email", data.email);
    checkoutUrl.searchParams.append("phone", data.celular);

    // 2. Extrair fbp e fbc dos cookies
    const fbp = getCookie('_fbp') || "";
    const fbc = getCookie('_fbc') || "";

    // 3. Extrair os parâmetros UTM
    const utmParams = getUTMParams();

    // =========================================================================
    // ALTERAÇÃO REALIZADA: ADICIONANDO UTMS AO CHECKOUT URL DO HUBLA
    // =========================================================================
    if (utmParams.utmSource) checkoutUrl.searchParams.append("utm_source", utmParams.utmSource);
    if (utmParams.utmMedium) checkoutUrl.searchParams.append("utm_medium", utmParams.utmMedium);
    if (utmParams.utmCampaign) checkoutUrl.searchParams.append("utm_campaign", utmParams.utmCampaign);
    if (utmParams.utmContent) checkoutUrl.searchParams.append("utm_content", utmParams.utmContent);
    if (utmParams.utmTerm) checkoutUrl.searchParams.append("utm_term", utmParams.utmTerm);
    // =========================================================================

    // Criar o payload completo para o webhook, incluindo cookies e UTMS (isso já estava correto)
    const webhookData: WebhookPayload = {
        ...data,
        fbp,
        fbc,
        ...utmParams, // Incluindo todos os parâmetros UTM e pageUrl
    };

    let webhookSuccess = false;

    try {
      console.log("Enviando dados para o webhook:", webhookData);

      // 4. Enviar dados para o webhook com timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        controller.abort();
        console.warn("Timeout do webhook (10s) - abortando requisição.");
      }, 10000); // 10 segundos timeout

      const webhookResponse = await fetch("https://hook.us1.make.com/2i60eeice22097x3a3ruxhwpslucmnga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookData), // Envia o payload completo
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      console.log("Resposta do webhook:", webhookResponse.status, webhookResponse.statusText);

      if (webhookResponse.ok) {
        webhookSuccess = true;
        console.log("Webhook enviado com sucesso");
      } else {
        console.warn("Webhook retornou erro:", webhookResponse.status, webhookResponse.statusText);
      }

    } catch (error) {
      console.error("Erro ao enviar para webhook:", error);
      if (error.name === 'AbortError') {
        console.warn("Timeout do webhook - continuando com checkout");
      }
    }

    // 5. Sempre redirecionar para o checkout, independente do webhook
    try {
      toast({
        title: webhookSuccess ? "Sucesso!" : "Redirecionando...",
        description: webhookSuccess
          ? "Dados enviados para o CRM. Redirecionando para o checkout..." // Texto atualizado
          : "Não foi possível conectar ao CRM, mas estamos te redirecionando para o checkout.",
        // Usando 'default' para sucesso e 'destructive' para aviso/erro.
        variant: webhookSuccess ? "default" : "destructive",
      });

      // Fechar modal e redirecionar após um breve delay
      setTimeout(() => {
        onClose();
        // Redireciona na mesma guia (window.location.href)
        window.location.href = checkoutUrl.toString();
      }, 1000);

    } catch (error) {
      console.error("Erro ao processar checkout:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro inesperado ao tentar redirecionar. Copie e cole o link do checkout manualmente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-background border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative pb-4">
          <DialogTitle className="text-center text-xl md:text-2xl font-bold text-primary">
            Garanta seu acesso!
          </DialogTitle>
          <p className="text-center text-foreground text-sm md:text-base">
            INSIRA SEUS DADOS ABAIXO
          </p>
        </DialogHeader>

        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

            {/* Nome Completo */}
            <FormField
              control={form.control}
              name="nomeCompleto"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground text-sm font-medium">
                    Nome Completo <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seu nome completo"
                      {...field}
                      className="bg-background border-input text-foreground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* E-mail */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground text-sm font-medium">
                    E-mail <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      {...field}
                      className="bg-background border-input text-foreground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Celular/WhatsApp */}
            <FormField
              control={form.control}
              name="celular"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground text-sm font-medium">
                    Celular/WhatsApp <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seu WhatsApp (DDD) 9 xxxx-xxxx"
                      {...field}
                      className="bg-background border-input text-foreground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Você é dono/gestor (MANTIDO) */}
            <FormField
              control={form.control}
              name="tipoUsuario"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground text-sm font-medium">
                    Você é dono, gestor ou corretor autônomo? <span className="text-destructive">*</span>
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background border-input text-foreground">
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="dono">Dono</SelectItem>
                      <SelectItem value="gestor">Gestor</SelectItem>
                      <SelectItem value="corretor">Corretor Autônomo</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 text-lg disabled:opacity-50"
            >
              {isLoading ? "ENVIANDO..." : "GARANTIR ACESSO"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DiagnosticModal;
