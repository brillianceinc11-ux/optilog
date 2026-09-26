import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Hero } from '@/sections/Hero';
import { DataStrip } from '@/sections/DataStrip';
import { Problem } from '@/sections/Problem';
import { Solution } from '@/sections/Solution';
import { GISIntelligence } from '@/sections/GISIntelligence';
import { Experiment } from '@/sections/Experiment';
import { RouteVisualization } from '@/sections/RouteVisualization';
import { GreenLogistics } from '@/sections/GreenLogistics';
import { CarbonDashboard } from '@/sections/CarbonDashboard';
import { GreenFiscalPolicy } from '@/sections/GreenFiscalPolicy';
import { GreenLogisticsModel } from '@/sections/GreenLogisticsModel';
import { Services } from '@/sections/Services';
import { WhoWeServe } from '@/sections/WhoWeServe';
import { ImpactDashboard } from '@/sections/ImpactDashboard';
import { DataTransparency } from '@/sections/DataTransparency';
import { CTA } from '@/sections/CTA';
import { About } from '@/sections/About';
import { Insights } from '@/sections/Insights';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <DataStrip />
        <Problem />
        <Solution />
        <GISIntelligence />
        <Experiment />
        <RouteVisualization />
        <GreenLogistics />
        <CarbonDashboard />
        <GreenFiscalPolicy />
        <GreenLogisticsModel />
        <Services />
        <WhoWeServe />
        <ImpactDashboard />
        <DataTransparency />
        <CTA />
        <About />
        <Insights />
      </main>
      <Footer />
    </div>
  );
}

export default App;
