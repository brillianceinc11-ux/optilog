import { ArrowRight, MapPin, Truck, Navigation, Layers } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const features = [
  'Route Optimization',
  'Market Clustering',
  'Fleet Allocation',
  'Network Analysis',
  'Delivery Scheduling',
  'Distance Analysis',
  'Spatial Visualization',
  'Logistics Performance Dashboards',
  'Carbon Footprint Analysis',
];

// Stylized Kenya map with hub, markets and routes
const marketPoints = [
  { x: 45, y: 30, label: 'Nyeri' },
  { x: 38, y: 38, label: 'Nakuru' },
  { x: 52, y: 42, label: 'Nairobi' },
  { x: 60, y: 35, label: 'Embu' },
  { x: 30, y: 50, label: 'Kisumu' },
  { x: 42, y: 55, label: 'Narok' },
  { x: 58, y: 58, label: 'Machakos' },
  { x: 68, y: 52, label: 'Garissa' },
  { x: 35, y: 65, label: 'Kisii' },
  { x: 50, y: 70, label: 'Namanga' },
  { x: 72, y: 68, label: 'Voi' },
];

const routes = [
  { d: 'M 52 42 Q 48 36 45 30', color: '#4ade80' },
  { d: 'M 52 42 Q 45 40 38 38', color: '#38bdf8' },
  { d: 'M 52 42 Q 56 38 60 35', color: '#4ade80' },
  { d: 'M 52 42 Q 41 48 30 50', color: '#38bdf8' },
  { d: 'M 52 42 Q 47 48 42 55', color: '#4ade80' },
  { d: 'M 52 42 Q 55 50 58 58', color: '#38bdf8' },
  { d: 'M 52 42 Q 60 47 68 52', color: '#4ade80' },
  { d: 'M 52 42 Q 43 53 35 65', color: '#38bdf8' },
  { d: 'M 52 42 Q 51 56 50 70', color: '#4ade80' },
  { d: 'M 52 42 Q 62 55 72 68', color: '#38bdf8' },
];

export function GISIntelligence() {
  return (
    <section id="gis" className="bg-white py-20 lg:py-28">
      <div className="container-px max-w-[1440px] mx-auto">
        <Reveal className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-[0.15em] text-forest-600 uppercase mb-4 block">GIS & Logistics Intelligence</span>
          <h2 className="font-display font-bold text-display-xl text-charcoal-900 mb-6">
            Where GIS Meets Logistics
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left: Map */}
          <Reveal>
            <div className="relative h-full min-h-[400px] lg:min-h-[560px] rounded-2xl overflow-hidden bg-charcoal-950 border border-charcoal-200">
              <div className="absolute inset-0 grid-pattern-dark opacity-30" />

              {/* Map label */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15">
                <Layers className="w-3.5 h-3.5 text-forest-400" />
                <span className="text-xs font-medium text-white/80">Kenya Distribution Network</span>
              </div>

              {/* Map content */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <svg viewBox="0 0 100 80" className="w-full h-full max-w-md">
                  {/* Stylized Kenya outline */}
                  <path
                    d="M 25 20 L 40 15 L 55 18 L 70 22 L 78 35 L 75 48 L 80 58 L 75 70 L 60 75 L 45 72 L 30 68 L 22 55 L 20 38 Z"
                    fill="rgba(58, 115, 59, 0.08)"
                    stroke="rgba(74, 222, 128, 0.25)"
                    strokeWidth="0.4"
                  />

                  {/* Route lines */}
                  {routes.map((route, i) => (
                    <path
                      key={i}
                      d={route.d}
                      stroke={route.color}
                      strokeWidth="0.5"
                      fill="none"
                      strokeDasharray="2 1"
                      className="animate-dash-flow"
                      style={{ animationDelay: `${i * 0.2}s`, opacity: 0.7 }}
                    />
                  ))}

                  {/* Market points */}
                  {marketPoints.map((pt, i) => (
                    <g key={i}>
                      <circle cx={pt.x} cy={pt.y} r="0.8" fill={pt.label === 'Nairobi' ? '#fbbf24' : '#4ade80'} className="animate-pulse-slow" style={{ animationDelay: `${i * 0.3}s` }} />
                      {pt.label === 'Nairobi' && (
                        <>
                          <circle cx={pt.x} cy={pt.y} r="2" fill="none" stroke="#fbbf24" strokeWidth="0.3" opacity="0.5" className="animate-pulse-slow" />
                          <text x={pt.x + 2} y={pt.y + 0.8} fill="white" fontSize="2.2" fontWeight="600">Nairobi</text>
                          <text x={pt.x + 2} y={pt.y + 3.5} fill="#fbbf24" fontSize="1.5">Hub</text>
                        </>
                      )}
                    </g>
                  ))}

                  {/* Depot marker */}
                  <g>
                    <rect x="51" y="40.5" width="2" height="2" fill="#fbbf24" rx="0.3" />
                  </g>

                  {/* Truck icon at hub */}
                  <g transform="translate(50, 41)">
                    <circle r="3" fill="rgba(251, 191, 36, 0.15)" className="animate-pulse-slow" />
                  </g>
                </svg>
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 z-20 flex flex-col gap-2 px-3 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-[10px] text-white/70 font-medium">Distribution Hub</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-green" />
                  <span className="text-[10px] text-white/70 font-medium">Market Location</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-px bg-accent-green" style={{ borderTop: '1px dashed #4ade80' }} />
                  <span className="text-[10px] text-white/70 font-medium">Route Path</span>
                </div>
              </div>

              {/* Live indicator */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-forest-600/20 border border-forest-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                <span className="text-[10px] text-forest-300 font-medium">21 Markets &middot; 5 Routes</span>
              </div>
            </div>
          </Reveal>

          {/* Right: Content */}
          <Reveal delay={2} className="flex flex-col justify-center">
            <h3 className="font-display font-bold text-display-lg text-charcoal-900 mb-5">
              Spatial Intelligence for Everyday Logistics
            </h3>
            <p className="text-charcoal-600 leading-relaxed mb-8">
              OptiLog uses Geographic Information Systems and network analysis to turn logistics operations into spatially measurable systems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-forest-50/50 border border-forest-100 hover:border-forest-300 hover:bg-forest-50 transition-colors duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-forest-500" />
                  <span className="text-sm font-medium text-charcoal-700">{f}</span>
                </div>
              ))}
            </div>

            <a
              href="#route-visualization"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-forest-600 hover:bg-forest-700 text-white font-semibold transition-colors duration-300 group w-fit"
            >
              Explore GIS Solutions
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
