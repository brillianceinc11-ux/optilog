import { MapPin, Leaf, Activity, Layers } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const highlights = [
  { icon: Layers, label: 'Logistics' },
  { icon: MapPin, label: 'GIS' },
  { icon: Activity, label: 'Spatial Intelligence' },
  { icon: Leaf, label: 'Green Transport' },
];

const aboutImage = 'https://images.pexels.com/photos/15496542/pexels-photo-15496542.jpeg?auto=compress&cs=tinysrgb&w=800';

export function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="container-px max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <Reveal>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden h-[400px] lg:h-[500px]">
                <img
                  src={aboutImage}
                  alt="Nairobi skyline — Kenya's logistics hub"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 lg:-right-8 p-5 rounded-2xl bg-forest-900 text-white shadow-xl max-w-[240px]">
                <div className="text-xs text-forest-400 font-medium mb-1">Headquartered in</div>
                <div className="font-display font-bold text-lg">Nairobi, Kenya</div>
                <div className="text-xs text-white/50 mt-1">Serving FMCG distribution networks across East Africa</div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={2}>
            <span className="text-xs font-semibold tracking-[0.15em] text-forest-600 uppercase mb-4 block">About OptiLog</span>
            <h2 className="font-display font-bold text-display-xl text-charcoal-900 mb-6">
              Building Smarter, Greener Logistics in Kenya
            </h2>
            <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
              OptiLog Analytics is a logistics intelligence concept focused on applying GIS, spatial analysis, route optimization and sustainability analytics to improve distribution efficiency and support Kenya's transition toward greener transport.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest-50 border border-forest-100">
                  <h.icon className="w-4 h-4 text-forest-600" />
                  <span className="text-sm font-semibold text-forest-700">{h.label}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-charcoal-50 border border-charcoal-100">
              <p className="text-sm font-display font-medium text-charcoal-700">
                Logistics &bull; GIS &bull; Spatial Intelligence &bull; Green Transport
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
