import { Navigation } from "@/components/Navigation";
import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Disclaimer</h1>
            <p className="text-muted-foreground">Last updated: October 2024</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">General Information</h2>
            <p className="text-muted-foreground">
              The information provided on this platform is for general informational purposes only. 
              We make no warranties about the completeness, reliability, and accuracy of this information.
            </p>
          </section>

          <section className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">Third-Party Content</h2>
            <p className="text-muted-foreground">
              Our platform may contain links to third-party applications and websites. We have no control 
              over the content and practices of these sites and cannot accept responsibility or liability 
              for their respective privacy policies.
            </p>
          </section>

          <section className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              In no event shall we be liable for any special, direct, indirect, consequential, or 
              incidental damages or any damages whatsoever arising out of or in connection with the use 
              of our service.
            </p>
          </section>

          <section className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">App Availability</h2>
            <p className="text-muted-foreground">
              App availability may vary by region. We are not responsible for apps that are not 
              available in your country or region.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
