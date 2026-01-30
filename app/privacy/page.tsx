import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy - FoxAdBox',
  description: 'Politique de confidentialité de FoxAdBox',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-dark">
      <div className="container-custom py-20">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Retour à l'accueil
        </Link>

        {/* Content */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="prose prose-invert prose-gray max-w-none space-y-6">
            <p className="text-gray-400 text-lg">
              Dernière mise à jour : Janvier 2025
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
              <p className="text-gray-400">
                FoxAdBox ("nous", "notre", "nos") s'engage à protéger la confidentialité de vos données personnelles.
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations
                lorsque vous utilisez notre extension Chrome et nos services associés.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">2. Données collectées</h2>
              <p className="text-gray-400">
                Nous collectons les types de données suivants :
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Informations de compte (email, nom d'utilisateur)</li>
                <li>Données d'utilisation de l'extension</li>
                <li>Analyses publicitaires sauvegardées</li>
                <li>Préférences et paramètres</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">3. Utilisation des données</h2>
              <p className="text-gray-400">
                Vos données sont utilisées pour :
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Fournir et améliorer nos services</li>
                <li>Personnaliser votre expérience</li>
                <li>Assurer le support client</li>
                <li>Envoyer des communications importantes</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. Partage des données</h2>
              <p className="text-gray-400">
                Nous ne vendons jamais vos données personnelles à des tiers. Vos données peuvent être partagées uniquement avec :
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Nos prestataires de services (hébergement, paiement)</li>
                <li>Les autorités légales si requis par la loi</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. Sécurité</h2>
              <p className="text-gray-400">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger
                vos données contre tout accès non autorisé, modification, divulgation ou destruction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">6. Vos droits</h2>
              <p className="text-gray-400">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">7. Contact</h2>
              <p className="text-gray-400">
                Pour toute question concernant cette politique de confidentialité, contactez-nous à :
                <br />
                <span className="text-accent">privacy@foxadbox.com</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
