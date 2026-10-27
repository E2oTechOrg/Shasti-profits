import {
  Facebook, Twitter, Instagram, Linkedin,
  MapPin, Phone, Mail, Globe, ChevronRight, MessageCircle, Heart,
} from 'lucide-react';

const WHATSAPP = '919514599911';
const phones = ['95145 99911', '95146 99911', '95147 99911'];
const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('No.8 Gowripuram Extn 2nd Street Karur 639002');

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'What You Learn', href: '#features' },
  { label: 'How It Works', href: '##how-it-works' },
  { label: 'Contact Us', href: '#contact' },
];

const termsLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Payment & Refund Policy', href: '/payment-refund-policy' },
  { label: 'Cancellation Policy', href: '/cancellation-policy' },
];

const headingClass = 'text-white text-lg sm:text-xl font-medium uppercase tracking-wide mb-5';
const linkClass = 'group flex items-center py-1 text-gray-400 hover:text-shasti-purple transition-colors';
const chevronClass = 'h-4 w-4 mr-2 shrink-0 transition-transform duration-200 group-hover:translate-x-1';
const squareBtn =
  'h-11 w-11 border border-white/20 text-white flex items-center justify-center transition-colors hover:bg-shasti-purple hover:border-shasti-purple';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12141C] pt-14 sm:pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-10">
          {/* Brand */}
          <div>
            <img
              src="/logo.png"
              alt="Shasti Profits - Future Wealth"
              className="h-24 sm:h-32 w-auto mb-4 mix-blend-screen"
            />
            <p className="text-gray-400 mb-6 max-w-xs">
              Equity, Futures and Options educational services. Learn. Analyse. Grow.
            </p>
            <div className="flex space-x-4">
              <a href="#!" className="text-gray-400 hover:text-shasti-purple transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-shasti-purple transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-shasti-purple transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-shasti-purple transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={headingClass}>Quick Links</h3>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={linkClass}>
                    <ChevronRight className={chevronClass} />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms & Conditions */}
          <div>
            <h3 className={headingClass}>Terms &amp; Conditions</h3>
            <ul>
              {termsLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={linkClass}>
                    <ChevronRight className={chevronClass} />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className={headingClass}>Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start hover:text-shasti-purple transition-colors"
                >
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 shrink-0 text-shasti-purple" />
                  <span>
                    No.8 Gowripuram Extn<br />
                    2nd Street<br />
                    Karur 639 002
                  </span>
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 shrink-0 text-shasti-purple" />
                <div className="flex flex-col">
                  {phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:+91${p.replace(/\s/g, '')}`}
                      className="py-0.5 hover:text-shasti-purple transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 shrink-0 text-shasti-purple" />
                <a
                  href="mailto:shastiprofits@gmail.com"
                  className="break-all hover:text-shasti-purple transition-colors"
                >
                  shastiprofits@gmail.com
                </a>
              </li>
             
            </ul>

            
          </div>
        </div>

        {/* Disclaimer + bottom bar */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-gray-500 text-xs leading-relaxed mb-6">
            <span className="font-semibold text-gray-400">Important Disclaimer: </span>
            Shasti Profits provides educational information intended to explain financial market concepts. Content is for general educational purposes only and does not constitute investment advice, research recommendations, buy or sell calls, or an offer to provide regulated financial services. We do not guarantee profits or financial outcomes. Financial markets, particularly futures and options, involve substantial risk and may result in substantial losses. Past performance does not guarantee future results. Individuals should assess their financial situation and risk tolerance, make their own informed decisions, and consult appropriately qualified professionals where necessary.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-400 text-center sm:text-left">
            <p>
              &copy; Copyright {currentYear} <span className="text-white font-semibold">Shasti Profits</span>. All Rights Reserved.
            </p>
            <p className="flex items-center gap-1.5">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by{' '}
              <a
                href="https://e2o.in"
                target="_blank"
                rel="noreferrer"
                className="text-white font-semibold hover:text-shasti-purple transition-colors"
              >
                E2o Tech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;