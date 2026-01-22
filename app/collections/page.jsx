// components/CollectionsSection.tsx
'use client';
export default function CollectionsSection() {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre principal */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-serif text-gray-600 tracking-[0.4em] uppercase text-sm md:text-base font-serif">
              NOS UNIVERS
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight">
            Les Collections
          </h2>
        </div>

        {/* Grille des collections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Collection 1 - Stickers */}
          <a href="/collectionstickers" className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-all block cursor-pointer">
            {/* Image de fond */}
            <div className="absolute inset-0">
              <img 
                src="/sticker.jpg" 
                alt="Stickers background" 
                className="w-full h-full object-cover opacity-30"
              />
            </div>

            {/* Contenu */}
            <div className="relative p-6 md:p-8 h-full flex flex-col">
              {/* Stickers disposés */}
              <div className="relative h-48 md:h-56 mb-6">
                {/* <div className="absolute inset-0 flex flex-wrap gap-3 justify-center items-center">
                  <div className="text-4xl md:text-5xl rotate-[-12deg] opacity-90">🧁</div>
                  <div className="text-4xl md:text-5xl rotate-[8deg] opacity-90">🐻</div>
                  <div className="text-4xl md:text-5xl rotate-[-5deg] opacity-90">🍌</div>
                  <div className="text-4xl md:text-5xl rotate-[10deg] opacity-90">❤️</div>
                  <div className="text-4xl md:text-5xl rotate-[-15deg] opacity-90">🌈</div>
                  <div className="text-4xl md:text-5xl rotate-[6deg] opacity-90">🐱</div>
                </div> */}
              </div>

              {/* Texte */}
              <div className="relative z-10 space-y-3">
                <h3 className="font-serif text-3xl md:text-4xl font-serif text-gray-900">
                  Stickers
                </h3>
                <p className="text-base md:text-lg text-gray-700 font-serif leading-relaxed">
                  Stickers vinyles d'exception pour sublimer vos accessoires.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-2xl md:text-3xl font-serif text-black">20+</div>
                    <p className="mt-1 text-sm text-gray-600 font-serif">PIÈCES</p>
                  </div>
                  <div>
                    <div className="text-sm md:text-base font-serif text-gray-900 mt-2">
                      Collection Premium
                    </div>
                  </div>
                </div>

                <div className="
                  mt-6 px-8 py-4 
                  bg-black text-white 
                  font-serif tracking-wider 
                  rounded-lg 
                  hover:bg-gray-800 
                  transition-all
                  text-center
                ">
                  DÉCOUVRIR →
                </div>
              </div>
            </div>
          </a>

          {/* Collection 2 - Porte-clés */}
          <a href="/collectionportecle" className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-all block cursor-pointer">
            {/* Image de fond */}
            <div className="absolute inset-0">
              <img 
                src="/portcle.jpg" 
                alt="Porte-clés background" 
                className="w-full h-full object-cover opacity-30"
              />
            </div>

            <div className="relative p-6 md:p-8 h-full flex flex-col">
              {/* Porte-clés disposés */}
              <div className="relative h-48 md:h-56 mb-6">
                {/* <div className="absolute inset-0 flex flex-wrap gap-3 justify-center items-center">
                  <div className="text-4xl md:text-5xl rotate-[-8deg] opacity-90">🍩</div>
                  <div className="text-4xl md:text-5xl rotate-[10deg] opacity-90">🍨</div>
                  <div className="text-4xl md:text-5xl rotate-[-6deg] opacity-90">🍰</div>
                  <div className="text-4xl md:text-5xl rotate-[12deg] opacity-90">🐱</div>
                  <div className="text-4xl md:text-5xl rotate-[-10deg] opacity-90">🍦</div>
                  <div className="text-4xl md:text-5xl rotate-[7deg] opacity-90">🌈</div>
                </div> */}
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="font-serif text-3xl md:text-4xl font-serif text-gray-900">
                  Porte-clés
                </h3>
                <p className="text-base md:text-lg text-gray-700 font-serif leading-relaxed">
                  Porte-clés artisanaux en résine précieuse.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-2xl md:text-3xl font-serif text-black">25+</div>
                    <p className="mt-1 text-sm text-gray-600 font-serif">MODÈLES</p>
                  </div>
                  <div>
                    <div className="text-sm md:text-base font-serif text-gray-900 mt-2">
                      Édition Limitée
                    </div>
                  </div>
                </div>

                <div className="
                  mt-6 px-8 py-4 
                  bg-black text-white 
                  font-serif tracking-wider 
                  rounded-lg 
                  hover:bg-gray-800 
                  transition-all
                  text-center
                ">
                  DÉCOUVRIR →
                </div>
              </div>
            </div>
          </a>

          {/* Collection 3 - Hoodies & Outfits (Bientôt) */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-all cursor-not-allowed opacity-75">
            {/* Badge "Bientôt" */}
            <div className="absolute top-6 right-6 z-20">
<span className="bg-gradient-to-r from-black via-gray-800 to-black text-white px-4 py-2 rounded-full text-xs md:text-sm font-serif tracking-wider shadow-lg">
                BIENTÔT
              </span>
            </div>

            {/* Image de fond */}
            <div className="absolute inset-0">
              <img 
                src="/img.jpeg" 
                alt="Hoodies & Outfits background" 
                className="w-full h-full object-cover opacity-40"
              />
            </div>

            <div className="relative p-6 md:p-8 h-full flex flex-col">
              {/* Zone d'icônes */}
              <div className="relative h-48 md:h-56 mb-6">
                {/* Placeholder pour futures images */}
              </div>

              <div className="relative z-10 space-y-3">
                <h3 className="font-serif text-3xl md:text-4xl font-serif text-gray-900">
                  Hoodies & Outfits
                </h3>
                <p className="text-base md:text-lg text-gray-700 font-serif leading-relaxed">
                  Collection de vêtements streetwear exclusive en préparation.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-2xl md:text-3xl font-serif text-gray-400">???</div>
                    <p className="mt-1 text-sm text-gray-600 font-serif">PIÈCES</p>
                  </div>
                  <div>
                    <div className="text-sm md:text-base font-serif text-gray-600 mt-2">
                      Collection Exclusive
                    </div>
                  </div>
                </div>

                <div className="
                  mt-6 px-8 py-4 
                  bg-gray-400 text-white 
                  font-serif tracking-wider 
                  rounded-lg 
                  cursor-not-allowed
                  text-center
                ">
                  PROCHAINEMENT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}