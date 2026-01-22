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
    { id: 1, image: '/choufli hal.png', name: 'En stock', category: 'choufli hal', price: '3.500' },
    { id: 5, image: '/choufli hal 2.png', name: 'En stock', category: 'choufli hal', price: '3.500' },
    { id: 2, image: '/sticker1.png', name: 'En stock', category: 'cats', price: '3.500' },
    { id: 3, image: '/sticker2.png', name: 'En stock', category: 'troll', price: '3.500' },
    { id: 54, image: '/25.jpg', name: 'En stock', category: 'anime', price: 'prv' },
  ];

  const filteredStickers = selectedCategory === 'tous' 
    ? stickers 
    : stickers.filter(s => s.category === selectedCategory);

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
          <h1 className="text-5xl md:text-7xl font-serif mb-4 tracking-tight">Stickers</h1>
          <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
            Stickers vinyles d'exception pour sublimer vos accessoires
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
          {filteredStickers.map(item => (
            <div key={item.id} className="group">
              {/* Badge NEW pour le premier item */}
              {item.id === 1 && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-md animate-pulse">
                  ✨ NEW
                </div>
              )}

              <div 
                onClick={() => {
                  setSelectedItem(item);
                  setShowModal(true);
                }}
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer ring-4 ring-offset-2 ring-gray-200"
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-80 object-contain bg-gray-50"
                />

                <div className="p-6 space-y-4">
                  <div className="text-left space-y-1">
                    <h3 className="font-serif text-lg tracking-wide text-green-600">{item.name}</h3>
                    <p className="text-sm text-gray-500">Vinyle premium • Résistant</p>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold text-black">{item.price}DT</p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedItem(item);
                      setShowModal(true);
                    }}
                    className="w-full px-6 py-3 text-sm font-medium tracking-wider rounded-lg transition-all shadow-md bg-black text-white hover:bg-gray-800 hover:shadow-lg"
                  >
                    VOIR
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
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Production de qualité</h2>
            <p className="text-gray-600 text-lg">Chaque sticker est créé avec soin pour une qualité optimale</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-gray-600">
            {[
              { icon: '🎨', title: '1. Design', desc: 'Création graphique originale et unique' },
              { icon: '🖨️', title: '2. Impression', desc: 'Impression haute définition sur vinyle' },
              { icon: '✂️', title: '3. Découpe', desc: 'Découpe précise et soignée' },
              { icon: '📦', title: '4. Emballage', desc: 'Packaging protecteur et élégant' }
            ].map((step, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="font-bold mb-2 text-lg">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: '💎', title: 'Vinyle Premium', desc: 'Vinyle haute qualité, résistant à l\'eau et aux UV pour une durabilité exceptionnelle.' },
            { icon: '🎯', title: 'Designs Uniques', desc: 'Des créations originales soigneusement sélectionnées pour vous démarquer.' },
            { icon: '❤️', title: 'Fait avec Passion', desc: 'Chaque sticker est produit avec attention aux détails et amour du travail bien fait.' }
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
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Personnalisez votre style</h2>
          <p className="text-xl text-gray-300 mb-10">Découvrez nos stickers uniques pour exprimer votre personnalité</p>
          <div className="flex flex-wrap justify-center gap-4">
           <a href="/collections"> <button className="px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg">
              DÉCOUVRIR LA COLLECTION
            </button></a>
            <a href="/contact"><button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition-all">
              COMMANDER SUR MESURE
            </button></a>
          </div>
        </div>
      </div>

      {/* Modal de commande */}
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
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.name}
                  className="w-full h-64 md:h-full object-contain bg-gray-50 md:min-h-[500px]"
                />
              </div>

              {/* Détails du produit */}
              <div className="p-6 md:p-8 flex flex-col justify-center space-y-4 md:space-y-6">
                <div>
                  <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-2">{selectedItem.category}</p>
                  <h2 className="text-2xl md:text-3xl font-serif mb-2 text-green-600">{selectedItem.name}</h2>
                  <p className="text-sm md:text-base text-gray-800">Vinyle premium • Résistant</p>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <p className="text-3xl md:text-4xl font-bold text-black">{selectedItem.price}DT</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 md:p-4 space-y-2">
                  <p className="text-xs md:text-sm text-gray-700">✓ Vinyle haute qualité</p>
                  <p className="text-xs md:text-sm text-gray-700">✓ Résistant à l'eau et aux UV</p>
                  <p className="text-xs md:text-sm text-gray-700">✓ Adhésif repositionnable</p>
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