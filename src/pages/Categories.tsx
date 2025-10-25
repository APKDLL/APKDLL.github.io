import { Navigation } from "@/components/Navigation";
import { AppCard } from "@/components/AppCard";
import { mockApps } from "@/data/mockApps";
import { Grid, Smartphone, Dumbbell, GraduationCap, Music, Briefcase, UtensilsCrossed } from "lucide-react";

const Categories = () => {
  const categories = [
    { name: "All", icon: Grid, color: "from-purple-500 to-pink-500" },
    { name: "Photography", icon: Smartphone, color: "from-blue-500 to-cyan-500" },
    { name: "Health & Fitness", icon: Dumbbell, color: "from-green-500 to-emerald-500" },
    { name: "Education", icon: GraduationCap, color: "from-yellow-500 to-orange-500" },
    { name: "Music & Audio", icon: Music, color: "from-pink-500 to-rose-500" },
    { name: "Productivity", icon: Briefcase, color: "from-indigo-500 to-purple-500" },
    { name: "Food & Drink", icon: UtensilsCrossed, color: "from-red-500 to-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Browse Categories
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore apps by category to find exactly what you need
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                className="group relative overflow-hidden rounded-2xl p-6 bg-card border border-border hover:border-primary/50 transition-all hover:shadow-[var(--shadow-glow)]"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground text-left">{category.name}</h3>
                <p className="text-sm text-muted-foreground text-left mt-1">
                  {mockApps.filter(app => app.category === category.name).length} apps
                </p>
              </button>
            );
          })}
        </div>

        <div className="space-y-12">
          {categories.slice(1).map((category) => {
            const filteredApps = mockApps.filter(app => app.category === category.name);
            if (filteredApps.length === 0) return null;
            
            return (
              <section key={category.name}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                  <h2 className="text-3xl font-bold text-foreground">{category.name}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredApps.map((app) => (
                    <AppCard key={app.id} app={app} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
