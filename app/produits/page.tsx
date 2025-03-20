import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, MessagesSquare , Palette, Video, Image as ImageIcon, MessageSquare, Megaphone, Globe, CheckCircle, Layers, Zap } from 'lucide-react';

export const metadata = {
  title: 'Nos Produits | IAgencify',
  description: 'Découvrez notre gamme de produits de communication propulsés par l\'IA',
};

// Données des produits (à remplacer par des données dynamiques)
const products = [
  {
    id: 'chatbot',
    title: 'Chatbot IA Augmenté',
    icon: <MessagesSquare className="w-10 h-10 text-blue-400" />,
    description: 'Des assistants virtuels intelligents qui transforment l\'expérience client de votre site web',
    features: [
      'Chatbot personnalisé aux couleurs de votre marque',
      'Intégration complète à votre site web',
      'Base de connaissances alimentée par votre contenu',
      'Capacité de réponse 24/7 à vos clients',
      'Guide d\'utilisation du logo'
    ],
    price: 'À partir de 899€',
    deliveryTime: '72 heures',
    popular: false
  },  
  {
    id: 'logos',
    title: 'Création de logos',
    icon: <Palette className="w-10 h-10 text-blue-400" />,
    description: 'Des logos uniques et mémorables qui reflètent l\'identité de votre marque',
    features: [
      'Concepts multiples générés par IA',
      'Personnalisation illimitée',
      'Fichiers sources inclus (AI, EPS, SVG)',
      'Versions pour print et web',
      'Guide d\'utilisation du logo'
    ],
    price: 'À partir de 599€',
    deliveryTime: '72 heures',
    popular: false
  },
  {
    id: 'videos',
    title: 'Création de vidéos',
    icon: <Video className="w-10 h-10 text-blue-400" />,
    description: 'Des vidéos promotionnelles percutantes pour tous vos canaux',
    features: [
      'Script généré par IA',
      'Voix off professionnelle',
      'Montage dynamique',
      'Animation de votre logo',
      'Formats adaptés pour chaque plateforme'
    ],
    price: 'À partir de 899€',
    deliveryTime: '5 jours',
    popular: true
  },
  {
    id: 'visuels',
    title: 'Visuels pour réseaux sociaux',
    icon: <ImageIcon className="w-10 h-10 text-blue-400" />,
    description: 'Des visuels optimisés pour maximiser l\'engagement sur les réseaux sociaux',
    features: [
      'Pack de 10 visuels personnalisés',
      'Formats pour Instagram, Facebook, LinkedIn',
      'Designs accordés à votre charte graphique',
      'Templates réutilisables',
      'Conseils de publication'
    ],
    price: 'À partir de 499€',
    deliveryTime: '48 heures',
    popular: true
  },
  {
    id: 'copywriting',
    title: 'Rédaction persuasive',
    icon: <MessageSquare className="w-10 h-10 text-blue-400" />,
    description: 'Des textes optimisés pour convertir et engager votre audience',
    features: [
      'Contenu SEO-friendly',
      'Ton adapté à votre marque',
      'Version longue et courte incluses',
      'Structure optimisée pour la lecture web',
      'Mots-clés ciblés'
    ],
    price: 'À partir de 399€',
    deliveryTime: '24 heures',
    popular: true
  },
  {
    id: 'ads',
    title: 'Campagnes publicitaires',
    icon: <Megaphone className="w-10 h-10 text-blue-400" />,
    description: 'Des campagnes publicitaires multi-supports générées par IA',
    features: [
      'Analyse de votre marché cible',
      'Création d\'accroches percutantes',
      'Visuels optimisés pour les conversions',
      'A/B testing intégré',
      'Adaptations pour différents formats'
    ],
    price: 'À partir de 1299€',
    deliveryTime: '7 jours',
    popular: false
  },
  {
    id: 'sites',
    title: 'Sites web',
    icon: <Globe className="w-10 h-10 text-blue-400" />,
    description: 'Des sites web modernes, rapides et optimisés pour la conversion',
    features: [
      'Design responsive sur mesure',
      'Optimisation SEO intégrée',
      'Intégration de médias générés par IA',
      'Formulaires et CTA optimisés',
      'Compatibilité mobile garantie'
    ],
    price: 'À partir de 1999€',
    deliveryTime: '10 jours',
    popular: false
  },
  {
    id: 'identity',
    title: 'Identité visuelle complète',
    icon: <Layers className="w-10 h-10 text-blue-400" />,
    description: 'Une identité cohérente à travers tous vos supports de communication',
    features: [
      'Logo et variations',
      'Palette de couleurs',
      'Typographie personnalisée',
      'Éléments graphiques distinctifs',
      'Guide de marque complet'
    ],
    price: 'À partir de 1499€',
    deliveryTime: '7 jours',
    popular: false
  },
  {
    id: 'express',
    title: 'Services Express',
    icon: <Zap className="w-10 h-10 text-blue-400" />,
    description: 'Solutions rapides pour vos besoins urgents en communication',
    features: [
      'Livraison en 24h garantie',
      'Processus accéléré et prioritaire',
      'Révisions accélérées',
      'Suivi en temps réel',
      'Support dédié'
    ],
    price: '+50% sur le tarif standard',
    deliveryTime: '24 heures',
    popular: false
  }
];

