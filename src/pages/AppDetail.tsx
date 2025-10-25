import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { mockApps } from "@/data/mockApps";
import { Button } from "@/components/ui/button";
import { Star, Download, Share2, ChevronLeft, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const AppDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const app = mockApps.find(a => a.id === id);

  if (!app) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">App Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: `${app.name} is being downloaded...`,
    });
  };

  const handleShare = () => {
    toast({
      title: "Share Link Copied",
      description: "App link copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ChevronLeft className="w-4 h-4" />
            Back to Apps
          </Button>
        </Link>

        {/* App Header */}
        <div className="bg-card rounded-3xl p-8 shadow-[var(--shadow-card)] border border-border mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* App Icon */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-7xl shadow-[var(--shadow-glow)]">
                {app.icon}
              </div>
            </div>

            {/* App Info */}
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">{app.name}</h1>
                <p className="text-lg text-muted-foreground">{app.tagline}</p>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(app.rating)
                            ? "fill-accent text-accent"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">{app.rating}</span>
                  <span className="text-muted-foreground">({app.reviews.toLocaleString()} reviews)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
                <div>
                  <p className="text-sm text-muted-foreground">Downloads</p>
                  <p className="text-lg font-semibold text-foreground">{app.downloads}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Size</p>
                  <p className="text-lg font-semibold text-foreground">{app.size}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Version</p>
                  <p className="text-lg font-semibold text-foreground">{app.version}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Category</p>
                  <p className="text-lg font-semibold text-foreground">{app.category}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  size="lg"
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-[var(--shadow-glow)] gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleShare}
                  className="gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">About this app</h2>
              <p className="text-muted-foreground leading-relaxed">{app.description}</p>
            </div>

            {/* Features */}
            <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
              <div className="grid gap-4">
                {app.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Developer Info */}
            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Developer</h3>
              <p className="text-muted-foreground mb-2">{app.developer}</p>
              <p className="text-sm text-muted-foreground">
                Updated: {new Date(app.updatedAt).toLocaleDateString()}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Downloads</span>
                  <span className="font-semibold text-foreground">{app.downloads}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Average Rating</span>
                  <span className="font-semibold text-foreground">{app.rating}/5.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Reviews</span>
                  <span className="font-semibold text-foreground">{app.reviews.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetail;
