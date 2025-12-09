// // components/ProductMarquee.tsx
// import Image from 'next/image';
// import { Heart } from 'lucide-react';

// type Product = {
//   id: number;
//   name: string;
//   category: string;
//   price: string;
//   image: string;
//   new?: boolean;
// };

// type ProductMarqueeProps = {
//   products: Product[];
//   favorites: number[];
//   toggleFavorite: (id: number) => void;
//   isFavorite: (id:id: number) => boolean;
// };

// export default function ProductMarquee({ products, favorites, toggleFavorite, isFavorite }: ProductMarqueeProps) {
//   return (
//     <>
//       {/* MARQUEE AUTOMATIQUE INFINI */}
//       <section className="py-24 bg-black text-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 text-center mb-16">
//           <h2 className="text-5xl md:text-7xl font-light tracking-widest">Featured Jewelry</h2>
//         </div>

//         <div className="relative">
//           <div className="flex animate-marquee whitespace-nowrap hover:pause">
//             {/* On duplique les produits pour l'effet infini */}
//             {[...products, ...products].map((product, index) => (
//               <div
//                 key={`${product.id}-${index}`}
//                 className="mx-10 flex-shrink-0 w-96"
//               >
//                 <div className="group cursor-pointer">
//                   <div className="relative aspect-square mb-8 overflow-hidden bg-gray-900 rounded-xl">
//                     {product.new && (
//                       <span className="absolute top-8 left-8 bg-white text-black px-6 py-2 text-xs tracking-widest z-10 font-medium">
//                         NEW
//                       </span>
//                     )}
//                     <Image
//                       src={product.image}
//                       alt={product.name}
//                       width={400}
//                       height={400}
//                       className="object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         toggleFavorite(product.id);
//                       }}
//                       className="absolute top-8 right-8 bg-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl"
//                     >
//                       <Heart
//                         size={22}
//                         className={isFavorite(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-800'}
//                       />
//                     </button>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">{product.category}</p>
//                     <h3 className="text-3xl font-light mb-3">{product.name}</h3>
//                     <p className="text-2xl font-medium">{product.price}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Animation CSS */}
//       <style jsx>{`
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           animation: marquee 35s linear infinite;
//         }
//         .animate-marquee:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </>
//   );
// }