// components/CreationsSection.tsx
'use client';
import { useState } from 'react';

export default function CreationsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, image: '/aa.png', name: 'solde', category: 'animaux', price: '10' },
    { id: 2, image: '/bb.png', name: 'solde', category: 'nourriture', price: '10' },
    { id: 3, image: '/h.png', name: 'solde', category: 'nature', price: '4' },
    { id: 4, image: '/24.jpg', name: 'solde', category: 'emotions', price: 'prv' },
    { id: 5, image: '/25.jpg', name: 'solde', category: 'emotions', price: 'prv' },
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
            Nos Créations
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
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black text-white text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded">
                    {product.badge}
                  </span>
                </div>
              )}

              <div className="aspect-square bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-600 uppercase tracking-wider font-light mb-1">
                </p>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-black">{product.price}DT</span>
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
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
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
                      src={selectedProduct.image} 
                      alt={selectedProduct.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>

                {/* Détails du produit */}
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-semibold mb-3">
                      {selectedProduct.category}
                    </p>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h3>
                    <p className="text-4xl font-bold text-black mb-6">{selectedProduct.price}</p>
                    
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
                      onClick={handleOrder}
className="w-full px-6 md:px-8 py-3 md:py-4 bg-black text-white font-bold tracking-wider text-sm md:text-lg rounded-lg hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 md:gap-3"
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
    </section>
  );
}