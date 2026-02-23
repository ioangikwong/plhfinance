import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-24 bg-white dark:bg-background-dark/80 relative overflow-hidden border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-40 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#0e161a] dark:text-white tracking-tight text-balance">
                    On fait l'évaluation de votre situation financière gratuitement!*
                </h2>
                <p className="text-md text-[#517994] dark:text-slate-400 mb-10 max-w-2xl mx-auto font-light italic">
                    * Une commission ou des honoraires peuvent être versés par le fournisseur du produit.
                </p>
                <div className="flex justify-center">
                    <Link href="/contact" className="inline-flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold shadow-xl hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300">
                        Prêt à prendre vos finances en main?
                    </Link>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
        </section>
    );
}
