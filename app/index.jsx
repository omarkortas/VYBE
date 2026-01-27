'use client';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full py-4 md:py-5 border-b border-black bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="text-2xl md:text-3xl font-medium tracking-wider text-black"
        >
          VYBE
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm tracking-wider font-light">

          <div
            className="relative"
            onMouseEnter={() => setCollectionsOpen(true)}
            onMouseLeave={() => setCollectionsOpen(false)}
          >
            <NavLink href="/collections">COLLECTIONS</NavLink>

            {/* Desktop Dropdown */}
            <div
              className={`absolute top-full left-0 mt-2 w-48 bg-white border border-black shadow-lg transition-all duration-200 ${
                collectionsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <a href="/collectionstickers" className="block px-6 py-3 text-black hover:bg-gray-50">
                STICKERS
              </a>
              <a href="/collectionportecle" className="block px-6 py-3 text-black hover:bg-gray-50">
                PORTE-CLÉ
              </a>
              <span className="block px-6 py-3 text-black/50">
                HOODIE (BIENTÔT)
              </span>
            </div>
          </div>

          <NavLink href="/creations">EXCLUSIVES</NavLink>
          <NavLink href="/about">VYBE</NavLink>
          <NavLink href="/contact">CONTACT</NavLink>
        </nav>

        {/* Boutique Desktop */}
        <a
          href="/"
          className="hidden md:block px-6 py-3 text-sm font-medium text-black border border-black"
        >
          BOUTIQUE
        </a>

        {/* Burger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-7 h-7 flex flex-col justify-center gap-1.5"
        >
          <span className={`h-0.5 bg-black ${mobileMenuOpen && 'rotate-45 translate-y-2'}`} />
          <span className={`h-0.5 bg-black ${mobileMenuOpen && 'opacity-0'}`} />
          <span className={`h-0.5 bg-black ${mobileMenuOpen && '-rotate-45 -translate-y-2'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all ${mobileMenuOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
        <nav className="flex flex-col border-t border-gray-200">

          {/* Mobile COLLECTIONS */}
          <button
            onClick={() => setMobileCollectionsOpen(!mobileCollectionsOpen)}
            className="px-6 py-4 text-left text-black border-b border-gray-100"
          >
            COLLECTIONS
          </button>

          {mobileCollectionsOpen && (
            <div className="pl-6">
              <a href="/collectionstickers" className="block py-3 text-black">
                STICKERS
              </a>
              <a href="/collectionportecle" className="block py-3 text-black">
                PORTE-CLÉ
              </a>
              <span className="block py-3 text-black/50">
                HOODIE (BIENTÔT)
              </span>
            </div>
          )}

          <MobileLink href="/creations">EXCLUSIVES</MobileLink>
          <MobileLink href="/about">VYBE</MobileLink>
          <MobileLink href="/contact">CONTACT</MobileLink>

          <a
            href="/"
            className="m-4 px-6 py-3 text-center text-black border border-black"
          >
            BOUTIQUE
          </a>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <a href={href} className="relative text-black group">
      {children}
      <span className="absolute left-0 -bottom-1 w-0 h-px bg-black group-hover:w-full transition-all" />
    </a>
  );
}

function MobileLink({ href, children }) {
  return (
    <a href={href} className="px-6 py-4 text-black border-b border-gray-100">
      {children}
    </a>
  );
}
