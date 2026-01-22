// components/LaMaisonSection.tsx
"use client";

export default function VybeSection() {
  return (
    <section className="py-2 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre principal */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-serif text-gray-600 tracking-[0.4em] uppercase text-sm md:text-base font-medium">
              VYBE
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            L'Excellence au Service
            <br />
            de l'Élégance
          </h2>
        </div>

        {/* Texte introductif */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed">
            Fondée sur les principes d'un artisanat d'exception, Maison Élégance perpétue la tradition du beau et du raffiné dans chacune de ses créations.
          </p>
        </div>    
                  </div>
    </section>
  )
}