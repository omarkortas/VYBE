'use client';

import { useState } from 'react';

export default function PorteClesPage() {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    { id: 'tous', label: 'TOUS' },
    { id: 'anime', label: 'anime' },
    { id: 'labubu', label: 'labubu' },
    { id: 'games', label: 'games' },
    { id: 'animaux', label: 'animaux' },
    { id: 'trousse', label: 'trousse' },
  ];

  const porteCles = [
    { id: 24, images: ['/stouch.png', '/stouch1.png'], name: 'En stock', category: 'trousse', price: '10', originalPrice: '12', discount: '17', sold: true  },
    { id: 14, image: '/aa.png', name: 'En stock', category: 'anime', price: '10', edition: 'exclusive' , sold: true},
    { id: 13, image: '/bb.png', name: 'En stock', category: 'anime', price: '10', edition: 'exclusive' },
    { id: 11, image: '/l.png', name: 'Rupture de stock', category: 'anime', price: '8', sold: true },
    { id: 16, image: '/cc.jpeg', name: 'En stock', category: 'anime', price: '8' },
    { id: 3, image: '/c.png', name: 'Rupture de stock', category: 'animaux', price: '7', sold: true },
    { id: 10, image: '/i.png', name: 'Rupture de stock', category: 'anime', price: '8', sold: true },
    { id: 12, image: '/k.png', name: 'Rupture de stock', category: 'anime', price: '7', sold: true },
    { id: 8, image: '/g.png', name: 'Rupture de stock', category: 'games', price: '4', sold: true },
    { id: 17, image: '/sanfour.png', name: 'En stock', category: 'anime', price: '7' },
    { id: 1, image: '/a.png', name: 'En stock', category: 'labubu', price: '7' },
    { id: 2, image: '/b.png', name: 'En stock', category: 'animaux', price: '7' },
    { id: 4, image: '/d.png', name: 'En stock', category: 'anime', price: '4' },
    { id: 5, image: '/e.png', name: 'En stock', category: 'labubu', price: '8' },
    { id: 6, image: '/f.png', name: 'En stock', category: 'labubu', price: '8' },
    { id: 7, image: '/h.png', name: 'En stock', category: 'games', price: '4' },
    { id: 9, image: '/j.png', name: 'En stock', category: 'labubu', price: '7' },
    { id: 15, image: '/n.png', name: 'En stock', category: 'animaux', price: '7' },
  ];

  const filteredPorteCles = selectedCategory === 'tous' 
    ? porteCles 
    : porteCles.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs tracking-widest mb-6">
            ÉDITION LIMITÉE
          </div>
          <h1 className="text-5xl md:text-7xl font-serif mb-4 tracking-tight">Porte-clés</h1>
          <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
            Porte-clés artisanaux en résine précieuse
          </p>
        </div>
      </div>

      {/* Filters */}
<div className="
  relative 
  lg:sticky lg:top-0 
  z-20 
  bg-white/80 backdrop-blur-md 
  border-b border-gray-200 
  py-4 lg:py-6 
  px-4
