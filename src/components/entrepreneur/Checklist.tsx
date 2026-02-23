export default function Checklist() {
    const points = [
        "De vous entourer de professionnels compétents;",
        "De budgéter adéquatement;",
        "De choisir le bon type d'entreprise (entreprise individuelle, incorporation, etc.);",
        "D'avoir vos numéros de taxes et de facturer celles-ci si vos revenus dépassent 30 000 $;",
        "De prévoir l'imprévisible en gardant de l'argent de côté et en consacrant du temps au développement des affaires, surtout lorsque vous n'en avez pas de besoin."
    ];

    return (
        <section className="py-24 bg-primary text-white">
            <div className="max-w-4xl mx-auto px-6 lg:px-40">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold tracking-tight mb-6">Assurez-vous...</h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        Une checklist essentielle pour bâtir une base solide pour votre entreprise et votre avenir financier.
                    </p>
                </div>

                <div className="space-y-4">
                    {points.map((point, i) => (
                        <div key={i} className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                            <div className="mt-1 size-8 rounded-full bg-white text-primary flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-xl">check</span>
                            </div>
                            <p className="text-lg font-medium leading-relaxed">{point}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
