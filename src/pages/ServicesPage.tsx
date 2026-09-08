import Services from "../components/Services";
import Process from "../components/Process";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-surface text-foreground overflow-x-hidden">
      <Services />
      <Process />
    </div>
  );
}