import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | PLH Finance",
    description: "Contactez Philippe Leblanc-Hamel, Planificateur Financier.",
};

export default function ContactPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-soft-gray py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-soft-gray to-soft-gray"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-[#0e161a] sm:text-6xl">Contact</h1>
                        <p className="mt-6 text-lg leading-8 text-text-muted">
                            Vos meilleurs lendemains peuvent commencer dès aujourd&apos;hui!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">

                        {/* Left: Intro & Contact Info */}
                        <div className="flex flex-col gap-12">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-[#0e161a] sm:text-4xl mb-6">
                                    Je suis là pour vous aider à réaliser vos rêves !
                                </h2>
                                <div className="space-y-6 text-lg leading-relaxed text-slate-600">
                                    <p>
                                        Je suis conscient des défis financiers qui viennent entraver l&apos;atteinte de vos objectifs et je suis disposé à vous accompagner et optimiser vos ressources actuelles. Je suis d&apos;avis que la réussite financière est à votre portée.
                                    </p>
                                    <p>
                                        Mon approche consiste à vous accompagner tout au long de votre parcours vers le succès financier. Peu importe vos objectifs, il est important de prendre en main vos finances dès maintenant.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10"></div>
                                <h3 className="text-2xl font-bold text-[#0e161a] mb-8 pb-4 border-b border-slate-200">
                                    Coordonnées
                                </h3>

                                <dl className="space-y-6 text-base leading-7 text-slate-600">
                                    <div className="flex gap-x-4 items-start">
                                        <dt className="flex-none mt-0.5">
                                            <span className="material-symbols-outlined text-primary text-2xl">account_circle</span>
                                        </dt>
                                        <dd className="font-bold text-[#0e161a] text-lg">
                                            Philippe Leblanc-Hamel, Pl. Fin.
                                        </dd>
                                    </div>
                                    <div className="flex gap-x-4 items-start">
                                        <dt className="flex-none mt-0.5">
                                            <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                                        </dt>
                                        <dd>
                                            202-173 rue Denison Est<br />
                                            Granby, Qc, J2G 0C7
                                        </dd>
                                    </div>
                                    <div className="flex gap-x-4 items-center">
                                        <dt className="flex-none">
                                            <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                                        </dt>
                                        <dd>
                                            <a className="hover:text-primary font-medium transition-colors" href="mailto:info@plhfinance.com">
                                                info@plhfinance.com
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="flex gap-x-4 items-center">
                                        <dt className="flex-none">
                                            <span className="material-symbols-outlined text-primary text-2xl">call</span>
                                        </dt>
                                        <dd>
                                            <a className="hover:text-primary font-medium transition-colors" href="tel:450-521-0804">
                                                450-521-0804
                                            </a>
                                        </dd>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-slate-200 text-sm font-medium italic text-slate-500">
                                        * Les rencontres peuvent avoir lieu virtuellement ou au bureau de Granby. N&apos;hésitez pas à demander!
                                    </div>
                                </dl>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="bg-white rounded-[40px] p-8 sm:p-12 border border-slate-100 shadow-2xl relative overflow-hidden h-fit">
                            <div className="absolute top-0 right-0 w-[40%] h-[120%] bg-primary/5 -skew-x-12 transform translate-x-1/4 pointer-events-none"></div>

                            <h3 className="text-2xl font-bold text-[#0e161a] mb-2 relative z-10">
                                Écrivez-moi directement
                            </h3>
                            <p className="text-slate-500 mb-8 relative z-10">Je vous répondrai dans les plus brefs délais.</p>

                            {/* Formulaire déconnecté de FormSubmit - Aucune action d'envoi */}
                            <form action="#" className="space-y-6 relative z-10">

                                {/* Form Subject */}
                                <input type="hidden" name="_subject" value="Nouveau message du site web PLH Finance!" />

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-bold leading-6 text-slate-700">Prénom</label>
                                        <div className="mt-2.5">
                                            <input type="text" name="Prénom" id="first-name" required className="block w-full rounded-xl border-0 px-4 py-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50 hover:bg-white transition-colors" placeholder="Jean" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-bold leading-6 text-slate-700">Nom</label>
                                        <div className="mt-2.5">
                                            <input type="text" name="Nom" id="last-name" required className="block w-full rounded-xl border-0 px-4 py-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50 hover:bg-white transition-colors" placeholder="Tremblay" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold leading-6 text-slate-700">Courriel</label>
                                    <div className="mt-2.5">
                                        <input type="email" name="Courriel" id="email" required className="block w-full rounded-xl border-0 px-4 py-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50 hover:bg-white transition-colors" placeholder="jean.tremblay@exemple.com" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold leading-6 text-slate-700">Téléphone (Optionnel)</label>
                                    <div className="mt-2.5">
                                        <input type="tel" name="Téléphone" id="phone" className="block w-full rounded-xl border-0 px-4 py-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50 hover:bg-white transition-colors" placeholder="(555) 555-5555" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold leading-6 text-slate-700">Votre message</label>
                                    <div className="mt-2.5">
                                        <textarea name="Message" id="message" rows={4} required className="block w-full rounded-xl border-0 px-4 py-3.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50 hover:bg-white transition-colors resize-none" placeholder="Comment puis-je vous aider?"></textarea>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <button type="button" className="w-full flex justify-center items-center gap-2 rounded-xl bg-primary px-8 py-4 text-center text-sm font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 hover:scale-[1.02]">
                                        Le formulaire est présentement désactivé
                                        <span className="material-symbols-outlined text-lg">block</span>
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
