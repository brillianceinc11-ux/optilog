import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const articles = [
  {
    title: 'Greening FMCG Logistics in Kenya',
    summary: 'How route optimization and GIS are transforming distribution efficiency across Kenyan FMCG networks.',
    img: 'https://images.pexels.com/photos/36298868/pexels-photo-36298868.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Logistics',
  },
  {
    title: 'Route Optimization & Carbon Reduction',
    summary: 'The link between fewer kilometres on the road and measurable transport emissions savings.',
    img: 'https://images.pexels.com/photos/14005602/pexels-photo-14005602.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Sustainability',
  },
  {
    title: 'GIS for Sustainable Transport',
    summary: 'Using spatial intelligence to model, analyze and improve logistics networks in emerging markets.',
    img: 'https://images.pexels.com/photos/34069/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    category: 'GIS',
  },
  {
    title: "Kenya's Green Fiscal Transition",
    summary: "How logistics efficiency aligns with Kenya's broader shift toward a low-carbon economy.",
    img: 'https://images.pexels.com/photos/16614580/pexels-photo-16614580.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Policy',
  },
  {
    title: 'The Future of Data-Driven Logistics',
    summary: 'Why spatial data and analytics will define the next decade of African supply chain innovation.',
    img: 'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Innovation',
  },
];

export function Insights() {
  return (
    <section id="insights" className="bg-charcoal-50 py-20 lg:py-28">
      <div className="container-px max-w-[1440px] mx-auto">
        <Reveal className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.15em] text-forest-600 uppercase mb-4 block">Insights & Research</span>
            <h2 className="font-display font-bold text-display-xl text-charcoal-900">
              Research, Analysis & Perspectives
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-600 hover:text-forest-700 transition-colors group">
            View All Insights
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={((i % 3) + 1) as 1 | 2 | 3 | 4 | 5}>
              <article className="group h-full rounded-2xl overflow-hidden bg-white border border-charcoal-100 hover:border-forest-200 hover:shadow-xl hover:shadow-forest-900/5 transition-all duration-500 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm">
                    <span className="text-[10px] font-semibold text-forest-700 tracking-wide">{a.category}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-lg text-charcoal-900 mb-3 group-hover:text-forest-700 transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-sm text-charcoal-500 leading-relaxed mb-5 flex-1">{a.summary}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-600 group-hover:text-forest-700 transition-colors"
                  >
                    Read More
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}

          {/* CTA Card */}
          <Reveal delay={3}>
            <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-forest-700 to-forest-900 text-white flex flex-col justify-center items-center text-center">
              <h3 className="font-display font-bold text-xl mb-3">Want to stay updated?</h3>
              <p className="text-sm text-white/60 mb-5 leading-relaxed">
                Get the latest insights on green logistics, GIS analytics and sustainable transport in Kenya.
              </p>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-white text-forest-800 text-sm font-semibold hover:bg-forest-50 transition-colors"
              >
                Subscribe to Insights
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
