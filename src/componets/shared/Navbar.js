import { NAV_LINKS } from "@/constant/NavData";

import { fadeIn } from "@/lib/animation";



export default function Navbar() {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 fade-in">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-extrabold text-cyan-600">
            SkillSphere
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="text-lg font-medium text-slate-700 hover:text-cyan-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg text-lg font-semibold transition-colors">
              Sign In
            </button>
          </nav>

          {/* Mobile Button */}
          <button className="md:hidden text-slate-700">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}