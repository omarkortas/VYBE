// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
<div className="mb-3">
  <img 
    src="/logoomar.png"  // 👉 Mets ton image ici (place-la dans /public)
    alt="Omar Logo"
    className="h-36 w-auto opacity-90"
  />
</div>

            <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
              Creating clean and modern digital experiences.
            </p>
          </div>

          {/* Portfolio */}
          <div>
            <h4 className="text-[11px] font-light tracking-widest text-gray-900 mb-4 uppercase">
              Portfolio
            </h4>
            <ul className="space-y-2">
              {['Projects', 'UI/UX', 'Web Apps', 'Mobile Apps'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-xs text-gray-600 hover:text-gray-900 transition font-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-[11px] font-light tracking-widest text-gray-900 mb-4 uppercase">
              About
            </h4>
            <ul className="space-y-2">
              {['About Me', 'Skills', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-xs text-gray-600 hover:text-gray-900 transition font-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + newsletter */}
          <div>
            <h4 className="text-[11px] font-light tracking-widest text-gray-900 mb-4 uppercase">
              Follow
            </h4>
            <ul className="space-y-2">
              {['LinkedIn', 'GitHub', 'Instagram'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-xs text-gray-600 hover:text-gray-900 transition font-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="text-[10px] tracking-widest text-gray-900 mb-2">NEWSLETTER</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-0 py-1 bg-transparent border-b border-gray-400 focus:border-gray-900 outline-none text-xs placeholder-gray-400 transition"
                />
                <button
                  type="submit"
                  className="text-[11px] font-light hover:text-gray-600 transition"
                >
                  Go
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-5 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500 font-light">
            <p>© {new Date().getFullYear()} OMAR. All rights reserved.</p>
            <div className="flex space-x-4 mt-3 md:mt-0">
              <Link href="#" className="hover:text-gray-900 transition">Privacy</Link>
              <Link href="#" className="hover:text-gray-900 transition">Terms</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
