import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import MockSites from "../components/MockSites";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-surface text-foreground">
      <Portfolio />
      <Testimonials />
      <MockSites />
    </div>
  );
}