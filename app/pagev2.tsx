import Image from 'next/image'
import { Brain, Clock, Target, Rocket, ChartBar, Coins, Share2, User, ArrowRight, Sparkles, Building2, Palette, LineChart,TrendingUp } from "lucide-react";

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
      titre: "PME & Grands groupes",
      icon: <Building2 className="w-6 h-6" />,
      description: "Besoin d'une production massive et qualitative."
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
    <main className="min-h-screen bg-background-primary">
      {/* Hero Section avec background et overlay */}
      
      <section className="relative h-screen flex items-start justify-center overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image width={1920} height={1024}
            src="/ui/heroB.png" 
            alt="AI Background" 
            className="object-cover w-full h-full opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-100/50 to-gray-900"></div>
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 ">
          {/* Badge "Première agence" */}
          <div className="inline-block mb-6 p-2 bg-black/30 backdrop-blur-sm rounded-full border border-blue-800/30">
            <Sparkles className="w-6 h-6 text-blue-400 inline mr-2" />
            <span className="text-blue-300">La première agence IA en France</span>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0B4D7A] to-black">
            IAgencify – &quot;Créez demain&quot;
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            La première agence de communication augmentée par l&apos;IA, conçue pour les entreprises en quête de créativité, rapidité et innovation.
          </p>
          
          <div className="flex gap-4 justify-center">
            <button className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all flex items-center">
              Découvrir nos services
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-accent-silver-light hover:bg-accent-blue">test</button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all border border-gray-700">
              Nous contacter
            </button>
          </div>
          
          
        </div>
      </section>
{/* Section hero complète */}
<section className="relative h-screen flex items-start justify-center overflow-hidden">
            {/* Image d'arrière-plan */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="/ui/heroB.png"
                alt="AI Background"
                fill
                priority
                className="object-cover"
              />
              {/* Overlay pour améliorer la lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
            </div>
            <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
  {/* Badge "Première agence" */}
  <div className="inline-block mb-6 p-2 bg-black/30 backdrop-blur-sm rounded-full border border-blue-800/30">
    <Sparkles className="w-6 h-6 text-blue-400 inline mr-2" />
    <span className="text-blue-300">La première agence IA en France</span>
  </div>
  
  {/* Titre principal avec dégradé */}
  <div className="bg-gray-500/50 p-6 rounded-xl backdrop-blur-sm">
  <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0B4D7A] to-black">
    IAgencify – &quot;Créez demain&quot;
  </h1>
  </div>
  {/* Sous-titre */}
  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto backdrop-blur-sm">
    La première agence de communication augmentée par l&apos;IA, conçue pour les entreprises en quête de créativité, rapidité et innovation.
  </p>
  
  {/* Boutons */}
  <div className="flex gap-4 justify-center">
    <button className="group bg-[#0B4D7A] hover:bg-[#0A3A5C] text-white font-bold py-3 px-8 rounded-lg text-lg transition-all flex items-center">
      Découvrir nos services
      <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
    </button>
    <button className="bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all border border-blue-800/30">
      Nous contacter
    </button>
  </div>
  {/* Statistiques */}
  <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400">35</div>
              <div className="text-gray-400">Projets en cours</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400">27h</div>
              <div className="text-gray-400">Délai moyen</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400">100%</div>
              <div className="text-gray-400">Clients satisfaits</div>
            </div>
          </div>
</div>
            {/* Votre contenu ci-dessus */}
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



      {/* IA + Humain Section */}
      

      {/* Avantages Section */}
      <section className="bg-background-secondary bg-opacity-80 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1E90FF] to-[#C0C0C0]">
          IA et humain, un duo puissant
        </h2>
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
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
        </div>
      </section>

      {/* Pour qui Section */}
      <section className="bg-background-secondary bg-opacity-80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
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

      {/* CTA Section */}
      <section className="bg-background-secondary bg-opacity-80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à transformer votre communication ?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Avec IAgencify, l&apos;IA devient votre alliée stratégique.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition-all">
              Visitez IAgencify.com
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg text-lg transition-all">
              Contactez-nous
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}