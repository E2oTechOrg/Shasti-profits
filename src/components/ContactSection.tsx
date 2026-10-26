import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const phones = ['95145 99911', '95146 99911', '95147 99911'];

const cardClass = 'card-lift group bg-white/5 border border-white/10 rounded-xl p-6 flex items-start animate-on-scroll reveal-left';
const iconClass = 'h-6 w-6 text-shasti-purple mr-4 mt-1 shrink-0 transition-transform duration-300 group-hover:scale-125';

const ContactSection = () => (
  <section id="contact" className="relative py-24 bg-gradient-to-b from-[#12141C] to-shasti-blue overflow-hidden">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-shasti-purple/10 rounded-full filter blur-3xl animate-pulse-slow" />
    </div>

    <div className="container mx-auto px-4 relative z-10 max-w-6xl">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <p className="animate-on-scroll text-shasti-purple text-sm font-medium uppercase tracking-widest mb-3">Contact Us</p>
        <h2 className="animate-on-scroll text-3xl md:text-5xl font-bold mb-4 text-gradient" style={{ transitionDelay: '100ms' }}>Get in Touch</h2>
        <div className="animate-on-scroll reveal-line mx-auto mb-6" style={{ transitionDelay: '200ms' }} />
        <p className="animate-on-scroll text-gray-300 text-lg" style={{ transitionDelay: '250ms' }}>
          Have a question about our Equity, Futures and Options educational services? Reach out to us.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-5">
          <div className={cardClass}>
            <MapPin className={iconClass} />
            <div>
              <h3 className="text-white font-semibold mb-1">Address</h3>
              <p className="text-gray-400">No.8 Gowripuram Extn<br />2nd Street<br />Karur 639 002</p>
            </div>
          </div>

          <div className={cardClass} style={{ transitionDelay: '100ms' }}>
            <Phone className={iconClass} />
            <div>
              <h3 className="text-white font-semibold mb-1">Mobile</h3>
              <div className="flex flex-col text-gray-400">
                {phones.map((p) => (
                  <a key={p} href={`tel:+91${p.replace(/\s/g, '')}`} className="hover:text-shasti-purple transition-colors">{p}</a>
                ))}
              </div>
            </div>
          </div>

          <div className={cardClass} style={{ transitionDelay: '200ms' }}>
            <Mail className={iconClass} />
            <div>
              <h3 className="text-white font-semibold mb-1">Email</h3>
              <a href="mailto:shastiprofits@gmail.com" className="text-gray-400 hover:text-shasti-purple transition-colors break-all">shastiprofits@gmail.com</a>
            </div>
          </div>

          <div className={cardClass} style={{ transitionDelay: '300ms' }}>
            <Globe className={iconClass} />
            <div>
              <h3 className="text-white font-semibold mb-1">Website</h3>
              <a href="https://www.shastiprofits.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-shasti-purple transition-colors">www.shastiprofits.com</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-on-scroll" style={{ transitionDelay: '400ms' }}>
            <a href="https://wa.me/919514599911" target="_blank" rel="noreferrer">
              <Button size="lg" className="btn-glow bg-[#25D366] hover:bg-[#1ebe5b] text-white w-full sm:w-auto">Chat on WhatsApp</Button>
            </a>
            <a href="tel:+919514599911">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 w-full sm:w-auto">Call Now</Button>
            </a>
          </div>
        </div>

        <div className="animate-on-scroll reveal-right rounded-xl overflow-hidden border border-white/10 min-h-[360px]">
          <iframe
            title="Shasti Profits location"
            src="https://www.google.com/maps?q=Gowripuram+Extn+2nd+Street+Karur+639002&output=embed"
            className="w-full h-full min-h-[360px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
