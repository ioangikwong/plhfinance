export default function Testimonial() {
    return (
        <section className="py-24 bg-soft-gray dark:bg-background-dark/50 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-6 lg:px-40 text-center">
                <div className="mb-8 flex justify-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[32px] md:text-[40px] drop-shadow-sm">star</span>
                    ))}
                </div>

                <blockquote className="text-xl md:text-3xl font-medium leading-relaxed text-[#0e161a] dark:text-white mb-10 italic">
                    "Ma plus grande crainte en tant que travailleur autonome était de me blesser. Ce fût le cas en 2016 avec un arrêt de travail de 8 mois. Heureusement, j'avais rencontré Philippe quelques mois plus tôt. En révisant mes assurances salaire, nous avions constaté que j'étais mal assuré. Grâce à son intervention, j'ai eu l'esprit tranquille durant ma convalescence."
                </blockquote>

                <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-1 bg-primary rounded-full mb-2"></div>
                    <cite className="not-italic text-lg font-bold text-[#0e161a] dark:text-white">Benoît Racine</cite>
                    <span className="text-sm text-[#517994] dark:text-slate-400 uppercase tracking-widest font-semibold">
                        Massothérapeute et propriétaire du centre O'Kiné massothérapie
                    </span>
                </div>
            </div>
        </section>
    );
}
