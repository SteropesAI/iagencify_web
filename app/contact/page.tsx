import ContactForm from '@/components/ContactForm';
import { Mail, Phone, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact | IAgencify',
  description: 'Contactez IAgencify pour vos projets de communication augmentée par l\'IA',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white pt-24">
      {/* Hero section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B4D7A]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B4D7A]/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1E90FF] to-[#C0C0C0]">
              Contactez-nous
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg">
              Discutons de vos besoins en communication et découvrez comment l&apos;IA peut transformer votre approche marketing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informations de contact */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h2 className="text-xl font-semibold mb-6">Nos coordonnées</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-blue-400 mt-1 mr-3" />
                    <div>
                      <p className="text-gray-300">Email</p>
                      <p className="text-white font-medium">laurent@iagencify.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-blue-400 mt-1 mr-3" />
                    <div>
                      <p className="text-gray-300">Téléphone</p>
                      <p className="text-white font-medium">+33 (0)5 64 27 12 03</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-400 mt-1 mr-3" />
                    <div>
                      <p className="text-gray-300">Heures d&apos;ouverture</p>
                      <p className="text-white font-medium">
                        Lun - Ven: 9h à 18h<br />
                        (IA disponible 24/7)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h2 className="text-xl font-semibold mb-4">Notre approche</h2>
                <p className="text-gray-300 mb-4">
                  Contrairement aux agences traditionnelles, nous combinons l&apos;expertise humaine avec la puissance de l&apos;IA pour offrir des résultats rapides, créatifs et abordables.
                </p>
                <p className="text-gray-300">
                  Chaque projet bénéficie d&apos;un Neural Creative Officer dédié qui supervise la qualité et la pertinence des créations.
                </p>
              </div>
            </div>
            
            {/* Formulaire de contact */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#1E90FF] to-[#C0C0C0]">
            Questions fréquentes
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-medium text-white mb-2">Quel est le délai de réponse après avoir soumis un formulaire ?</h3>
              <p className="text-gray-300">Nous répondons généralement dans les 24 heures ouvrables. Pour les demandes urgentes, n&apos;hésitez pas à le préciser dans votre message.</p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-medium text-white mb-2">Comment fonctionne votre service d&apos;abonnement ?</h3>
              <p className="text-gray-300">Notre abonnement mensuel vous donne accès à un service illimité de demandes (une demande active à la fois) avec l&apos;assistance d&apos;un Neural Creative Officer dédié.</p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-medium text-white mb-2">Puis-je demander des modifications sur les créations ?</h3>
              <p className="text-gray-300">Absolument ! Nous offrons des cycles de révision pour chaque création afin d&apos;assurer votre entière satisfaction.</p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-medium text-white mb-2">Comment l&apos;IA améliore-t-elle réellement ma communication ?</h3>
              <p className="text-gray-300">Notre IA analyse des millions de données marketing pour créer des contenus optimisés, adaptés à votre secteur et à votre cible, tout en maintenant une cohérence parfaite avec votre identité.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}