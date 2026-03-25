import Link from 'next/link'

export default function Footer() {
  const footerLinks = {
    product: [
      { label: 'Fonctionnalités', href: '#features' },
      { label: 'Tarifs', href: '#pricing' },
    ],
    resources: [
      { label: 'Guide', href: '#' },
      { label: 'Support', href: '#' },
    ],
    legal: [
      { label: 'Politique de confidentialité', href: '/privacy' },
      { label: 'Conditions d\u2019utilisation', href: '/terms' },
    ],
  }

  return (
    <footer style={{ background: '#0d0f2a' }} className="border-t border-dark-400">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <span className="text-white">FoxAdBox</span>
            </Link>
            <p className="text-gray-500 text-sm">
              L&apos;extension Chrome qui transforme la veille concurrentielle en action marketing.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produit</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Ressources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-dark-400">
          <p className="text-center text-gray-600 text-sm">
            © 2025 FoxAdBox. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
