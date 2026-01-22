"use client";
export default function AboutPage() {
  return (
<section className="relative pt-4 sm:pt-8 lg:pt-8 pb-4 sm:pb-6 lg:pb-8 bg-white overflow-hidden">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          
          {/* Image - Affichée en premier sur mobile */}
          <div className="
            relative 
            mx-auto lg:mx-0 
            w-full
            max-w-[280px] sm:max-w-[320px] lg:max-w-md
            order-first lg:order-last
          ">
            <div className="
              aspect-[3/4]
              rounded-2xl 
              overflow-hidden 
              shadow-2xl
              bg-gradient-to-br from-gray-100 to-gray-200
              border border-gray-200
              relative
            ">
              <img 
                src="/farouk.png" 
                alt="Omar El Farouk Kortas"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Texte */}
          <div className="text-center lg:text-left px-2 sm:px-0">
            <div className="inline-block mb-4 sm:mb-6">
              <span className="font-serif text-gray-600 tracking-[0.3em] sm:tracking-[0.4em] uppercase text-xs sm:text-sm md:text-base font-medium">
                CRÉATEUR & VISIONNAIRE
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Omar El Farouk
              <br />
              <span className="text-black">Kortas</span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg text-gray-700 font-light mb-8 sm:mb-10 lg:mb-12 leading-relaxed text-justify">
              My name is Omar, a passionate creator who sees beauty not only in aesthetics, 
              but in structure, balance, and intention. With a background shaped by technology, 
              design, and constant exploration, I believe that every project is more than a 
              product — it is an experience built through precision, emotion, and a clear vision.
            </p>

            {/* Bouton Contact - Bien visible sur mobile */}
            <div className="flex justify-center lg:justify-start">
              <a 
                href="/contact" 
                className="
                  inline-block
                  px-6 sm:px-8 
                  py-3 sm:py-4
                  bg-gray-900 
                  text-white 
                  rounded-full 
                  font-medium
                  text-sm sm:text-base
                  hover:bg-gray-800 
                  transition-all 
                  duration-300
                  shadow-lg
                  hover:shadow-xl
                  hover:scale-105
                  active:scale-95
                "
              >
                Contact Me
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}