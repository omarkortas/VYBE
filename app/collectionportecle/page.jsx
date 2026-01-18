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
    { id: 24, images: ['/stouch.png', '/stouch1.png'], name: 'solde', category: 'emotions', price: '12' },
    { id: 14, image: '/aa.png', name: 'solde', category: 'emotions', price: '10' },
    { id: 13, image: '/bb.png', name: 'solde', category: 'emotions', price: '10' },
    { id: 11, image: '/l.png', name: 'solde', category: 'emotions', price: '8' },
    { id: 16, image: '/cc.png', name: 'solde', category: 'emotions', price: '8' },
    { id: 12, image: '/k.png', name: 'solde', category: 'emotions', price: '7', sold: true },
    { id: 17, image: '/sanfour.png', name: 'solde', category: 'emotions', price: '7'},
    { id: 1, image: '/a.png', name: 'solde', category: 'animaux', price: '7' },
    { id: 2, image: '/b.png', name: 'solde', category: 'nourriture', price: '7' },
    { id: 3, image: '/c.png', name: 'solde', category: 'nature', price: '7' },
    { id: 4, image: '/d.png', name: 'solde', category: 'emotions', price: '4' },
    { id: 5, image: '/e.png', name: 'solde', category: 'emotions', price: '8' },
    { id: 6, image: '/f.png', name: 'solde', category: 'emotions', price: '8' },
    { id: 7, image: '/h.png', name: 'solde', category: 'emotions', price: '4' },               
    { id: 8, image: '/g.png', name: 'solde', category: 'emotions', price: '4' },
    { id: 9, image: '/j.png', name: 'solde', category: 'emotions', price: '7' },
    { id: 10, image: '/i.png', name: 'solde', category: 'emotions', price: '8' },
    { id: 15, image: '/n.png', name: 'solde', category: 'emotions', price: '7' },
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
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-serif text-gray-900 leading-tight mb-6">
              Porte-clés
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-serif max-w-2xl mx-auto leading-relaxed">
              Porte-clés artisanaux en résine précieuse
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
                className={`group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all relative ${
                  item.price === '10' 
                    ? 'border-2 border-pink-400 shadow-lg ring-2 ring-pink-200' 
                    : 'border border-gray-200'
                }`}
              >
                {/* Badge prix premium */}
                {item.price === '10' && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-serif px-3 py-1 rounded-full tracking-wider shadow-lg">
                      ⭐ PREMIUM
                    </span>
                  </div>
                )}
                
                {/* Badge édition */}
                {item.edition === 'exclusive' && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-black text-white text-xs font-serif px-3 py-1 rounded-full tracking-wider">
                      EXCLUSIF
                    </span>
                  </div>
                )}
                
                <div 
                  className="aspect-square bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden cursor-pointer"
                  onClick={() => {
                    if (!item.sold) {
                      setSelectedItem(item);
                      setShowModal(true);
                    }
                  }}
                >
                  {/* Bande "Vendu" */}
                  {item.sold && (
                    <div className="absolute top-8 left-0 right-0 bg-red-600 text-white text-center py-3 font-serif text-xl font-bold tracking-wider shadow-lg z-30 transform -rotate-12">
                      VENDU
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  
                  {/* Chaîne porte-clé */}
                  <div className="absolute top-8 right-12 w-1 h-16 bg-gray-300 rounded-full opacity-60 z-20"></div>
                  <div className="absolute top-6 right-11 w-4 h-4 border-2 border-gray-300 rounded-full z-20"></div>
                  
                  {item.images ? (
                    <div className="relative w-full h-full">
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-contain p-4 group-hover:opacity-0 transition-opacity duration-300"
                      />
                      <img 
                        src={item.images[1]} 
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-contain p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ) : (
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-serif text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-light">
                      Résine époxy • Pièce unique
                    </p>
                  </div>
                  
                  <div className="flex items-end justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-3xl font-serif text-black">{item.price}DT</span>
                      <p className="text-xs text-gray-500 mt-1">Livraison offerte</p>
                    </div>
                    <button 
                      onClick={() => {
                        if (!item.sold) {
                          setSelectedItem(item);
                          setShowModal(true);
                        }
                      }}
                      disabled={item.sold}
                      className={`
                      px-6 py-3 
                      text-sm
                      font-medium tracking-wider 
                      rounded-lg 
                      transition-all
                      shadow-md
                      ${item.sold 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-black text-white hover:bg-gray-800 hover:shadow-lg'
                      }
                    `}>
                      {item.sold ? 'VENDU' : 'VOIR'}
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
            <h2 className="font-serif text-4xl md:text-5xl font-serif text-gray-900 mb-4">
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
              <h3 className="font-serif text-xl font-serif text-gray-900 mb-3">
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
              <h3 className="font-serif text-xl font-serif text-gray-900 mb-3">
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
              <h3 className="font-serif text-xl font-serif text-gray-900 mb-3">
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
              <h3 className="font-serif text-xl font-serif text-gray-900 mb-3">
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
              <h3 className="font-serif text-2xl font-serif text-gray-900 mb-3">
                Résine Premium
              </h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Résine époxy cristalline de haute qualité, résistante et durable dans le temps.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl text-center border border-gray-100">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-serif text-2xl font-serif text-gray-900 mb-3">
                Pièces Uniques
              </h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Chaque création est unique avec ses propres variations, jamais deux identiques.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-pink-50 p-8 rounded-2xl text-center border border-gray-100">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="font-serif text-2xl font-serif text-gray-900 mb-3">
                Fait avec Amour
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-serif mb-6">
            Un cadeau unique et précieux
          </h2>
          <p className="text-xl text-gray-200 font-light mb-8 leading-relaxed">
            Offrez ou offrez-vous un porte-clé artisanal qui ne ressemble à aucun autre
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="
              px-12 py-5 
              bg-white text-black 
              font-serif tracking-wider text-lg
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
              font-serif tracking-wider text-lg
              rounded-lg 
              hover:bg-white hover:text-black
              transition-all
            ">
              COMMANDER SUR MESURE
            </button>
          </div>
        </div>
      </section>

      {/* Modal de commande - Style Grande Marque */}
      {showModal && selectedItem && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-8 bg-black bg-opacity-50"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] md:max-h-[90vh] overflow-y-auto relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-black rounded-full shadow-lg flex items-center justify-center text-white hover:bg-gray-800 transition-all z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Image du produit */}
                <div className="md:w-1/2">
                  <div className="aspect-square rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative">
                    {selectedItem.images ? (
                      <>
                        <img 
                          src={selectedItem.images[0]} 
                          alt={selectedItem.name}
                          className="absolute inset-0 w-full h-full object-contain p-2 transition-opacity duration-300 hover:opacity-0"
                        />
                        <img 
                          src={selectedItem.images[1]} 
                          alt={selectedItem.name}
                          className="absolute inset-0 w-full h-full object-contain p-2"
                        />
                      </>
                    ) : (
                      <img 
                        src={selectedItem.image} 
                        alt={selectedItem.name}
                        className="w-full h-full object-contain p-2"
                      />
                    )}
                  </div>
                </div>

                {/* Détails du produit */}
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-semiserif mb-3">
                      {selectedItem.category}
                    </p>
                    <h3 className="text-3xl font-serif text-gray-900 mb-2">{selectedItem.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Résine époxy • Pièce unique
                    </p>
                    <p className="text-4xl font-serif text-black mb-6">{selectedItem.price}DT</p>
                    
                    <div className="space-y-3 text-sm text-gray-700 mb-6">
                      <div className="flex items-start gap-3">
                        <span className="text-pink-600 text-lg">✓</span>
                        <span>Résine époxy cristalline premium</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-pink-600 text-lg">✓</span>
                        <span>Pièce unique - Jamais identique</span>
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