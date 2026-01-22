'use client';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full py-4 md:py-5 border-b border-black bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/" 
          className="text-2xl md:text-3xl font-medium tracking-wider text-black hover:opacity-70 transition-opacity"
        >
          VYBE
        </a>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12 text-sm tracking-wider font-light">
          <NavLink href="/collections">COLLECTIONS</NavLink>
          <NavLink href="/creations">EXCLUSIVES</NavLink>
          <NavLink href="/about">VYBE</NavLink>
          <NavLink href="/contact">CONTACT</NavLink>
        </nav>

        {/* Bouton Boutique Desktop */}
        <a
          href="/"
          className="hidden md:block px-6 lg:px-7 py-3 text-sm tracking-wider font-medium text-black border border-black hover:bg-black hover:text-white transition-colors duration-300"
        >
          BOUTIQUE
        </a>

        {/* Menu Burger Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 w-7 h-7 justify-center"
          aria-label="Menu"
        >
          <span className={`w-full h-0.5 bg-black transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-full h-0.5 bg-black transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Menu Mobile */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 border-t border-gray-200' : 'max-h-0'}`}>
        <nav className="flex flex-col bg-white">
          <MobileNavLink href="/collections" onClick={() => setMobileMenuOpen(false)}>
            COLLECTIONS
          </MobileNavLink>
          <MobileNavLink href="/creations" onClick={() => setMobileMenuOpen(false)}>
            EXCLUSIVES
          </MobileNavLink>
          <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>
            VYBE
          </MobileNavLink>
          <MobileNavLink href="/contact" onClick={() => setMobileMenuOpen(false)}>
            CONTACT
          </MobileNavLink>
          <a
            href="/"
            className="mx-4 my-3 px-6 py-3 text-center text-sm tracking-wider font-medium text-black border border-black hover:bg-black hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(false)}
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
    <a 
      href={href}
      className="text-black hover:text-gray-600 transition-colors relative group"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300" />
    </a>
  );
}

function MobileNavLink({ href, children, onClick }) {
  return (
    <a 
      href={href}
      onClick={onClick}
      className="px-6 py-4 text-sm tracking-wider font-light text-black hover:bg-gray-50 transition-colors border-b border-gray-100"
    >
      {children}
    </a>
  );
}