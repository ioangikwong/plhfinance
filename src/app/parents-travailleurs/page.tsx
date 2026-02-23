import ServiceTemplate from "@/components/ServiceTemplate";

export default function ParentsTravailleursPage() {
  const pageData = {
    title: "Parents travailleurs",
    subtitle: "Vous voulez faire des choix judicieux pour maximiser chaque dollar de votre budget?",
    heroImage: "https://images.unsplash.com/photo-1536640712-4d4c36ef0e46?q=80&w=2070&auto=format&fit=crop",

    contentTitle: "Un suivi et un accompagnement personnalisé en tant que parent",
    paragraphs: [
      "Un suivi et un accompagnement personnalisé vous assurent du bon fonctionnement de vos stratégies et de l'atteinte de vos objectifs en tant que parent. L'expérience Solutions financières PLH vise à simplifier les choses pour vous.",
      "Nous vous offrons une évaluation gratuite de votre situation financière. Si les solutions proposées vous conviennent, vous pourrez souscrire aux produits recommandés via Solutions financières Philippe Leblanc-Hamel, au juste prix."
    ],

    list1Title: "Comment?",
    list1Items: [
      { title: "Études", text: "Bénéficiez des subventions de 20 à 40% de votre apport pour les études de vos enfants." },
      { title: "Protection", text: "Protégez votre famille et sécurisez votre avenir financier en cas d'imprévu." },
      { title: "Plan d'action", text: "Réalisez un plan d'action sur mesure adapté à la réalité et aux défis de votre famille." },
      { title: "Accès total", text: "Profitez d'un accès simplifié à 16 assureurs et 20 firmes de fonds pour vos placements." },
      { title: "Tranquilité", text: "Consacrez votre temps libre à votre famille plutôt qu'à la gestion financière complexe." }
    ],

    list2Title: "Pourquoi?",
    list2Items: [
      "Ayez la possibilité de consacrer votre temps et votre argent à votre famille.",
      "Évitez de vous préoccuper de vos décisions financières complexes."
    ],

    testimonialQuote: "Un service humain, rapide, efficace et courtois, qui nous a aidés à gérer nos finances en toute confiance après de mauvaises expériences bancaires.",
    testimonialAuthor: "Ronald Mckay et Eve Morrissette",
    testimonialRole: "Parents travailleurs"
  };

  return <ServiceTemplate data={pageData} />;
}
