"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset" };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col">
      {/* Top bar Announcement */}
      <div className="bg-primary dark:bg-primary/80 text-white/90 text-[13px] py-2 px-6 lg:px-40 w-full hidden lg:block">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:4505210804" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[16px]">call</span>
              450 521-0804
            </a>
            <a href="mailto:info@plhfinance.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[16px]">mail</span>
              info@plhfinance.com
            </a>
            <a href="https://www.facebook.com/plhfinance/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors ml-2">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/planificateur-financier" className="hover:text-white transition-colors">Votre plan financier</Link>
            <Link href="/gestion-de-patrimoine" className="hover:text-white transition-colors">Vos investissements</Link>
            <Link href="/liens-utiles" className="hover:text-white transition-colors">Liens utiles</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-b border-solid border-[#e8eef2] dark:border-gray-800 px-6 lg:px-40 py-3">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between whitespace-nowrap">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo PLH Finance"
                className="h-10 w-auto object-contain"
              />
            </div>
          </Link>
          <div className="hidden md:flex flex-1 justify-center gap-10">

            <div className="relative group">
              <button className="flex items-center gap-1 text-[#0e161a] dark:text-white text-sm font-semibold hover:text-primary transition-colors py-2">
                Services financiers
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-72">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 p-2 flex flex-col">
                  <Link href="/entrepreneur-travailleur-autonome" className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg hover:text-primary transition-colors flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary/70">business_center</span>
                    Entrepreneur
                  </Link>
                  <Link href="/gestion-de-patrimoine" className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg hover:text-primary transition-colors flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary/70">account_balance_wallet</span>
                    Gestion de patrimoine
                  </Link>
                  <Link href="/parents-travailleurs" className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg hover:text-primary transition-colors flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary/70">family_restroom</span>
                    Parents travailleurs
                  </Link>
                  <Link href="/proches-aidants" className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg hover:text-primary transition-colors flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary/70">volunteer_activism</span>
                    Proches aidants
                  </Link>
                  <Link href="/travailleur-preoccupe-par-la-retraite" className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg hover:text-primary transition-colors flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary/70">beach_access</span>
                    Retraite
                  </Link>
                </div>
              </div>
            </div>

            <Link className="flex items-center text-[#0e161a] dark:text-white text-sm font-semibold hover:text-primary transition-colors py-2" href="/planificateur-financier">Planificateur Financier</Link>
            <Link className="flex items-center text-[#0e161a] dark:text-white text-sm font-semibold hover:text-primary transition-colors py-2" href="/blogue">Blogue</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden sm:flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary/90 transition-all">
              Prendre Rendez-vous
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden flex items-center justify-center p-2 -mr-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-[100] relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Basculer le menu"
            >
              <span className="material-symbols-outlined text-[28px] text-[#0e161a] dark:text-white">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen Mobile Menu (Apple-like) */}
      <div
        className={`fixed inset-0 bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl z-[90] md:hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col pt-32 px-8 overflow-y-auto pb-10 ${isMobileMenuOpen
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-4"
          }`}
      >
        <div className="flex flex-col gap-8 max-w-sm mx-auto w-full text-center">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black text-[#0e161a] dark:text-white border-b border-gray-100 dark:border-gray-800 pb-4">
            Accueil
          </Link>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#517994] dark:text-gray-400">Services</span>
            <Link href="/entrepreneur-travailleur-autonome" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-[#0e161a] dark:text-white hover:text-primary transition-colors">
              Entrepreneur
            </Link>
            <Link href="/gestion-de-patrimoine" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-[#0e161a] dark:text-white hover:text-primary transition-colors">
              Gestion de patrimoine
            </Link>
            <Link href="/parents-travailleurs" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-[#0e161a] dark:text-white hover:text-primary transition-colors">
              Parents travailleurs
            </Link>
            <Link href="/proches-aidants" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-[#0e161a] dark:text-white hover:text-primary transition-colors">
              Proches aidants
            </Link>
            <Link href="/travailleur-preoccupe-par-la-retraite" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-[#0e161a] dark:text-white hover:text-primary transition-colors">
              Retraite
            </Link>
          </div>

          <Link href="/planificateur-financier" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black text-[#0e161a] dark:text-white border-t border-gray-100 dark:border-gray-800 pt-8 mt-4">
            Mon expertise
          </Link>
          <Link href="/blogue" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black text-[#0e161a] dark:text-white">
            Blogue
          </Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black text-primary">
            Contact
          </Link>

          <div className="mt-8 flex gap-4 justify-center">
            <a href="tel:4505210804" className="flex items-center justify-center size-14 rounded-full bg-slate-100 dark:bg-slate-800 text-[#0e161a] dark:text-white hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined">call</span>
            </a>
            <a href="mailto:info@plhfinance.com" className="flex items-center justify-center size-14 rounded-full bg-slate-100 dark:bg-slate-800 text-[#0e161a] dark:text-white hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