">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`
                px-6 py-3 rounded-lg font-medium tracking-wider text-sm transition-all
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

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPorteCles.map(item => (
            <div key={item.id} className="group">
              {/* Badge promo/solde */}
              {item.discount && (
                <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-md">
                  -{item.discount}%
                </div>
              )}
              
              {/* Badge prix premium */}
              {item.price === '10' && !item.discount && (
                <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-md">
                  ⭐ PREMIUM
                </div>
              )}

              {/* Badge édition */}
              {item.edition === 'exclusive' && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-md animate-pulse">
                  ⭐ EXCLUSIF
                </div>
              )}

              <div 
                onClick={() => {
                  if (!item.sold) {
                    setSelectedItem(item);
                    setShowModal(true);
                  }
                }}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ring-4 ring-offset-2 ${
                  item.sold ? 'opacity-60 ring-gray-200' : 'hover:shadow-2xl hover:-translate-y-1 cursor-pointer'
                } ${
                  item.edition === 'exclusive' ? 'ring-purple-500' : ''
                } ${
                  item.discount ? 'ring-red-500' : ''
                } ${
                  !item.edition && !item.discount && !item.sold ? 'ring-gray-200' : ''
                }`}
              >
                {/* Bande "Vendu" */}
                {item.sold && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600/90 text-white px-40 py-2 rotate-[-15deg] text-lg font-bold z-20 shadow-xl">
                    VENDU
                  </div>
                )}

                {/* Chaîne porte-clé */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-gray-400 to-transparent z-10"></div>
                
                {item.images ? (
                  <div className="grid grid-cols-2 gap-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-80 object-cover"
                    />
                    <img 
                      src={item.images[1]} 
                      alt={item.name}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                ) : (
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-80 object-contain bg-gray-50"
                  />
                )}

                <div className="p-6 space-y-4">
                  <div className="text-left space-y-1">
                    <h3 className={`font-serif text-lg tracking-wide ${item.sold ? 'text-red-600' : 'text-green-600'}`}>{item.name}</h3>
                    <p className="text-sm text-gray-500">Résine époxy • Pièce unique</p>
                    <div className="flex items-center gap-2">
                      {item.originalPrice && (
                        <p className="text-gray-400 line-through text-sm">{item.originalPrice}DT</p>
                      )}
                      <p className="text-2xl font-bold text-black">{item.price}DT</p>
                    </div>
                    <p className="text-xs text-green-600 font-medium">Livraison offerte bientôt</p>
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
                      w-full px-6 py-3 text-sm font-medium tracking-wider rounded-lg transition-all shadow-md
                      ${item.sold 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-black text-white hover:bg-gray-800 hover:shadow-lg'
                      }
                    `}
                  >
                    {item.sold ? 'VENDU' : 'VOIR'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-gray-500 mb-2">NOTRE SAVOIR-FAIRE</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Création artisanale</h2>
            <p className="text-gray-600 text-lg">Chaque porte-clé est une œuvre d'art miniature, créée avec passion</p>
          </div>


        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: '💎', title: 'Résine Premium', desc: 'Résine époxy cristalline de haute qualité, résistante et durable dans le temps.' },
            { icon: '🎯', title: 'Pièces Uniques', desc: 'Chaque création est unique avec ses propres variations, jamais deux identiques.' },
            { icon: '❤️', title: 'Fait avec Amour', desc: 'Chaque porte-clé est créé avec passion et attention aux détails.' }
          ].map((feature, i) => (
            <div key={i} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-xl mb-3 text-gray-600">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Un cadeau unique et précieux</h2>
          <p className="text-xl text-gray-300 mb-10">Offrez ou offrez-vous un porte-clé artisanal qui ne ressemble à aucun autre</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/collections"><button className="px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg">
              DÉCOUVRIR LA COLLECTION
            </button></a>
          </div>
        </div>
      </div>

{/* Modal de commande - Style Grande Marque */}
      {showModal && selectedItem && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end md:items-center justify-center md:p-4"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-t-3xl md:rounded-2xl max-w-3xl w-full shadow-2xl relative overflow-hidden max-h-[95vh] md:max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-black rounded-full shadow-xl flex items-center justify-center text-white hover:bg-gray-800 transition-all z-50 text-lg md:text-xl"
            >
              ✕
            </button>

            <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
              {/* Image du produit */}
              <div className="relative bg-gray-100">
                {selectedItem.images ? (
                  <div className="grid grid-cols-2 md:grid-rows-2 md:grid-cols-1 h-64 md:h-full">
                    <img 
                      src={selectedItem.images[0]} 
                      alt={selectedItem.name}
                      className="w-full h-full object-cover"
                    />
                    <img 
                      src={selectedItem.images[1]} 
                      alt={selectedItem.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.name}
                    className="w-full h-64 md:h-full object-contain bg-gray-50 md:min-h-[500px]"
                  />
                )}
              </div>

              {/* Détails du produit */}
              <div className="p-6 md:p-8 flex flex-col justify-center space-y-4 md:space-y-6">
                <div>
                  <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-2">{selectedItem.category}</p>
                  <h2 className="text-2xl md:text-3xl font-serif mb-2 text-red-600">{selectedItem.name}</h2>
                  <p className="text-sm md:text-base text-gray-600">Résine époxy • Pièce unique</p>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  {selectedItem.originalPrice && (
                    <p className="text-gray-400 line-through text-lg md:text-xl">{selectedItem.originalPrice}DT</p>
                  )}
                  <p className="text-3xl md:text-4xl font-bold text-black">{selectedItem.price}DT</p>
                  {selectedItem.discount && (
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs md:text-sm font-bold">
                      -{selectedItem.discount}%
                    </span>
                  )}
                </div>

                <div className="bg-gray-50 rounded-lg p-3 md:p-4 space-y-2">
                  <p className="text-xs md:text-sm text-gray-700">✓ Résine époxy cristalline premium</p>
                  <p className="text-xs md:text-sm text-gray-700">✓ Pièce unique - Jamais identique</p>
                  <p className="text-xs md:text-sm text-gray-700">✓ Livraison offerte bientôt</p>
                </div>

                <button
                  onClick={() => window.open('https://www.instagram.com/vybe._.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}
                  className="w-full px-6 md:px-8 py-3 md:py-4 bg-black text-white font-serif tracking-wider text-base md:text-lg rounded-lg hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 md:gap-3"
                >
                  📸 COMMANDER SUR INSTAGRAM
                </button>

                <p className="text-xs text-center text-gray-500">Vous serez redirigé vers notre page Instagram</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}