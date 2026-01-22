export default function ContactPage() {
  return (
    <section className="
      relative 
      -mt-16 lg:-mt-20        /* ajuste selon la hauteur exacte de ta navbar fixe */
      pt-4 lg:pt-6 
      pb-16 
      bg-white 
      overflow-hidden 
      min-h-screen 
      flex 
      items-center
    ">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Colonne gauche : Textes (inchangée) */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-6">
              <span className="font-serif text-gray-600 tracking-[0.4em] uppercase text-sm md:text-base font-medium">
                RESTONS CONNECTÉS
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Parlons
              <br />
              <span className="text-black">Ensemble</span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-base lg:text-lg text-gray-700 font-light mb-10 lg:mb-12 leading-relaxed">
              Vous avez un projet en tête ? Une idée à partager ? 
              Ou simplement envie d'échanger sur la création et le design ? 
              Je suis toujours ravi de rencontrer de nouvelles personnes passionnées.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 md:gap-8">
              <a 
                href="https://www.instagram.com/omar._.el._.farouk._.kortas/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-black text-white font-medium tracking-wider rounded-lg hover:bg-gray-800 transition-all inline-flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                INSTAGRAM
              </a>

              <button className="px-10 py-5 border-2 border-black text-black font-medium tracking-wider rounded-lg hover:bg-black hover:text-white transition-all">
                AUTRES RÉSEAUX
              </button>
            </div>
          </div>
{/* Colonne droite : QR CODE stylé */}
          <div className="relative mx-auto lg:mx-0 max-w-[260px] sm:max-w-[320px] lg:max-w-md lg:translate-x-16 lg:-translate-y-4 order-2">
            <div className="
              aspect-square           /* on force un format carré pour le QR */
              rounded-3xl 
              overflow-hidden 
              shadow-2xl 
              bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50
              border border-gray-200/60
              flex items-center justify-center relative
              backdrop-blur-sm
            ">
              {/* Overlay gradient léger pour le style Instagram */}
              <div className="absolute inset-0 bg-gradient-to-br from-black-600/5 via-grey-500/5 to-black-400/5"></div>
              
              {/* Ton QR code ici – remplace l'URL par la tienne ! */}
              <img 
                src="/qr.png"  // ← Mets TON lien QR ici
                alt="QR Code Instagram @omar._.el._.farouk._.kortas"
                className="w-4/5 h-4/5 object-contain relative z-10"
              />

              {/* Texte en bas du QR */}
              <div className="absolute bottom-4 left-0 right-0 text-center z-20">
                <p className="text-sm font-medium text-gray-700 bg-white/70 backdrop-blur-sm px-4 py-1.5 rounded-full inline-block">
                  @omar._.el._.farouk._.kortas
                </p>
              </div>
            </div>

            {/* Éléments décoratifs flottants (gardés pour le style) */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
          </div>

        </div>
      </div>

      {/* Section informations supplémentaires (inchangée) */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-500 font-light">
            Scannez le QR code ou suivez-moi sur Instagram pour découvrir mes dernières créations
          </p>
        </div>
      </div>
    </section>
  )
}