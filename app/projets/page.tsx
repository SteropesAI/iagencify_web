import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, User, Tag } from 'lucide-react';

export const metadata = {
  title: 'Nos Projets | IAgencify',
  description: 'Découvrez nos projets réalisés avec l\'IA pour diverses entreprises et secteurs',
};

// Données des projets (à remplacer par des données dynamiques avec une API)
const projects = [
  {
    id: 'coffeeshop-rebrand',
    title: 'Rebranding complet pour CaféCulture',
    category: 'Identité visuelle',
    client: 'CaféCulture',
    date: 'Mars 2025',
    image: '/images/projects/project1.jpg', // À remplacer par vos images
    status: 'Terminé',
    description: 'Refonte complète de l\'identité visuelle d\'une chaîne de cafés artisanaux, incluant logo, cartes de visite, emballages et signalétique.',
    deliveryTime: '72 heures'
  },
  {
    id: 'tech-startup-website',
    title: 'Site web pour startup tech TechNova',
    category: 'Web Design',
    client: 'TechNova',
    date: 'Février 2025',
    image: '/images/projects/project2.jpg',
    status: 'En cours',
    description: 'Création d\'un site web moderne avec sections produits, blog et intégration de démos interactives pour une startup spécialisée en IA.',
    deliveryTime: '7 jours'
  },
  {
    id: 'wellness-social-campaign',
    title: 'Campagne réseaux sociaux pour ZenLife',
    category: 'Social Media',
    client: 'ZenLife',
    date: 'Janvier 2025',
    image: '/images/projects/project3.jpg',
    status: 'Terminé',
    description: 'Création d\'une campagne complète pour les réseaux sociaux incluant 30 visuels, 15 animations et une stratégie de contenu pour un centre de bien-être.',
    deliveryTime: '48 heures'
  },
  {
    id: 'food-delivery-campaign',
    title: 'Campagne de lancement pour FoodExpress',
    category: 'Marketing Digital',
    client: 'FoodExpress',
    date: 'Janvier 2025',
    image: '/images/projects/project4.jpg',
    status: 'Terminé',
    description: 'Stratégie et création de contenu pour le lancement d\'un service de livraison de repas, incluant vidéos promotionnelles et visuels pour divers canaux.',
    deliveryTime: '5 jours'
  },
  {
    id: 'eco-packaging-design',
    title: 'Design d\'emballages écologiques pour NaturePack',
    category: 'Packaging',
    client: 'NaturePack',
    date: 'Décembre 2024',
    image: '/images/projects/project5.jpg',
    status: 'Terminé',
    description: 'Conception d\'une gamme complète d\'emballages écologiques pour une entreprise de produits bio, mettant en avant la durabilité.',
    deliveryTime: '96 heures'
  },
  {
    id: 'b2b-saas-rebranding',
    title: 'Rebranding pour solution B2B CloudSphere',
    category: 'Branding',
    client: 'CloudSphere',
    date: 'Mars 2025',
    image: '/images/projects/project6.jpg',
    status: 'En cours',
    description: 'Refonte complète de l\'identité de marque pour une entreprise SaaS B2B, incluant logo, site web, présentations et matériel marketing.',
    deliveryTime: 'En cours'
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white pt-24">
      {/* Hero section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B4D7A]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B4D7A]/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1E90FF] to-[#C0C0C0]">
              Nos projets
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg">
              Découvrez comment l&apos;IA révolutionne la communication pour nos clients à travers différents secteurs.
            </p>
          </div>
          
          {/* Filtres de projets - peut être rendu fonctionnel avec JavaScript */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Tous
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Identité visuelle
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Web Design
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Social Media
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Marketing Digital
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Packaging
            </button>
          </div>
          
          {/* Grille de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all">
                <div className="relative h-48 overflow-hidden">
                  {/* Remplacer par votre propre système de gestion d'images */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                    <span className="text-gray-400">Image du projet</span>
                  </div>
                  
                  {/* Badge de statut */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'En cours' 
                      ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' 
                      : 'bg-green-500/20 text-green-300 border border-green-500/30'
                  }`}>
                    {project.status}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <Tag className="w-4 h-4 mr-1" />
                    <span>{project.category}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{project.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-white hover:text-blue-400 transition-colors">
                    <Link href={`/projets/${project.id}`}>
                      {project.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <User className="w-4 h-4 mr-1" />
                    <span>Client: {project.client}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Livraison: {project.deliveryTime}</span>
                  </div>
                  
                  <Link 
                    href={`/projets/${project.id}`}
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm"
                  >
                    Voir le projet
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA à la fin de la page */}
          <div className="text-center mt-20 mb-10">
            <h2 className="text-2xl font-bold mb-4 text-white">Prêt à créer votre prochain projet avec nous ?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Découvrez comment notre approche IA-powered peut transformer votre communication. 
              Nos Neural Creative Officers sont prêts à vous accompagner.
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