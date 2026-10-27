import { useEffect } from 'react';
import { ChevronRight, MessageCircle, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { legalDocs } from '@/data/legalContent';

const WHATSAPP = '919514599911';
const PHONE = '95145 99911';
const EMAIL = 'shastiprofits@gmail.com';

/* ---------- Illustrations (one per policy) ---------- */

const Glow = () => (
  <>
    <circle cx="200" cy="150" r="125" fill="currentColor" fillOpacity="0.1" />
    <circle cx="200" cy="150" r="90" fill="currentColor" fillOpacity="0.12" />
  </>
);

const illustrations: Record<string, JSX.Element> = {
  'privacy-policy': (
    <>
      <Glow />
      <path d="M200 55 L275 85 V150 C275 197 241 228 200 246 C159 228 125 197 125 150 V85 Z" fill="currentColor" />
      <path d="M200 73 L259 97 V150 C259 188 232 213 200 228 C168 213 141 188 141 150 V97 Z" fill="#12141C" fillOpacity="0.35" />
      <path d="M186 140 V128 a14 14 0 0 1 28 0 V140" fill="none" stroke="white" strokeWidth="6" />
      <rect x="176" y="138" width="48" height="38" rx="7" fill="white" />
      <circle cx="200" cy="154" r="5" fill="#12141C" />
      <rect x="198" y="156" width="4" height="11" rx="2" fill="#12141C" />
      <circle cx="82" cy="95" r="6" fill="currentColor" fillOpacity="0.6" />
      <circle cx="320" cy="205" r="8" fill="currentColor" fillOpacity="0.5" />
      <circle cx="318" cy="85" r="4" fill="white" fillOpacity="0.6" />
    </>
  ),
  'terms-of-service': (
    <>
      <Glow />
      <rect x="125" y="50" width="150" height="195" rx="14" fill="white" fillOpacity="0.95" />
      <rect x="146" y="76" width="74" height="9" rx="4.5" fill="currentColor" />
      <rect x="146" y="100" width="108" height="6" rx="3" fill="#12141C" fillOpacity="0.25" />
      <rect x="146" y="118" width="108" height="6" rx="3" fill="#12141C" fillOpacity="0.25" />
      <rect x="146" y="136" width="84" height="6" rx="3" fill="#12141C" fillOpacity="0.25" />
      <rect x="146" y="154" width="108" height="6" rx="3" fill="#12141C" fillOpacity="0.25" />
      <circle cx="248" cy="212" r="30" fill="currentColor" />
      <path d="M234 212 l10 10 l18 -20" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="90" cy="110" r="6" fill="currentColor" fillOpacity="0.6" />
      <circle cx="318" cy="90" r="8" fill="currentColor" fillOpacity="0.5" />
    </>
  ),
  disclaimer: (
    <>
      <Glow />
      <path d="M200 62 L296 222 H104 Z" fill="currentColor" stroke="currentColor" strokeWidth="14" strokeLinejoin="round" />
      <rect x="192" y="116" width="16" height="54" rx="8" fill="white" />
      <circle cx="200" cy="194" r="9" fill="white" />
      <polyline points="70,264 130,250 185,259 250,234 330,246" fill="none" stroke="white" strokeOpacity="0.6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="330" cy="246" r="6" fill="white" fillOpacity="0.8" />
      <circle cx="82" cy="100" r="6" fill="currentColor" fillOpacity="0.6" />
    </>
  ),
  'payment-refund-policy': (
    <>
      <Glow />
      <path d="M135 80 C165 40 235 40 265 80" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M252 62 L266 82 L243 88" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="80" y="100" width="215" height="130" rx="16" fill="currentColor" />
      <rect x="80" y="128" width="215" height="26" fill="#12141C" fillOpacity="0.45" />
      <rect x="102" y="178" width="62" height="10" rx="5" fill="white" fillOpacity="0.85" />
      <rect x="102" y="198" width="92" height="8" rx="4" fill="white" fillOpacity="0.5" />
      <circle cx="290" cy="215" r="46" fill="white" />
      <circle cx="290" cy="215" r="37" fill="none" stroke="currentColor" strokeWidth="4" />
      <text x="290" y="231" textAnchor="middle" fontSize="44" fontWeight="700" fill="currentColor">₹</text>
    </>
  ),
  'cancellation-policy': (
    <>
      <Glow />
      <rect x="100" y="78" width="200" height="160" rx="16" fill="white" fillOpacity="0.95" />
      <path d="M100 94 a16 16 0 0 1 16 -16 h168 a16 16 0 0 1 16 16 v36 H100 Z" fill="currentColor" />
      <rect x="138" y="60" width="12" height="32" rx="6" fill="white" />
      <rect x="250" y="60" width="12" height="32" rx="6" fill="white" />
      {[0, 1, 2, 3].map((c) =>
        [0, 1].map((r) => (
          <rect key={`${c}-${r}`} x={124 + c * 42} y={150 + r * 34} width="26" height="18" rx="4" fill="#12141C" fillOpacity="0.2" />
        ))
      )}
      <circle cx="274" cy="214" r="40" fill="currentColor" stroke="#12141C" strokeOpacity="0.4" strokeWidth="6" />
      <path d="M259 199 L289 229 M289 199 L259 229" stroke="white" strokeWidth="7" strokeLinecap="round" />
    </>
  ),
};

/* ---------- Page ---------- */

const LegalPage = ({ slug }: { slug: string }) => {
  const doc = legalDocs[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (doc) document.title = `${doc.title} | Shasti Profits`;
  }, [doc]);

  if (!doc) return null;

  const waText = encodeURIComponent(`Hi Shasti Profits, I have a question about the ${doc.title}.`);

  return (
    <div className="min-h-screen bg-[#12141C] text-gray-300">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-[#12141C] to-shasti-blue">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-shasti-purple/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-shasti-purple/5 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-gray-400 mb-5">
                <a href="/" className="hover:text-shasti-purple transition-colors">Home</a>
                <ChevronRight className="h-4 w-4" />
                <span className="text-gray-300">{doc.title}</span>
              </nav>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">{doc.title}</h1>
              <div className="h-1 w-20 rounded-full bg-shasti-purple mb-5" />
              <p className="text-base sm:text-lg text-gray-300 mb-5 max-w-xl">{doc.intro}</p>
              <span className="inline-block text-xs sm:text-sm text-gray-400 border border-white/10 bg-white/5 rounded-full px-3 py-1">
                Last updated: {doc.updated}
              </span>
            </div>

            <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-shasti-purple/20 via-white/5 to-transparent p-4 sm:p-6 text-shasti-purple shadow-2xl">
                <svg viewBox="0 0 400 300" className="w-full h-auto" role="img" aria-label={`${doc.title} illustration`}>
                  {illustrations[slug]}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="bg-gradient-to-b from-shasti-blue to-[#12141C] py-10 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-10">
            {/* Contents (desktop) */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 bg-white/5 border border-white/10 rounded-xl p-5">
                <h2 className="text-white text-sm font-semibold uppercase tracking-widest mb-3">Contents</h2>
                <ul className="space-y-1">
                  {doc.sections.map((s, i) => (
                    <li key={s.heading}>
                      <a
                        href={`#section-${i + 1}`}
                        className="block py-1 text-sm text-gray-400 hover:text-shasti-purple transition-colors"
                      >
                        {i + 1}. {s.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="space-y-5 sm:space-y-6">
              {doc.sections.map((s, i) => (
                <section
                  key={s.heading}
                  id={`section-${i + 1}`}
                  className="scroll-mt-28 bg-white/5 border border-white/10 rounded-xl p-5 sm:p-7 border-l-4 border-l-shasti-purple"
                >
                  <h2 className="text-white text-lg sm:text-xl font-semibold mb-3">
                    {i + 1}. {s.heading}
                  </h2>
                  {s.paragraphs?.map((p) => (
                    <p key={p} className="text-gray-400 leading-relaxed mb-3 last:mb-0">
                      {p}
                    </p>
                  ))}
                  {s.bullets && (
                    <ul className="list-disc pl-5 space-y-2 text-gray-400 leading-relaxed marker:text-shasti-purple">
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* Contact block */}
              <section className="bg-shasti-purple/10 border border-shasti-purple/30 rounded-xl p-5 sm:p-7">
                <h2 className="text-white text-lg sm:text-xl font-semibold mb-2">Questions? Contact us</h2>
                <p className="text-gray-400 mb-5">
                  For any question about this page, reach out to us on WhatsApp, phone or email.
                </p>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${waText}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#1ebe5b] text-white font-medium px-5 py-3 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
                  </a>
                  <a
                    href={`tel:+${WHATSAPP}`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 text-white hover:bg-white/5 px-5 py-3 transition-colors"
                  >
                    <Phone className="h-5 w-5" /> {PHONE}
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 text-white hover:bg-white/5 px-5 py-3 transition-colors break-all"
                  >
                    <Mail className="h-5 w-5 shrink-0" /> {EMAIL}
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPage;