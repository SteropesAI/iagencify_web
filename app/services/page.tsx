import React from 'react';
import Link from 'next/link';
import { ArrowRight, BrainCircuit, Paintbrush, Megaphone, PenTool, Laptop, Video, BarChart3, Image as ImageIcon, Users, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Nos Services | IAgencify',
  description: 'Découvrez nos services de communication augmentée par l\'IA pour transformer votre stratégie marketing',
};

// Données des services
const services = [
  {
    id: 'identite-visuelle',
    title: 'Identité visuelle',
    icon: <Paintbrush className="w-12 h-12 text-blue-400" />,
    description: 'Création d\'identités de marque uniques et mémorables',
    details: 'Notre approche combines créativité humaine et puissance IA pour développer des identités visuelles distinctives qui reflètent parfaitement les valeurs et la personnalité de votre marque.',
    features: [
      'Création de logos et systèmes visuels complets',
      'Développement de chartes graphiques',
      'Design de papeterie d\'entreprise',
      'Création d\'éléments graphiques distinctifs',
      'Livraison de tous les formats nécessaires'
    ],
    cta: 'Créer votre identité'
  },
  {
    id: 'marketing-digital',
    title: 'Marketing digital',
    icon: <Megaphone className="w-12 h-12 text-blue-400" />,
    description: 'Stratégies marketing optimisées par l\'IA pour maximiser votre ROI',
    details: 'Nos Neural Creative Officers développent des stratégies cross-canal appuyées par l\'analyse de données pour atteindre vos objectifs business avec précision et efficacité.',
    features: [
      'Stratégie marketing personnalisée',
      'Création de campagnes publicitaires',
      'Optimisation continue basée sur les données',
      'Rapports de performance détaillés',
      'Adaptation multi-plateformes'
    ],
    cta: 'Booster votre visibilité'
  },
  {
    id: 'contenu-redactionnel',
    title: 'Contenu rédactionnel',
    icon: <PenTool className="w-12 h-12 text-blue-400" />,
    description: 'Création de contenus percutants et optimisés pour chaque canal',
    details: 'Notre approche associe l\'IA générative et l\'expertise éditoriale pour produire des contenus engageants, SEO-friendly et parfaitement alignés avec votre ton de marque.',
    features: [
      'Rédaction d\'articles de blog et livres blancs',
      'Copywriting pour sites web et landing pages',
      'Création de contenus pour réseaux sociaux',
      'Scripts pour vidéos et podcasts',
      'Newsletters et emails marketing'
    ],
    cta: 'Créer du contenu'
  },
  {
    id: 'sites-web',
    title: 'Sites web et applications',
    icon: <Laptop className="w-12 h-12 text-blue-400" />,
    description: 'Conception de plateformes digitales performantes et innovantes',
    details: 'Nous concevons des sites web et applications sur mesure alliant design attractif, expérience utilisateur intuitive et performances techniques optimales.',
    features: [
      'Sites vitrine et e-commerce',
      'Applications web et mobiles',
      'Optimisation UX et UI',
      'Référencement SEO intégré',
      'Maintenance et évolution'
    ],
    cta: 'Développer votre plateforme'
  },
  {
    id: 'video-animation',
    title: 'Vidéo et animation',
    icon: <Video className="w-12 h-12 text-blue-400" />,
    description: 'Production vidéo propulsée par l\'IA pour tous supports',
    details: 'Notre studio créatif utilise les dernières technologies IA pour produire rapidement des contenus vidéo de qualité professionnelle à moindre coût.',
    features: [
      'Videos promotionnelles et explicatives',
      'Animations et motion design',
      'Vidéos pour réseaux sociaux',
      'Publicités vidéo',
      'Formats adaptés à chaque plateforme'
    ],
    cta: 'Créer votre vidéo'
  },
  {
    id: 'strategie-reseaux',
    title: 'Stratégie réseaux sociaux',
    icon: <Users className="w-12 h-12 text-blue-400" />,
    description: 'Gestion de communauté et stratégie sociale optimisée par IA',
    details: 'Nous concevons et déployons des stratégies social media performantes, basées sur l\'analyse des tendances et l\'automatisation intelligente des contenus.',
    features: [
      'Audit et stratégie sociale',
      'Création de calendriers éditoriaux',
      'Production de contenus originaux',
      'Community management',
      'Analyse des performances'
    ],
    cta: 'Développer votre présence'
  },
  {
    id: 'analyse-data',
    title: 'Analyse et intelligence marketing',
    icon: <BarChart3 className="w-12 h-12 text-blue-400" />,
    description: 'Exploitation des données pour des insights marketing précieux',
    details: 'Notre équipe combine IA et expertise humaine pour transformer vos données en insights stratégiques et recommandations actionnables.',
    features: [
      'Analyse des données marketing',
      'Étude comportementale des consommateurs',
      'Optimisation du parcours client',
      'Reporting et tableaux de bord personnalisés',
      'Prédictions et tendances'
    ],
    cta: 'Analyser vos données'
  },
  {
    id: 'design-creatif',
    title: 'Design créatif',
    icon: <ImageIcon className="w-12 h-12 text-blue-400" />,
    description: 'Création visuelle impactante pour tous supports',
    details: 'Nos designers augmentés par l\'IA produisent rapidement des visuels percutants adaptés à tous vos besoins de communication, du print au digital.',
    features: [
      'Design pour réseaux sociaux',
      'Affiches et supports publicitaires',
      'Illustrations et infographies',
      'Packaging et PLV',
      'Bannières web et newsletters'
    ],
    cta: 'Créer vos visuels'
  }
];

