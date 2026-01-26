'use client';
import { useState } from 'react';

export default function NewArrivalsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const scrollRef = useState(null);

  const newArrivals = [
    { 
       id: 1,
       video: '/demon.mp4',
       name: 'Nouvel arrivage',
       category: 'collection hiver',
       badge: 'NOUVEAU',
      isNew: true
    },
    { 
       id: 2,
       video: '/naruto.mp4',
       name: 'Nouvel arrivage',
       category: 'édition limitée',
       badge: 'LIMITÉ',
      isNew: true
    },
    { 
       id: 3,
       video: '/onepiece.mp4',
       name: 'Nouvel arrivage',
       category: 'premium',
       badge: 'NOUVEAU',
      isNew: true
    },
        { 
       id: 3,
       video: '/drag.mp4',
       name: 'Nouvel arrivage',
       category: 'premium',
       badge: 'NOUVEAU',
      isNew: true
    },
  ];

  const handleOrder = () => {
    window.open('https://www.instagram.com/vybe._.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
  };

  // Dupliquer les produits pour créer une boucle infinie
  const duplicatedProducts = [...newArrivals, ...newArrivals, ...newArrivals];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 px-6">
          <div className="inline-block mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 tracking-[0.3em] uppercase text-xs md:text-sm font-bold">
              TOUT JUSTE ARRIVÉ
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Nouveaux Arrivages
          </h2>
        </div>

        <div 
          className="overflow-x-auto pb-4 -mx-6 px-6"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <style dangerouslySetInnerHTML={{
            __html: `
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `
          }} />
          
          <div className="flex gap-4 md:gap-6 min-w-max">
            {duplicatedProducts.map((product, index) => (
              <div 
                key={`${product.id}-${index}`}
                onClick={() => setSelectedProduct(product)}
                className="group relative overflow-hidden cursor-pointer rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 w-[85vw] md:w-[450px] lg:w-[500px] flex-shrink-0"
              >
                {product.isNew && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                      🔥 NOUVEAU
                    </span>
                  </div>
                )}

                {product.discount && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                      -{product.discount}%
                    </span>
                  </div>
                )}

                <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden bg-gray-100">
                  <video 
                    src={product.video}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {product.originalPrice && (
                        <span className="text-sm text-gray-300 line-through">{product.originalPrice}</span>
                      )}
                      <span className="text-2xl md:text-3xl font-bold text-white">
                        {product.price}
                      </span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                        VOIR PLUS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center px-6">
          <button
            onClick={handleOrder}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-xl transition-all transform hover:scale-105"
          >
            <span>📸</span>
            <span>COMMANDER SUR INSTAGRAM</span>
          </button>
        </div>
      </div>

      {selectedProduct && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 p-4 backdrop-blur-md"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-black hover:bg-gray-100 transition-all z-10 text-xl font-bold"
            >
              ✕
            </button>

            <div className="relative">
              <video 
                src={selectedProduct.video}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <a
                  href="/collectionportecle"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
                >
                  <span>👀</span>
                  <span>VOIR LA COLLECTION</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}