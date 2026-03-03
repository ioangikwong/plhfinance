import Link from "next/link";

export default function Page() {
    return (
        <main className="flex flex-col">
            <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
                {/* Full screen background image */}
                <div className="absolute inset-0 -z-20">
                    <img
                        src="/hero.jpg"
                        alt="Consultation financière chaleureuse entre un conseiller et sa cliente"
                        className="h-full w-full object-cover object-center"
                    />
                </div>

                {/* Dark / colored overlay filter to ensure text legibility */}
                <div className="absolute inset-0 -z-10 bg-slate-900/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent"></div>

                <div className="max-w-[1280px] mx-auto px-6 lg:px-40 py-32 flex flex-col items-center justify-center text-center z-10 w-full mt-10">
                    <div className="flex flex-col gap-8 items-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white w-fit shadow-lg">
                            <span className="material-symbols-outlined text-sm">verified_user</span>
                            <span className="text-xs font-bold uppercase tracking-widest leading-none">Conseils Indépendants</span>
                        </div>

                        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight drop-shadow-sm">
                                Le côté humain <br className="hidden sm:block" /> de la finance.
                            </h1>
                            <p className="text-gray-200 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-sm">
                                Planification financière indépendante et objective pour sécuriser vos rêves et protéger votre famille aujourd'hui et demain.
                            </p>
                        </div>

                        <p className="text-gray-300 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto italic drop-shadow-sm">
                            Vous voulez discuter avec une vraie personne et non pas seulement passer par un robot ou un site automatisé? Obtenez la solution adaptée spécialement pour vous.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-6">
                            <Link href="/contact" className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-105 transition-all duration-300">
                                Consultation sans frais
                            </Link>
                            <Link href="#expertises" className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 border-2 border-white/30 backdrop-blur-sm bg-white/5 text-white text-lg font-bold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                                Nos services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section without container */}
            <section className="py-24 px-6 lg:px-40 bg-white dark:bg-background-dark">
                <div className="max-w-[1280px] mx-auto w-full flex flex-col items-center">
                    {/* Text above the video */}
                    <div className="text-center mb-12 max-w-3xl">
                        <h2 className="text-[#0e161a] dark:text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                            Découvrez notre approche
                        </h2>
                        <p className="text-[#517994] dark:text-gray-400 text-lg sm:text-xl font-medium">
                            Parce que votre réalité financière mérite bien plus qu&apos;une feuille de calcul.
                        </p>
                    </div>

                    {/* The standard video without parallax, no overlay, 16:9 frame */}
                    <div className="relative w-full max-w-5xl md:max-w-4xl lg:max-w-5xl aspect-video rounded-[2rem] overflow-hidden shadow-2xl bg-black">
                        <video
                            controls
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/plh-services-video-compressed.mp4" type="video/mp4" />
                            Votre navigateur ne supporte pas la lecture de vidéos.
                        </video>
                    </div>
                </div>
            </section>

            <section id="expertises" className="bg-white dark:bg-background-dark py-24 px-6 lg:px-40 scroll-mt-24 z-10 relative">
                <div className="max-w-[1280px] mx-auto w-full">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Clientèle cible</h2>
                        <h3 className="text-[#0e161a] dark:text-white text-3xl lg:text-4xl font-extrabold tracking-tight">Des solutions adaptées à votre réalité</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                        <Link href="/entrepreneur-travailleur-autonome" className="bg-white dark:bg-background-dark rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 dark:border-gray-800 group block flex flex-col items-center text-center h-full relative overflow-hidden">
                            <div className="w-full h-36 overflow-hidden">
                                <img src="/clientele/entrepreneur.jpg" alt="Entrepreneur" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col items-center flex-1">
                                <h4 className="text-[#0e161a] dark:text-white text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-tight">Entrepreneur</h4>
                                <p className="text-[#517994] dark:text-gray-400 text-sm leading-relaxed mt-auto mb-4">
                                    Stratégie de croissance et optimisation fiscale corporative.
                                </p>
                                <span className="material-symbols-outlined text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all mt-auto text-xl">arrow_forward</span>
                            </div>
                        </Link>

                        <Link href="/gestion-de-patrimoine" className="bg-white dark:bg-background-dark rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 dark:border-gray-800 group block flex flex-col items-center text-center h-full relative overflow-hidden">
                            <div className="w-full h-36 overflow-hidden">
                                <img src="/clientele/patrimoine.jpg" alt="Gestion de patrimoine" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col items-center flex-1">
                                <h4 className="text-[#0e161a] dark:text-white text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-tight">Gestion de patrimoine</h4>
                                <p className="text-[#517994] dark:text-gray-400 text-sm leading-relaxed mt-auto mb-4">
                                    Optimisation et croissance rigoureuse de vos actifs.
                                </p>
                                <span className="material-symbols-outlined text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all mt-auto text-xl">arrow_forward</span>
                            </div>
                        </Link>

                        <Link href="/parents-travailleurs" className="bg-white dark:bg-background-dark rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 dark:border-gray-800 group block flex flex-col items-center text-center h-full relative overflow-hidden">
                            <div className="w-full h-36 overflow-hidden">
                                <img src="/clientele/parents.jpg" alt="Parents travailleurs" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col items-center flex-1">
                                <h4 className="text-[#0e161a] dark:text-white text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-tight">Parent travailleur</h4>
                                <p className="text-[#517994] dark:text-gray-400 text-sm leading-relaxed mt-auto mb-4">
                                    Sécurisation de l&apos;avenir familial et conciliation de carrière.
                                </p>
                                <span className="material-symbols-outlined text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all mt-auto text-xl">arrow_forward</span>
                            </div>
                        </Link>

                        <Link href="/travailleur-preoccupe-par-la-retraite" className="bg-white dark:bg-background-dark rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 dark:border-gray-800 group block flex flex-col items-center text-center h-full relative overflow-hidden">
                            <div className="w-full h-36 overflow-hidden">
                                <img src="/clientele/retraite.jpg" alt="Retraite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col items-center flex-1">
                                <h4 className="text-[#0e161a] dark:text-white text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-tight">Retraite</h4>
                                <p className="text-[#517994] dark:text-gray-400 text-sm leading-relaxed mt-auto mb-4">
                                    Planification de chaque étape pour une transition sereine.
                                </p>
                                <span className="material-symbols-outlined text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all mt-auto text-xl">arrow_forward</span>
                            </div>
                        </Link>

                        <Link href="/proches-aidants" className="bg-white dark:bg-background-dark rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 dark:border-gray-800 group block flex flex-col items-center text-center h-full relative overflow-hidden">
                            <div className="w-full h-36 overflow-hidden">
                                <img src="/clientele/proches.jpg" alt="Proches aidants" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col items-center flex-1">
                                <h4 className="text-[#0e161a] dark:text-white text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-tight">Proche aidant</h4>
                                <p className="text-[#517994] dark:text-gray-400 text-sm leading-relaxed mt-auto mb-4">
                                    Accompagnement et conseils financiers stratégiques.
                                </p>
                                <span className="material-symbols-outlined text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all mt-auto text-xl">arrow_forward</span>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-background-dark py-24 px-6 lg:px-40">
                <div className="max-w-[1280px] mx-auto w-full">
                    <div className="text-center mb-16">
                        <span className="material-symbols-outlined text-5xl text-primary/20 mb-4">format_quote</span>
                        <h3 className="text-[#0e161a] dark:text-white text-3xl font-extrabold tracking-tight">Ce que nos clients disent</h3>
                    </div>

                    {/* Testimonials grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="flex flex-col gap-6 bg-soft-gray dark:bg-slate-800/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 relative shadow-sm hover:shadow-md transition-shadow">
                            <span className="material-symbols-outlined text-4xl text-primary/20 absolute top-4 left-6">format_quote</span>
                            <div className="flex text-primary mt-4">
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                            </div>
                            <div className="text-[#0e161a] dark:text-gray-300 text-sm font-medium leading-relaxed space-y-4 flex-1 mt-2">
                                <p>&quot;Nos placements étaient éparpillés dans une grande institution bancaire. Nous n&apos;avions pas un suivi adéquat. Avec Philippe nous avons discuté de nos besoins, établi un plan d&apos;épargne et réorganisé nos placements.&quot;</p>
                                <p>&quot;Philippe est une personne dévouée, fiable et attentionnée qui sait veiller sur nos intérêts.&quot;</p>
                            </div>
                            <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-[#0e161a] dark:text-white font-bold text-sm">Serge Laurin et Nathalie Desautels</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="flex flex-col gap-6 bg-soft-gray dark:bg-slate-800/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 relative shadow-sm hover:shadow-md transition-shadow">
                            <span className="material-symbols-outlined text-4xl text-primary/20 absolute top-4 left-6">format_quote</span>
                            <div className="flex text-primary mt-4">
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                            </div>
                            <div className="text-[#0e161a] dark:text-gray-300 text-sm font-medium leading-relaxed space-y-4 flex-1 mt-2">
                                <p>&quot;Ma plus grande crainte en tant que travailleur autonome était de me blesser. Ce fût le cas en 2016 avec un arrêt de travail de 8 mois.&quot;</p>
                                <p>&quot;Heureusement, j&apos;avais rencontré Philippe quelques mois plus tôt. Grâce à son intervention, j&apos;ai eu l&apos;esprit tranquille durant ma convalescence.&quot;</p>
                            </div>
                            <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-[#0e161a] dark:text-white font-bold text-sm">Benoît Racine</p>
                                <p className="text-[#517994] text-xs mt-1">Massothérapeute, O&apos;Kiné massothérapie</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="flex flex-col gap-6 bg-soft-gray dark:bg-slate-800/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 relative shadow-sm hover:shadow-md transition-shadow">
                            <span className="material-symbols-outlined text-4xl text-primary/20 absolute top-4 left-6">format_quote</span>
                            <div className="flex text-primary mt-4">
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                            </div>
                            <div className="text-[#0e161a] dark:text-gray-300 text-sm font-medium leading-relaxed space-y-4 flex-1 mt-2">
                                <p>&quot;On ne se sent jamais comme un numéro pour lui. Il prend le temps d&apos;écouter et en aucun moment on ne s&apos;est senti sous pression.&quot;</p>
                                <p>&quot;Il nous a offert une gestion humaine de nos finances, en toute confiance.&quot;</p>
                            </div>
                            <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-[#0e161a] dark:text-white font-bold text-sm">Ronald Mckay et Eve Morrissette</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bio Section */}
            <section className="bg-white dark:bg-background-dark py-24 px-6 lg:px-40 relative">
                <div className="max-w-[1280px] mx-auto w-full">
                    <div className="bg-slate-50 dark:bg-slate-800/30 rounded-[40px] p-10 md:p-16 lg:p-20 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center">
                        <div className="max-w-[1024px] mx-auto w-full flex flex-col md:flex-row gap-12 lg:gap-16 items-center">

                            {/* Photo */}
                            <div className="w-full md:w-1/3 shrink-0 flex justify-center">
                                <div className="aspect-square w-full max-w-[320px] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-50 dark:border-gray-800 bg-white dark:bg-slate-800">
                                    <img
                                        src="/philippe.jpg"
                                        alt="Philippe Leblanc-Hamel"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-2/3 flex flex-col gap-6">
                                <div>
                                    <h2 className="text-[#0e161a] dark:text-white text-3xl md:text-4xl lg:text-5xl font-black mb-2 tracking-tight">
                                        Philippe Leblanc-Hamel
                                    </h2>
                                    <p className="text-primary font-bold text-lg uppercase tracking-wider">
                                        Planificateur financier
                                    </p>
                                </div>

                                <div className="text-[#517994] dark:text-gray-400 space-y-4 text-base md:text-lg leading-relaxed">
                                    <p>
                                        Depuis 1995, j&apos;ai eu l&apos;occasion d&apos;œuvrer au sein de plusieurs institutions financières, dans le domaine bancaire et celui des assurances.
                                    </p>
                                    <p>
                                        J&apos;ai choisi de m&apos;outiller en complétant un baccalauréat en sciences sociales, un certificat en administration, en planification financière, fonds d&apos;investissement du Canada ainsi qu&apos;une formation en assurance.
                                    </p>
                                    <p>
                                        Ces acquis me permettent de bien couvrir tous les aspects concernant votre situation financière et celle de votre famille.
                                    </p>
                                </div>

                                {/* Social Links */}
                                <div className="flex gap-4 pt-2">
                                    <Link href="https://www.facebook.com/plhfinance/" target="_blank" rel="noopener noreferrer" className="text-[#517994] dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:-translate-y-1 transition-all">
                                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/philippe-leblanc-hamel-51aa6147/" target="_blank" rel="noopener noreferrer" className="text-[#517994] dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:-translate-y-1 transition-all">
                                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                                    </Link>
                                </div>

                                {/* Extra details mentioned in PPT */}
                                <div className="pt-6 border-t border-gray-100 dark:border-gray-800 mt-4">
                                    <div className="flex flex-wrap gap-4">
                                        <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-2 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">school</span>
                                            2 Baccalauréats
                                        </div>
                                        <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-2 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">badge</span>
                                            3 Permis certifiés
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LIGNES D'AFFAIRES & PERMIS - NEW SECTION */}
            <section className="py-24 px-6 lg:px-40 bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800">
                <div className="max-w-[1280px] mx-auto w-full">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Transparence et rigueur</h2>
                        <h3 className="text-[#0e161a] dark:text-white text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                            3 lignes d&apos;affaires. 3 permis. 1 seul conseiller.
                        </h3>
                        <p className="text-[#517994] dark:text-gray-400 text-lg sm:text-xl font-medium max-w-3xl mx-auto">
                            Bénéficiez d&apos;une approche intégrée grâce à mes 2 baccalauréats et mes 3 permis de pratique AMF/IQPF. Une structure de rémunération claire pour des décisions 100% alignées sur vos objectifs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Planif */}
                        <div className="bg-white dark:bg-slate-800 rounded-3xl p-10 shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-150"></div>
                            <h4 className="text-2xl font-black text-[#0e161a] dark:text-white mb-2">Planification financière</h4>
                            <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-lg text-sm font-semibold mb-6 w-fit">
                                <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                                Permis IQPF
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 font-medium">
                                On clarifie votre situation, vos projets professionnels et de retraite. Bilan financier exhaustif (via Equisoft) sans frais initiaux cachés. Plan concret, humain et accompagné.
                            </p>
                            <div className="border-t border-slate-100 dark:border-slate-700 pt-6 mt-auto">
                                <p className="text-xs uppercase tracking-widest text-[#517994] font-bold mb-2">Tarification claire</p>
                                <p className="text-xl font-black text-[#0e161a] dark:text-white">Honoraires : 110$/h</p>
                                <p className="text-sm text-slate-500 font-medium mt-1">Pour un mandat complet ou partiel</p>
                            </div>
                        </div>

                        {/* Gestion */}
                        <div className="bg-white dark:bg-slate-800 rounded-3xl p-10 shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-150"></div>
                            <h4 className="text-2xl font-black text-[#0e161a] dark:text-white mb-2">Gestion de patrimoine</h4>
                            <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-lg text-sm font-semibold mb-6 w-fit">
                                <span className="material-symbols-outlined text-primary text-[18px]">savings</span>
                                Permis AMF (Épargne)
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 font-medium">
                                Recherche de performance (Alpha) et contrôle du risque avec rigueur. Je vous démontre la valeur générée nette des frais de gestion. Accès aux plus gros gestionnaires au monde.
                            </p>
                            <div className="border-t border-slate-100 dark:border-slate-700 pt-6 mt-auto">
                                <p className="text-xs uppercase tracking-widest text-[#517994] font-bold mb-2">Tarification claire</p>
                                <p className="text-xl font-black text-[#0e161a] dark:text-white">Frais de gestion annuels</p>
                                <p className="text-sm text-slate-500 font-medium mt-1">Inclus et versés directement par vos fournisseurs de fonds</p>
                            </div>
                        </div>

                        {/* Assurances */}
                        <div className="bg-white dark:bg-slate-800 rounded-3xl p-10 shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-150"></div>
                            <h4 className="text-2xl font-black text-[#0e161a] dark:text-white mb-2">Assurance de personnes</h4>
                            <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-lg text-sm font-semibold mb-6 w-fit">
                                <span className="material-symbols-outlined text-primary text-[18px]">security</span>
                                Permis AMF (Assurance)
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 font-medium">
                                Anticipez l&apos;impact de tous les imprévus (invalidité, maladie grave, décès). Bâtissez des stratégies stables et non impulsives pour protéger solidement votre famille.
                            </p>
                            <div className="border-t border-slate-100 dark:border-slate-700 pt-6 mt-auto">
                                <p className="text-xs uppercase tracking-widest text-[#517994] font-bold mb-2">Tarification claire</p>
                                <p className="text-xl font-black text-[#0e161a] dark:text-white">0$ de frais directs</p>
                                <p className="text-sm text-slate-500 font-medium mt-1">Rémunération par commission versée par l&apos;assureur choisi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-24 px-6 lg:px-40 bg-soft-gray dark:bg-background-dark/50 border-t border-slate-100 dark:border-slate-800">
                <div className="max-w-[1280px] mx-auto w-full">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Foire aux questions</h2>
                        <h3 className="text-[#0e161a] dark:text-white text-3xl md:text-4xl font-extrabold tracking-tight">
                            Questions fréquentes
                        </h3>
                    </div>
                    <div className="max-w-3xl mx-auto flex flex-col gap-4">
                        <details className="group bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                            <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#0e161a] dark:text-white hover:text-primary transition-colors">
                                Qu&apos;est-ce qu&apos;un planificateur financier?
                                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p>Un planificateur financier est un professionnel certifié par l&apos;IQPF qui analyse l&apos;ensemble de votre situation financière (fiscalité, placements, assurances, retraite, succession) afin de bâtir un plan cohérent et personnalisé pour atteindre vos objectifs.</p>
                            </div>
                        </details>

                        <details className="group bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                            <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#0e161a] dark:text-white hover:text-primary transition-colors">
                                Combien coûte une consultation?
                                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p>La première rencontre exploratoire est sans frais et sans engagement. Par la suite, les honoraires pour un mandat de planification financière sont de 110$/h. Les services d&apos;assurance et d&apos;épargne collective n&apos;engendrent aucun frais direct pour vous.</p>
                            </div>
                        </details>

                        <details className="group bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                            <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#0e161a] dark:text-white hover:text-primary transition-colors">
                                Quelle est la différence entre un planificateur financier et un conseiller en banque?
                                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p>Un planificateur financier indépendant comme Philippe travaille pour vous, pas pour une institution. Il a accès à une large gamme de produits de plusieurs fournisseurs et n&apos;est pas limité aux produits d&apos;une seule banque. Ses conseils sont objectifs et alignés uniquement sur vos intérêts.</p>
                            </div>
                        </details>

                        <details className="group bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                            <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#0e161a] dark:text-white hover:text-primary transition-colors">
                                Quels types d&apos;assurance de personnes offrez-vous?
                                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p>Nous offrons une gamme complète d&apos;assurance de personnes : assurance vie, invalidité, maladies graves, assurance hypothécaire, assurance voyage et assurance entreprise. Nous comparons les offres de plusieurs assureurs pour vous trouver la meilleure protection au meilleur prix.</p>
                            </div>
                        </details>

                        <details className="group bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                            <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#0e161a] dark:text-white hover:text-primary transition-colors">
                                Comment prendre rendez-vous?
                                <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p>Vous pouvez réserver une consultation sans frais directement en ligne via notre calendrier Calendly, nous appeler au 450 521-0804, ou remplir le formulaire de contact sur notre site. Philippe vous recontactera rapidement pour planifier votre rencontre.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 px-6 lg:px-40 bg-white dark:bg-background-dark">
                <div className="max-w-[1280px] mx-auto w-full text-center">
                    <div className="bg-primary rounded-[40px] p-10 md:p-16 lg:p-24 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[40%] h-full bg-black/10 -skew-x-12 transform translate-x-1/4"></div>
                        <div className="absolute bottom-0 left-0 w-[40%] h-[120%] bg-white/5 -skew-x-12 transform -translate-x-1/4 translate-y-1/4"></div>

                        <div className="relative z-10 space-y-8 w-full flex flex-col items-center">
                            <h2 className="text-white text-3xl lg:text-5xl font-black leading-tight tracking-tight">Prêt à sécuriser votre avenir ?</h2>
                            <p className="text-white/80 text-lg lg:text-xl font-medium max-w-2xl mx-auto">
                                Prenez rendez-vous aujourd&apos;hui pour une première rencontre exploratoire sans engagement.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full pt-4">
                                <a href="https://calendly.com/plhfinance" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#1a1a1a] text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-black transition-all shadow-xl group flex items-center justify-center gap-3">
                                    <span className="material-symbols-outlined">calendar_month</span>
                                    Réserver en ligne
                                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </a>
                                <Link href="/contact" className="w-full sm:w-auto bg-transparent border-2 border-white/50 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 hover:border-white transition-all flex items-center justify-center gap-3">
                                    <span className="material-symbols-outlined">mail</span>
                                    Nous contacter
                                </Link>
                                <a href="tel:4505210804" className="w-full sm:w-auto bg-transparent border-2 border-white/50 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 hover:border-white transition-all flex items-center justify-center">
                                    450 521-0804
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
}
