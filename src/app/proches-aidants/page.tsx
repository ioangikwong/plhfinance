import ServiceTemplate from "@/components/ServiceTemplate";

export default function ProchesAidantsPage() {
  const pageData = {
    title: "Proches aidants",
    subtitle: "Si vous aidez un proche qui perd ses capacités et que vous ne savez pas par où commencer, contactez-nous.",
    heroImage: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2070&auto=format&fit=crop",

    contentTitle: "Accompagnement professionnel légal et fiscal",
    paragraphs: [
      "Vous souhaitez être accompagné par un professionnel qui vous guidera au niveau légal et fiscal pour les démarches envers votre proche et les autres membres de la famille? Un planificateur financier pour proche aidant est ce qu'il vous faut.",
      "Le proche aidant est souvent dépassé émotivement et doit s'occuper de nombreuses tâches administratives. Un conseiller peut vous guider et vous rassurer à travers ces démarches importantes.",
      "Des ressources supplémentaires existent comme la Maison soutien aux aidants et Québec appui proche aidants. Nous sommes là pour vous orienter."
    ],

    list1Title: "Les étapes de notre accompagnement",
    list1Items: [
      { title: "Inventaire complet", text: "Inventaire des biens, documents fiscaux et légaux de la personne" },
      { title: "Analyse experte", text: "Compréhension de la portée légale des documents et détermination des priorités" },
      { title: "Soutien continu", text: "Accompagnement lors des contacts avec les professionnels et instances gouvernementales" }
    ],

    list2Title: "Questions fréquentes",
    list2Items: [
      "Par où commencer et qui consulter?",
      "Mandat de protection, procuration : comment ça fonctionne?",
      "Que faire avec les assurances et investissements du proche?",
      "Que faire avec l'entreprise ou immeuble à revenus du proche aidé?",
      "Comment informer les autres membres de la famille?",
      "Quels sont les crédits d'impôts et aides financières?"
    ]
  };

  return <ServiceTemplate data={pageData} />;
}
