import Link from "next/link";
import { ReactNode } from "react";

export interface ServiceData {
    title: string;
    subtitle: string;
    heroImage: string;

    contentTitle?: string;
    paragraphs: ReactNode[];

    list1Title?: string;
    list1Items?: ({ title: string; text: string } | string)[];

    list2Title?: string;
    list2Items?: string[];

    testimonialQuote?: string;
    testimonialAuthor?: string;
    testimonialRole?: string;
}

export default function ServiceTemplate({ data }: { data: ServiceData }) {
    const icons = ["schedule", "savings", "verified_user", "map", "hub", "business_center"];

    return (
        <main className="flex flex-col font-display bg-white dark:bg-background-dark">
            {/* 1. HERO - ABSTRACT STITCH STYLE */}
            <section className="relative w-full py-24 md:py-32 lg:py-40 px-6 lg:px-40 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0e161a] via-[#1a3d52] to-primary">
                {/* Abstract background elements */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {/* Subtle noise grid pattern overlay if desired, or just solid shapes */}
                    <div className="absolute top-0 right-0 w-[60%] h-[120%] bg-primary/20 blur-[100px] rounded-full translate-x-1/4 -translate-y-1/4"></div>
                    <div className="absolute bottom-0 left-0 w-[50%] h-[100%] bg-[#64b5f6]/20 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4"></div>
                    <div className="absolute inset-0 bg-black/30 dark:bg-black/50 z-10 mix-blend-multiply"></div>
                </div>

                <div className="relative z-20 max-w-[1280px] w-full mx-auto flex flex-col items-center text-center text-white mt-4">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight drop-shadow-md">
                            {data.title}
                        </h1>
                        {data.subtitle && (
                            <p className="text-lg md:text-2xl font-light opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                                {data.subtitle}
                            </p>
                        )}
                        <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-white text-primary hover:bg-gray-100 px-10 py-5 rounded-full text-lg font-extrabold transition-all shadow-xl shadow-black/20 mx-auto group">
                            Évaluation gratuite
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">trending_flat</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. INTRO SECTION */}
            <section className="py-24 md:py-32 px-6 lg:px-40 bg-white dark:bg-background-dark">
                <div className="max-w-[1280px] w-full mx-auto flex flex-col items-center text-center">
                    <div className="max-w-4xl">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                            Notre Mission
                        </span>
                        {data.contentTitle && (
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug text-[#1a1a1a] dark:text-white text-balance">
                                {data.contentTitle}
                            </h2>
                        )}
                        <div className="h-1.5 w-24 bg-primary/20 rounded-full mx-auto mb-8"></div>

                        <div className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed font-light space-y-6 text-balance">
                            {data.paragraphs.map((p, i) => (
                                <div key={i}>{p}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. BENEFITS GRID (Comment?) */}
            {data.list1Title && data.list1Items && data.list1Items.length > 0 && (
                <section className="py-24 px-6 lg:px-40 bg-white dark:bg-background-dark">
                    <div className="max-w-[1280px] mx-auto w-full">
                        <div className="flex items-center gap-4 mb-16">
                            <h3 className="text-4xl font-black text-[#1a1a1a] dark:text-white">{data.list1Title}</h3>
                            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></div>
                        </div>

                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${data.list1Items.length === 3 ? "lg:grid-cols-3" :
                                data.list1Items.length === 4 ? "lg:grid-cols-4" :
                                    "lg:grid-cols-5"
                            }`}>
                            {data.list1Items.map((item, i) => {
                                const isString = typeof item === "string";
                                const title = isString ? null : item.title;
                                const text = isString ? item : item.text;

                                return (
                                    <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:shadow-primary/10 transition-all group flex flex-col items-center text-center">
                                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                                            <span className="material-symbols-outlined text-2xl text-primary group-hover:text-white">
                                                {icons[i % icons.length]}
                                            </span>
                                        </div>
                                        {title && <h4 className="font-bold text-lg mb-3 text-[#1a1a1a] dark:text-white">{title}</h4>}
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-sm">
                                            {text}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* 4. CHECKLIST SECTION (Assurez-vous :) */}
            {data.list2Title && data.list2Items && data.list2Items.length > 0 && (
                <section className="py-24 px-6 lg:px-40 bg-white dark:bg-background-dark relative">
                    <div className="max-w-[1280px] mx-auto w-full relative z-10">
                        <div className="bg-[#1a1a1a] dark:bg-[#0e161a] rounded-[40px] text-white overflow-hidden relative p-10 md:p-16 lg:p-20 shadow-2xl border border-slate-800 flex flex-col md:flex-row items-center gap-16">
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 transform translate-x-1/4"></div>
                            <div className="w-full md:w-1/2 relative z-10">
                                <h3 className="text-4xl font-bold mb-8 text-balance leading-tight">{data.list2Title}</h3>
                                <div className="h-1.5 w-24 bg-primary rounded-full mb-12"></div>

                                <ul className="space-y-6">
                                    {data.list2Items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-5">
                                            <span className="material-symbols-outlined text-primary text-3xl shrink-0">check_circle</span>
                                            <div className="pt-0.5">
                                                <span className="text-xl font-medium leading-snug">{item}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 mt-10 md:mt-0 relative z-10">
                                <div className="bg-white/5 p-2 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl">
                                    <img
                                        alt="Assurez-vous check"
                                        className="rounded-2xl w-full h-[500px] object-cover grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 5. TESTIMONIAL */}
            {data.testimonialQuote && (
                <section className="py-32 px-6 lg:px-40 bg-white dark:bg-background-dark">
                    <div className="max-w-[1280px] w-full mx-auto flex flex-col items-center text-center">
                        <div className="max-w-4xl">
                            <div className="flex justify-center gap-1 mb-10">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="material-symbols-outlined text-[#facc15] fill-[1] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                ))}
                            </div>
                            <blockquote className="text-2xl md:text-3xl font-medium italic text-slate-700 dark:text-slate-300 leading-relaxed mb-10 text-balance">
                                "{data.testimonialQuote}"
                            </blockquote>
                            <cite className="not-italic flex flex-col items-center">
                                <span className="font-bold text-xl text-[#1a1a1a] dark:text-white">{data.testimonialAuthor}</span>
                                {data.testimonialRole && (
                                    <span className="text-primary text-sm tracking-widest uppercase mt-2 font-bold">
                                        {data.testimonialRole}
                                    </span>
                                )}
                            </cite>
                        </div>
                    </div>
                </section>
            )}

            {/* 6. FINAL CTA */}
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
                                Prenez le contrôle dès aujourd'hui et donnez à vos projets l'élan qu'ils méritent. Aucun engagement requis.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                                <Link href="/contact" className="w-full sm:w-auto bg-[#1a1a1a] text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 px-10 py-5 rounded-full text-lg font-bold transition-all shadow-xl flex items-center justify-center gap-3 group">
                                    Prêt à prendre vos finances en main?
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
