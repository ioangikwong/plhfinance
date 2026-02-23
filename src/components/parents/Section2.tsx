export default function Section2() {
  return (
    <section className="py-24 bg-soft-gray">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-slate-900">Comment y parvenons-nous?</h2>
<div className="h-1.5 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Feature 1  */}
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined text-3xl">school</span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Subventions éducation</h3>
<p className="text-slate-600 leading-relaxed">
                            Maximisez le futur de vos enfants. Bénéficiez de subventions gouvernementales allant de <span className="font-bold text-primary">20% à 40%</span> de vos cotisations.
                        </p>
</div>
{/*  Feature 2  */}
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined text-3xl">family_restroom</span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Protection familiale</h3>
<p className="text-slate-600 leading-relaxed">
                            Sécurisez l'avenir de votre famille avec des solutions d'assurance adaptées à votre réalité de parents actifs, pour une tranquillité d'esprit totale.
                        </p>
</div>
{/*  Feature 3  */}
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined text-3xl">account_balance</span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Plan d'action sur mesure</h3>
<p className="text-slate-600 leading-relaxed">
                            Accès privilégié à un réseau de <span className="font-bold text-primary">16 assureurs et 20 firmes de fonds</span> pour bâtir une stratégie performante et neutre.
                        </p>
</div>
</div>
</div>
</section>
  );
}
