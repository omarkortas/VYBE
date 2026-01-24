export default function HeroSection() {
  return (
    <section className="relative bg-white">
      
      {/* Hero Split Screen */}
      <div className="min-h-screen grid lg:grid-cols-2">
        
        {/* Colonne gauche - Contenu */}
        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-24 py-6 lg:py-0 bg-white relative z-20">
          
          {/* Badge premium */}
          <div className="mb-12">
            <span className="inline-block text-xs tracking-[0.4em] uppercase text-stone-400 font-light border border-stone-200 px-6 py-3 rounded-full">
              Collection 2026
            </span>
          </div>

          {/* Titre massif */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-stone-900 mb-8 leading-[0.95]">
            L'Art<br />
            de la<br />
            <span className="italic font-normal">Distinction</span>
          </h1>

          {/* Description élégante */}
          <p className="text-stone-600 text-base md:text-lg font-light leading-relaxed max-w-md mb-12">
            Une collection exclusive où chaque détail est pensé pour sublimer 
            l'instant. L'excellence comme signature, l'élégance comme évidence.
          </p>

          {/* CTAs raffinés */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <a href="/collections"><button className="group relative px-8 py-4 bg-stone-900 text-white text-sm tracking-[0.2em] uppercase font-light overflow-hidden transition-all hover:bg-stone-800">
              <span className="relative z-10">Explorer</span>
            </button></a>
            
            <a href="/contact"><button className="px-8 py-4 border border-stone-300 text-stone-900 text-sm tracking-[0.2em] uppercase font-light hover:border-stone-900 transition-all">
              Prendre Rendez-vous
            </button></a>
          </div>

          {/* Micro stats inline */}
          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
              <span className="text-stone-500 font-light">Fait Main</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
              <span className="text-stone-500 font-light">Edition Limitée</span>
            </div>
          </div>
        </div>

        {/* Colonne droite - Visuel immersif */}
        <div className="relative min-h-[50vh] lg:min-h-screen order-first lg:order-last">
          {/* Vidéo/Image principale */}
          <div className="absolute inset-0">
            <video
              src="/herooo.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay transparent */}
            <div className="absolute inset-0"></div>
          </div>

          {/* Badge flottant */}
          <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-full border border-stone-200">
            <p className="text-xs tracking-[0.3em] uppercase text-stone-900 font-light">Nouveau</p>
          </div>

          

        </div>
      </div>

      {/* Section Features - Ultra minimaliste */}
      <div className="border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-8 py-2">
          <div className="grid md:grid-cols-3 gap-12">
            

              

        

          </div>
        </div>
      </div>

    </section>
  )
}