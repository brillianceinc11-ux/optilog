import { Leaf, Linkedin, Youtube, Mail, Phone, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const solutions = ['Route Optimization', 'GIS & Network Analysis', 'Fleet Analytics', 'Carbon Analytics', 'Green Logistics'];
  const company = ['About', 'Our Model', 'Research', 'Insights', 'Contact'];

  return (
    <footer className="bg-charcoal-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern-light opacity-30" />

      <div className="relative container-px max-w-[1440px] mx-auto pt-20 pb-10">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-11 h-11 rounded-lg bg-forest-600 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg tracking-tight">OPTILOG</span>
                <span className="font-display font-medium text-[11px] tracking-[0.2em] text-forest-400">ANALYTICS</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Optimizing Routes. Reducing Emissions. Building a Greener Supply Chain.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Youtube, label: 'YouTube', href: '#' },
                { icon: Mail, label: 'Email', href: 'mailto:Brillianceinc2023@gmail.com' },
                { icon: Phone, label: 'Phone', href: 'tel:0116975475' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-forest-600 transition-colors duration-300 flex items-center justify-center border border-white/10"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold tracking-[0.15em] text-forest-400 mb-4 uppercase">Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item}>
                  <a href="#solutions" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1 group">
                    <span>{item}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold tracking-[0.15em] text-forest-400 mb-4 uppercase">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1 group">
                    <span>{item}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / statement */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.15em] text-forest-400 mb-4 uppercase">Connect</h4>
            <ul className="space-y-3 mb-6">
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">YouTube</a></li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-forest-400" />
                <a href="mailto:Brillianceinc2023@gmail.com" className="text-sm text-white/60 hover:text-white transition-colors">Brillianceinc2023@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-forest-400" />
                <a href="tel:0116975475" className="text-sm text-white/60 hover:text-white transition-colors">0116975475</a>
              </li>
            </ul>
            <div className="p-4 rounded-xl bg-forest-950/50 border border-forest-800/50">
              <p className="text-sm font-display font-medium text-forest-300">
                OptiLog Analytics
              </p>
              <p className="text-xs text-white/50 mt-1">
                Logistics &bull; GIS &bull; Spatial Intelligence
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; 2026 OptiLog Analytics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">Terms of Use</a>
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">Data Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
