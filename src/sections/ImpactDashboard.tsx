import { Truck, MapPin, Route, Map as MapIcon, TrendingDown, Calendar, Cloud, Activity, Fuel, Leaf } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Counter } from '@/components/Counter';

const topKpis = [
  { icon: Truck, label: 'Fleet', value: '20', suffix: ' vehicles' },
  { icon: MapPin, label: 'Markets', value: '21', suffix: '' },
  { icon: Route, label: 'Routes', value: '5', suffix: '' },
  { icon: MapIcon, label: 'Daily Distance', value: '1,567', suffix: ' km' },
  { icon: TrendingDown, label: 'Optimized Distance', value: '1,542', suffix: ' km' },
  { icon: Activity, label: 'Distance Reduction', value: '25', suffix: ' km/day' },
  { icon: Calendar, label: 'Annualized Reduction', value: '7,500', suffix: ' km' },
  { icon: Fuel, label: 'Fuel Saved / day', value: '7.1', suffix: ' L/day*', custom: null },
  { icon: Fuel, label: 'Fuel Saved / year', value: '2143', suffix: ' L/year*', custom: null },
  { icon: Leaf, label: 'Carbon Avoided', value: '5.6', suffix: ' t CO₂/year*', custom: null },
];

export function ImpactDashboard() {
  return (
    <section className="bg-charcoal-950 text-white py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dark opacity-20" />
      <div className="relative container-px max-w-[1440px] mx-auto">
        <Reveal className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-[0.15em] text-forest-400 uppercase mb-4 block">Live Impact Dashboard</span>
          <h2 className="font-display font-bold text-display-xl text-white mb-6">
            The OptiLog Analytics Platform
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            A live-style view of logistics performance — from fleet and route metrics to distance reduction and carbon modeling.
          </p>
        </Reveal>

        <Reveal delay={2}>
          <div className="rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden">
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-charcoal-900/50">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-forest-400" />
                <span className="text-sm font-medium text-white/70">OptiLog Logistics Dashboard</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                <span className="text-[10px] text-forest-400 font-medium">LIVE</span>
              </div>
            </div>

            <div className="p-6 lg:p-8 space-y-6">
              {/* KPI Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {topKpis.map((kpi) => (
                  <div key={kpi.label} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-forest-500/20 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <kpi.icon className="w-3.5 h-3.5 text-forest-400" />
                      <span className="text-[10px] text-white/50 font-medium">{kpi.label}</span>
                    </div>
                    {kpi.custom ? (
                      <div className="text-[11px] text-white/40 leading-tight">{kpi.custom}</div>
                    ) : kpi.value.includes('.') ? (
                      <div className="font-display font-bold text-xl lg:text-2xl text-white">
                        <Counter target={parseFloat(kpi.value)} suffix={kpi.suffix} decimals={1} />
                      </div>
                    ) : (
                      <div className="font-display font-bold text-xl lg:text-2xl text-white">
                        <Counter target={parseInt(kpi.value)} suffix={kpi.suffix} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Charts row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Daily Kilometres Chart */}
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-white/70">Daily Kilometres</span>
                    <span className="text-[10px] text-white/40">30-day trend</span>
                  </div>
                  <div className="flex items-end justify-between gap-1 h-32">
                    {Array.from({ length: 30 }).map((_, i) => {
                      const h = 55 + Math.sin(i * 0.5) * 15 + (i > 15 ? -5 : 5) + (Math.random() * 10 - 5);
                      const isOptimized = i > 15;
                      return (
                        <div
                          key={i}
                          className={`flex-1 rounded-t transition-colors ${isOptimized ? 'bg-forest-500/60 hover:bg-forest-500' : 'bg-charcoal-400/40 hover:bg-charcoal-400/60'}`}
                          style={{ height: `${Math.max(20, h)}%` }}
                        />
                      );
                    })}
                  </div>
                  <div className="flex justify-between mt-3 text-[10px] text-white/30">
                    <span>Day 1</span>
                    <span>Optimization applied</span>
                    <span>Day 30</span>
                  </div>
                </div>

                {/* Route Utilization */}
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-white/70">Route Utilization</span>
                    <span className="text-[10px] text-white/40">per route</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'Route A', pct: 92 },
                      { name: 'Route B', pct: 85 },
                      { name: 'Route C', pct: 78 },
                      { name: 'Route D', pct: 89 },
                      { name: 'Route E', pct: 71 },
                    ].map((r) => (
                      <div key={r.name} className="flex items-center gap-3">
                        <span className="text-xs text-white/50 w-16">{r.name}</span>
                        <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-forest-600 to-accent-green transition-all duration-1000"
                            style={{ width: `${r.pct}%` }}
                          />
                        </div>
                        <span className="text-xs text-white/60 font-mono w-10 text-right">{r.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Distance by Route */}
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-white/70">Distance by Route</span>
                    <span className="text-[10px] text-white/40">km/day</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'Route A', before: 340, after: 328 },
                      { name: 'Route B', before: 310, after: 305 },
                      { name: 'Route C', before: 290, after: 280 },
                      { name: 'Route D', before: 330, after: 325 },
                      { name: 'Route E', before: 297, after: 304 },
                    ].map((r) => (
                      <div key={r.name} className="flex items-center gap-3">
                        <span className="text-xs text-white/50 w-16">{r.name}</span>
                        <div className="flex-1 flex items-center gap-1">
                          <div className="flex-1 h-3 rounded bg-charcoal-400/30 overflow-hidden">
                            <div className="h-full bg-charcoal-400/50" style={{ width: `${(r.before / 350) * 100}%` }} />
                          </div>
                          <div className="flex-1 h-3 rounded bg-forest-600/20 overflow-hidden">
                            <div className="h-full bg-forest-500" style={{ width: `${(r.after / 350) * 100}%` }} />
                          </div>
                        </div>
                        <span className="text-xs text-white/40 font-mono w-12 text-right">{r.after}km</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded bg-charcoal-400/50" />
                      <span className="text-[10px] text-white/40">Before</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded bg-forest-500" />
                      <span className="text-[10px] text-white/40">After</span>
                    </div>
                  </div>
                </div>

                {/* Emissions Estimate */}
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-white/70">Estimated Emissions</span>
                    <span className="text-[10px] text-amber-400/60">Requires verification</span>
                  </div>
                  {/* Semi-circle gauge */}
                  <div className="flex flex-col items-center mt-4">
                    <svg viewBox="0 0 120 70" className="w-full max-w-[200px]">
                      <path d="M 10 60 A 50 50 0 0 1 110 60" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" strokeLinecap="round" />
                      <path d="M 10 60 A 50 50 0 0 1 110 60" fill="none" stroke="url(#gaugeGrad)" strokeWidth="10" strokeLinecap="round" strokeDasharray="157" strokeDashoffset="40" />
                      <defs>
                        <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#4ade80" />
                          <stop offset="100%" stopColor="#0ea5e9" />
                        </linearGradient>
                      </defs>
                      <text x="60" y="50" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="Space Grotesk">0.81 t</text>
                      <text x="60" y="62" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="6">CO₂ / day (est.)</text>
                    </svg>
                    <div className="flex justify-between w-full max-w-[200px] mt-2 text-[10px] text-white/30">
                      <span>0 t</span>
                      <span>2 t</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-white/30 mt-3 text-center">
                    Model using verified fuel/emission factors for accurate results
                  </p>
                </div>
              </div>

              {/* Before vs After Summary */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-forest-600/15 to-techblue-500/10 border border-forest-500/20">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div>
                      <div className="text-[10px] text-white/40 mb-1">Before Optimization</div>
                      <div className="font-display font-bold text-xl text-white">1,567 km/day</div>
                    </div>
                    <div className="text-forest-500 text-2xl">&rarr;</div>
                    <div>
                      <div className="text-[10px] text-forest-400 mb-1">After Optimization</div>
                      <div className="font-display font-bold text-xl text-forest-300">1,542 km/day</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-[10px] text-white/40 mb-1">Net Reduction</div>
                      <div className="font-display font-bold text-xl text-accent-green">-25 km/day</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[10px] text-white/40 mb-1">Fuel Saved</div>
                      <div className="font-display font-bold text-xl text-techblue-400">7.1 L/day*</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
