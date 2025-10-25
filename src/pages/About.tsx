import { Navigation } from "@/components/Navigation";
import { Heart, Users, Zap, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About AppStore
          </h1>
          <p className="text-xl text-muted-foreground">
            Your trusted source for quality applications
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              We are dedicated to providing users with access to the best applications across all categories. 
              Our platform connects millions of users with quality apps that enhance their digital experience.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                Every app is carefully reviewed to ensure it meets our high standards for quality and security.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Driven</h3>
              <p className="text-muted-foreground">
                Our community of 100M+ users helps shape the platform through reviews and feedback.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Always Updated</h3>
              <p className="text-muted-foreground">
                Daily updates ensure you always have access to the latest versions and new apps.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure & Safe</h3>
              <p className="text-muted-foreground">
                All apps undergo rigorous security checks to protect your privacy and data.
              </p>
            </div>
          </div>

          <section className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              Have questions or feedback? We'd love to hear from you. Contact our support team 
              at support@appstore.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