// L'approche IAgencify
const approach = [
  {
    title: 'Briefing et analyse',
    description: 'Notre Neural Creative Officer étudie en profondeur vos besoins, votre marché et vos objectifs pour définir précisément la direction créative.'
  },
  {
    title: 'Génération IA',
    description: 'Nos modèles d\'IA entraînés sur des millions de données marketing génèrent rapidement plusieurs propositions créatives.'
  },
  {
    title: 'Curation humaine',
    description: 'Nos experts affinent et personnalisent les propositions de l\'IA pour garantir leur pertinence et leur unicité.'
  },
  {
    title: 'Présentation client',
    description: 'Vous recevez plusieurs options créatives accompagnées d\'explications stratégiques dans les délais convenus.'
  },
  {
    title: 'Affinement et finalisation',
    description: 'Après vos retours, nous réalisons les ajustements nécessaires et finalisons les livrables dans tous les formats requis.'
  }
];

// Avantages de notre approche
const benefits = [
  {
    title: 'Rapidité exceptionnelle',
    description: 'Des délais de livraison jusqu\'à 10 fois plus rapides que les agences traditionnelles.'
  },
  {
    title: 'Créativité augmentée',
    description: 'Exploration de pistes créatives plus nombreuses et diversifiées grâce à l\'IA.'
  },
  {
    title: 'Tarifs compétitifs',
    description: 'Réduction significative des coûts grâce à l\'automatisation des tâches chronophages.'
  },
  {
    title: 'Expertise combinée',
    description: 'Le meilleur de l\'IA et de l\'expertise humaine pour des résultats optimaux.'
  },
  {
    title: 'Adaptation continue',
    description: 'Amélioration constante des créations grâce à l\'apprentissage machine.'
  },
  {
    title: 'Satisfaction garantie',
    description: 'Processus itératif avec cycles de révision pour garantir votre satisfaction.'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white pt-24">
      {/* Hero section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B4D7A]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B4D7A]/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1E90FF] to-[#C0C0C0]">
              Nos services
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg">
              Des solutions de communication augmentées par l'IA,
              alliant créativité, rapidité et efficacité.
            </p>
          </div>
          
          {/* Intro IA + Créativité */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
            <div className="flex-1">
              <BrainCircuit className="w-16 h-16 text-blue-400 mb-6" />
              <h2 className="text-3xl font-bold mb-4">L'IA au service de votre communication</h2>
              <p className="text-gray-400 mb-6">
                IAgencify révolutionne l'approche traditionnelle des agences en combinant l'intelligence artificielle 
                avec l'expertise créative humaine. Cette synergie nous permet de produire des contenus de haute qualité, 
                en un temps record et à des tarifs compétitifs.
              </p>
              <p className="text-gray-400">
                Chaque projet est supervisé par un Neural Creative Officer qui garantit la pertinence stratégique 
                et la qualité de chaque création, tout en exploitant la puissance des algorithmes les plus avancés.
              </p>
            </div>
            
            <div className="flex-1 bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-4">Notre promesse</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-1" />
                  <span className="text-gray-300">Des créations de haute qualité, adaptées à vos objectifs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-1" />
                  <span className="text-gray-300">Des délais de livraison ultra-rapides, à partir de 24h</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-1" />
                  <span className="text-gray-300">Des tarifs jusqu'à 70% inférieurs aux agences traditionnelles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-1" />
                  <span className="text-gray-300">Un accompagnement personnalisé par des experts en communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-1" />
                  <span className="text-gray-300">Des créations originales et adaptées à votre identité</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#0B4D7A] to-[#1E90FF] hover:opacity-90 transition-all"
                >
                  Discuter de votre projet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Liste des services */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-14 bg-clip-text text-transparent bg-gradient-to-r from-[#1E90FF] to-[#C0C0C0]">
              Nos expertises
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-lg text-blue-300 mb-4">{service.description}</p>
                  <p className="text-gray-400 mb-6">{service.details}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={`/contact?service=${service.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    {service.cta}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Notre approche */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1E90FF] to-[#C0C0C0]">
              Notre approche
            </h2>
            <p className="max-w-2xl mx-auto text-center text-gray-400 mb-14">
              Un processus transparent et efficace qui combine intelligence artificielle et expertise humaine
              pour des résultats optimaux.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {approach.map((step, index) => (
                <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 relative">
                  {/* Numéro d'étape */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  
                  {/* Contenu */}
                  <div className="pt-4">
                    <h3 className="text-lg font-bold mb-2 text-white text-center">{step.title}</h3>
                    <p className="text-gray-400 text-center text-sm">{step.description}</p>
                  </div>
                  
                  {/* Ligne de connexion (sauf pour le dernier) */}
                  {index < approach.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-500/50"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Avantages */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1E90FF] to-[#C0C0C0]">
              Les avantages de notre approche
            </h2>
            <p className="max-w-2xl mx-auto text-center text-gray-400 mb-14">
              Découvrez pourquoi notre modèle révolutionne l'industrie de la communication
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-20 mb-10">
            <h2 className="text-2xl font-bold mb-4 text-white">Prêt à transformer votre communication ?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Discutons de vos objectifs et de la façon dont notre approche IA peut vous aider à les atteindre.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#0B4D7A] to-[#1E90FF] hover:opacity-90 transition-all"
            >
              Démarrer un projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}