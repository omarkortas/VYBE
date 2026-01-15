// components/CollectionsSection.tsx
'use client';
export default function CollectionsSection() {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre principal */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-serif text-gray-600 tracking-[0.4em] uppercase text-sm md:text-base font-medium">
              NOS UNIVERS
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Les Collections
          </h2>
        </div>

        {/* Grille des deux collections */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
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
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
                  Stickers
                </h3>
                <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
                  Stickers vinyles d'exception pour sublimer vos accessoires.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-black">200+</div>
                    <p className="mt-1 text-sm text-gray-600 font-light">PIÈCES</p>
                  </div>
                  <div>
                    <div className="text-sm md:text-base font-medium text-gray-900 mt-2">
                      Collection Premium
                    </div>
                  </div>
                </div>

                <div className="
                  mt-6 px-8 py-4 
                  bg-black text-white 
                  font-medium tracking-wider 
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
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
                  Porte-clés
                </h3>
                <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
                  Porte-clés artisanaux en résine précieuse.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-black">250+</div>
                    <p className="mt-1 text-sm text-gray-600 font-light">MODÈLES</p>
                  </div>
                  <div>
                    <div className="text-sm md:text-base font-medium text-gray-900 mt-2">
                      Édition Limitée
                    </div>
                  </div>
                </div>

                <div className="
                  mt-6 px-8 py-4 
                  bg-black text-white 
                  font-medium tracking-wider 
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
        </div>
      </div>
    </section>
  )
}