'use client';

import { useState } from 'react';
import { ShoppingCart, Heart, Search, Menu, X, ChevronRight, Star, Sparkles } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', city: '', postcode: '', country: '', message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const collections = [
    { 
      title: 'Collection Stickers', 
      description: 'Designs uniques pour chaque style et personnalité', 
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    },
    { 
      title: 'Collection Porte-clés', 
      description: 'Accessoires pratiques avec créativité', 
      image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80',
    }
  ];

  const shopCategories = ['Stickers', 'Porte-clés', 'Designs Personnalisés', 'Coffrets Cadeaux'];
  const newInCategories = ['Nouveautés', 'Tendances', 'Édition Limitée'];
  const aboutCategories = ['Notre Histoire', 'Fabrication', 'Durabilité'];

  const products = [
    { 
      id: 1, 
      name: 'Pack Stickers Holographiques', 
      category: 'Stickers', 
      price: '12€', 
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80', 
      new: true,
      description: 'Pack de 10 stickers holographiques avec effets arc-en-ciel. Résistants à l\'eau, parfaits pour décorer vos appareils.'
    },
    { 
      id: 2, 
      name: 'Stickers Citations Vinyle', 
      category: 'Stickers', 
      price: '8€', 
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=80', 
      new: true,
      description: 'Citations inspirantes en vinyle premium. Design minimaliste et élégant pour votre laptop ou journal.'
    },
    { 
      id: 3, 
      name: 'Porte-clés Acrylique Charm', 
      category: 'Porte-clés', 
      price: '15€', 
      image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&q=80', 
      new: false,
      description: 'Porte-clés en acrylique transparent avec charm coloré. Léger, durable et design moderne.'
    },
    { 
      id: 4, 
      name: 'Porte-clés Métal Gravé', 
      category: 'Porte-clés', 
      price: '18€', 
      image: 'https://images.unsplash.com/photo-1584633114854-c85e6ffeb7cc?w=400&q=80', 
      new: true,
      description: 'Porte-clés en métal personnalisable gravé. Finition premium et gravure de haute qualité.'
    },
    { 
      id: 5, 
      name: 'Stickers Die-Cut Imperméables', 
      category: 'Stickers', 
      price: '10€', 
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&q=80', 
      new: false,
      description: 'Stickers imperméables découpés avec designs originaux. Idéaux pour gourdes et équipement outdoor.'
    },
    { 
      id: 6, 
      name: 'Porte-clés LED Lumineux', 
      category: 'Porte-clés', 
      price: '22€', 
      image: 'https://images.unsplash.com/photo-1591348278863-a4cea7e2dfb4?w=400&q=80', 
      new: true,
      description: 'Porte-clés lumineux LED avec plusieurs modes d\'éclairage. Pratique et stylé pour vos clés.'
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
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

  const handleSubmitOrder = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-cyan-500/30 shadow-lg shadow-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Left Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Boutique', key: 'shop', categories: shopCategories },
                { name: 'Nouveautés', key: 'new', categories: newInCategories },
                { name: 'À propos', key: 'about', categories: aboutCategories }
              ].map((item) => (
                <div
                  key={item.key}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => setCurrentPage(item.key)}
                    className="text-sm font-semibold tracking-wider uppercase text-gray-300 hover:text-cyan-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-500 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.name}
                  </button>

                  {activeDropdown === item.key && (
                    <div className="absolute top-full left-0 mt-3 w-56 bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 py-3">
                      {item.categories.map((category, index) => (
                        <button
                          key={index}
                          className="w-full text-left px-5 py-3 text-sm font-medium text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 hover:text-cyan-400 transition-all duration-200"
                          onClick={() => {
                            setCurrentPage(item.key);
                            setActiveDropdown(null);
                          }}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Logo */}
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-sm">
                  STICKERIFY
                </div>
                <div className="text-xs tracking-[0.4em] text-gray-400 font-semibold uppercase mt-1">
                  Style & Performance
                </div>
              </div>
            </button>

            {/* Right Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 transition-all duration-300"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className="relative p-2 rounded-full hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 transition-all duration-300"
              >
                <Heart className="w-5 h-5" />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg animate-pulse">
                    {favorites.length}
                  </span>
                )}
              </button>
              <button className="p-2 rounded-full hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 transition-all duration-300">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-cyan-500/30 bg-gray-900/95 backdrop-blur-xl">
            <nav className="px-6 py-4 space-y-4">
              {['shop', 'new', 'about'].map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-sm font-semibold tracking-wider uppercase text-gray-300 py-2 hover:text-cyan-400 transition"
                >
                  {page === 'shop' ? 'Boutique' : page === 'new' ? 'Nouveautés' : 'À propos'}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-start justify-center pt-20 px-4">
          <div className="w-full max-w-2xl bg-gray-900 rounded-3xl shadow-2xl border border-cyan-500/30 p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Rechercher</h2>
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery('');
                }}
                className="text-gray-400 hover:text-white transition p-2 rounded-full hover:bg-gray-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative mb-6">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
                placeholder="Rechercher stickers et porte-clés..."
                className="w-full pl-14 pr-4 py-4 border-2 border-cyan-500/30 bg-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 font-medium text-white placeholder:text-gray-500 transition"
                autoFocus
              />
            </div>

            {searchQuery && filteredProducts.length > 0 && (
              <div className="space-y-4">
                <p className="text-sm text-gray-400 font-medium">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'résultat trouvé' : 'résultats trouvés'}
                </p>
                <div className="max-h-96 overflow-y-auto space-y-3">
                  {filteredProducts.map((product) => (
                    <button
                      key={product.id}
                      className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 transition group border border-transparent hover:border-cyan-500/30"
                      onClick={() => {
                        setCurrentPage('shop');
                        setSearchOpen(false);
                      }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded-xl shadow-md"
                      />
                      <div className="flex-1 text-left">
                        <div className="font-semibold text-white group-hover:text-cyan-400 transition">
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-400">{product.category}</div>
                      </div>
                      <div className="text-xl font-bold text-white">{product.price}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {searchQuery && filteredProducts.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-400">Aucun produit trouvé pour "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      {currentPage === 'home' && (
        <>
          {/* Hero Collections */}
          <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 gap-8">
              {collections.map((collection, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
                >
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h2 className="text-4xl font-bold mb-3 tracking-tight">{collection.title}</h2>
                    <p className="text-gray-300 mb-6 font-medium text-lg">{collection.description}</p>
                    <button className="flex items-center gap-2 text-sm tracking-wider uppercase font-bold bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 hover:gap-4 transition-all duration-300">
                      Découvrir <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Products */}
          <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                <h2 className="text-5xl font-bold tracking-tight text-white">
                  Produits Vedettes
                </h2>
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-gray-400 font-medium text-lg max-w-2xl mx-auto">
                Découvrez notre sélection de stickers et porte-clés tendance
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {product.new && (
                      <span className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs px-4 py-2 rounded-full font-bold shadow-lg">
                        NOUVEAU
                      </span>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(product.id);
                      }}
                      className="absolute top-4 right-4 w-10 h-10 bg-gray-900/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-800 transition-all shadow-lg hover:scale-110"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          isFavorite(product.id)
                            ? 'fill-cyan-400 text-cyan-400'
                            : 'text-gray-400'
                        }`}
                      />
                    </button>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition text-lg">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3 font-medium">{product.category}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{product.price}</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(product);
                        }}
                        className="w-11 h-11 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center hover:shadow-xl hover:shadow-cyan-500/50 transform hover:scale-110 transition-all"
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="bg-gray-800/30 backdrop-blur-sm py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-10">
                {[
                  { title: 'Qualité Premium', desc: 'Matériaux durables qui durent', icon: Star },
                  { title: 'Designs Uniques', desc: 'Créations originales par des artistes talentueux', icon: Sparkles },
                  { title: 'Livraison Rapide', desc: 'Expédition rapide à votre porte', icon: ShoppingCart }
                ].map((item, i) => (
                  <div key={i} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl shadow-cyan-500/30 group-hover:shadow-2xl group-hover:shadow-cyan-500/50 transition-all">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 font-medium text-lg">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Shop Page */}
      {currentPage === 'shop' && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold tracking-tight text-white mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Tous les Produits</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {product.new && (
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs px-4 py-2 rounded-full font-bold shadow-lg">
                      NOUVEAU
                    </span>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(product.id);
                    }}
                    className="absolute top-4 right-4 w-10 h-10 bg-gray-900/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-800 transition-all shadow-lg hover:scale-110"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isFavorite(product.id)
                          ? 'fill-cyan-400 text-cyan-400'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3 font-medium">{product.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{product.price}</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                      }}
                      className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center hover:shadow-xl hover:shadow-cyan-500/50 transform hover:scale-110 transition-all"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-900 max-w-6xl w-full rounded-3xl shadow-2xl border border-cyan-500/30 my-8 max-h-screen overflow-y-auto">
            <div className="relative">
              <button 
                onClick={closeProductModal} 
                className="absolute top-6 right-6 z-10 bg-gray-800/95 backdrop-blur-sm rounded-full p-3 text-gray-400 hover:text-white hover:bg-gray-700 transition-all shadow-xl hover:scale-110"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
                {selectedProduct.new && (
                  <span className="absolute top-8 left-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm uppercase tracking-wider px-8 py-3 font-bold shadow-xl rounded-full">
                    NOUVEAU
                  </span>
                )}
              </div>

              {/* Content Section */}
              <div className="flex flex-col p-8 lg:p-12">
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-widest text-cyan-400 mb-3 font-bold">{selectedProduct.category}</p>
                  <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">{selectedProduct.name}</h2>
                  <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">{selectedProduct.price}</p>
                  <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mb-6 rounded-full"></div>
                  <p className="text-gray-400 leading-relaxed text-base font-medium">{selectedProduct.description}</p>
                </div>

                {!formSubmitted ? (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <ShoppingCart size={22} className="text-cyan-400" />
                      <h3 className="text-2xl font-bold tracking-wide text-white">Commander ce produit</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Nom complet"
                          className="w-full px-5 py-4 border-2 border-cyan-500/30 bg-gray-800 rounded-xl text-white placeholder-gray-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                        />
                        {formErrors.name && <p className="text-red-400 text-xs mt-2 font-medium">{formErrors.name}</p>}
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email"
                          className="w-full px-5 py-4 border-2 border-cyan-500/30 bg-gray-800 rounded-xl text-white placeholder-gray-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                        />
                        {formErrors.email && <p className="text-red-400 text-xs mt-2 font-medium">{formErrors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Téléphone"
                        className="w-full px-5 py-4 border-2 border-cyan-500/30 bg-gray-800 rounded-xl text-white placeholder-gray-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                      />
                      {formErrors.phone && <p className="text-red-400 text-xs mt-2 font-medium">{formErrors.phone}</p>}
                    </div>

                    <div>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Adresse complète"
                        className="w-full px-5 py-4 border-2 border-cyan-500/30 bg-gray-800 rounded-xl text-white placeholder-gray-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                      />
                      {formErrors.address && <p className="text-red-400 text-xs mt-2 font-medium">{formErrors.address}</p>}
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Ville"
                          className="w-full px-5 py-4 border-2 border-cyan-500/30 bg-gray-800 rounded-xl text-white placeholder-gray-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                        />
                        {formErrors.city && <p className="text-red-400 text-xs mt-2 font-medium">{formErrors.city}</p>}
                      </div>
                      <div>
                        <input
                          type="text"
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleInputChange}
                          placeholder="Code postal"
                          className="w-full px-5 py-4 border-2 border-cyan-500/30 bg-gray-800 rounded-xl text-white placeholder-gray-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                        />
                        {formErrors.postcode && <p className="text-red-400 text-xs mt-2 font-medium">{formErrors.postcode}</p>}
                      </div>
                      <div>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          placeholder="Pays"
                          className="w-full px-5 py-4 border-2 border-cyan-500/30 bg-gray-800 rounded-xl text-white placeholder-gray-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                        />
                        {formErrors.country && <p className="text-red-400 text-xs mt-2 font-medium">{formErrors.country}</p>}
                      </div>
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Message (optionnel)"
                        rows="3"
                        className="w-full px-5 py-4 border-2 border-cyan-500/30 bg-gray-800 rounded-xl text-white placeholder-gray-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all resize-none"
                      />
                    </div>

                    <button
                      onClick={handleSubmitOrder}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 uppercase tracking-wide"
                    >
                      Confirmer la commande
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-cyan-500/50">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Commande confirmée !</h3>
                    <p className="text-gray-400 mb-8 font-medium text-lg">Nous vous contacterons bientôt pour finaliser votre commande.</p>
                    <button
                      onClick={closeProductModal}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all uppercase tracking-wide"
                    >
                      Continuer mes achats
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12 mt-20 border-t border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">STICKERIFY</h3>
              <p className="text-gray-400 font-medium">Votre destination pour des stickers et porte-clés uniques</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg text-cyan-400">Boutique</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition font-medium">Stickers</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition font-medium">Porte-clés</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition font-medium">Nouveautés</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg text-cyan-400">Informations</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition font-medium">À propos</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition font-medium">Contact</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition font-medium">Livraison</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg text-cyan-400">Suivez-nous</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center hover:bg-cyan-500/30 transition border border-cyan-500/30">
                  <span className="text-lg">📱</span>
                </a>
                <a href="#" className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center hover:bg-cyan-500/30 transition border border-cyan-500/30">
                  <span className="text-lg">📧</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-cyan-500/30 pt-6 text-center text-gray-400 font-medium">
            <p>© 2024 STICKERIFY. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );}