"use client";
export default function AboutPage() {
  return (
<section className="relative pt-16 lg:pt-14 pb-6 bg-white overflow-hidden">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Colonne gauche : Textes */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-6">
              <span className="font-serif text-gray-600 tracking-[0.4em] uppercase text-sm md:text-base font-medium">
                CRÉATEUR & VISIONNAIRE
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Omar El Farouk
              <br />
              <span className="text-black">Kortas</span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-base lg:text-lg text-gray-700 font-light mb-10 lg:mb-12 leading-relaxed text-justify">
              My name is Omar, a passionate creator who sees beauty not only in aesthetics, 
              but in structure, balance, and intention. With a background shaped by technology, 
              design, and constant exploration, I believe that every project is more than a 
              product — it is an experience built through precision, emotion, and a clear vision.
            </p>

            
          </div>

          <div className="
  relative 
  mx-auto lg:mx-0 
  max-w-[220px] sm:max-w-[280px] lg:max-w-sm 
  order-first lg:order-last 
  mt-8 sm:mt-12 lg:mt-16 lg:translate-x-24    // ← AJOUTE ÇA (espace en haut)
  -translate-y-10 lg:-translate-y-20
">
  {/* ton div intérieur avec l'image */}
  <div className="
    aspect-[3/4]
    rounded-2xl 
    overflow-hidden 
    shadow-lg 
    bg-gradient-to-br from-gray-100 to-gray-200
    border border-gray-200
    flex items-center justify-center
    relative   // important pour positionner l'img absolute
  ">
    <img 
      src="/farouk.png" 
      alt="Omar El Farouk Kortas"
      className="absolute inset-0 w-full h-full object-cover"
    />

              
              {/* Pour ajouter une vidéo, utilisez:
              <video
                src="/about-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              */}
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}