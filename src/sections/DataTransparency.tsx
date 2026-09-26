import { Eye, Calculator, Target } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const badges = [
  {
    badge: 'OBSERVED',
    icon: Eye,
    title: 'Observed Data',
    text: 'Data directly measured from the logistics optimization experiment — actual route distances, fleet counts and market coverage.',
    color: 'forest',
    examples: ['25 km/day distance reduction', '1,567 km/day baseline', '1,542 km/day optimized'],
  },
  {
    badge: 'MODELLED',
    icon: Calculator,
    title: 'Calculated Estimates',
    text: 'Figures derived from observed data using stated assumptions. Clearly labeled as estimates, not independently verified.',
    color: 'techblue',
    examples: ['7,500 km/year (300 days × 25 km)', 'Fuel impact projections', 'CO₂ estimates from fuel data'],
  },
  {
    badge: 'TARGET',
    icon: Target,
    title: 'Future Targets',
    text: 'Aspirational goals for future performance. Not current results — directional indicators for what OptiLog aims to achieve.',
    color: 'amber',
    examples: ['Verified commercial savings', 'Fleet-wide emissions reduction', 'Green investment eligibility'],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; badgeBg: string; badgeText: string; badgeBorder: string }> = {
  forest: { bg: 'bg-forest-50/40', text: 'text-forest-700', border: 'border-forest-200', badgeBg: 'bg-forest-600/15', badgeText: 'text-forest-600', badgeBorder: 'border-forest-500/30' },
  techblue: { bg: 'bg-techblue-500/5', text: 'text-techblue-600', border: 'border-techblue-500/20', badgeBg: 'bg-techblue-500/15', badgeText: 'text-techblue-600', badgeBorder: 'border-techblue-500/30' },
  amber: { bg: 'bg-amber-50/40', text: 'text-amber-700', border: 'border-amber-200', badgeBg: 'bg-amber-500/15', badgeText: 'text-amber-600', badgeBorder: 'border-amber-500/30' },
};

export function DataTransparency() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-px max-w-[1440px] mx-auto">
        <Reveal className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-[0.15em] text-forest-600 uppercase mb-4 block">Data Integrity</span>
          <h2 className="font-display font-bold text-display-xl text-charcoal-900 mb-6">
            Data You Can Trust
          </h2>
          <p className="text-lg text-charcoal-600 leading-relaxed">
            OptiLog separates observed data from calculated estimates and future targets. Every figure on this site is clearly labeled so you always know what is measured, what is modelled, and what is aspirational.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {badges.map((b, i) => {
            const c = colorMap[b.color];
            return (
              <Reveal key={b.badge} delay={(i + 1) as 1 | 2 | 3 | 4 | 5}>
                <div className={`h-full p-7 rounded-2xl border ${c.border} ${c.bg} transition-all duration-500 hover:shadow-lg`}>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${c.badgeBg} flex items-center justify-center`}>
                      <b.icon className={`w-6 h-6 ${c.badgeText}`} strokeWidth={1.8} />
                    </div>
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${c.badgeBg} ${c.badgeText} ${c.badgeBorder} tracking-wider`}>
                      {b.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-charcoal-900 mb-3">{b.title}</h3>
                  <p className="text-sm text-charcoal-500 leading-relaxed mb-5">{b.text}</p>
                  <ul className="space-y-2">
                    {b.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2 text-xs text-charcoal-600">
                        <span className={`w-1.5 h-1.5 rounded-full ${c.badgeText} bg-current mt-1.5 flex-shrink-0`} style={{ backgroundColor: 'currentColor' }} />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Statement */}
        <Reveal delay={4}>
          <div className="mt-12 p-6 rounded-2xl bg-charcoal-50 border border-charcoal-100">
            <p className="text-sm text-charcoal-600 leading-relaxed text-center">
              <span className="font-semibold text-charcoal-800">OptiLog never fabricates environmental performance figures.</span> All data is categorized as observed, modelled, or target — and labeled accordingly throughout this website.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
