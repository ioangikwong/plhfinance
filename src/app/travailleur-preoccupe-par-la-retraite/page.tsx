import ServiceTemplate from "@/components/ServiceTemplate";

export default function RetraitePage() {
  const pageData = {
    title: "Travailleur préoccupé par la retraite",
    subtitle: "Vous voulez savoir quel rythme de vie vous aurez à la retraite?",
    heroImage: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=2071&auto=format&fit=crop",

    contentTitle: "Un suivi et un accompagnement personnalisés",
    paragraphs: [
      "Un suivi et un accompagnement personnalisés vous assurent du bon fonctionnement de vos stratégies et de l'atteinte de vos objectifs. L'expérience Solutions financières PLH vise à simplifier les choses pour vous dans la préparation de ce nouveau chapitre de vie."
    ],

    list1Title: "Pourquoi planifier?",
    list1Items: [
      { title: "Réalisation de projets", text: "Réaliser les projets qui vous tiennent à cœur" },
      { title: "Âge idéal", text: "Déterminer l'âge idéal de votre retraite" },
      { title: "Valeur des prestations", text: "Connaître la valeur des prestations des régimes publics et privés" },
      { title: "Optimisation de gestion", text: "Apprendre et optimiser sur les options de gestion de votre argent" }
    ],

    list2Title: "Comment s'y prendre?",
    list2Items: [
      "Construire un plan d'action pour la retraite sur mesure.",
      "Profiter d'un accès simplifié à 16 assureurs et 20 firmes de placement en fonds mutuels."
    ],

    testimonialQuote: "Un suivi adéquat, un plan d'épargne et une réorganisation des placements qui nous permettent d'atteindre nos objectifs grâce à Philippe, une personne dévouée, fiable et attentionnée.",
    testimonialAuthor: "Serge Laurin et Nathalie Desautels",
    testimonialRole: "Nouveaux retraités"
  };

  return <ServiceTemplate data={pageData} />;
}
