'use client';
import { useState } from 'react';

export default function PorteClesPage() {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const categories = [
    { id: 'tous', label: 'TOUS' },
    { id: 'gourmandises', label: 'GOURMANDISES' },
    { id: 'kawaii', label: 'KAWAII' },
    { id: 'fleurs', label: 'FLEURS' },
    { id: 'fantaisie', label: 'FANTAISIE' },
  ];

  const porteCles = [

    { id: 1, image: '/12.jpg', name: 'Chat Mignon', category: 'animaux', price: 'prv' },
    { id: 2, image: '/11.jpg', name: 'Donut Gourmand', category: 'nourriture', price: 'prv' },
    { id: 3, image: '/13.jpg', name: 'Fleur Rose', category: 'nature', price: 'prv' },
    { id: 4, image: '/14.jpg', name: 'Cœur Souriant', category: 'emotions', price: 'prv' },
  ];

  const filteredPorteCles = selectedCategory === 'tous' 
    ? porteCles 
    : porteCles.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-8 bg-gradient-to-br from-pink-50 via-purple-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/portcle.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="font-serif text-gray-600 tracking-[0.4em] uppercase text-sm md:text-base font-medium">
                ÉDITION LIMITÉE
              </span>
            </div>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight mb-6">
              Porte-clés
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto leading-relaxed">
              Porte-clés artisanaux en résine précieuse, faits main avec amour
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredPorteCles.map(item => (
              <div 
                key={item.id}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all relative"
              >
                {/* Badge édition */}
                {item.edition === 'exclusive' && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                      EXCLUSIF
                    </span>
                  </div>
                )}
                
                <div 
                  className="aspect-square bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden cursor-pointer"
                  onClick={() => {
                    setSelectedItem(item);
                    setShowModal(true);
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  
                  {/* Chaîne porte-clé */}
                  <div className="absolute top-8 right-12 w-1 h-16 bg-gray-300 rounded-full opacity-60 z-20"></div>
                  <div className="absolute top-6 right-11 w-4 h-4 border-2 border-gray-300 rounded-full z-20"></div>
                  
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-light">
                      Résine époxy • Fait main • Pièce unique
                    </p>
                  </div>
                  
                  <div className="flex items-end justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-3xl font-bold text-black">{item.price}€</span>
                      <p className="text-xs text-gray-500 mt-1">Livraison offerte</p>
                    </div>
                    <button className="
                      px-6 py-3 
                      bg-black text-white text-sm
                      font-medium tracking-wider 
                      rounded-lg 
                      hover:bg-gray-800 
                      transition-all
                      shadow-md hover:shadow-lg
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

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="font-serif text-gray-600 tracking-[0.4em] uppercase text-sm font-medium">
                NOTRE SAVOIR-FAIRE
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Création artisanale
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Chaque porte-clé est une œuvre d'art miniature, créée avec passion
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center">
                <div className="text-4xl">🎨</div>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                1. Design
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Création du design original et unique
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                <div className="text-4xl">🖐️</div>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                2. Moulage
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Coulée de la résine époxy premium
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center">
                <div className="text-4xl">✨</div>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                3. Finition
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Polissage et détails soignés
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-100 to-pink-100 rounded-full flex items-center justify-center">
                <div className="text-4xl">📦</div>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                4. Emballage
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                Packaging élégant et protecteur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl text-center border border-gray-100">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                Résine Premium
              </h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Résine époxy cristalline de haute qualité, résistante et durable dans le temps.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl text-center border border-gray-100">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                Pièces Uniques
              </h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Chaque création est unique avec ses propres variations, jamais deux identiques.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-pink-50 p-8 rounded-2xl text-center border border-gray-100">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                Fait avec Amour
              </h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Confectionnés à la main avec passion et attention aux moindres détails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Un cadeau unique et précieux
          </h2>
          <p className="text-xl text-gray-200 font-light mb-8 leading-relaxed">
            Offrez ou offrez-vous un porte-clé artisanal qui ne ressemble à aucun autre
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="
              px-12 py-5 
              bg-white text-black 
              font-bold tracking-wider text-lg
              rounded-lg 
              hover:bg-gray-100 
              transition-all
              shadow-xl
            ">
              DÉCOUVRIR LA COLLECTION
            </button>
            <button className="
              px-12 py-5 
              bg-transparent text-white border-2 border-white
              font-bold tracking-wider text-lg
              rounded-lg 
              hover:bg-white hover:text-black
              transition-all
            ">
              COMMANDER SUR MESURE
            </button>
          </div>
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
            <div className="aspect-square bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-xl overflow-hidden mb-6">
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
              Résine époxy • Fait main • Pièce unique
            </p>
            <div className="text-4xl font-bold text-black mb-6">
              {selectedItem.price}€
            </div>

            {/* Texte de contact */}
            <p className="text-gray-700 text-center mb-6 leading-relaxed">
              Pour commander ce porte-clé unique, contactez-nous directement sur Instagram !
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