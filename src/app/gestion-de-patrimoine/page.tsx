import ServiceTemplate from "@/components/ServiceTemplate";

export default function GestionDePatrimoinePage() {
  const pageData = {
    title: "Gestion de patrimoine",
    subtitle: "Vos finances sont-elles devenues compliquées? C'est maintenant que la gestion de patrimoine entre en jeu.",
    heroImage: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2070&auto=format&fit=crop",

    contentTitle: "La gestion de patrimoine inclut la gestion des placements et englobe l'ensemble de votre situation financière.",
    paragraphs: [
      "La gestion de patrimoine est souvent confondue, à tort, avec la gestion de placements. Elle réunit en un seul et même plan de patrimoine global les différentes compétences et solutions dont vous avez besoin.",
      "La gestion de patrimoine adopte une vision d'ensemble et se penche sur vos diverses préoccupations financières à chaque étape de votre vie.",
      "Une simple rencontre avec moi vous aidera à concrétiser vos projets de voyage ou de retraite, en plus de protéger votre famille des éléments imprévisibles de la vie."
    ],

    list1Title: "Notamment :",
    list1Items: [
      { title: "Investissement", text: "Optimisation et gestion stratégique de vos placements et de vos actifs disponibles." },
      { title: "Planification", text: "Élaboration d'une planification financière intégrée à votre vision globale." },
      { title: "Fiscalité", text: "Mise en place de stratégies de réduction et d'optimisation de vos impôts." },
      { title: "Préservation", text: "Protection et préservation active de votre patrimoine familial au quotidien." },
      { title: "Succession", text: "Préparation et planification successorale en vue des générations à venir." }
    ],

    list2Title: "Pourquoi?",
    list2Items: [
      "Une approche de gestion intégrée de l'ensemble de vos affaires.",
      "Un conseiller principal qui travaille en collaboration avec des professionnels d'autres secteurs.",
      "Maximiser chacun des aspects de votre portefeuille global."
    ]
  };

  return <ServiceTemplate data={pageData} />;
}
