'use client';
import { useState } from 'react';

export default function StickersPage() {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    { id: 'tous', label: 'TOUS' },
    { id: 'animaux', label: 'ANIMAUX' },
    { id: 'nourriture', label: 'NOURRITURE' },
    { id: 'nature', label: 'NATURE' },
    { id: 'emotions', label: 'ÉMOTIONS' },
  ];


  const stickers = [
    { id: 1, image: '/a21.jpg', name: 'Chat Mignon', category: 'animaux', price: '2.50' },
    { id: 2, image: '/22.jpg', name: 'Donut Gourmand', category: 'nourriture', price: '2.50' },
    { id: 3, image: '/23.jpg', name: 'Fleur Rose', category: 'nature', price: '2.50' },
    { id: 4, image: '/24.jpg', name: 'Cœur Souriant', category: 'emotions', price: '2.50' },
    { id: 5, image: '/25.jpg', name: 'Cœur Souriant', category: 'emotions', price: '2.50' },

  ];

  const filteredStickers = selectedCategory === 'tous' 
    ? stickers 
    : stickers.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/sticker.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="font-serif text-gray-600 tracking-[0.4em] uppercase text-sm md:text-base font-medium">
                COLLECTION PREMIUM
              </span>
            </div>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight mb-6">
              Stickers
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto leading-relaxed">
              Stickers vinyles d'exception pour sublimer vos accessoires
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`
                  px-6 py-3 rounded-lg font-medium tracking-wider text-sm
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredStickers.map(sticker => (
              <div 
                key={sticker.id}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all cursor-pointer"
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
                
                <div className="p-5 space-y-3">
                  <h3 className="font-serif text-lg md:text-xl font-bold text-gray-900">
                    {sticker.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-black">{sticker.price}€</span>
                    <button className="
                      px-6 py-2 
                      bg-black text-white text-sm
                      font-medium tracking-wider 
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi nos stickers ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                Qualité Premium
              </h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Vinyle haute qualité, résistant à l'eau et aux UV pour une durabilité exceptionnelle.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                Designs Uniques
              </h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Des créations originales soigneusement sélectionnées pour vous démarquer.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                Livraison Soignée
              </h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Emballage protecteur et livraison rapide pour recevoir vos stickers en parfait état.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Prêt à personnaliser ?
          </h2>
          <p className="text-xl text-gray-300 font-light mb-8">
            Découvrez toute notre collection et trouvez les stickers parfaits pour vous
          </p>
          <button className="
            px-12 py-5 
            bg-white text-black 
            font-bold tracking-wider text-lg
            rounded-lg 
            hover:bg-gray-100 
            transition-all
            shadow-xl
          ">
            VOIR TOUTE LA COLLECTION
          </button>
        </div>
      </section>

      {/* Modal de commande */}
      {showModal && selectedItem && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-md w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ✕
            </button>

            {/* Image du produit */}
            <div className="aspect-square bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden mb-6">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Informations du produit */}
            <h3 className="font-serif text-3xl font-bold text-gray-900 mb-2">
              {selectedItem.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Sticker vinyle premium • Résistant à l'eau
            </p>
            <div className="text-4xl font-bold text-black mb-6">
              {selectedItem.price}€
            </div>

            {/* Texte de contact */}
            <p className="text-gray-700 text-center mb-6 leading-relaxed">
              Pour commander ce sticker, contactez-nous directement sur Instagram !
            </p>

            {/* Bouton Instagram */}
            <button
              onClick={() => window.open('https://www.instagram.com/vybe._.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white font-bold tracking-wider text-lg rounded-lg hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-3"
            >
              <span className="text-2xl">📸</span>
              COMMANDER SUR INSTAGRAM
            </button>
          </div>
        </div>
      )}
    </div>
  );
}