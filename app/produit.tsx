// components/CreationsSection.tsx
'use client';

export default function CreationsSection() {
  return (
    <section className="py-20 md:py-28 lg:py-4 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Titre principal */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-amber-600 font-serif tracking-[0.4em] uppercase text-sm md:text-base mb-3">
            PIÈCES D'EXCEPTION
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900">
            Nos Créations
          </h2>
          <div className="w-20 h-0.5 bg-amber-600 mx-auto mt-6" />
        </div>

        {/* Grille des produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {/* Carte 1 - BEST-SELLER */}
          <div className="group relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-amber-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
                BEST-SELLER
              </span>
            </div>

            <div className="h-64 flex items-center justify-center p-8 bg-gradient-to-br from-pink-50 to-white">
              <div className="text-9xl">🌸</div> {/* Remplace par ton image */}
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">STICKERS</p>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Collection Florale</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">89 €</span>
                <button className="p-2 rounded-full hover:bg-gray-200 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Carte 2 - Pendentif Or Rose */}
          <div className="group relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl">
            <div className="h-64 flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-white">
              <div className="text-9xl">💎</div> {/* Remplace par ton image */}
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">PORTE-CLÉS</p>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Pendentif Or Rose</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">65 €</span>
                <button className="p-2 rounded-full hover:bg-gray-200 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Carte 3 - NOUVEAU */}
          <div className="group relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-amber-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
                NOUVEAU
              </span>
            </div>

            <div className="h-64 flex items-center justify-center p-8 bg-gradient-to-br from-green-50 to-white">
              <div className="text-9xl">🌿</div> {/* Remplace par ton image */}
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">STICKERS</p>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Série Botanique</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">79 €</span>
                <button className="p-2 rounded-full hover:bg-gray-200 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Carte 4 - Étoile */}
          <div className="group relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl">
            <div className="h-64 flex items-center justify-center p-8 bg-gradient-to-br from-yellow-50 to-white">
              <div className="text-9xl">✨</div> {/* Remplace par ton image */}
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">PORTE-CLÉS</p>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Étoile</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">8 €</span>
                <button className="p-2 rounded-full hover:bg-gray-200 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Carte 5 - Étoile jaune */}
          <div className="group relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl">
            <div className="h-64 flex items-center justify-center p-8 bg-gradient-to-br from-amber-50 to-white">
              <div className="text-9xl">⭐</div> {/* Remplace par ton image */}
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">STICKERS</p>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Étoile</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">79 €</span>
                <button className="p-2 rounded-full hover:bg-gray-200 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Carte 6 - EXCLUSIF Boule à neige */}
          <div className="group relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-amber-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
                EXCLUSIF
              </span>
            </div>

            <div className="h-64 flex items-center justify-center p-8 bg-gradient-to-br from-purple-50 to-white">
              <div className="text-9xl">🔮</div> {/* Remplace par ton image */}
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">PORTE-CLÉS</p>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Boule à Neige</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">79 €</span>
                <button className="p-2 rounded-full hover:bg-gray-200 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}