import ServiceTemplate from "@/components/ServiceTemplate";

export default function EntrepreneurPage() {
  const pageData = {
    title: "Entrepreneur / Travailleur autonome",
    subtitle: "Pourquoi vous limiter à une seule option? Planifiez et optimisez vos ressources financières.",
    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",

    list1Title: "Comment?",
    list1Items: [
      { title: "Gestion du temps", text: "Consacrez moins de temps à vos finances et plus de temps à votre famille, pour vous-même ou votre entreprise" },
      { title: "Retraite & Épargne", text: "Constituez un fond pour votre retraite" },
      { title: "Protection", text: "Protégez votre entreprise et votre patrimoine familial" },
      { title: "Planification", text: "Réalisez un plan d'action sur mesure pour vous en profitant de notre accès à 16 assureurs et 20 firmes de placements" },
      { title: "Réseau d'experts", text: "Assurez-vous d'avoir un lien entre les différents professionnels qui vous entourent" }
    ],

    list2Title: "Assurez-vous :",
    list2Items: [
      "De vous entourer de professionnels compétents",
      "De budgéter adéquatement",
      "De choisir le bon type d'entreprise (entreprise individuelle, incorporation, etc.)",
      "D'avoir vos numéros de taxes et de facturer celles-ci si vos revenus dépassent 30 000 $",
      "De prévoir l'imprévisible en gardant de l'argent de côté et en consacrant du temps au développement des affaires, surtout lorsque vous n'en avez pas de besoin"
    ],

    contentTitle: "Être travailleur autonome requiert une bonne dose d'organisation dans différentes sphères du domaine des affaires.",
    paragraphs: [
      "Vous travaillez fort pour réaliser votre vision et à chaque étape du développement de votre entreprise, du démarrage jusqu'à votre retraite. Solutions financières Philippe Leblanc-Hamel vous accompagnera pour optimiser vos finances.",
      "Je crois que plus les entrepreneurs connaissent et maîtrisent leurs chiffres, plus ils seront en mesure de faire avancer leur entreprise dans la bonne direction. Mon but est de vous accompagner, vous former et surtout, de vous faciliter la vie afin de vous laisser du temps libre pour relaxer ou continuer à travailler sur ce que vous avez de plus cher."
    ],

    testimonialQuote: "Ma plus grande crainte en tant que travailleur autonome était de me blesser. Ce fût le cas en 2016 avec un arrêt de travail de 8 mois. Heureusement, j'avais rencontré Philippe quelques mois plus tôt. En révisant mes assurances salaire, nous avions constaté que j'étais mal assuré. Grâce à son intervention, j'ai eu l'esprit tranquille durant ma convalescence.",
    testimonialAuthor: "Benoît Racine",
    testimonialRole: "Massothérapeute et propriétaire du centre O'Kiné massothérapie"
  };

  return <ServiceTemplate data={pageData} />;
}
