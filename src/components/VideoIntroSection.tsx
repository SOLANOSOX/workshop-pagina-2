const VideoIntroSection = () => {
  return (
    <section className="bg-background py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Texto */}
        <h2 className="text-foreground text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12">
          600% parece muito, é o que o Emerson também achava, até acontecer com ele.
        </h2>

        {/* iPhone Mockup Container */}
        <div className="flex justify-center items-center">
          {/* iPhone Frame */}
          <div className="relative w-full max-w-[320px] md:max-w-[380px]">
            {/* Phone Body with Shadow */}
            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
              {/* Screen Bezel */}
              <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
                {/* Notch/Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10 flex items-center justify-center">
                  <div className="w-14 h-4 bg-gray-900 rounded-full"></div>
                </div>

                {/* Screen Content - Video Placeholder */}
                <div className="relative aspect-[9/19.5] bg-gradient-to-b from-gray-900 to-black">
                  <div className="absolute inset-0 flex items-center justify-center pt-8">
                    <div className="text-center">
                      {/* Play Button */}
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/30 shadow-lg">
                        <svg
                          className="w-10 h-10 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground text-xs md:text-sm px-4">
                        Vídeo será adicionado aqui
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Buttons */}
              <div className="absolute -left-1 top-20 w-1 h-8 bg-gray-700 rounded-l"></div>
              <div className="absolute -left-1 top-32 w-1 h-12 bg-gray-700 rounded-l"></div>
              <div className="absolute -left-1 top-48 w-1 h-12 bg-gray-700 rounded-l"></div>
              <div className="absolute -right-1 top-28 w-1 h-16 bg-gray-700 rounded-r"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntroSection;
