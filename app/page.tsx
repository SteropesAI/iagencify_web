import Image from 'next/image'
import { Brain, Clock, Target, Rocket, ChartBar, Coins, Share2, X, Store,Briefcase,ShoppingCart, MapPin, Heart, Palette, Check, User, LineChart, TrendingUp, Sparkles } from "lucide-react";

export default function Home() {
  const avantages = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Des contenus en un temps record",
      description: "Visuels, textes et vidéos prêts en quelques heures."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Une communication 100% personnalisée",
      description: "Adaptée à votre identité et à votre public cible."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Une évolutivité sans limite",
      description: "De la startup aux grandes entreprises, nous nous adaptons."
    },
    {
      icon: <ChartBar className="w-8 h-8" />,
      title: "Un accompagnement stratégique",
      description: "Nos Neural Creative Officers optimisent vos campagnes."
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Des coûts optimisés",
      description: "Qualité agence premium, tarifs flexibles et compétitifs."
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Une approche omnicanale",
      description: "Réseaux sociaux, print, web, publicités vidéo et bien plus."
    }
  ];

  const cibles = [
    {
      titre: "Artisans et commerçants locaux",
      icon: <Store className="w-6 h-6" />,
      description: "Boostez votre visibilité locale et attirez plus de clients sans effort ni gros budget."
    },
    {
      titre: "Professions libérales et freelances",
      icon: <Briefcase className="w-6 h-6" />,
      description: "Gagnez des clients avec un marketing simple et efficace, à un prix abordable."
    },
    {
      titre: "Petites entreprises e-commerce",
      icon: <ShoppingCart className="w-6 h-6" />,
      description: "Augmentez vos ventes en ligne avec des campagnes automatisées et économiques."
    },
    {
      titre: "Prestataires de services locaux",
      icon: <MapPin className="w-6 h-6" />,
      description: "Développez votre clientèle près de chez vous grâce à une présence digitale optimisée."
    },
    {
      titre: "Associations et micro-entreprises",
      icon: <Heart className="w-6 h-6" />,
      description: "Faites connaître votre cause ou projet avec un marketing accessible et rapide."
    },
    {
      titre: "Agences & marques",
      icon: <Palette className="w-6 h-6" />,
      description: "Pour renforcer ou externaliser une partie de la création."
    },
    {
      titre: "Équipes marketing & communication",
      icon: <LineChart className="w-6 h-6" />,
      description: "Pour booster leur impact avec des outils IA."
    },
    {
      titre: "Entreprises en forte croissance",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Qui veulent scaler rapidement et efficacement."
    }
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section avec background et overlay */}
      <section className="relative h-screen flex items-end justify-center overflow-hidden">
        {/* Image de fond */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/ui/heroB.png"
              alt="AI Background"
              fill
              priority
              className="object-cover"
            />
            {/* Overlay pour améliorer la lisibilité */}
            
          </div>

        {/* Contenu Hero */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block mb-6 p-2 bg-black/30 backdrop-blur-sm rounded-full border border-blue-800/30">
            <Sparkles className="w-6 h-6 text-blue-400 inline mr-2" />
            <span className="text-blue-300">La première agence IA en France</span>
          </div>
          <div className="relative text-center mt-5 mb-12 text-5xl font-medium">
          <h1 className="relative text-white pb-3 leading-[65px] z-10 isolate">IAgencify - &quot;Créer Demain&quot;</h1> 
          </div>          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            La première agence de communication augmentée par l&apos;IA, conçue pour les entreprises en quête de créativité, rapidité et innovation.
          </p>
          

          {/* Statistiques */}
          {/*<div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400">30+</div>
              <div className="text-gray-400">Projets en cours</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400">48h</div>
              <div className="text-gray-400">Délai moyen</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400">100%</div>
              <div className="text-gray-400">Clients satisfaits</div>
            </div>
          </div>
          */}
        </div>
      </section>

      {/* Section IA + Humain avec effet de fond subtil */}
      <section className="relative py-24 overflow-hidden">
        {/* Fond avec effet de gradient et formes */}
        <div className="absolute inset-0 bg-[#0A0A0F]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B4D7A]/10 to-transparent"></div>
          {/* Cercles décoratifs flous */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#0B4D7A]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#0B4D7A]/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Partie gauche avec les icônes */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                {/* Cercle IA */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#0B4D7A] to-[#1E90FF] flex items-center justify-center">
                  <Brain className="w-16 h-16 text-white" />
                </div>
                {/* Ligne de connexion */}
                <div className="absolute top-1/2 left-full w-12 h-0.5 bg-gradient-to-r from-[#1E90FF] to-[#C0C0C0]"></div>
                {/* Cercle Humain */}
                <div className="absolute -right-24 top-0 w-32 h-32 rounded-full bg-gradient-to-r from-[#717785] to-[#C0C0C0] flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                {/* Effet de brillance */}
                <div className="absolute -inset-4 bg-[#0B4D7A]/20 blur-2xl rounded-full"></div>
              </div>
            </div>

            {/* Partie droite avec le texte */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1E90FF] to-[#C0C0C0]">
                IA et humain, un duo puissant
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Nous mettons à votre disposition un <span className="text-[#1E90FF] font-semibold">Neural Creative Officer</span>, 
                un expert qui collabore avec notre IA pour comprendre vos besoins stratégiques, 
                affiner les créations et garantir une cohérence parfaite avec votre marque.
              </p>
              
              {/* Points clés */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1E90FF]"></div>
                  <span className="text-gray-300">Expertise stratégique</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1E90FF]"></div>
                  <span className="text-gray-300">Créativité augmentée</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1E90FF]"></div>
                  <span className="text-gray-300">Cohérence garantie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Avantages Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 z-0"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#1E90FF] to-[#C0C0C0]">
            Pourquoi choisir IAgencify ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {avantages.map((avantage, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all">
                <div className="text-blue-400 mb-4">{avantage.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">{avantage.title}</h3>
                <p className="text-gray-400">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pour qui Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#1E90FF] to-[#C0C0C0]">
            Pour qui ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cibles.map((cible, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="text-blue-400">{cible.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-100">{cible.titre}</h3>
                  <p className="text-gray-400">{cible.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Tarification */}
<section className="relative py-24 bg-[#0A0A0F]">
  {/* Effet de fond */}
  <div className="absolute inset-0">
    <div className="absolute right-0 top-0 w-96 h-96 bg-[#0B4D7A]/10 rounded-full blur-[120px]"></div>
    <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#0B4D7A]/5 rounded-full blur-[120px]"></div>
  </div>

  <div className="relative max-w-6xl mx-auto px-4">
    {/* En-tête */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1E90FF] to-[#C0C0C0]">
        Comparez et choisissez votre solution
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Un investissement rentable pour votre communication
      </p>
      <p className="text-center text-gray-400 mt-12">
      Comparatif entre une solution traditionelle en interne et l&apos;abonnement mensuel IAgencify <br></br> Vous trouverez tous les produits sur la page Produits.
    </p>
    </div>

    {/* Grille de prix */}
    <div className="grid md:grid-cols-2 gap-8">
      {/* Option SMIC */}
      <div className="relative p-8 rounded-2xl border border-gray-800 bg-black/40 backdrop-blur-sm">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl blur opacity-30"></div>
        <div className="relative">
          <h3 className="text-2xl font-bold text-gray-200 mb-2">Direction Marketing</h3>
          <p className="text-gray-400 mb-6">Solution traditionnelle</p>
          
          <div className="mb-8">
            <div className="text-3xl font-bold text-white">
            3 000 à 6 000€ / mois
            </div>
            <p className="text-sm text-gray-500"> (salaire + charges)</p>
          </div>
<ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-400 mt-1" />
              <span className="text-gray-300">Limité aux heures de bureau</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-400 mt-1" />
              <span className="text-gray-300">Besoin de coordonner des prestataires (graphistes, rédacteurs, vidéastes…)</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-400 mt-1" />
              <span className="text-gray-300">Cout supplementaire des prestataires</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-400 mt-1" />
              <span className="text-gray-300">Délais de livraison	variable (souvent plusieurs jours/semaines)</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-400 mt-1" />
              <span className="text-gray-300">Nombre de demandes limitée par l&apos;humain</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-400 mt-1" />
              <span className="text-gray-300">Créativité & Idées :	Dépend de l&apos;expérience et de l&apos;inspiration</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-400 mt-1" />
              <span className="text-gray-300">Évolutivité :	Recrutement et formation nécessaires</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-400 mt-1" />
              <span className="text-gray-300">Maîtrise des coûts :	Coûts variables avec les prestataires</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-400 mt-1" />
              <span className="text-gray-300">Adaptabilité	: Besoin d&apos;apprentissage et d&apos;expérience sur chaque secteur</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Option IAgencify */}
      <div className="relative p-8 rounded-2xl border border-blue-800/30 bg-[#0B4D7A]/10 backdrop-blur-sm">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0B4D7A] to-[#1E90FF] rounded-2xl blur opacity-30"></div>
        <div className="relative">          
          <h3 className="text-2xl font-bold text-gray-200 mb-2">Solution IAgencify</h3>
          <p className="text-gray-400 mb-6">IA + Expertise humaine</p>
          
          <div className="mb-8">
            <div className="text-3xl font-bold text-white">
              SMIC brut <span className="text-lg font-normal text-gray-400">/mois</span>
            </div>
            <p className="text-sm text-gray-500">Sans engagement</p>
          </div>

          <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
          <Check className="w-5 h-5 text-blue-400 mt-1" />
              <span className="text-gray-300">24/7, toujours actif</span>
            </li>
            <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-400 mt-1" />
              <span className="text-gray-300">Production immédiate avec IA (graphisme, rédaction, vidéo, etc.)</span>
            </li>
            <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-400 mt-1" />
              <span className="text-gray-300">Cout de production integrée</span>
            </li>
            <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-400 mt-1" />
              <span className="text-gray-300"> 72h garanti (option express 24h)</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-400 mt-1" />
              <span className="text-gray-300">Illimité (1 active à la fois) </span>
            </li>
            <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-400 mt-1" />
              <span className="text-gray-300">IA boostée par des milliards de données</span>
            </li>
            <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-400 mt-1" />
              <span className="text-gray-300">Scalabilité immédiate selon les besoins</span>
            </li>
            <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-400 mt-1" />
              <span className="text-gray-300">Coût fixe mensuel, sans surprise</span>
            </li>
            <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-400 mt-1" />
              <span className="text-gray-300">S&apos;adapte instantanément avec l&apos;IA</span>
            </li>
            
          </ul>

          <button className="w-full bg-gradient-to-r from-[#0B4D7A] to-[#1E90FF] hover:opacity-90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all">
            Commencer maintenant
          </button>
        </div>
      </div>
    </div>

    {/* Note en bas */}
    <p className="text-center text-gray-400 mt-12">
      Tous nos produits incluent un accompagnement personnalisé et un accès à notre plateforme IA pour les abonnements.
    </p>
  </div>
</section>

      
    </main>
  );
}