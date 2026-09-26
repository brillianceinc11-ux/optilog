import { MapPin, TrendingDown, Calendar, Fuel, Cloud, Info } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Counter } from '@/components/Counter';

const kpis = [
  { icon: MapPin, label: 'Distance Travelled', value: '1,567 km/day', sub: 'baseline', badge: 'OBSERVED' },
  { icon: TrendingDown, label: 'Distance Reduced', value: '25 km/day', sub: 'observed', badge: 'OBSERVED' },
  { icon: Calendar, label: 'Annual Distance Reduction', value: '7,500 km/year*', sub: '300 operating days', badge: 'MODELLED' },
  { icon: Fuel, label: 'Fuel Impact', value: 'Model with verified data', sub: 'vehicle-specific consumption', badge: 'TARGET' },
  { icon: Cloud, label: 'CO₂ Impact', value: 'Model with verified data', sub: 'verified fuel/emission factors', badge: 'TARGET' },
];

const badgeColors: Record<string, string> = {
  OBSERVED: 'bg-forest-600/20 text-forest-400 border-forest-500/30',
  MODELLED: 'bg-techblue-500/15 text-techblue-400 border-techblue-500/30',
  TARGET: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
};

export function CarbonDashboard() {
  return (
    <section className="bg-charcoal-950 text-white py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern-light opacity-15" />
      <div className="relative container-px max-w-[1440px] mx-auto">
        <Reveal className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-[0.15em] text-forest-400 uppercase mb-4 block">Sustainability Dashboard</span>
          <h2 className="font-display font-bold text-display-xl text-white mb-6">
            Logistics Carbon Intelligence
          </h2>
        </Reveal>

        {/* Dashboard */}
        <Reveal delay={2}>
          <div className="rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-forest-400" />
                <span className="text-sm font-medium text-white/70">Carbon Intelligence Dashboard</span>
              </div>
              <span className="text-[10px] text-amber-400/80 font-medium flex items-center gap-1.5">
                <Info className="w-3 h-3" />
                Illustrative / experimental data
              </span>
            </div>

            {/* KPI Cards */}
            <div className="p-6 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {kpis.map((kpi) => (
                  <div key={kpi.label} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-forest-500/30 transition-colors duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-lg bg-forest-600/20 flex items-center justify-center">
                        <kpi.icon className="w-4 h-4 text-forest-400" />
                      </div>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded border ${badgeColors[kpi.badge]}`}>
                        {kpi.badge}
                      </span>
                    </div>
                    <div className="text-xs text-white/50 mb-1.5">{kpi.label}</div>
                    <div className="font-display font-bold text-lg text-white mb-1">
                      {kpi.value.includes('Model') ? (
                        <span className="text-sm font-normal text-white/50">{kpi.value}</span>
                      ) : kpi.value.includes('7,500') ? (
                        <Counter target={7500} suffix=" km/yr*" />
                      ) : kpi.value.includes('25 km') ? (
                        <Counter target={25} suffix=" km/day" />
                      ) : (
                        <Counter target={1567} suffix=" km/day" />
                      )}
                    </div>
                    <div className="text-[10px] text-white/40">{kpi.sub}</div>
                  </div>
                ))}
              </div>

              {/* Bar chart row */}
              <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm font-medium text-white/70">Weekly Distance Comparison</span>
                  <span className="text-[10px] text-white/40">km/day</span>
                </div>
                <div className="flex items-end justify-between gap-2 h-40">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => {
                    const before = 1567 + (i % 3) * 8 - (i > 2 ? 12 : 0);
                    const after = 1542 + (i % 3) * 6 - (i > 2 ? 8 : 0);
                    const beforeH = (before / 1600) * 100;
                    const afterH = (after / 1600) * 100;
                    return (
                      <div key={day} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full flex items-end justify-center gap-1 h-full">
                          <div
                            className="w-3 lg:w-4 rounded-t bg-charcoal-400/40 hover:bg-charcoal-400/60 transition-colors"
                            style={{ height: `${beforeH}%` }}
                          />
                          <div
                            className="w-3 lg:w-4 rounded-t bg-forest-500 hover:bg-forest-400 transition-colors"
                            style={{ height: `${afterH}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-white/40">{day}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center gap-6 mt-4 justify-center">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-charcoal-400/40" />
                    <span className="text-[11px] text-white/50">Before (fixed routes)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-forest-500" />
                    <span className="text-[11px] text-white/50">After (optimized)</span>
                  </div>
                </div>
              </div>

              {/* Note */}
              <p className="mt-6 text-xs text-white/35 leading-relaxed">
                *Based on the project's 25 km/day route-reordering experiment and 300 operating days. The website distinguishes between measured experimental results (OBSERVED), calculated estimates (MODELLED), and future targets (TARGET). Never fabricated as verified commercial performance.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
