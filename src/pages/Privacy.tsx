import { Navigation } from "@/components/Navigation";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: October 2024</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground">
              We collect information that you provide directly to us, including when you create an account, 
              download apps, or communicate with us. This may include your name, email address, and usage data.
            </p>
          </section>

          <section className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect to provide, maintain, and improve our services, 
              to communicate with you, and to protect our users and services.
            </p>
          </section>

          <section className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal data 
              against unauthorized or unlawful processing and accidental loss, destruction, or damage.
            </p>
          </section>

          <section className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground">
              You have the right to access, update, or delete your personal information at any time. 
              Please contact us if you wish to exercise these rights.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
