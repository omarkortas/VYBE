// components/CreationsSection.tsx
'use client';
import { useState } from 'react';

export default function CreationsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, image: '/12.jpg', name: 'Chat Mignon', category: 'animaux', price: '2.50' },
    { id: 2, image: '/11.jpg', name: 'Donut Gourmand', category: 'nourriture', price: '2.50' },
    { id: 3, image: '/13.jpg', name: 'Fleur Rose', category: 'nature', price: '2.50' },
    { id: 4, image: '/24.jpg', name: 'Cœur Souriant', category: 'emotions', price: '2.50' },
    { id: 5, image: '/25.jpg', name: 'Étoile Brillante', category: 'emotions', price: '2.50' },
  ];

  const handleOrder = () => {
    window.open('https://www.instagram.com/vybe._.wear/', '_blank');
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
                  {product.category}
                </p>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-black">{product.price}€</span>
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
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-md w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image du produit dans le modal */}
            <div className="aspect-square bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden mb-6">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center mb-6">
              <p className="text-sm text-gray-600 uppercase tracking-wider font-light mb-2">
                {selectedProduct.category}
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h3>
              <p className="text-4xl font-bold text-black">{selectedProduct.price}€</p>
            </div>

            <button
              onClick={handleOrder}
              className="w-full px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white font-bold tracking-wider rounded-lg hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-3"
            >
              <span className="text-2xl">📸</span>
              COMMANDER SUR INSTAGRAM
            </button>

            <p className="text-center text-sm text-gray-500 mt-4 font-light">
              Vous serez redirigé vers notre page Instagram
            </p>
          </div>
        </div>
      )}
    </section>
  );
}