// Abonnements mensuels
const subscriptions = [
  {
    id: 'standard',
    title: 'Standard',
    price: 'SMIC brut ',
    description: 'Pour les petites entreprises et entrepreneurs',
    features: [
      'Accès à tous les services',
      'Une demande active à la fois',
      'Livraison 72h garantie',
      'Révisions illimitées',
      'Neural Creative Officer dédié'
    ],
    featured: false
  },
  {
    id: 'business',
    title: 'Business',
    price: '2x SMIC brut',
    description: 'Pour les PME avec des besoins réguliers',
    features: [
      'Tout ce qu\'inclut Standard',
      'Trois demandes actives à la fois',
      'Livraison 48h garantie',
      'Analyse concurrentielle incluse',
      'Accès prioritaire'
    ],
    featured: true
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    price: 'Sur mesure',
    description: 'Pour les grandes entreprises avec des besoins complexes',
    features: [
      'Tout ce qu\'inclut Business',
      'Demandes illimitées',
      'Livraison 24h disponible',
      'Équipe dédiée',
      'Intégration avec vos outils'
    ],
    featured: false
  }
];

export default function ProductsPage() {
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
            <div className="inline-block mb-4 px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10">
              <Sparkles className="w-4 h-4 text-blue-400 inline mr-2" />
              <span className="text-blue-300 text-sm">Propulsé par l&apos;intelligence artificielle</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1E90FF] to-[#C0C0C0]">
              Nos produits et services
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg">
              Des solutions créatives accélérées par l&apos;IA pour tous vos besoins en communication.
              De la conception à la livraison en un temps record.
            </p>
          </div>
          
          {/* Grille de produits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all">
                {product.popular && (
                  <div className="bg-gradient-to-r from-[#0B4D7A] to-[#1E90FF] text-center py-2 text-white text-sm font-medium">
                    Populaire
                  </div>
                )}
                
                <div className="p-6">
                  <div className="mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{product.title}</h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gray-300 font-medium">Prix:</span>
                      <span className="text-white">{product.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300 font-medium">Délai:</span>
                      <span className="text-white">{product.deliveryTime}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={`/contact?service=${product.id}`}
                    className="inline-flex w-full items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#0B4D7A] to-[#1E90FF] hover:opacity-90 transition-all"
                  >
                    Demander un devis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Section abonnements */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Abonnements mensuels</h2>
              <p className="max-w-2xl mx-auto text-gray-400">
                Profitez de nos services en continu avec nos formules d&apos;abonnement mensuel sans engagement.
                Un Neural Creative Officer dédié pour tous vos besoins en communication.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {subscriptions.map((sub) => (
                <div 
                  key={sub.id} 
                  className={`rounded-xl overflow-hidden border ${
                    sub.featured 
                      ? 'border-blue-500/50 bg-blue-900/20 relative' 
                      : 'border-gray-700/50 bg-gray-800/30'
                  }`}
                >
                  {sub.featured && (
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#0B4D7A] to-[#1E90FF]"></div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-white">{sub.title}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-white">{sub.price}</span>
                      <span className="text-gray-400">/mois</span>
                    </div>
                    
                    <p className="text-gray-400 mb-6">{sub.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {sub.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={`/contact?abonnement=${sub.id}`}
                      className={`inline-flex w-full items-center justify-center px-4 py-2 border rounded-md shadow-sm text-base font-medium ${
                        sub.featured 
                          ? 'bg-gradient-to-r from-[#0B4D7A] to-[#1E90FF] text-white border-transparent hover:opacity-90' 
                          : 'bg-gray-800 text-white border-gray-600 hover:bg-gray-700'
                      } transition-all`}
                    >
                      Commencer maintenant
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="my-20">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#1E90FF] to-[#C0C0C0]">
              Questions fréquentes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-medium text-white mb-2">Comment fonctionne le processus de création ?</h3>
                <p className="text-gray-300">Après votre commande, un Neural Creative Officer analyse votre brief, supervise la génération IA et affine le résultat selon vos besoins spécifiques. Vous recevez ensuite plusieurs propositions.</p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-medium text-white mb-2">Quels sont les délais de livraison ?</h3>
                <p className="text-gray-300">Nos délais standard varient de 24h à 10 jours selon la complexité du projet. L&apos;option Express garantit une livraison en 24h pour les projets éligibles moyennant un supplément.</p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-medium text-white mb-2">Combien de révisions sont incluses ?</h3>
                <p className="text-gray-300">Tous nos produits incluent jusqu&apos;3 cycles de révision pour assurer votre satisfaction. Les abonnements mensuels bénéficient de révisions illimitées pendant toute la durée de l&apos;abonnement.</p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-medium text-white mb-2">Puis-je annuler mon abonnement ?</h3>
                <p className="text-gray-300">Oui, nos abonnements sont sans engagement. Vous pouvez annuler à tout moment et votre abonnement restera actif jusqu&apos;à la fin du mois en cours.</p>
              </div>
            </div>
          </div>
          
          {/* CTA à la fin de la page */}
          <div className="text-center mt-20 mb-10">
            <h2 className="text-2xl font-bold mb-4 text-white">Besoin d&apos;une solution personnalisée ?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Nos experts sont disponibles pour étudier vos besoins spécifiques et vous proposer une solution sur mesure.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#0B4D7A] to-[#1E90FF] hover:opacity-90 transition-all"
            >
              Nous contacter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}