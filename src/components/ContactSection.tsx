import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Globe, Send, Navigation } from 'lucide-react';

const WHATSAPP_NUMBER = '919791399911';
const phones = ['95145 99911', '95146 99911', '95147 99911'];
const MAPS_QUERY = encodeURIComponent('No.8 Gowripuram Extn 2nd Street Karur 639002');
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;

const services = ['Equity', 'Futures', 'Options', 'Not sure yet'];

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: '',
  phone: '',
  email: '',
  service: services[0],
  message: '',
};

const cardClass =
  'card-lift group bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 flex items-start animate-on-scroll reveal-left';
const iconClass =
  'h-5 w-5 sm:h-6 sm:w-6 text-shasti-purple mr-3 sm:mr-4 mt-1 shrink-0 transition-transform duration-300 group-hover:scale-125';
const inputClass =
  'w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-base text-white placeholder:text-gray-500 focus:outline-none focus:border-shasti-purple focus:ring-1 focus:ring-shasti-purple transition-colors';
const labelClass = 'block text-sm font-medium text-gray-300 mb-1.5';

const ContactSection = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const key = name as keyof FormState;
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!/^\d{10}$/.test(form.phone.replace(/\D/g, '').slice(-10)))
      next.phone = 'Enter a valid 10-digit mobile number';
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email';
    if (!form.message.trim()) next.message = 'Please enter your message';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    const text = [
      '*New enquiry from website*',
      '',
      `*Name:* ${form.name.trim()}`,
      `*Mobile:* ${form.phone.trim()}`,
      form.email.trim() ? `*Email:* ${form.email.trim()}` : null,
      `*Interested in:* ${form.service}`,
      `*Message:* ${form.message.trim()}`,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setForm(initialForm);
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#12141C] to-shasti-blue overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-shasti-purple/10 rounded-full filter blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="animate-on-scroll text-shasti-purple text-xs sm:text-sm font-medium uppercase tracking-widest mb-3">
            Contact Us
          </p>
          <h2
            className="animate-on-scroll text-3xl md:text-5xl font-bold mb-4 text-gradient"
            style={{ transitionDelay: '100ms' }}
          >
            Get in Touch
          </h2>
          <div className="animate-on-scroll reveal-line mx-auto mb-6" style={{ transitionDelay: '200ms' }} />
          <p
            className="animate-on-scroll text-gray-300 text-base sm:text-lg"
            style={{ transitionDelay: '250ms' }}
          >
            Have a question about our Equity, Futures and Options educational services? Reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Form: first on mobile, right column on desktop */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="order-1 lg:order-2 animate-on-scroll reveal-right bg-white/5 border border-white/10 rounded-xl p-5 sm:p-8 space-y-4 sm:space-y-5 h-fit"
          >
            <div>
              <h3 className="text-white text-xl font-semibold">Send us a message</h3>
              <p className="text-gray-400 text-sm mt-1">
                Your enquiry will open in WhatsApp, ready to send.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label htmlFor="name" className={labelClass}>Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Mobile *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit number"
                  className={inputClass}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label htmlFor="email" className={labelClass}>Email (optional)</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="service" className={labelClass}>Interested in</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none`}
                >
                  {services.map((s) => (
                    <option key={s} value={s} className="text-black">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>Message *</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className={`${inputClass} resize-none`}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            <Button
              type="submit"
              size="lg"
              className="btn-glow w-full bg-[#25D366] hover:bg-[#1ebe5b] text-white"
            >
              <Send className="h-4 w-4 mr-2" />
              Submit
            </Button>
          </form>

          {/* Contact details */}
          <div className="order-2 lg:order-1 space-y-4 sm:space-y-5">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className={`${cardClass} hover:border-shasti-purple/50 transition-colors`}
              aria-label="Open address in Google Maps"
            >
              <MapPin className={iconClass} />
              <div>
                <h3 className="text-white font-semibold mb-1">Address</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  No.8 Gowripuram Extn<br />2nd Street<br />Karur 639 002
                </p>
                <span className="inline-flex items-center gap-1 text-shasti-purple text-sm mt-2">
                  <Navigation className="h-3.5 w-3.5" /> Open in Google Maps
                </span>
              </div>
            </a>

            <div className={cardClass} style={{ transitionDelay: '100ms' }}>
              <Phone className={iconClass} />
              <div>
                <h3 className="text-white font-semibold mb-1">Mobile</h3>
                <div className="flex flex-col gap-1 text-gray-400 text-sm sm:text-base">
                  {phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:+91${p.replace(/\s/g, '')}`}
                      className="hover:text-shasti-purple transition-colors py-0.5"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className={cardClass} style={{ transitionDelay: '200ms' }}>
              <Mail className={iconClass} />
              <div className="min-w-0">
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <a
                  href="mailto:shastiprofits@gmail.com"
                  className="text-gray-400 text-sm sm:text-base hover:text-shasti-purple transition-colors break-all"
                >
                  shastiprofits@gmail.com
                </a>
              </div>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 animate-on-scroll"
              style={{ transitionDelay: '400ms' }}
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="btn-glow bg-[#25D366] hover:bg-[#1ebe5b] text-white w-full sm:w-auto"
                >
                  Chat on WhatsApp
                </Button>
              </a>
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 w-full sm:w-auto"
                >
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Map, full width below */}
        <div className="mt-8 lg:mt-12 animate-on-scroll relative rounded-xl overflow-hidden border border-white/10 h-[300px] sm:h-[360px] lg:h-[420px]">
          <iframe
            title="Shasti Profits location"
            src={MAPS_EMBED}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-3 left-3 right-3 sm:left-auto sm:right-4 sm:bottom-4"
          >
            <Button className="btn-glow w-full sm:w-auto bg-shasti-purple hover:bg-shasti-purple/90 text-white shadow-lg">
              <Navigation className="h-4 w-4 mr-2" />
              Get Directions
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;