import { ArrowRight, Play, Mail, Phone } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function CTA() {
  return (
    <section id="contact" className="bg-forest-900 text-white py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dark opacity-20" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-forest-600/10 blur-3xl animate-glow-pulse" />

      <div className="relative container-px max-w-[1440px] mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-display-xl text-white mb-6">
            Ready to Make Your Logistics Greener?
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Your logistics network already contains the data needed to identify opportunities for greater efficiency. OptiLog helps turn that data into maps, routes, performance indicators and measurable sustainability insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:Brillianceinc2023@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-forest-50 text-forest-800 font-semibold transition-all duration-300 group shadow-lg"
            >
              Request a Logistics Assessment
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#impact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/25 hover:border-white/50 text-white font-semibold backdrop-blur-sm transition-all duration-300"
            >
              <Play className="w-4 h-4" />
              Start a Pilot Project
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
            <a href="mailto:Brillianceinc2023@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-forest-400" />
              <span className="text-sm font-medium">Brillianceinc2023@gmail.com</span>
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <a href="tel:0116975475" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-forest-400" />
              <span className="text-sm font-medium">0116975475</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
