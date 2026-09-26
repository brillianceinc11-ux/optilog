import { Ruler, TrendingDown, ClipboardCheck, Coins, ArrowDown } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const steps = [
  { icon: Ruler, title: 'Measure', text: 'Establish logistics baselines for distance, fuel and emissions.' },
  { icon: TrendingDown, title: 'Reduce', text: 'Implement route optimization, consolidation, scheduling and fleet efficiency measures.' },
  { icon: ClipboardCheck, title: 'Verify', text: 'Track measurable changes against the baseline.' },
  { icon: Coins, title: 'Incentivize', text: 'Create evidence that can support green investment, financing and eligible sustainability initiatives.' },
];

const flow = [
  'FMCG Businesses',
  'Logistics Efficiency',
  'Lower Transport Emissions',
  'Green Investment',
  'Low-Carbon Economy',
];

export function GreenFiscalPolicy() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-px max-w-[1440px] mx-auto">
        <Reveal className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-[0.15em] text-forest-600 uppercase mb-4 block">Green Fiscal Policy</span>
          <h2 className="font-display font-bold text-display-xl text-charcoal-900 mb-6">
            Aligning Logistics Efficiency With Kenya's Green Economy
          </h2>
          <p className="text-lg text-charcoal-600 leading-relaxed">
            OptiLog is designed around the broader transition toward low-carbon economic activity and green investment in Kenya.
          </p>
        </Reveal>

        {/* 4-step framework */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={(i + 1) as 1 | 2 | 3 | 4 | 5}>
              <div className="group h-full p-6 rounded-2xl bg-forest-50/40 border border-forest-100 hover:border-forest-300 hover:shadow-lg transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-forest-600 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                  </div>
                  <span className="font-display font-bold text-lg text-forest-700">{step.title}</span>
                </div>
                <p className="text-sm text-charcoal-600 leading-relaxed">{step.text}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute">
                    <ArrowDown className="w-4 h-4 text-forest-300" />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Policy flow graphic */}
        <Reveal delay={3}>
          <div className="rounded-3xl bg-gradient-to-b from-charcoal-950 to-forest-950 text-white p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern-light opacity-15" />
            <div className="relative flex flex-col items-center gap-4">
              {flow.map((label, i) => (
                <div key={label} className="flex flex-col items-center gap-4">
                  <div className={`px-8 py-4 rounded-2xl border transition-all duration-300 ${
                    i === flow.length - 1
                      ? 'bg-forest-600/30 border-forest-500/50 shadow-lg shadow-forest-900/50'
                      : 'bg-white/5 border-white/15 hover:border-forest-500/30'
                  }`}>
                    <span className={`font-display font-semibold text-base lg:text-xl tracking-wide ${
                      i === flow.length - 1 ? 'text-forest-300' : 'text-white/90'
                    }`}>{label}</span>
                  </div>
                  {i < flow.length - 1 && (
                    <ArrowDown className="w-5 h-5 text-forest-500 animate-pulse-slow" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
