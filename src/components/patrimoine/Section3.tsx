export default function Section3() {
  return (
    <section className="py-24 bg-background-alt dark:bg-slate-900/50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
<span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-4">Savoir-faire</span>
<h2 className="text-4xl font-extrabold text-text-main dark:text-white">Nos champs d'intervention</h2>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/*  Card 1  */}
<div className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
<div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
</div>
<h3 className="text-xl font-bold mb-4">L'investissement</h3>
<p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Optimisation de portefeuilles personnalisés selon votre profil de risque et vos objectifs de rendement.
                        </p>
</div>
{/*  Card 2  */}
<div className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
<div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-primary text-3xl">event_note</span>
</div>
<h3 className="text-xl font-bold mb-4">La planification financière</h3>
<p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Établissement d'une feuille de route claire pour atteindre vos jalons financiers prioritaires.
                        </p>
</div>
{/*  Card 3  */}
<div className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
<div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-primary text-3xl">account_balance</span>
</div>
<h3 className="text-xl font-bold mb-4">Réduction d'impôts</h3>
<p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Mise en place de structures fiscales efficientes pour maximiser votre revenu net disponible.
                        </p>
</div>
{/*  Card 4  */}
<div className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
<div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
</div>
<h3 className="text-xl font-bold mb-4">Préservation de patrimoine</h3>
<p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Protection de vos acquis contre les fluctuations du marché et les risques juridiques ou personnels.
                        </p>
</div>
{/*  Card 5  */}
<div className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
<div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-primary text-3xl">family_restroom</span>
</div>
<h3 className="text-xl font-bold mb-4">Planification successorale</h3>
<p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Assurer un transfert harmonieux et optimisé de vos actifs à vos proches ou organismes de charité.
                        </p>
</div>
{/*  CTA Mini-Card  */}
<div className="bg-primary p-10 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center text-white">
<h3 className="text-2xl font-bold mb-4">Besoin d'un plan?</h3>
<p className="mb-8 text-primary-light">Découvrez comment nous pouvons simplifier votre structure financière dès aujourd'hui.</p>
<button className="w-full bg-white text-primary font-bold py-3 rounded-lg hover:bg-slate-100 transition-colors">
                            Commencer ici
                        </button>
</div>
</div>
</div>
</section>
  );
}
