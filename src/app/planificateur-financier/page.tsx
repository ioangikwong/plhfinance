import Link from "next/link";

export default function PlanificateurFinancierPage() {
    return (
        <main className="flex flex-col font-display bg-white dark:bg-background-dark">
            {/* 1. HERO - ABSTRACT STITCH STYLE */}
            <section className="relative w-full py-24 md:py-32 lg:py-40 px-6 lg:px-40 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0e161a] via-[#1a3d52] to-primary">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[60%] h-[120%] bg-primary/20 blur-[100px] rounded-full translate-x-1/4 -translate-y-1/4"></div>
                    <div className="absolute bottom-0 left-0 w-[50%] h-[100%] bg-[#64b5f6]/20 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4"></div>
                    <div className="absolute inset-0 bg-black/30 dark:bg-black/50 z-10 mix-blend-multiply"></div>
                </div>

                <div className="relative z-20 max-w-[1280px] w-full mx-auto flex flex-col items-center text-center text-white mt-4">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight drop-shadow-md text-balance">
                            Votre planificateur financier
                        </h1>
                        <p className="text-lg md:text-2xl font-light opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                            Parce que votre réalité financière mérite bien plus qu'une simple feuille de calcul.
                        </p>
                        <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-white text-primary hover:bg-gray-100 px-10 py-5 rounded-full text-lg font-extrabold transition-all shadow-xl shadow-black/20 mx-auto group">
                            Consultation sans frais
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">trending_flat</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. MAIN CONTENT - FLOATING CARDS */}
            <section className="py-24 px-6 lg:px-40 bg-white dark:bg-background-dark">
                <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-16">

                    {/* Intro Section / Bio container */}
                    <div className="bg-slate-50 dark:bg-slate-800/30 rounded-[40px] p-10 md:p-16 lg:p-20 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[40%] h-full bg-primary/5 -skew-x-12 transform translate-x-1/4 pointer-events-none"></div>

                        <div className="w-full md:w-1/3 shrink-0 flex justify-center relative z-10">
                            <div className="aspect-square w-full max-w-[320px] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                                <img
                                    src="/philippe.jpg"
                                    alt="Philippe Leblanc-Hamel"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 flex flex-col gap-6 relative z-10">
                            <div>
                                <h2 className="text-[#0e161a] dark:text-white text-3xl md:text-4xl lg:text-5xl font-black mb-2 tracking-tight">
                                    Philippe Leblanc-Hamel
                                </h2>
                                <p className="text-primary font-bold text-lg uppercase tracking-wider">
                                    Planificateur financier
                                </p>
                            </div>

                            <div className="text-slate-600 dark:text-slate-400 space-y-4 text-base md:text-lg leading-relaxed">
                                <p>
                                    Un planificateur financier vous aide à comprendre vos besoins, coordonne les professionnels autour de vous et élabore un plan cohérent pour atteindre vos objectifs. Il vous permet de vous préparer aux imprévus importants.
                                </p>
                                <p>
                                    Évitez de prendre des décisions importantes à l'aveugle. Le plan financier est comme un plan d'entraînement pour les sportifs, il vous permet de mettre en place des stratégies financières et de suivi pour atteindre vos objectifs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Permis */}
                        <div className="bg-white dark:bg-slate-800 rounded-[30px] p-10 shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all flex flex-col">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 shrink-0">
                                <span className="material-symbols-outlined text-3xl text-primary">verified</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-[#1a1a1a] dark:text-white">Mes permis de l'AMF</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                En confiant vos actifs à Solutions financières Philippe Leblanc-Hamel, vous avez accès à trois permis en un seul :
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    <span className="font-medium text-slate-700 dark:text-slate-200">Planificateur financier (Représentant autonome)</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    <span className="font-medium text-slate-700 dark:text-slate-200">Représentant en épargne collective</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    <span className="font-medium text-slate-700 dark:text-slate-200">Conseiller en sécurité financière (Représentant autonome)</span>
                                </li>
                            </ul>
                            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700">
                                <p className="text-sm text-slate-500 italic">
                                    *Philippe Leblanc-Hamel est Représentant en épargne collective inscrit auprès de Groupe Cloutier Investissements.
                                </p>
                            </div>
                        </div>

                        {/* Investissements */}
                        <div className="bg-white dark:bg-slate-800 rounded-[30px] p-10 shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all flex flex-col">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 shrink-0">
                                <span className="material-symbols-outlined text-3xl text-primary">savings</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-[#1a1a1a] dark:text-white">Investissements et épargne collective</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                Conseils en matière de finance, d'épargne et d'investissements pour optimiser votre patrimoine en sélectionnant la meilleure option parmi une vaste gamme de fournisseurs.
                            </p>

                            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 mb-6">
                                <h4 className="font-bold text-[#1a1a1a] dark:text-white mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-green-500">eco</span>
                                    Investissements socialement responsables
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Possibilité d'investir dans des entreprises qui partagent vos valeurs et d'exclure celles qui ne correspondent pas à vos principes.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-sm font-medium text-slate-700 dark:text-slate-300 mb-6">
                                <div>• REER, FERR, REEE, REEI</div>
                                <div>• Fonds mutuels</div>
                                <div>• Comptes haut rendement</div>
                                <div>• Placements garantis</div>
                                <div>• CELI</div>
                            </div>
                        </div>
                    </div>

                    {/* Assurances container */}
                    <div id="assurances" className="bg-[#1a1a1a] dark:bg-[#0e161a] rounded-[40px] text-white p-10 md:p-16 shadow-2xl border border-slate-800 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden scroll-mt-24">
                        <div className="absolute bottom-0 right-0 w-[40%] h-full bg-primary/10 skew-x-12 transform translate-x-1/4 pointer-events-none"></div>

                        <div className="w-full md:w-1/2 relative z-10">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 shrink-0 backdrop-blur-md">
                                <span className="material-symbols-outlined text-3xl text-white">security</span>
                            </div>
                            <h3 className="text-3xl font-bold mb-6 leading-tight">Assurance de personnes et sécurité financière</h3>
                            <div className="h-1.5 w-24 bg-primary rounded-full mb-8"></div>

                            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                                L'assurance est essentielle pour prendre en charge les conséquences financières d'événements imprévus (invalidité, accident).
                                Je compare les solutions offertes par les plus grandes entreprises pour vous protéger, vous et votre famille.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">done</span>
                                    <span>Vie</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">done</span>
                                    <span>Maladies graves</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">done</span>
                                    <span>Entreprise</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">done</span>
                                    <span>Invalidité</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">done</span>
                                    <span>Hypothécaire</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">done</span>
                                    <span>Voyage</span>
                                </div>
                            </div>

                            <div className="border-t border-white/10 pt-6">
                                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">Nos assureurs partenaires</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-white/10 px-3 py-1.5 rounded-lg text-sm font-medium">Manuvie</span>
                                    <span className="bg-white/10 px-3 py-1.5 rounded-lg text-sm font-medium">Canada Vie</span>
                                    <span className="bg-white/10 px-3 py-1.5 rounded-lg text-sm font-medium">iA Groupe financier</span>
                                    <span className="bg-white/10 px-3 py-1.5 rounded-lg text-sm font-medium">Desjardins</span>
                                    <span className="bg-white/10 px-3 py-1.5 rounded-lg text-sm font-medium">Sun Life</span>
                                    <span className="bg-white/10 px-3 py-1.5 rounded-lg text-sm font-medium">Beneva</span>
                                    <span className="bg-white/10 px-3 py-1.5 rounded-lg text-sm font-medium">RBC Assurances</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 relative z-10">
                            <div className="bg-white/5 p-2 rounded-3xl backdrop-blur-sm border border-white/10 shadow-lg h-full max-h-[400px]">
                                <img
                                    alt="Protection et Sécurité"
                                    className="rounded-2xl w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Fournisseurs de fonds */}
                    <div className="bg-white dark:bg-slate-800 rounded-[30px] p-10 shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 shrink-0">
                            <span className="material-symbols-outlined text-3xl text-primary">account_balance</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-6 text-[#1a1a1a] dark:text-white">Nos fournisseurs de fonds</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            En tant que représentant indépendant, j&apos;ai accès aux produits des plus grands gestionnaires de fonds au Canada et dans le monde. Cela me permet de sélectionner les meilleures solutions pour votre profil.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 text-center">Desjardins</div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 text-center">Fidelity</div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 text-center">Manuvie</div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 text-center">Canada Vie</div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 text-center">iA Groupe financier</div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 text-center">RBC GAM</div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 text-center">BMO</div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 text-center">Mackenzie</div>
                            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 text-center">CI Financial</div>
                        </div>
                    </div>

                    {/* Image tarte des professions */}
                    <div className="bg-slate-50 dark:bg-slate-800/30 rounded-[40px] p-10 md:p-16 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                        <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a] dark:text-white">Les 7 domaines de la planification financière</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
                            Le planificateur financier couvre l&apos;ensemble des aspects de votre vie financière grâce à une approche intégrée.
                        </p>
                        <div className="w-full max-w-lg">
                            <img
                                src="/tarte-professions.png"
                                alt="Les 7 domaines de la planification financière - Finances, Fiscalité, Aspects légaux, Assurance, Placements, Retraite, Succession"
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. FINAL CTA */}
            <section className="py-24 px-6 lg:px-40 bg-white dark:bg-background-dark mb-10">
                <div className="max-w-[1280px] mx-auto w-full text-center">
                    <div className="bg-primary rounded-[40px] p-10 md:p-16 lg:p-24 shadow-2xl text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[40%] h-full bg-black/10 -skew-x-12 transform translate-x-1/4"></div>
                        <div className="absolute bottom-0 left-0 w-[40%] h-[120%] bg-white/5 -skew-x-12 transform -translate-x-1/4 translate-y-1/4"></div>

                        <div className="relative z-10 w-full flex flex-col items-center">
                            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-balance">
                                On fait l'évaluation de votre situation financière gratuitement!*
                            </h2>
                            <p className="text-white/80 text-xl mb-12 max-w-2xl font-light leading-relaxed">
                                La première étape vers une meilleure santé financière commence par un simple rendez-vous exploratoire.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                                <Link href="/contact" className="w-full sm:w-auto bg-[#1a1a1a] text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 px-10 py-5 rounded-full text-lg font-bold transition-all shadow-xl flex items-center justify-center gap-3 group">
                                    Prendre un rendez-vous
                                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </Link>
                            </div>
                            <p className="mt-8 text-sm text-white/60 italic font-light">
                                * Une commission ou des honoraires peuvent être versés par le fournisseur du produit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
