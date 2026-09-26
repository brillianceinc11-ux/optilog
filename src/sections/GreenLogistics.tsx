import { TrendingDown, Calculator, ArrowRightCircle, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const cards = [
  {
    icon: TrendingDown,
    title: 'Reduce',
    text: 'Reduce unnecessary travel through route and network optimization.',
  },
  {
    icon: Calculator,
    title: 'Measure',
    text: 'Calculate fuel consumption and transport-related carbon emissions.',
  },
  {
    icon: ArrowRightCircle,
    title: 'Transition',
    text: 'Support future decisions around cleaner vehicles, alternative fuels and green logistics investment.',
  },
];

const flow = ['DISTANCE', 'FUEL', 'EMISSIONS', 'IMPACT'];

export function GreenLogistics() {
  return (
    <section id="green-logistics" className="bg-gradient-to-b from-forest-950 to-forest-900 text-white py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dark opacity-20" />
      <div className="relative container-px max-w-[1440px] mx-auto">
        <Reveal className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-[0.15em] text-forest-400 uppercase mb-4 block">Green Logistics</span>
          <h2 className="font-display font-bold text-display-xl text-white mb-6">
            From Kilometres to Carbon
          </h2>
        </Reveal>

        {/* Flow visualization */}
        <Reveal delay={2}>
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-6 mb-16">
            {flow.map((label, i) => (
              <div key={label} className="flex items-center gap-3 lg:gap-6">
                <div className="px-6 py-3 lg:px-8 lg:py-4 rounded-xl bg-white/5 border border-forest-500/20 hover:border-forest-500/40 transition-colors duration-300">
                  <span className="font-display font-semibold text-base lg:text-lg text-forest-300 tracking-wide">{label}</span>
                </div>
                {i < flow.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-forest-600" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={3}>
          <p className="text-lg text-white/60 leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Reducing unnecessary vehicle kilometres can improve operational efficiency while creating an opportunity to measure and manage transport-related emissions.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={(i + 1) as 1 | 2 | 3 | 4 | 5}>
              <div className="group h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-forest-500/40 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-forest-600/30 group-hover:bg-forest-600 transition-colors duration-500 flex items-center justify-center mb-6">
                  <card.icon className="w-7 h-7 text-forest-300 group-hover:text-white transition-colors duration-500" strokeWidth={1.8} />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">{card.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
