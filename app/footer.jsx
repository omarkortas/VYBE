// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          
          {/* Colonne 1 - Logo & Description */}
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-medium tracking-wider text-gray-900 mb-4">
              VYBE
            </h3>
            <p className="text-gray-600 font-light leading-relaxed max-w-md">
              Créations artisanales d'exception, confectionnées avec passion dans nos ateliers parisiens depuis 2026.
            </p>

            {/* Icônes réseaux sociaux */}
            <div className="flex gap-6 mt-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.579.227.227 2.579.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.155 4.473 2.507 6.825 6.98 6.98C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.473-.155 6.825-2.507 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.155-4.473-2.507-6.825-6.98-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Colonne 2 - Collections */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-6 tracking-wider uppercase">
              COLLECTIONS
            </h4>
            <ul className="space-y-3 text-gray-600 font-light">
              <li><a href="#" className="hover:text-gray-900 transition">Stickers Premium</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Porte-clés Exclusifs</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Nouveautés</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Éditions Limitées</a></li>
            </ul>
          </div>

          {/* Colonne 3 - La Maison */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-6 tracking-wider uppercase">
              VYBE
            </h4>
            <ul className="space-y-3 text-gray-600 font-light">
              <li><a href="#" className="hover:text-gray-900 transition">Notre Histoire</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Savoir-faire</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="mt-16 pt-10 border-t border-gray-200 text-center md:text-left text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2026 VYBE. TOUS DROITS RÉSERVÉS.</p>
            <p className="italic">Artisanat français d'exception</p>
          </div>
        </div>
      </div>
    </footer>
  )
}