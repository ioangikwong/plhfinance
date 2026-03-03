import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark px-6 lg:px-40 py-20 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo PLH Finance"
                className="h-12 w-auto object-contain"
              />
            </div>
          </Link>
          <p className="text-[#517994] text-sm leading-relaxed">
            Conseils financiers indépendants pour particuliers et entreprises. Basé au Québec.
          </p>
          <div className="flex gap-4">
            <a className="size-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="/">
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a className="size-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="/">
              <span className="material-symbols-outlined text-xl">mail</span>
            </a>
          </div>
        </div>
        <div>
          <h5 className="text-[#0e161a] dark:text-white font-bold mb-6">Services</h5>
          <ul className="space-y-4 text-[#517994] text-sm">
            <li><Link className="hover:text-primary transition-colors" href="/entrepreneur-travailleur-autonome">Entrepreneur</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/gestion-de-patrimoine">Gestion de patrimoine</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/parents-travailleurs">Parents travailleurs</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/proches-aidants">Proches aidants</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/travailleur-preoccupe-par-la-retraite">Retraite</Link></li>
            <li><Link className="hover:text-primary transition-colors font-semibold text-primary" href="/planificateur-financier#assurances">Assurance de personnes</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-[#0e161a] dark:text-white font-bold mb-6">Liens Rapides</h5>
          <ul className="space-y-4 text-[#517994] text-sm">
            <li><Link className="hover:text-primary transition-colors" href="/planificateur-financier">Notre équipe</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/blogue">Blogue financier</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/planificateur-financier">À Propos</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-[#0e161a] dark:text-white font-bold mb-6">Légal</h5>
          <ul className="space-y-4 text-[#517994] text-sm">
            <li><a className="hover:text-primary transition-colors" href="/">Mentions légales</a></li>
            <li><a className="hover:text-primary transition-colors" href="/">Politique de protection des renseignements personnels</a></li>
            <li><a className="hover:text-primary transition-colors" href="/">Accessibilité</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto pt-10 mt-20 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[#517994] text-xs">© 2024 PLH Finance. Tous droits réservés.</p>
        <div className="flex items-center gap-2 text-xs text-[#517994]">
          <span className="material-symbols-outlined text-sm">location_on</span>
          <span>Québec, Canada</span>
        </div>
      </div>
    </footer>
  );
}
