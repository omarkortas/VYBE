// app/components/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Omar() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* 1. Texte à gauche */}
          <div className="order-2 lg:order-1 space-y-10">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-serif tracking-wider text-gray-900 leading-tight">
Omar El Farouk Kortas            </h1>
<p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-lg text-justify">
  My name is Omar, a passionate creator who sees beauty not only in aesthetics, 
  but in structure, balance, and intention.  
  With a background shaped by technology, design, and constant exploration, 
  I believe that every project is more than a product — it is an experience built 
  through precision, emotion, and a clear vision.
</p>


            <Link
              href="/about"
              className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors duration-300 text-lg font-serif"
            >
              Read our full story
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* 2. Image à droite (desktop) / en haut (mobile) */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] lg:aspect-square xl:aspect-[5/6] w-full">
              <Image
                src="/farouk.png"          // place ton image dans public/images/founders.jpg
                alt="Les fondatrices de Linea"
                fill
                priority
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
sizes="(max-width: 1024px) 60vw, 30vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}