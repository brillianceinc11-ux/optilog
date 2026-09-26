import { Counter } from '@/components/Counter';
import { Truck, Route, MapPin, TrendingDown, Calendar, Leaf } from 'lucide-react';

const stats = [
  { icon: Truck, value: 20, suffix: '', label: 'Vehicle Fleet Framework', decimals: 0 },
  { icon: Route, value: 5, suffix: '', label: 'Distribution Routes', decimals: 0 },
  { icon: MapPin, value: 21, suffix: '', label: 'Markets Served', decimals: 0 },
  { icon: TrendingDown, value: 25, suffix: ' km/day', label: 'Observed Distance Reduction', decimals: 0 },
  { icon: Calendar, value: 7500, suffix: ' km/year', label: 'Potential Annual Distance Reduction*', decimals: 0 },
  { icon: Leaf, value: 5.6, suffix: ' t CO₂/year*', label: 'Estimated Carbon Avoided*', decimals: 1 },
];

export function DataStrip() {
  return (
    <section className="bg-charcoal-950 text-white relative overflow-hidden border-t border-forest-900/50">
      <div className="absolute inset-0 dot-pattern-light opacity-20" />
      <div className="relative container-px max-w-[1440px] mx-auto py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center lg:text-left ${i >= 3 ? 'col-span-2 md:col-span-1 lg:col-span-1' : ''}`}
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <stat.icon className="w-4 h-4 text-forest-400" />
                <span className="text-[11px] font-semibold tracking-wider text-forest-400 uppercase">{stat.label}</span>
              </div>
              <div className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-white tracking-tight">
                <Counter
                  target={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-white/35 max-w-3xl leading-relaxed">
          *Based on the project's 25 km/day route-reordering experiment and 300 operating days. Carbon avoided estimate assumes an average diesel truck fuel consumption of ~3.5 km/L and an emission factor of ~2.68 kg CO₂ per litre of diesel. All fuel and emissions estimates should be verified with vehicle-specific fuel-consumption data. Figures are experimental and not independently verified commercial performance.
        </p>
      </div>
    </section>
  );
}
