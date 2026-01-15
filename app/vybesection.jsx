// components/LaMaisonSection.tsx
"use client";

export default function VybeSection() {
  return (
    <section className="py-2 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre principal */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-serif text-gray-600 tracking-[0.4em] uppercase text-sm md:text-base font-medium">
              VYBE
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            L'Excellence au Service
            <br />
            de l'Élégance
          </h2>
        </div>

        {/* Texte introductif */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed">
            Fondée sur les principes d'un artisanat d'exception, Maison Élégance perpétue la tradition du beau et du raffiné dans chacune de ses créations.
          </p>
        </div>

        {/* Grille des 4 piliers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Pilier 1 - Excellence */}
          <div className="text-center group">
            <div className="
              w-20 h-20 md:w-24 md:h-24 
              mx-auto mb-6 
              bg-white rounded-full 
              flex items-center justify-center 
              border border-gray-200 
              group-hover:shadow-lg 
              transition-all duration-300
            ">
              <span className="text-4xl">🏆</span>
            </div>
            <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">
              Excellence
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Créations d'exception certifiées
            </p>
          </div>

          {/* Pilier 2 - Savoir-faire */}
          <div className="text-center group">
            <div className="
              w-20 h-20 md:w-24 md:h-24 
              mx-auto mb-6 
              bg-white rounded-full 
              flex items-center justify-center 
              border border-gray-200 
              group-hover:shadow-lg 
              transition-all duration-300
            ">
              <span className="text-4xl">❤️</span>
            </div>
            <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">
              Savoir-faire
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Artisanat français depuis 2018
            </p>
          </div>

          {/* Pilier 3 - Service Premium */}
          <div className="text-center group">
            <div className="
              w-20 h-20 md:w-24 md:h-24 
              mx-auto mb-6 
              bg-white rounded-full 
              flex items-center justify-center 
              border border-gray-200 
              group-hover:shadow-lg 
              transition-all duration-300
            ">
              <span className="text-4xl">🚚</span>
            </div>
            <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">
              Service Premium
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Livraison écrin offerte
            </p>
          </div>

          {/* Pilier 4 - Matériaux Nobles */}
          <div className="text-center group">
            <div className="
              w-20 h-20 md:w-24 md:h-24 
              mx-auto mb-6 
              bg-white rounded-full 
              flex items-center justify-center 
              border border-gray-200 
              group-hover:shadow-lg 
              transition-all duration-300
            ">
              <span className="text-4xl">💎</span>
            </div>
            <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">
              Matériaux Nobles
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Finitions précieuses garanties
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}