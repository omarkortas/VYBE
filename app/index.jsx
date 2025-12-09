'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, Heart, Search, Menu, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // AJOUT : États pour le produit sélectionné et le formulaire
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', city: '', postcode: '', country: '', message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const products = [
    {
      id: 1,
      name: 'Pantheon',
      category: 'Earrings',
      price: '€2,850',
      image: '/imgg.jpeg',
      new: true,
      description: 'Boucles d’oreilles sculpturales en or 18 carats avec diamants taille brillant.'
    },
    {
      id: 2,
      name: 'Eclipse',
      category: 'Bracelets',
      price: '€3,200',
      image: '/img.jpeg',
      new: false,
      description: 'Bracelet rigide en or blanc et diamants noirs.'
    },
    {
      id: 3,
      name: 'Halo',
      category: 'Earrings',
      price: '€1,950',
      image: '/imgg.jpeg',
      new: true,
      description: 'Créoles aériennes entièrement serties de diamants.'
    },
    {
      id: 4,
      name: 'Oblique',
      category: 'Earrings',
      price: '€1,650',
      image: '/img.jpeg',
      new: false,
      description: 'Design asymétrique en platine et saphirs bleus.'
    }
  ];

  const collections = [
    {
      title: 'Organic Forms',
      description: 'Nature-inspired pieces with fluid, sculptural details',
      image: '/img.jpeg',
    },
    {
      title: 'Chain Collection',
      description: 'Refined links and connections in precious metals',
      image: '/img1.jpeg',
    }
  ];

  const shopCategories = [
    'Rings',
    'Necklaces',
    'Earrings',
    'Bracelets',
    'Watches'
  ];

  const newInCategories = [
    'Latest Arrivals',
    'Trending Now',
    'Limited Edition'
  ];

  const aboutCategories = [
    'Our Story',
    'Craftsmanship',
    'Sustainability'
  ];

  // Filter products based on search query
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCurrentPage('shop');
      setSearchOpen(false);
    }
  };

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const isFavorite = (productId) => favorites.includes(productId);

  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  // Gestion du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Nom requis';
    if (!formData.email.trim()) errors.email = 'Email requis';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email invalide';
    if (!formData.phone.trim()) errors.phone = 'Téléphone requis';
    if (!formData.address.trim()) errors.address = 'Adresse requise';
    if (!formData.city.trim()) errors.city = 'Ville requise';
    if (!formData.postcode.trim()) errors.postcode = 'Code postal requis';
    if (!formData.country.trim()) errors.country = 'Pays requis';
    return errors;
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormSubmitted(true);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setFormSubmitted(false);
    setFormData({ name: '', email: '', phone: '', address: '', city: '', postcode: '', country: '', message: '' });
    setFormErrors({});
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('shop')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={() => setCurrentPage('shop')}
                  className="text-sm font-medium tracking-wide text-gray-900 hover:text-gray-600 transition"
                >
                  Shop
                </button>
                {activeDropdown === 'shop' && (
                  <div className="absolute left-0 top-full pt-4 w-48">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                      {shopCategories.map((category, index) => (
                        <button
                          key={index}
                          className="block w-full text-left px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 transition"
                          onClick={() => {
                            setCurrentPage('shop');
                            setActiveDropdown(null);
                          }}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('new')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={() => setCurrentPage('new')}
                  className="text-sm font-medium tracking-wide text-gray-900 hover:text-gray-600 transition"
                >
                  New in
                </button>
                {activeDropdown === 'new' && (
                  <div className="absolute left-0 top-full pt-4 w-48">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                      {newInCategories.map((category, index) => (
                        <button
                          key={index}
                          className="block w-full text-left px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 transition"
                          onClick={() => {
                            setCurrentPage('new');
                            setActiveDropdown(null);
                          }}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="text-sm font-medium tracking-wide text-gray-900 hover:text-gray-600 transition"
                >
                  About
                </button>
                {activeDropdown === 'about' && (
                  <div className="absolute left-0 top-full pt-4 w-48">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                      {aboutCategories.map((category, index) => (
                        <button
                          key={index}
                          className="block w-full text-left px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 transition"
                          onClick={() => {
                            setCurrentPage('about');
                            setActiveDropdown(null);
                          }}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Logo */}
            <div className="flex-1 flex justify-center md:flex-none">
              <button 
                onClick={() => setCurrentPage('home')}
                className="flex items-center"
              >
                <img 
                  src="/logoomar.png"
                  alt="Logo"
                  className="h-26 w-auto"
                />
              </button>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-6">
              <button 
                className="hidden md:block text-gray-900 hover:text-gray-600 transition"
                onClick={() => setSearchOpen(true)}
              >
                <Search size={22} strokeWidth={2} />
              </button>
              <button 
                className="hidden md:block text-gray-900 hover:text-gray-600 transition relative"
                onClick={() => setFavoritesOpen(true)}
              >
                <Heart size={22} strokeWidth={2} />
                {favorites.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                    {favorites.length}
                  </span>
                )}
              </button>
              <button className="hidden md:block text-gray-900 hover:text-gray-600 transition relative">
                <ShoppingCart size={22} strokeWidth={2} />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  0
                </span>
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-gray-900"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-4">
              <button 
                onClick={() => {
                  setCurrentPage('shop');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-sm font-medium tracking-wide text-gray-900"
              >
                Shop
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('new');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-sm font-medium tracking-wide text-gray-900"
              >
                New in
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('about');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-sm font-medium tracking-wide text-gray-900"
              >
                About
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-24">
          <div className="bg-white w-full max-w-3xl mx-4 rounded-lg shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Search Products</h3>
                <button 
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="text-gray-500 hover:text-gray-900"
                >
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for jewelry..."
className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black font-medium text-gray-900"
                    autoFocus
                  />
                </div>
              </form>
              
              {searchQuery && (
                <div className="mt-6">
                  <p className="text-sm text-gray-600 mb-4">
                    {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'} found
                  </p>
                  <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                    {filteredProducts.map((product) => (
                      <div 
                        key={product.id} 
                        className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition"
                        onClick={() => {
                          setCurrentPage('shop');
                          setSearchOpen(false);
                        }}
                      >
                        <div className="relative w-16 h-16 flex-shrink-0 bg-gray-100 rounded">
                          <Image 
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 truncate">{product.name}</h4>
                          <p className="text-xs text-gray-500">{product.category}</p>
                          <p className="text-sm font-semibold text-gray-900 mt-1">{product.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {filteredProducts.length === 0 && (
                    <p className="text-center text-gray-500 py-8">No products found matching "{searchQuery}"</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODALE PRODUIT + FORMULAIRE DE COMMANDE */}
      {/* MODALE PRODUIT + FORMULAIRE DE COMMANDE – VERSION CORRIGÉE & LUXE */}
{selectedProduct && (
  <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto">
    <div className="bg-white max-w-6xl w-full rounded-none shadow-2xl my-8 max-h-screen overflow-y-auto">
      <div className="flex justify-between items-center p-8 border-b border-gray-200">
        <h2 className="text-3xl font-light tracking-widest text-gray-900">{selectedProduct.name}</h2>
        <button onClick={closeProductModal} className="text-gray-600 hover:text-black transition">
          <X size={36} strokeWidth={1.5} />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-12 p-8 lg:p-16">
        {/* Image */}
        <div className="relative aspect-square bg-gray-50 overflow-hidden">
          <Image 
            src={selectedProduct.image} 
            alt={selectedProduct.name} 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-700" 
          />
          {selectedProduct.new && (
            <span className="absolute top-8 left-8 bg-black text-white text-xs uppercase tracking-widest px-5 py-2 font-light">
              New
            </span>
          )}
        </div>

        {/* Détails + Formulaire */}
        <div className="flex flex-col">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-widest text-gray-600 mb-2">{selectedProduct.category}</p>
            <p className="text-4xl font-light text-gray-900 mb-6">{selectedProduct.price}</p>
            <p className="text-gray-700 leading-relaxed text-base">{selectedProduct.description}</p>
          </div>

          {!formSubmitted ? (
            <form onSubmit={handleSubmitOrder} className="space-y-8">
              <h3 className="text-2xl font-light tracking-widest text-gray-900">Passer commande</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nom complet *"
                  className="w-full px-6 py-4 border border-gray-300 text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email *"
                  className="w-full px-6 py-4 border border-gray-300 text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                  required
                />
              </div>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Téléphone *"
                className="w-full px-6 py-4 border border-gray-300 text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                required
              />

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Adresse complète *"
                className="w-full px-6 py-4 border border-gray-300 text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                required
              />

              <div className="grid grid-cols-3 gap-6">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Ville *"
                  className="px-6 py-4 border border-gray-300 text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                  required
                />
                <input
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleInputChange}
                  placeholder="Code postal *"
                  className="px-6 py-4 border border-gray-300 text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                  required
                />
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Pays *"
                  className="px-6 py-4 border border-gray-300 text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                  required
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                placeholder="Message ou instructions spéciales (optionnel)"
                className="w-full px-6 py-4 border border-gray-300 text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none transition"
              />

              <div className="flex gap-6 pt-8">
                <button
                  type="submit"
                  className="flex-1 bg-black text-white py-5 text-base font-medium tracking-widest hover:bg-gray-900 transition duration-300"
                >
                  CONFIRMER LA COMMANDE
                </button>
                <button
                  type="button"
                  onClick={closeProductModal}
                  className="px-10 py-5 border border-black text-black font-medium tracking-widest hover:bg-black hover:text-white transition duration-300"
                >
                  ANNULER
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-20">
              <div className="text-8xl mb-8">Check</div>
              <h3 className="text-3xl font-light tracking-widest mb-6">Merci pour votre commande</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
                Nous avons bien reçu votre demande pour <strong className="text-black">{selectedProduct.name}</strong>.<br />
                Un conseiller vous contactera dans les plus brefs délais.
              </p>
              <button 
                onClick={closeProductModal} 
                className="mt-12 text-black underline underline-offset-4 hover:no-underline text-lg tracking-wider"
              >
                Retour à la boutique
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)}
      {/* Main Content */}
      <main className="pt-16">
        {currentPage === 'home' && (
          <>
            {/* Hero Collections */}
            <section className="grid md:grid-cols-2 gap-4 md:gap-6 p-4 md:p-6">
              {collections.map((collection, index) => (
                <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <div className="h-screen md:h-[calc(100vh-8rem)] relative">
                    <Image 
                      src={collection.image}
                      alt={collection.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-3">{collection.title}</h2>
                    <p className="text-base md:text-lg font-light opacity-90 max-w-md">{collection.description}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* Products Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                  <div key={product.id} className="group cursor-pointer" onClick={() => setSelectedProduct(product)}>
                    <div className="relative aspect-square mb-4 overflow-hidden bg-gray-50">
                      {product.new && (
                        <span className="absolute top-6 left-6 z-10 bg-black text-white text-xs uppercase tracking-widest px-4 py-2 font-light">
                          New
                        </span>
                      )}
                      <Image 
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(product.id);
                        }}
                        className="absolute top-4 right-4 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Heart 
                          size={18} 
                          className={isFavorite(product.id) ? 'fill-red-500 text-red-500' : ''} 
                        />
                      </button>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-medium tracking-wide mb-1 uppercase">
                        {product.category}
                      </p>
                      <h3 className="text-base font-medium tracking-wide mb-2 text-gray-900">
                        {product.name}
                      </h3>
                      <p className="text-sm font-semibold text-gray-900">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Banner */}
            <section className="relative h-screen overflow-hidden">
              <Image 
                src="/collection.jpeg"
                alt="Collection"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="text-center text-white px-4">
                  <h2 className="text-5xl md:text-7xl font-light tracking-widest mb-6">
                    NEW COLLECTION
                  </h2>
                  <p className="text-xl md:text-2xl font-light mb-10">Discover timeless elegance</p>
                  <button className="bg-white text-black px-10 py-4 text-base font-medium tracking-wide hover	bg-gray-100 transition">
                    EXPLORE NOW
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {/* NOUVELLE SECTION : Featured Products */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-widest text-gray-900 mb-4">
              Featured Pieces
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Curated selection of our most coveted designs, crafted with precision and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {products
              .filter(product => product.new || product.price.includes('3'))
              .slice(0, 3)
              .map((product) => (
                <div 
                  key={product.id} 
                  className="group cursor-pointer text-center"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative aspect-square mb-8 overflow-hidden bg-gray-50 rounded-lg">
                    {product.new && (
                      <span className="absolute top-6 left-6 z-10 bg-black text-white text-xs uppercase tracking-widest px-4 py-2 font-light">
                        New
                      </span>
                    )}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(product.id);
                      }}
                      className="absolute top-6 right-6 bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                    >
                      <Heart
                        size={20}
                        className={isFavorite(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-700'}
                      />
                    </button>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 font-medium tracking-wide uppercase mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-xl font-medium tracking-wide text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-lg font-semibold text-gray-900">
                      {product.price}
                    </p>
                    <button className="mt-6 text-sm tracking-wider uppercase border-b-2 border-gray-900 pb-1 hover:border-gray-600 transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
          </div>

          <div className="text-center mt-16">
            <button 
              onClick={() => setCurrentPage('shop')}
              className="bg-black text-white px-10 py-4 text-sm font-medium tracking-wide hover:bg-gray-800 transition"
            >
              View All Products
            </button>
          </div>
        </section>

        {currentPage === 'shop' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center justify-between mb-12">
              <h1 className="text-3xl font-light tracking-wide">All Products</h1>
              {searchQuery && (
                <p className="text-sm text-gray-600">
                  Showing results for "{searchQuery}"
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {(searchQuery ? filteredProducts : products).map((product) => (
                <div key={product.id} className="group cursor-pointer" onClick={() => setSelectedProduct(product)}>
                  <div className="relative aspect-square mb-4 overflow-hidden bg-gray-50">
                    {product.new && (
                      <span className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-light tracking-wide z-10">
                        NEW
                      </span>
                    )}
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(product.id);
                      }}
                      className="absolute top-4 right-4 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Heart 
                        size={18} 
                        className={isFavorite(product.id) ? 'fill-red-500 text-red-500' : ''} 
                      />
                    </button>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium tracking-wide mb-1 uppercase">
                      {product.category}
                    </p>
                    <h3 className="text-base font-medium tracking-wide mb-2 text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-sm font-semibold text-gray-900">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            {searchQuery && filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg mb-4">No products found matching "{searchQuery}"</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="text-gray-900 underline hover:no-underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </section>
        )}

        {currentPage === 'new' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-light tracking-wide mb-12">New Arrivals</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.filter(p => p.new).map((product) => (
                <div key={product.id} className="group cursor-pointer" onClick={() => setSelectedProduct(product)}>
                  <div className="relative aspect-square mb-4 overflow-hidden bg-gray-50">
                    <span className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-light tracking-wide z-10">
                      NEW
                    </span>
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium tracking-wide mb-1 uppercase">
                      {product.category}
                    </p>
                    <h3 className="text-base font-medium tracking-wide mb-2 text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-sm font-semibold text-gray-900">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </main>
    </div>
  );
}