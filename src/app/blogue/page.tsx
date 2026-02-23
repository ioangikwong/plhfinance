import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogue | PLH Finance",
    description: "Articles récents et conseils d'experts en planification financière",
};

const posts = [
    {
        title: "Ai-je vraiment besoin de dépenser pour m'assurer?",
        excerpt: "Tout le monde rêve de ne pas avoir de soucis financiers. Saviez-vous que les principales causes de ces problèmes est l'excès de confiance?",
        slug: "ai-je-vraiment-besoin-de-depenser-pour-massurer",
        category: "Assurance"
    },
    {
        title: "Les défis administratifs pour les proches aidants",
        excerpt: "Souvent, le proche aidant est investi émotivement par la situation physique et psychologique de la personne aidée. Mais cela vient également avec un engagement administratif concernant les biens...",
        slug: "defis-administratifs-proches-aidants",
        category: "Proche aidant"
    },
    {
        title: "Marcher les îles pour la proche aidance",
        excerpt: "Voici un balado qui présente notre projet des 2 prochaines semaines. En effet, nous partons demain matin, faire une rando de 230 km soit le tour des îles de la madeleine pour faire connaître la proche aidance.",
        slug: "marcher-les-iles-proche-aidance",
        category: "Actualités"
    },
    {
        title: "PROCHES AIDANTS : PENSEZ À BIEN VOUS ENTOURER, VOUS AUSSI!",
        excerpt: "Proche aidant ou aidant naturel, votre êtes la personne de confiance sur qui on s'appuie lorsque la maladie frappe à la porte.",
        slug: "proches-aidants-entourage",
        category: "Proche aidant"
    },
    {
        title: "Vous avez enfin fini de chercher!",
        excerpt: "Il fût un temps où vous n'aviez pas le choix; vous deviez vous procurer un grand classeur à trois tiroirs et de multiples dossiers pour classer tous vos documents légaux.",
        slug: "vous-avez-enfin-fini-de-chercher",
        category: "Organisation"
    },
    {
        title: "Aujourd'hui, les investisseurs veulent devenir riche vite, mais c'est la patience qui enrichit!",
        excerpt: "Oui, certains ont connu la richesse rapidement grâce à une opportunité. On vit dans un monde où on a tout instantanément, mais je vous le confirme, le commun des mortels s'enrichit grâce à la patience.",
        slug: "patience-enrichit",
        category: "Investissement"
    },
    {
        title: "Méfiez-vous de vos impulsions émotives",
        excerpt: "Avec le coronavirus et les turbulences du marché qui font peur, certains investisseurs sont bien inquiets.",
        slug: "mefiez-vous-impulsions-emotives",
        category: "Investissement"
    },
    {
        title: "Ne perdez pas votre autonomie financière!",
        excerpt: "La principale richesse que nous avons est la santé! Tous s'entendent pour dire que sans la santé, très peu des projets que nous chérissons ne pourront se réaliser.",
        slug: "autonomie-financiere",
        category: "Planification"
    },
    {
        title: "Comment trouver un bon conseiller financier",
        excerpt: "Il y a environ 100 000 conseillers financiers au Canada, répartis à travers les institutions financières, les assureurs et les courtiers indépendants.",
        slug: "trouver-bon-conseiller",
        category: "Conseil"
    },
    {
        title: "Vous nommez votre enfant mineur bénéficiaire de vos assurances? Attention!",
        excerpt: "Vous n'êtes pas sans savoir que les relations de couple ne sont pas éternelles, mais que vous serez parent toute votre vie...",
        slug: "beneficiaire-mineur-assurances",
        category: "Assurance"
    }
];

export default function BloguePage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-soft-gray py-24 sm:py-32 overflow-hidden border-b border-slate-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">Blogue</h1>
                    <p className="mt-6 text-xl leading-8 text-slate-600 max-w-2xl mx-auto">
                        Articles récents et conseils d&apos;experts pour éclairer vos décisions financières.
                    </p>
                </div>
            </section>

            {/* Grid Section */}
            <section className="py-24 sm:py-32 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.slug} className="flex max-w-xl flex-col items-start justify-between bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all group">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <span className="relative z-10 rounded-full bg-primary/10 px-3 py-1.5 font-bold text-primary">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="group relative mt-6">
                                    <h3 className="text-xl font-bold leading-relaxed text-slate-900 group-hover:text-primary transition-colors">
                                        <Link href={`/blogue/${post.slug}`}>
                                            <span className="absolute inset-0"></span>
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                                    Lire la suite
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
