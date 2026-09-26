import { Factory, Truck, Warehouse, Store, ShoppingCart, Building2 } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const sectors = [
  { icon: Factory, title: 'FMCG Manufacturers', img: 'https://images.pexels.com/photos/8069554/pexels-photo-8069554.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Truck, title: 'Distributors', img: 'https://images.pexels.com/photos/36298868/pexels-photo-36298868.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Building2, title: '3PL Companies', img: 'https://images.pexels.com/photos/4487383/pexels-photo-4487383.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: ShoppingCart, title: 'Wholesalers', img: 'https://images.pexels.com/photos/5951182/pexels-photo-5951182.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Store, title: 'Retail Networks', img: 'https://images.pexels.com/photos/21582447/pexels-photo-21582447.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon: Warehouse, title: 'Warehousing & Distribution', img: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export function WhoWeServe() {
  return (
    <section className="bg-charcoal-50 py-20 lg:py-28">
      <div className="container-px max-w-[1440px] mx-auto">
        <Reveal className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-[0.15em] text-forest-600 uppercase mb-4 block">Who We Serve</span>
          <h2 className="font-display font-bold text-display-xl text-charcoal-900 mb-6">
            Built for Businesses Moving Products Every Day
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((s, i) => (
            <Reveal key={s.title} delay={((i % 3) + 1) as 1 | 2 | 3 | 4 | 5}>
              <div className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/30 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="w-11 h-11 rounded-xl bg-forest-600/80 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-forest-600 transition-colors">
                    <s.icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">{s.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
