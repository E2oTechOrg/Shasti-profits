import { BookOpen, LineChart, Layers, BarChart3, ShieldCheck, GraduationCap, Target, Eye } from 'lucide-react';

const approach = [
  { icon: <BookOpen className="h-6 w-6" />, title: 'Research-Based Market Insights', text: 'Analysis of market trends, price movements, and technical indicators.' },
  { icon: <Layers className="h-6 w-6" />, title: 'Options Trading Analysis', text: 'Insights into stock options, index options, and relevant market setups.' },
  { icon: <LineChart className="h-6 w-6" />, title: 'Technical Analysis', text: 'Identification of potential entry levels, targets, support, and resistance.' },
  { icon: <BarChart3 className="h-6 w-6" />, title: 'Open Interest Analysis', text: 'Understanding changes in market positioning to assess potential support and resistance zones.' },
  { icon: <ShieldCheck className="h-6 w-6" />, title: 'Risk Management', text: 'Emphasis on stop-loss discipline, position sizing, and responsible capital management.' },
  { icon: <GraduationCap className="h-6 w-6" />, title: 'Trader Education', text: 'Encouraging informed decisions, patience, and disciplined trading habits.' },
];

const About = () => (
  <section id="about" className="relative py-24 bg-gradient-to-b from-[#12141C] via-shasti-blue to-[#12141C] overflow-hidden">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 -left-20 w-80 h-80 bg-shasti-purple/10 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-shasti-light-purple/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      {/* Heading + intro */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="animate-on-scroll text-shasti-purple text-sm font-medium uppercase tracking-widest mb-3">About Us – Shasti Profits</p>
        <h2 className="animate-on-scroll text-3xl md:text-5xl font-bold mb-4 text-gradient" style={{ transitionDelay: '100ms' }}>
          Your Partner in Smarter Market Decisions
        </h2>
        <div className="animate-on-scroll reveal-line mx-auto mb-8" style={{ transitionDelay: '200ms' }} />
        <p className="animate-on-scroll text-gray-300 text-lg leading-relaxed mb-5" style={{ transitionDelay: '250ms' }}>
          Welcome to Shasti Profits, a stock market research and trading education platform dedicated to helping traders make more informed decisions in the Indian financial markets.
        </p>
        <p className="animate-on-scroll text-gray-400 text-lg leading-relaxed" style={{ transitionDelay: '350ms' }}>
          We focus on market research, technical analysis, price action, Open Interest (OI) analysis, and options market insights to identify potential trading opportunities across Nifty 50, Bank Nifty, stock options, stock futures, equities, and selected commodity markets.
        </p>
      </div>

      {/* Approach */}
      <div className="max-w-6xl mx-auto mb-20">
        <h3 className="animate-on-scroll text-2xl md:text-3xl font-bold text-center text-white mb-4">Our Approach</h3>
        <p className="animate-on-scroll text-gray-400 text-center max-w-3xl mx-auto mb-12" style={{ transitionDelay: '100ms' }}>
          At Shasti Profits, we believe that successful trading requires more than just identifying an opportunity. It requires proper research, disciplined execution, risk management, and continuous learning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approach.map((a, i) => (
            <div
              key={a.title}
              className="animate-on-scroll reveal-scale card-lift group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="bg-shasti-purple/20 rounded-lg w-12 h-12 flex items-center justify-center mb-5 text-shasti-purple transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                {a.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">{a.title}</h4>
              <p className="text-gray-400">{a.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission / Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
        <div className="animate-on-scroll reveal-left card-lift bg-white/5 border border-white/10 rounded-xl p-8">
          <Target className="h-8 w-8 text-shasti-purple mb-4" />
          <h3 className="text-2xl font-semibold text-white mb-3">Our Mission</h3>
          <p className="text-gray-400">
            Our mission is to make market research and trading insights more accessible, understandable, and practical for traders by promoting knowledge, discipline, and responsible risk management.
          </p>
        </div>
        <div className="animate-on-scroll reveal-right card-lift bg-white/5 border border-white/10 rounded-xl p-8" style={{ transitionDelay: '120ms' }}>
          <Eye className="h-8 w-8 text-shasti-purple mb-4" />
          <h3 className="text-2xl font-semibold text-white mb-3">Our Vision</h3>
          <p className="text-gray-400">
            To build a trusted trading research and education community where individuals can develop a better understanding of financial markets and improve their decision-making skills through structured analysis and continuous learning.
          </p>
        </div>
      </div>

      {/* Why choose + philosophy */}
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="animate-on-scroll text-2xl md:text-3xl font-bold mb-4 text-gradient">Why Choose Shasti Profits?</h3>
        <p className="animate-on-scroll text-gray-300 text-lg mb-8" style={{ transitionDelay: '100ms' }}>
          We aim to provide clear, structured market analysis with a focus on transparency, discipline, and risk awareness. Our objective is to help traders understand market opportunities and risks rather than rely on speculation or emotional decisions.
        </p>
        <div className="animate-on-scroll reveal-scale rounded-2xl border border-shasti-purple/30 bg-shasti-purple/10 px-6 py-8 mb-8" style={{ transitionDelay: '200ms' }}>
          <p className="text-xs uppercase tracking-widest text-shasti-purple mb-3">Our Philosophy</p>
          <p className="text-2xl md:text-3xl font-semibold text-white leading-snug">
            Research First. <span className="shimmer-text">Risk Management Always.</span> Trade with Discipline.
          </p>
        </div>
        <p className="animate-on-scroll text-gray-300 mb-8" style={{ transitionDelay: '300ms' }}>
          Join the Shasti Profits community and take a more informed approach to understanding the stock market.
        </p>
        <a href="#contact" className="animate-on-scroll inline-block" style={{ transitionDelay: '350ms' }}>
          <span className="btn-glow inline-flex items-center rounded-md bg-shasti-purple hover:bg-shasti-dark-purple text-white px-8 py-3 font-medium transition-colors">
            Contact Us
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default About;
