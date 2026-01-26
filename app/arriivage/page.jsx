'use client';
import { useState, useRef, useEffect } from 'react';

export default function NewArrivalsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

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
      id: 4,
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

  // Défilement automatique
  useEffect(() => {
    if (!isAutoScrolling) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newArrivals.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, newArrivals.length]);

  // Scroll vers l'index courant
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handlePrevious = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prev) => (prev - 1 + newArrivals.length) % newArrivals.length);
  };

  const handleNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prev) => (prev + 1) % newArrivals.length);
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 px-4 md:px-6">
          <div className="inline-block mb-3 md:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 tracking-[0.3em] uppercase text-xs md:text-sm font-bold">
              TOUT JUSTE ARRIVÉ
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Nouveaux Arrivages
          </h2>
        </div>

        <div className="relative px-4 md:px-6">
          {/* Flèches de navigation */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center text-gray-800 hover:bg-white transition-all hover:scale-110"
            aria-label="Précédent"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center text-gray-800 hover:bg-white transition-all hover:scale-110"
            aria-label="Suivant"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carrousel */}
          <div 
            ref={scrollRef}
            className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
            onTouchStart={() => setIsAutoScrolling(false)}
          >
            <style dangerouslySetInnerHTML={{
              __html: `
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `
            }} />
            
            <div className="flex">
              {newArrivals.map((product, index) => (
                <div 
                  key={product.id}
                  className="snap-center flex-shrink-0 w-full px-2"
                >
                  <div 
                    onClick={() => setSelectedProduct(product)}
                    className="group relative overflow-hidden cursor-pointer rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 mx-auto max-w-4xl"
                  >
                    {product.isNew && (
                      <div className="absolute top-3 md:top-4 left-3 md:left-4 z-20">
                        <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold uppercase tracking-wider px-2.5 md:px-3 py-1 md:py-1.5 rounded-full shadow-lg">
                          🔥 NOUVEAU
                        </span>
                      </div>
                    )}

                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
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
                        <div className="text-white">
                          <p className="text-xs md:text-sm uppercase tracking-wider opacity-80">{product.category}</p>
                          <p className="text-lg md:text-xl font-bold mt-1">{product.name}</p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-white text-black px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-gray-100 transition-colors">
                            VOIR PLUS
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicateurs de pagination */}
          <div className="flex justify-center gap-2 mt-6">
            {newArrivals.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoScrolling(false);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-gradient-to-r from-purple-600 to-pink-600' 
                    : 'w-2 bg-gray-300'
                }`}
                aria-label={`Aller à la diapositive ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center px-4 md:px-6">
          <button
            onClick={handleOrder}
            className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-xl transition-all transform hover:scale-105 text-sm md:text-base"
          >
            <span>📸</span>
            <span>COMMANDER SUR INSTAGRAM</span>
          </button>
        </div>
      </div>

      {selectedProduct && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute -top-10 md:-top-12 right-0 w-9 h-9 md:w-10 md:h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-black hover:bg-gray-100 transition-all z-10 text-lg md:text-xl font-bold"
            >
              ✕
            </button>

            <div className="relative">
              <video 
                src={selectedProduct.video}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
              
              <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 w-full px-4 flex justify-center">
                <a
                  href="/collectionportecle"
                  className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl text-sm md:text-base"
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