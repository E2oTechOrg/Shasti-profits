import { Button } from "@/components/ui/button";
import { steps } from "../data/howItWorks";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-[#12141C] to-shasti-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Knowledge first. Discipline always. Build your understanding of the markets one step at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="absolute -top-4 -left-4 bg-shasti-blue border rounded-md border-shasti-purple/30 text-shasti-purple font-bold text-xl px-3 py-1">
                {step.number}
              </span>
              <div className="bg-shasti-purple/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6 text-shasti-purple">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact">
            <Button size="lg" className="bg-shasti-purple hover:bg-shasti-dark-purple text-white px-8">
              Get in Touch
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
