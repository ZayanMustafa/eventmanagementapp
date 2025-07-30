import { FOOTER_DATA } from "@/constant/FooterData";








export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white py-12 fade-in">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-cyan-400">SkillSphere</h3>
            <p className="text-white-300">{FOOTER_DATA.logo.description}</p>
          </div>

          {/* Links */}
          {['Resources', 'Company', 'Legal'].map((category, i) => (
            <div key={i}>
              <h4 className="text-xl font-semibold mb-4 text-cyan-300">{category}</h4>
              <ul className="space-y-2">
                {FOOTER_DATA.links.slice(i*2, (i+1)*2).map((link) => (
                  <li key={link.path}>
                    <a href={link.path} className="text-white-300 hover:text-white text-lg transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-sky-800 mt-12 pt-8 text-center text-white-400">
          {FOOTER_DATA.copyright}
        </div>
      </div>
    </footer>
  );
}

