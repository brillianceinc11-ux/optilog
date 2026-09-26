import { Route, Map, Truck, Boxes, Cloud, Leaf } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const services = [
  { icon: Route, title: 'Route Optimization', text: 'Identify efficient delivery sequences and reduce unnecessary travel.' },
  { icon: Map, title: 'GIS & Network Analysis', text: 'Model distribution networks using spatial intelligence.' },
  { icon: Truck, title: 'Fleet Analytics', text: 'Analyze vehicle utilization, allocation and operating patterns.' },
  { icon: Boxes, title: 'FMCG Distribution Intelligence', text: 'Improve market clustering, delivery planning and dispatch coordination.' },
  { icon: Cloud, title: 'Carbon Footprint Analysis', text: 'Estimate transport-related fuel use and emissions using transparent assumptions.' },
  { icon: Leaf, title: 'Green Logistics Strategy', text: 'Connect operational improvements with sustainability and green investment objectives.' },
];

export function Services() {
  return (
    <section id="solutions" className="bg-white py-20 lg:py-28">
      <div className="container-px max-w-[1440px] mx-auto">
        <Reveal className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-[0.15em] text-forest-600 uppercase mb-4 block">Services</span>
          <h2 className="font-display font-bold text-display-xl text-charcoal-900 mb-6">
            What We Help Businesses Do
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={((i % 3) + 1) as 1 | 2 | 3 | 4 | 5}>
              <div className="group h-full p-7 rounded-2xl bg-white border border-charcoal-100 hover:border-forest-300 hover:shadow-xl hover:shadow-forest-900/5 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-forest-50 group-hover:bg-forest-600 transition-colors duration-500 flex items-center justify-center mb-6">
                  <s.icon className="w-7 h-7 text-forest-600 group-hover:text-white transition-colors duration-500" strokeWidth={1.7} />
                </div>
                <h3 className="font-display font-bold text-xl text-charcoal-900 mb-3">{s.title}</h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">{s.text}</p>
                {/* Hover arrow */}
                <div className="mt-5 flex items-center gap-1.5 text-forest-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                  <span className="text-xs font-semibold">Learn more</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
