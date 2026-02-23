export default function ValueProps() {
    return (
        <section className="py-24 bg-soft-gray dark:bg-background-dark/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-40">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">La Stratégie</h2>
                    <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0e161a] dark:text-white">Comment j'accompagne les professionnels?</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                        <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl">schedule</span>
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-[#0e161a] dark:text-white">Gagner du temps</h4>
                        <p className="text-[#517994] dark:text-slate-300 leading-relaxed">
                            Consacrez moins de temps à vos finances et plus de temps à votre famille, pour vous-même ou votre entreprise.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                        <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl">savings</span>
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-[#0e161a] dark:text-white">Fonds de retraite</h4>
                        <p className="text-[#517994] dark:text-slate-300 leading-relaxed">
                            Constituez un fond solide pour votre retraite afin de garantir votre sécurité financière future.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                        <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl">shield</span>
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-[#0e161a] dark:text-white">Protection globale</h4>
                        <p className="text-[#517994] dark:text-slate-300 leading-relaxed">
                            Protégez l'intégrité de votre entreprise et sécurisez votre patrimoine familial à long terme.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                        <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl">map</span>
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-[#0e161a] dark:text-white">Plan sur-mesure</h4>
                        <p className="text-[#517994] dark:text-slate-300 leading-relaxed">
                            Réalisez un plan d'action personnalisé grâce à notre accès à 16 assureurs et 20 firmes de fonds mutuels.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                        <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl">hub</span>
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-[#0e161a] dark:text-white">Réseau d'experts</h4>
                        <p className="text-[#517994] dark:text-slate-300 leading-relaxed">
                            Assurez-vous d'avoir un pont solide entre les différents professionnels qui vous entourent (comptables, notaires, etc).
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
