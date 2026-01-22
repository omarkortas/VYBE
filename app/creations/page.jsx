'use client';
import { useState } from 'react';

export default function CreationsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { 
      id: 1, 
      images: ['/stouch.png', '/stouch1.png'], 
      name: 'En stock', 
      category: 'trousse', 
      price: '10', 
      originalPrice: '12', 
      discount: '17',
      badge: 'PROMO'
    },
    { 
      id: 2, 
      image: '/aa.png', 
      name: 'En stock', 
      category: 'anime', 
      price: '10',
      badge: 'PREMIUM',
      edition: 'exclusive'
    },
    { 
      id: 3, 
      image: '/bb.png', 
      name: 'En stock', 
      category: 'anime', 
      price: '10',
      badge: 'PREMIUM',
      edition: 'exclusive'
    },
    { id: 4, image: '/sticker2.png', name: 'En stock', category: 'troll', price: '3.500' },

    { id: 5, image: '/choufli hal.png', name: 'En stock', category: 'choufli hal', price: '3.500' },

  ];

  const handleOrder = () => {
    window.open('https://www.instagram.com/vybe._.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
  };

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre principal */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-serif text-gray-600 tracking-[0.4em] uppercase text-sm md:text-base font-medium">
              PIÈCES D'EXCEPTION
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Nos Nouveautés
          </h2>
        </div>

        {/* Grille des produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((product) => (
            <div 
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all cursor-pointer"
            >
              {/* Badges */}
              {product.discount && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                    -{product.discount}%
                  </span>
                </div>
              )}
              
              {product.badge === 'PREMIUM' && !product.discount && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                    ⭐ PREMIUM
                  </span>
                </div>
              )}

              {product.edition === 'exclusive' && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md animate-pulse">
                    ⭐ EXCLUSIF
                  </span>
                </div>
              )}

              <div className="aspect-square bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                {product.images ? (
                  <div className="grid grid-cols-2 h-full">
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <img 
                      src={product.images[1]} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  />
                )}
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-600 uppercase tracking-wider font-light mb-1">
                  {product.category}
                </p>
                <h3 className="text-xl font-medium text-green-600 mb-3">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">{product.originalPrice}DT</span>
                    )}
                    <span className="text-2xl font-bold text-black">{product.price}DT</span>
                  </div>
                  <button className="p-2.5 rounded-lg hover:bg-gray-100 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute -top-3 -right-3 w-12 h-12 bg-black rounded-full shadow-xl flex items-center justify-center text-white hover:bg-gray-800 transition-all z-10"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Image du produit */}
              <div className="relative bg-gray-100">
                {selectedProduct.images ? (
                  <div className="grid grid-rows-2 h-full">
                    <img 
                      src={selectedProduct.images[0]} 
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                    <img 
                      src={selectedProduct.images[1]} 
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain bg-gray-50 min-h-[500px]"
                  />
                )}
              </div>

              {/* Détails du produit */}
              <div className="p-8 flex flex-col justify-center space-y-6">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">{selectedProduct.category}</p>
                  <h2 className="text-3xl font-serif mb-2 text-green-600">{selectedProduct.name}</h2>
                  <p className="text-gray-800">Résine époxy • Pièce unique</p>
                </div>

                <div className="flex items-center gap-3">
                  {selectedProduct.originalPrice && (
                    <p className="text-gray-400 line-through text-xl">{selectedProduct.originalPrice}DT</p>
                  )}
                  <p className="text-4xl font-bold text-black">{selectedProduct.price}DT</p>
                  {selectedProduct.discount && (
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                      -{selectedProduct.discount}%
                    </span>
                  )}
                </div>

                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p className="text-sm text-gray-700">✓ Résine époxy cristalline premium</p>
                  <p className="text-sm text-gray-700">✓ Pièce unique - Jamais identique</p>
                  <p className="text-sm text-gray-700">✓ Livraison offerte</p>
                </div>

                <button
                  onClick={handleOrder}
                  className="w-full px-8 py-4 bg-black text-white font-serif tracking-wider text-lg rounded-lg hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-3"
                >
                  📸 COMMANDER SUR INSTAGRAM
                </button>

                <p className="text-xs text-center text-gray-500">Vous serez redirigé vers notre page Instagram</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}