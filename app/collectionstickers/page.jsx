'use client';
import { useState } from 'react';

export default function StickersPage() {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    { id: 'tous', label: 'TOUS' },
    { id: 'choufli hal', label: 'choufli hal' },
    { id: 'cats', label: 'cats' },
    { id: 'anime', label: 'anime' },
    { id: 'packs', label: 'packs' },
        { id: 'football', label: 'football' },

  ];

  const stickers = [
    { id: 1, image: '/choufli hal.png', name: 'Choufli hal', category: 'choufli hal', price: 'prv' },
    { id: 2, image: '/sticker1.png', name: 'cats', category: 'cats', price: 'prv' },
        { id: 3, image: '/sticker2.png', name: 'troll', category: 'troll', price: 'prv' },

    { id: 4, image: '/sticker3.jpg', name: 'tom & jerry', category: 'anime', price: 'prv' },
        { id: 5, image: '/sticker4.jpg', name: 'avengers', category: 'anime', price: 'prv' },
        { id: 6, image: '/sticker5.jpg', name: 'real', category: 'football', price: 'prv' },
    { id: 7, image: '/sticker6.jpg', name: 'barca', category: 'football', price: 'prv' },
        { id: 8, image: '/sticker7.jpg', name: 'anime', category: 'anime', price: 'prv' },

    { id: 54, image: '/25.jpg', name: 'anime', category: 'anime', price: 'prv' },
  ];

  const filteredStickers = selectedCategory === 'tous' 
    ? stickers 
    : stickers.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/sticker.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="font-serif text-gray-600 tracking-[0.3em] md:tracking-[0.4em] uppercase text-xs md:text-sm font-medium">
                COLLECTION PREMIUM
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl font-serif text-gray-900 leading-tight mb-4 md:mb-6">
              Stickers
            </h1>
            <p className="text-base md:text-2xl text-gray-700 font-serif max-w-2xl mx-auto leading-relaxed px-4">
              Stickers vinyles d'exception pour sublimer vos accessoires
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 md:py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`
                  px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium tracking-wider text-xs md:text-sm
                  transition-all
                  ${selectedCategory === cat.id 
                    ? 'bg-black text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {filteredStickers.map(sticker => (
              <div 
                key={sticker.id}
                className="group bg-white rounded-xl md:rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all cursor-pointer"
                onClick={() => {
                  setSelectedItem(sticker);
                  setShowModal(true);
                }}
              >
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  
                  <img 
                    src={sticker.image} 
                    alt={sticker.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4 md:p-5 space-y-2 md:space-y-3">
                  <h3 className="font-serif text-base md:text-xl font-serif text-gray-900">
                    {sticker.name}
                  </h3>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xl md:text-2xl font-serif text-black">{sticker.price} DT</span>
                    <button className="
                      px-4 md:px-6 py-2 
                      bg-black text-white text-xs md:text-sm
                      font-serif tracking-wider 
                      rounded-lg 
                      hover:bg-gray-800 
                      transition-all
                    ">
                      AJOUTER
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-3xl md:text-5xl font-serif text-gray-900 mb-4">
              Pourquoi nos stickers ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 text-center">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">✨</div>
              <h3 className="font-serif text-xl md:text-2xl font-serif text-gray-900 mb-2 md:mb-3">
                Qualité Premium
              </h3>
              <p className="text-sm md:text-base text-gray-700 font-light leading-relaxed">
                Vinyle haute qualité, résistant à l'eau et aux UV pour une durabilité exceptionnelle.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 text-center">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">🎨</div>
              <h3 className="font-serif text-xl md:text-2xl font-serif text-gray-900 mb-2 md:mb-3">
                Designs Uniques
              </h3>
              <p className="text-sm md:text-base text-gray-700 font-light leading-relaxed">
                Des créations originales soigneusement sélectionnées pour vous démarquer.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-200 text-center">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">📦</div>
              <h3 className="font-serif text-xl md:text-2xl font-serif text-gray-900 mb-2 md:mb-3">
                Livraison Soignée
              </h3>
              <p className="text-sm md:text-base text-gray-700 font-light leading-relaxed">
                Emballage protecteur et livraison rapide pour recevoir vos stickers en parfait état.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-serif mb-4 md:mb-6">
            Prêt à personnaliser ?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-6 md:mb-8">
            Découvrez toute notre collection et trouvez les stickers parfaits pour vous
          </p>
          <button className="
            px-8 md:px-12 py-4 md:py-5 
            bg-white text-black 
            font-serif tracking-wider text-base md:text-lg
            rounded-lg 
            hover:bg-gray-100 
            transition-all
            shadow-xl
          ">
            VOIR TOUTE LA COLLECTION
          </button>
        </div>
      </section>

      {/* Modal de commande - Style Grande Marque */}
      {showModal && selectedItem && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Image du produit */}
                <div className="md:w-1/2">
                  <div className="aspect-square rounded-2xl overflow-hidden flex items-center justify-center bg-gray-50">
                    <img 
                      src={selectedItem.image} 
                      alt={selectedItem.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>

                {/* Détails du produit */}
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-semiserif mb-3">
                      {selectedItem.category}
                    </p>
                    <h3 className="text-3xl font-serif text-gray-900 mb-4">{selectedItem.name}</h3>
                    <p className="text-4xl font-serif text-black mb-6">{selectedItem.price}</p>
                    
                    <div className="space-y-3 text-sm text-gray-700 mb-6">
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-lg">✓</span>
                        <span>Sticker en vinyle haute qualité</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-lg">✓</span>
                        <span>Résistant à l'eau et aux UV</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-lg">✓</span>
                        <span>Adhésif repositionnable</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-lg">✓</span>
                        <span>Parfait pour personnaliser vos objets</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => window.open('https://www.instagram.com/vybe._.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}
className="w-full px-6 md:px-8 py-3 md:py-4 bg-black text-white font-serif tracking-wider text-sm md:text-lg rounded-lg hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 md:gap-3"
                    >
                      <span className="text-xl">📸</span>
                      COMMANDER SUR INSTAGRAM
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-3">
                      Vous serez redirigé vers notre page Instagram
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}