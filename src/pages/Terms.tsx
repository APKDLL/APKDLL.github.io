import { Navigation } from "@/components/Navigation";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: October 2024</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using this platform, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
            <p className="text-muted-foreground">
              You are responsible for maintaining the confidentiality of your account and password. 
              You agree to accept responsibility for all activities that occur under your account.
            </p>
          </section>

          <section className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">Prohibited Uses</h2>
            <p className="text-muted-foreground">
              You may not use our platform for any illegal or unauthorized purpose. You must not 
              transmit any worms, viruses, or any code of a destructive nature.
            </p>
          </section>

          <section className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground">
              The service and its original content, features, and functionality are owned by us and 
              are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p className="text-muted-foreground">
              We may terminate or suspend your account and bar access to the service immediately, 
              without prior notice or liability, under our sole discretion, for any reason whatsoever.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
