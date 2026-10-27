import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#12141C] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div>
            <img src="/logo.png" alt="Shasti Profits - Future Wealth" className="h-32 w-auto mb-4 mix-blend-screen" />
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

          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-shasti-purple transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-shasti-purple transition-colors">About Us</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-shasti-purple transition-colors">What You Learn</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-shasti-purple transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-shasti-purple transition-colors">Contact Us</a></li>
              {/* <li><a href="#disclaimer" className="text-gray-400 hover:text-shasti-purple transition-colors">Risk Disclaimer</a></li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Address</h3>
            <div className="flex items-start text-gray-400">
              <MapPin className="h-5 w-5 mr-3 mt-0.5 shrink-0 text-shasti-purple" />
              <p>
                No.8 Gowripuram Extn<br />
                2nd Street<br />
                Karur 639 002
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 shrink-0 text-shasti-purple" />
                <div className="flex flex-col">
                  <a href="tel:9514599911" className="hover:text-shasti-purple transition-colors">95145 99911</a>
                  <a href="tel:9514699911" className="hover:text-shasti-purple transition-colors">95146 99911</a>
                  <a href="tel:9514799911" className="hover:text-shasti-purple transition-colors">95147 99911</a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 shrink-0 text-shasti-purple" />
                <a href="mailto:shastiprofits@gmail.com" className="hover:text-shasti-purple transition-colors break-all">shastiprofits@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Globe className="h-5 w-5 mr-3 shrink-0 text-shasti-purple" />
                <a href="https://www.shastiprofits.com" target="_blank" rel="noreferrer" className="hover:text-shasti-purple transition-colors">www.shastiprofits.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-gray-500 text-xs leading-relaxed mb-6">
            <span className="font-semibold text-gray-400">Important Disclaimer: </span>
            Shasti Profits provides educational information intended to explain financial market concepts. Content is for general educational purposes only and does not constitute investment advice, research recommendations, buy or sell calls, or an offer to provide regulated financial services. We do not guarantee profits or financial outcomes. Financial markets, particularly futures and options, involve substantial risk and may result in substantial losses. Past performance does not guarantee future results. Individuals should assess their financial situation and risk tolerance, make their own informed decisions, and consult appropriately qualified professionals where necessary.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Shasti Profits. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#!" className="text-gray-400 hover:text-shasti-purple text-sm transition-colors">Terms of Service</a>
              <a href="#!" className="text-gray-400 hover:text-shasti-purple text-sm transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
