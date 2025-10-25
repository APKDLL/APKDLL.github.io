import { Link } from "react-router-dom";
import { Star, Download } from "lucide-react";
import { App } from "@/data/mockApps";

interface AppCardProps {
  app: App;
}

export const AppCard = ({ app }: AppCardProps) => {
  return (
    <Link to={`/app/${app.id}`}>
      <div className="group relative bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-1 border border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative flex items-start gap-4">
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl shadow-lg">
            {app.icon}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground truncate group-hover:text-primary transition-colors">
              {app.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
              {app.tagline}
            </p>
            
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span className="font-medium text-foreground">{app.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Download className="w-4 h-4" />
                <span>{app.downloads}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {app.description}
          </p>
        </div>
      </div>
    </Link>
  );
};
