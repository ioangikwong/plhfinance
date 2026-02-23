import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-[600px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent z-10"></div>
                <img
                    alt="Entrepreneur au travail"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                />
            </div>
            <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-40 w-full">
                <div className="max-w-2xl text-white">
                    <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
                        Entrepreneur / Travailleur autonome
                    </h1>
                    <p className="text-xl md:text-2xl font-light mb-10 text-slate-200">
                        Pourquoi vous limiter à une seule option? Planifiez et optimisez vos ressources financières.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact" className="bg-primary text-white text-lg font-bold py-4 px-10 rounded-lg shadow-xl hover:bg-primary/90 transition-all hover:-translate-y-1">
                            Évaluation gratuite
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
