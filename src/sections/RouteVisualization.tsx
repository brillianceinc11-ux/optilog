import { useState } from 'react';
import { Truck, MapPin, Gauge, Fuel, Clock, Leaf } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const kpis = [
  { label: 'Distance', before: '1,567 km', after: '1,542 km', change: '-25 km', icon: MapPin },
  { label: 'Route Utilization', before: '82%', after: '89%', change: '+7%', icon: Gauge },
  { label: 'Stops', before: '21', after: '21', change: '0', icon: MapPin },
  { label: 'Travel Time', before: '8.5 hrs', after: '8.2 hrs', change: '-0.3 hrs', icon: Clock },
  { label: 'Fuel Consumption', before: '313 L', after: '308 L', change: '-5 L', icon: Fuel },
  { label: 'Estimated CO₂', before: '0.82 t', after: '0.81 t', change: '-0.01 t', icon: Leaf },
];

// Route paths for existing (chaotic) vs optimized (efficient)
const existingRoutes = [
  'M 20 60 C 35 30 45 70 55 25 S 75 65 85 40',
  'M 20 40 C 40 55 30 25 50 50 S 70 30 85 55',
  'M 20 75 C 30 45 55 65 45 35 S 70 70 85 45',
  'M 20 25 C 45 40 35 60 60 45 S 75 25 85 65',
  'M 20 50 C 40 60 50 40 55 60 S 75 35 85 50',
];

const optimizedRoutes = [
  'M 20 60 Q 40 50 60 45 T 85 40',
  'M 20 40 Q 40 45 60 48 T 85 50',
  'M 20 75 Q 40 65 55 58 T 85 50',
  'M 20 25 Q 40 35 60 40 T 85 42',
  'M 20 50 Q 40 52 60 50 T 85 48',
];

const marketDots = [
  [22, 60], [32, 48], [42, 52], [48, 38], [55, 45],
  [58, 30], [62, 55], [68, 42], [72, 50], [75, 35],
  [80, 48], [35, 70], [45, 65], [50, 72], [55, 62],
  [28, 35], [38, 28], [42, 22], [50, 28], [60, 22], [70, 28],
];

export function RouteVisualization() {
  const [showOptimized, setShowOptimized] = useState(false);

  return (
    <section id="route-visualization" className="bg-white py-20 lg:py-28">
      <div className="container-px max-w-[1440px] mx-auto">
        <Reveal className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-[0.15em] text-forest-600 uppercase mb-4 block">Route Visualization</span>
          <h2 className="font-display font-bold text-display-xl text-charcoal-900 mb-6">
            See the Difference
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-charcoal-950 border border-charcoal-200">
                <div className="absolute inset-0 grid-pattern-dark opacity-30" />

                {/* Toggle */}
                <div className="absolute top-4 left-4 z-20 flex gap-1 p-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15">
                  <button
                    onClick={() => setShowOptimized(false)}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all duration-300 ${
                      !showOptimized ? 'bg-white/15 text-white' : 'text-white/50 hover:text-white/80'
                    }`}
                  >
                    Existing Route
                  </button>
                  <button
                    onClick={() => setShowOptimized(true)}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all duration-300 ${
                      showOptimized ? 'bg-forest-600 text-white' : 'text-white/50 hover:text-white/80'
                    }`}
                  >
                    Optimized Route
                  </button>
                </div>

                {/* Map content */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <svg viewBox="0 0 100 80" className="w-full h-full max-w-lg">
                    {/* Routes */}
                    {(showOptimized ? optimizedRoutes : existingRoutes).map((d, i) => (
                      <path
                        key={`${showOptimized}-${i}`}
                        d={d}
                        stroke={showOptimized ? '#4ade80' : '#f87171'}
                        strokeWidth="0.6"
                        fill="none"
                        strokeDasharray="3 1.5"
                        className="animate-dash-flow"
                        style={{ animationDelay: `${i * 0.15}s`, opacity: 0.75 }}
                      />
                    ))}

                    {/* Depot */}
                    <g>
                      <rect x="18" y="48" width="3" height="3" fill="#fbbf24" rx="0.4" />
                      <circle cx="19.5" cy="49.5" r="5" fill="none" stroke="#fbbf24" strokeWidth="0.2" opacity="0.3" className="animate-pulse-slow" />
                      <text x="14" y="55" fill="#fbbf24" fontSize="2" fontWeight="600">Depot</text>
                    </g>

                    {/* Market points */}
                    {marketDots.map(([x, y], i) => (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="0.9"
                        fill={showOptimized ? '#4ade80' : '#f87171'}
                        className="animate-pulse-slow"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}

                    {/* Truck on route */}
                    <g transform={showOptimized ? 'translate(60, 48)' : 'translate(55, 25)'}>
                      <circle r="3.5" fill="rgba(74, 222, 128, 0.15)" className="animate-pulse-slow" />
                      <Truck className="w-3 h-3 text-white" />
                    </g>
                  </svg>
                </div>

                {/* Info badge */}
                <div className="absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15">
                  <span className="text-[10px] text-white/60 font-medium">
                    {showOptimized ? 'Optimized — 1,542 km/day' : 'Existing — 1,567 km/day'}
                  </span>
                </div>
              </div>
            </div>

            {/* KPI Panel */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <Gauge className="w-4 h-4 text-forest-600" />
                <span className="text-xs font-semibold tracking-wider text-forest-600 uppercase">KPI Panel</span>
              </div>
              {kpis.map((kpi, i) => (
                <Reveal key={kpi.label} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}>
                  <div className="p-4 rounded-xl border border-charcoal-100 bg-white hover:border-forest-200 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <kpi.icon className="w-3.5 h-3.5 text-charcoal-400" />
                        <span className="text-xs font-medium text-charcoal-600">{kpi.label}</span>
                      </div>
                      <span className={`text-xs font-bold ${
                        kpi.change.startsWith('-') || kpi.change.startsWith('+')
                          ? kpi.change.startsWith('+') ? 'text-techblue-500' : 'text-forest-600'
                          : 'text-charcoal-400'
                      }`}>
                        {kpi.change}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-charcoal-400 line-through">{kpi.before}</span>
                      <span className="font-display font-semibold text-charcoal-900">{kpi.after}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
              <p className="text-[10px] text-charcoal-400 pt-2 leading-relaxed">
                Illustrative values based on the 25 km/day route-reordering experiment. Fuel and CO₂ estimates require verification with vehicle-specific data.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
