export default function CTASection() {
  return (
    <section className="py-24 bg-white dark:bg-background-dark">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-primary rounded-[2rem] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
<div className="lg:w-2/3 relative z-10">
<h2 className="text-4xl font-black mb-6">Un accompagnement de chaque instant</h2>
<p className="text-xl text-slate-100 leading-relaxed mb-8">
                            Notre mission ne s'arrête pas à la signature d'un plan. Nous assurons un suivi rigoureux et personnalisé au fil des années pour adapter vos stratégies aux changements du marché et de votre vie. Découvrez l'expérience simplifiée des "Solutions financières PHL".
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-white">check_circle</span>
<span className="font-medium">Révision annuelle de votre portefeuille</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-white">check_circle</span>
<span className="font-medium">Optimisation fiscale continue</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-white">check_circle</span>
<span className="font-medium">Disponibilité directe de votre conseiller</span>
</li>
</ul>
</div>
<div className="lg:w-1/3 w-full relative z-10">
<div className="bg-white p-8 rounded-2xl shadow-xl text-slate-900">
<h3 className="text-2xl font-bold mb-4">Prêt à commencer?</h3>
<p className="text-slate-600 mb-6">Réservez votre consultation gratuite de 30 minutes aujourd'hui.</p>
<button className="w-full bg-primary text-white font-bold py-4 px-6 rounded-xl hover:bg-slate-900 transition-colors flex items-center justify-center gap-2 group">
                                Planifier mon évaluation
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</section>
  );
}
