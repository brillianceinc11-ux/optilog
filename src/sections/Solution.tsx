import { Map, BarChart3, SlidersHorizontal, TrendingUp, RefreshCw } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const steps = [
  { num: '01', title: 'Map', text: 'Map depots, markets, routes, vehicles and distribution networks using GIS.', icon: Map },
  { num: '02', title: 'Analyze', text: 'Use spatial and network analysis to identify inefficient routes, overlaps, unnecessary travel and fleet allocation problems.', icon: BarChart3 },
  { num: '03', title: 'Optimize', text: 'Test alternative routes, market groupings, dispatch schedules and fleet configurations.', icon: SlidersHorizontal },
  { num: '04', title: 'Measure', text: 'Translate operational improvements into measurable indicators such as kilometres reduced, fuel saved and emissions avoided.', icon: TrendingUp },
];

export function Solution() {
  return (
    <section className="bg-forest-950 text-white relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 grid-pattern-dark opacity-30" />
      <div className="relative container-px max-w-[1440px] mx-auto">
        <Reveal className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-[0.15em] text-forest-400 uppercase mb-4 block">The OptiLog Approach</span>
          <h2 className="font-display font-bold text-display-xl text-white mb-6">
            From Logistics Data to Green Decisions
          </h2>
        </Reveal>

        {/* Circular process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={(i + 1) as 1 | 2 | 3 | 4 | 5}>
              <div className="relative group h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-forest-500/40 transition-all duration-500">
                <div className="flex items-start justify-between mb-5">
                  <span className="font-mono text-xs text-forest-400 font-medium">{step.num}</span>
                  <div className="w-10 h-10 rounded-lg bg-forest-600/30 group-hover:bg-forest-600 transition-colors duration-500 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-forest-300 group-hover:text-white transition-colors duration-500" strokeWidth={1.8} />
                  </div>
                </div>
                <h3 className="font-display font-semibold text-xl text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{step.text}</p>
                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                    <div className="w-6 h-px bg-forest-500/40" />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Circular system indicator */}
        <Reveal delay={5}>
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-5 p-6 rounded-2xl bg-forest-900/40 border border-forest-800/40">
            {['MAP', 'ANALYZE', 'OPTIMIZE', 'MEASURE', 'IMPROVE'].map((label, i) => (
              <div key={label} className="flex items-center gap-3 lg:gap-5">
                <span className="font-display font-semibold text-sm lg:text-base text-forest-300 tracking-wide">{label}</span>
                {i < 4 && (
                  <span className="text-forest-600">
                    <RefreshCw className="w-4 h-4" />
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
