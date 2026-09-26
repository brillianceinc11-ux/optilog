import { ArrowRight, MapPin, Truck, Route as RouteIcon } from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/36298868/pexels-photo-36298868.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-charcoal-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Logistics truck on a Kenyan highway"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/70 to-charcoal-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 via-transparent to-charcoal-950/40" />
      </div>

      {/* Animated GIS route overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-40" preserveAspectRatio="none">
        <defs>
          <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0" />
            <stop offset="50%" stopColor="#4ade80" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Route paths */}
        <path d="M -100 300 Q 200 250 400 320 T 800 280 T 1200 310 T 1600 290" stroke="url(#routeGrad)" strokeWidth="2" fill="none" strokeDasharray="8 4" className="animate-dash-flow" />
        <path d="M -100 450 Q 300 400 500 460 T 900 420 T 1300 450 T 1700 430" stroke="url(#routeGrad)" strokeWidth="1.5" fill="none" strokeDasharray="6 3" className="animate-dash-flow" style={{ animationDelay: '0.5s' }} />
        <path d="M -100 600 Q 250 560 450 620 T 850 580 T 1250 610 T 1650 590" stroke="url(#routeGrad)" strokeWidth="1" fill="none" strokeDasharray="4 2" className="animate-dash-flow" style={{ animationDelay: '1s' }} />
        {/* Location dots */}
        {[
          [15, 35], [35, 55], [55, 40], [70, 60], [85, 45],
        ].map(([x, y], i) => (
          <circle key={i} cx={`${x}%`} cy={`${y}%`} r="4" fill="#4ade80" className="animate-pulse-slow" style={{ animationDelay: `${i * 0.4}s` }} />
        ))}
      </svg>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern-dark opacity-40" />

      {/* Content */}
      <div className="relative flex-1 flex items-center container-px max-w-[1440px] mx-auto pt-24 pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-500/15 border border-forest-500/30 backdrop-blur-sm mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span className="text-xs font-medium text-forest-300 tracking-wide">GIS &bull; Route Optimization &bull; Climate Technology</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-display-2xl text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            Greening FMCG
            <br />
            Logistics in <span className="text-forest-400">Kenya</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            Using GIS, route optimization and logistics analytics to reduce unnecessary kilometres, fuel consumption and transport emissions across FMCG distribution networks.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-forest-600 hover:bg-forest-500 text-white font-semibold transition-all duration-300 group shadow-lg shadow-forest-900/50"
            >
              Optimize Your Logistics
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#green-logistics"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 hover:border-white/40 text-white font-semibold backdrop-blur-sm transition-all duration-300"
            >
              Explore the Green Logistics Model
            </a>
          </div>

          {/* Mini indicators */}
          <div className="flex flex-wrap gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            {[
              { icon: Truck, label: '20-Vehicle Fleet Framework' },
              { icon: RouteIcon, label: '5 Distribution Routes' },
              { icon: MapPin, label: '21 Markets Served' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/50">
                <Icon className="w-4 h-4 text-forest-400" />
                <span className="text-xs font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
