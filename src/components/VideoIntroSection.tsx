const VideoIntroSection = () => {
  return (
    <section className="bg-background py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Texto */}
        <h2 className="text-foreground text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12">
          600% parece muito, é o que o Emerson também achava, até acontecer com ele.
        </h2>

        {/* Video Placeholder */}
        <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <p className="text-muted-foreground text-sm">Vídeo será adicionado aqui</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntroSection;
