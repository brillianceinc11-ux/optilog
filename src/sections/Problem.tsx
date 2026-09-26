import { Route, Fuel, Cloud, Database } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Counter } from '@/components/Counter';

const problems = [
  {
    icon: Route,
    title: 'Unnecessary Kilometres',
    text: 'Poor route sequencing can increase daily travel distance.',
    stat: '25',
    statLabel: 'extra km/day observed',
  },
  {
    icon: Fuel,
    title: 'Fuel Consumption',
    text: 'Every avoidable kilometre can contribute to additional fuel use.',
    stat: '7.5K',
    statLabel: 'potential km/year',
  },
  {
    icon: Cloud,
    title: 'Emissions',
    text: 'Transport inefficiency increases the carbon footprint of distribution.',
    stat: 'CO₂',
    statLabel: 'impact to be modelled',
  },
  {
    icon: Database,
    title: 'Lost Operational Intelligence',
    text: 'Businesses often have large amounts of logistics data but limited spatial insight.',
    stat: 'GIS',
    statLabel: 'unlocking spatial data',
  },
];

export function Problem() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-px max-w-[1440px] mx-auto">
        <Reveal className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-[0.15em] text-forest-600 uppercase mb-4 block">The Challenge</span>
          <h2 className="font-display font-bold text-display-xl text-charcoal-900 mb-6">
            The Hidden Cost of Inefficient Logistics
          </h2>
          <p className="text-lg text-charcoal-600 leading-relaxed">
            FMCG distribution depends on thousands of daily vehicle movements. When routes, market clusters, dispatch schedules and fleet assignments are poorly coordinated, businesses can travel unnecessary kilometres, consume additional fuel and generate avoidable emissions.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={(i + 1) as 1 | 2 | 3 | 4 | 5}>
              <div className="group h-full p-6 rounded-2xl border border-charcoal-100 hover:border-forest-300 bg-white hover:bg-forest-50/30 transition-all duration-500 hover:shadow-xl hover:shadow-forest-900/5">
                <div className="w-12 h-12 rounded-xl bg-charcoal-50 group-hover:bg-forest-600 transition-colors duration-500 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-charcoal-700 group-hover:text-white transition-colors duration-500" strokeWidth={1.8} />
                </div>
                <h3 className="font-display font-semibold text-lg text-charcoal-900 mb-2">{p.title}</h3>
                <p className="text-sm text-charcoal-500 leading-relaxed mb-4">{p.text}</p>
                <div className="pt-4 border-t border-charcoal-100 group-hover:border-forest-200 transition-colors">
                  <div className="font-display font-bold text-2xl text-forest-600">
                    {p.stat === 'CO₂' || p.stat === 'GIS' || p.stat === '7.5K' ? p.stat : <Counter target={parseInt(p.stat)} />}
                  </div>
                  <div className="text-xs text-charcoal-400 mt-0.5">{p.statLabel}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
