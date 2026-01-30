import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service - FoxAdBox',
  description: 'Conditions générales d\'utilisation de FoxAdBox',
}

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

          <div className="prose prose-invert prose-gray max-w-none space-y-6">
            <p className="text-gray-400 text-lg">
              Dernière mise à jour : Janvier 2025
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">1. Acceptation des conditions</h2>
              <p className="text-gray-400">
                En accédant et en utilisant FoxAdBox, vous acceptez d'être lié par ces conditions d'utilisation.
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">2. Description du service</h2>
              <p className="text-gray-400">
                FoxAdBox est une extension Chrome qui permet d'analyser les publicités en ligne,
                de générer des prompts créatifs et des scripts vidéo adaptés à vos besoins marketing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">3. Comptes utilisateur</h2>
              <p className="text-gray-400">
                Pour utiliser FoxAdBox, vous devez créer un compte. Vous êtes responsable de :
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Maintenir la confidentialité de vos identifiants</li>
                <li>Toutes les activités sous votre compte</li>
                <li>Nous notifier immédiatement de tout usage non autorisé</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. Abonnement et paiement</h2>
              <p className="text-gray-400">
                Les abonnements sont facturés mensuellement. En souscrivant à un plan payant, vous acceptez :
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Le renouvellement automatique de votre abonnement</li>
                <li>Les frais associés à votre plan choisi</li>
                <li>Notre politique de remboursement de 14 jours</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. Utilisation acceptable</h2>
              <p className="text-gray-400">
                Vous vous engagez à ne pas utiliser FoxAdBox pour :
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Violer des droits de propriété intellectuelle</li>
                <li>Distribuer du contenu illégal ou nuisible</li>
                <li>Tenter de compromettre la sécurité du service</li>
                <li>Revendre ou redistribuer le service sans autorisation</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">6. Propriété intellectuelle</h2>
              <p className="text-gray-400">
                FoxAdBox et tout son contenu, fonctionnalités et fonctionnalités sont la propriété exclusive
                de TheDivisionCorp et sont protégés par les lois sur la propriété intellectuelle.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">7. Limitation de responsabilité</h2>
              <p className="text-gray-400">
                FoxAdBox est fourni "tel quel". Nous ne garantissons pas que le service sera ininterrompu
                ou exempt d'erreurs. Notre responsabilité est limitée au montant payé pour le service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">8. Résiliation</h2>
              <p className="text-gray-400">
                Vous pouvez résilier votre compte à tout moment. Nous nous réservons le droit de suspendre
                ou résilier votre accès en cas de violation de ces conditions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">9. Modifications</h2>
              <p className="text-gray-400">
                Nous pouvons modifier ces conditions à tout moment. Les modifications prendront effet
                dès leur publication sur cette page. Votre utilisation continue du service après
                modification constitue votre acceptation des nouvelles conditions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">10. Contact</h2>
              <p className="text-gray-400">
                Pour toute question concernant ces conditions, contactez-nous à :
                <br />
                <span className="text-accent">legal@foxadbox.com</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
