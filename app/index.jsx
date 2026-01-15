// components/Header.tsx
'use client';
import Link from 'next/link'

export default function Header() {
  return (
    <header className="
      sticky top-0 
      z-50           /* très important pour passer au-dessus du reste */
      w-full 
      py-3 md:py-4 
      border-b border-black 
      bg-white
    ">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl md:text-3xl font-medium tracking-wider text-black hover:opacity-70 transition-opacity"
        >
          VYBE
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-14 text-sm tracking-wider font-light">
          <NavLink href="/collections">COLLECTIONS</NavLink>
          <NavLink href="/creations">CRÉATIONS</NavLink>
          <NavLink href="/about">VYBE</NavLink>
          <NavLink href="/contact">CONTACT</NavLink>
        </nav>

        {/* Bouton Boutique */}
        <Link
          href="/"
          className="
            px-7 py-3.5 
            text-sm tracking-wider font-medium
            text-black
            border border-black 
            hover:bg-black hover:text-white 
            transition-colors duration-300
          "
        >
          BOUTIQUE
        </Link>
      </div>
    </header>
  )
}

// NavLink reste identique
function NavLink({ href, children }) {
  return (
    <Link 
      href={href}
      className="text-black hover:text-gray-600 transition-colors relative group"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300" />
    </Link>
  )
}