import { Truck, Route, MapPin, TrendingDown, Calendar, Info } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Counter } from '@/components/Counter';

const framework = [
  { icon: Truck, value: 20, label: 'Vehicle Fleet Framework', suffix: '' },
  { icon: Route, value: 5, label: 'Routes', suffix: '' },
  { icon: MapPin, value: 21, label: 'Markets', suffix: '' },
];

export function Experiment() {
  return (
    <section id="impact" className="bg-charcoal-50 py-20 lg:py-28">
      <div className="container-px max-w-[1440px] mx-auto">
        <Reveal className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-[0.15em] text-forest-600 uppercase mb-4 block">Case Study</span>
          <h2 className="font-display font-bold text-display-xl text-charcoal-900 mb-6">
            A Logistics Optimization Experiment
          </h2>
          <p className="text-lg text-charcoal-600 leading-relaxed">
            Introducing the OptiLog experimental framework — a route-reordering scenario applied to a 20-vehicle fleet operating across 21 markets on 5 distribution routes.
          </p>
        </Reveal>

        {/* Dashboard */}
        <Reveal delay={2}>
          <div className="rounded-3xl bg-charcoal-950 overflow-hidden border border-charcoal-200 shadow-2xl shadow-charcoal-900/10">
            {/* Dashboard header bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-charcoal-900 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="ml-3 text-xs font-mono text-white/40">optilog-analytics / experiment-01</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                <span className="text-[10px] text-forest-400 font-medium">EXPERIMENTAL DATA</span>
              </div>
            </div>

            {/* Dashboard body */}
            <div className="p-6 lg:p-10">
              {/* Framework KPIs */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {framework.map((f) => (
                  <div key={f.label} className="p-5 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <f.icon className="w-4 h-4 text-forest-400" />
                      <span className="text-[11px] text-white/50 font-medium">{f.label}</span>
                    </div>
                    <div className="font-display font-bold text-3xl lg:text-4xl text-white">
                      <Counter target={f.value} suffix={f.suffix} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Before/After comparison */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                {/* Before */}
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Before</div>
                  <div className="font-display font-bold text-2xl lg:text-3xl text-white mb-2">
                    <Counter target={1567} suffix=" km/day" />
                  </div>
                  <div className="text-sm text-white/50">Fixed route sequence</div>
                </div>

                {/* After */}
                <div className="p-6 rounded-xl bg-forest-600/15 border border-forest-500/30">
                  <div className="text-xs font-semibold text-forest-400 uppercase tracking-wider mb-3">After</div>
                  <div className="font-display font-bold text-2xl lg:text-3xl text-white mb-2">
                    <Counter target={1542} suffix=" km/day" />
                  </div>
                  <div className="text-sm text-white/50">Optimized route sequence</div>
                </div>

                {/* Reduction */}
                <div className="p-6 rounded-xl bg-accent-green/10 border border-accent-green/30">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingDown className="w-4 h-4 text-accent-green" />
                    <span className="text-xs font-semibold text-accent-green uppercase tracking-wider">Observed Reduction</span>
                  </div>
                  <div className="font-display font-bold text-2xl lg:text-3xl text-white mb-2">
                    <Counter target={25} suffix=" km/day" />
                  </div>
                  <div className="text-sm text-white/50">Route reordering scenario</div>
                </div>
              </div>

              {/* Annualized */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-xl bg-gradient-to-r from-forest-600/20 to-techblue-500/10 border border-forest-500/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-forest-600/30 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-forest-400" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 mb-1">Annualized Distance Reduction (300 operating days)</div>
                    <div className="font-display font-bold text-3xl text-white">
                      <Counter target={7500} suffix=" km/year" />
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-amber-400/80 font-medium flex items-center gap-1.5">
                    <Info className="w-3 h-3" />
                    Experimental result — route reordering scenario
                  </div>
                  <div className="text-[10px] text-white/30 mt-1">Does not represent all FMCG fleets or guaranteed savings</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
