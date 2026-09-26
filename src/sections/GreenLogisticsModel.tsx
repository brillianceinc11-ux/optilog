import { Route, Truck, Cloud, Coins, RefreshCw } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const pillars = [
  { num: '01', title: 'Route Intelligence', icon: Route },
  { num: '02', title: 'Fleet Optimization', icon: Truck },
  { num: '03', title: 'Carbon Measurement', icon: Cloud },
  { num: '04', title: 'Green Investment', icon: Coins },
  { num: '05', title: 'Continuous Improvement', icon: RefreshCw },
];

const flowLabels = ['Business Efficiency', 'Emission Reduction', 'Green Investment', 'Sustainable Growth'];

export function GreenLogisticsModel() {
  return (
    <section className="bg-forest-950 text-white py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dark opacity-25" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-forest-600/10 blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-techblue-500/5 blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="relative container-px max-w-[1440px] mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.15em] text-forest-400 uppercase mb-4 block">Signature Model</span>
          <h2 className="font-display font-bold text-display-xl text-white mb-6">
            The OptiLog Green Logistics Model
          </h2>
        </Reveal>

        {/* 5 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
          {pillars.map((p, i) => (
            <Reveal key={p.num} delay={(i + 1) as 1 | 2 | 3 | 4 | 5}>
              <div className="group relative h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-forest-500/40 transition-all duration-500 text-center">
                {/* Number */}
                <div className="font-display font-bold text-5xl text-forest-600/30 group-hover:text-forest-500/50 transition-colors duration-500 mb-4">
                  {p.num}
                </div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-forest-600/30 group-hover:bg-forest-600 transition-colors duration-500 flex items-center justify-center mx-auto mb-4">
                  <p.icon className="w-6 h-6 text-forest-300 group-hover:text-white transition-colors duration-500" strokeWidth={1.8} />
                </div>
                <h3 className="font-display font-semibold text-base text-white">{p.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Flow statement */}
        <Reveal delay={5}>
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-5 p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-forest-600/15 via-techblue-500/10 to-forest-600/15 border border-forest-500/20">
            {flowLabels.map((label, i) => (
              <div key={label} className="flex items-center gap-3 lg:gap-5">
                <span className="font-display font-semibold text-sm lg:text-lg text-forest-300">{label}</span>
                {i < flowLabels.length - 1 && (
                  <span className="text-forest-600 font-display text-xl">&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
