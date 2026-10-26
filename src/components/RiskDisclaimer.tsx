import { AlertTriangle } from 'lucide-react';

const items = [
  { title: 'No Investment Advice', text: 'The content provided is not intended to constitute investment advice, financial advice, research recommendations, or a recommendation to buy, sell, or hold any security or financial instrument.' },
  { title: 'No Guaranteed Returns', text: 'Financial markets are subject to market volatility and uncertainty. Shasti Profits makes no guarantee of profits, returns, accuracy, or future performance from the use of its educational content.' },
  { title: 'Market Risk', text: 'Investments and derivatives, particularly futures and options, involve significant financial risk and may result in substantial losses. Participants should understand the risks involved before making any financial decisions.' },
  { title: 'Independent Decisions', text: 'All information should be evaluated independently. Individuals are responsible for their own financial decisions and should consider their financial circumstances, knowledge, and risk tolerance before participating in the financial markets.' },
  { title: 'Accuracy of Information', text: 'Although reasonable care may be taken in preparing educational content, Shasti Profits does not warrant that all information is complete, accurate, or current. Market conditions and related information may change without notice.' },
  { title: 'No Professional Relationship', text: 'Accessing this website or its content does not, by itself, establish an adviser-client relationship or any other professional relationship with Shasti Profits.' },
  { title: 'Regulatory Status', text: 'Shasti Profits is not registered with SEBI as an Investment Adviser or Research Analyst. The educational content provided should not be interpreted as a substitute for services requiring registration under applicable securities laws.' },
];

const RiskDisclaimer = () => (
  <section id="disclaimer" className="py-20 bg-[#12141C]">
    <div className="container mx-auto px-4 max-w-5xl">
      {/* Important disclaimer */}
      <div className="animate-on-scroll reveal-scale border border-amber-400/30 bg-amber-400/5 rounded-xl p-6 mb-12 flex gap-4">
        <AlertTriangle className="h-6 w-6 text-amber-400 shrink-0 mt-0.5 animate-pulse-slow" />
        <div className="text-sm text-gray-300 leading-relaxed">
          <p className="font-semibold text-amber-300 mb-1">Important Disclaimer</p>
          Stock market investments and derivatives trading involve significant risk and may result in substantial losses. Options and futures trading can be particularly risky. All market insights are for informational and educational purposes and should not be considered guaranteed returns or personalized investment advice. Past performance does not guarantee future results. Please assess your financial situation and risk tolerance before trading.
        </div>
      </div>

      {/* Risk disclaimer */}
      <div className="text-center mb-10">
        <p className="animate-on-scroll text-shasti-purple text-sm font-medium uppercase tracking-widest mb-2">Risk Disclaimer</p>
        <h2 className="animate-on-scroll text-2xl md:text-3xl font-bold text-white mb-3" style={{ transitionDelay: '100ms' }}>Financial Education &amp; Market Awareness</h2>
        <p className="animate-on-scroll text-gray-400 max-w-3xl mx-auto text-sm leading-relaxed" style={{ transitionDelay: '150ms' }}>
          The information provided on the Shasti Profits website, social media platforms, and associated educational channels is intended solely for general educational and informational purposes. Shasti Profits aims to provide educational content relating to the Indian financial markets, including stock market fundamentals, technical analysis concepts, market trends, derivatives, futures and options, and risk management principles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((it, i) => (
          <div
            key={it.title}
            className="animate-on-scroll card-lift bg-white/5 border border-white/10 rounded-xl p-5"
            style={{ transitionDelay: `${(i % 2) * 100}ms` }}
          >
            <h3 className="text-white font-semibold mb-1.5 text-sm">{it.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{it.text}</p>
          </div>
        ))}
      </div>

      <p className="animate-on-scroll text-gray-400 text-sm text-center mt-10 max-w-3xl mx-auto">
        By accessing this website or using its educational resources, you acknowledge that you understand and accept the risks associated with financial markets.
      </p>
      <p className="animate-on-scroll text-center text-shasti-purple text-sm font-medium mt-3" style={{ transitionDelay: '100ms' }}>
        For educational purposes only. Learn responsibly. Understand the risks before making financial decisions.
      </p>
    </div>
  </section>
);

export default RiskDisclaimer;
