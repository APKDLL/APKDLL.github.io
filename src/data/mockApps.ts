export interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  screenshots: string[];
  category: string;
  downloads: string;
  size: string;
  version: string;
  rating: number;
  reviews: number;
  developer: string;
  features: string[];
  updatedAt: string;
}

export const mockApps: App[] = [
  {
    id: "photo-editor-pro",
    name: "Photo Editor Pro",
    tagline: "Professional photo editing made easy",
    description: "Transform your photos with powerful editing tools. Photo Editor Pro offers professional-grade features in an intuitive interface. Adjust colors, apply filters, remove backgrounds, and create stunning compositions with ease.",
    icon: "🎨",
    screenshots: [],
    category: "Photography",
    downloads: "10M+",
    size: "45.2MB",
    version: "3.2.1",
    rating: 4.7,
    reviews: 15420,
    developer: "Creative Studios",
    features: [
      "Advanced color correction and grading",
      "AI-powered background removal",
      "100+ professional filters and effects",
      "Layer-based editing system",
      "RAW image format support",
      "Non-destructive editing workflow"
    ],
    updatedAt: "2024-10-20"
  },
  {
    id: "fitness-tracker",
    name: "Fitness Tracker",
    tagline: "Your personal workout companion",
    description: "Achieve your fitness goals with Fitness Tracker. Track workouts, monitor progress, and get personalized training plans. Connect with friends, join challenges, and stay motivated on your fitness journey.",
    icon: "💪",
    screenshots: [],
    category: "Health & Fitness",
    downloads: "25M+",
    size: "32.8MB",
    version: "5.1.0",
    rating: 4.8,
    reviews: 28934,
    developer: "HealthTech Inc",
    features: [
      "Custom workout plans and routines",
      "Real-time exercise tracking",
      "Nutrition and calorie counter",
      "Progress photos and measurements",
      "Social challenges and competitions",
      "Integration with wearable devices"
    ],
    updatedAt: "2024-10-18"
  },
  {
    id: "language-master",
    name: "Language Master",
    tagline: "Learn languages through immersion",
    description: "Master new languages with interactive lessons and real conversations. Language Master uses proven methods to help you speak confidently in over 30 languages.",
    icon: "🌍",
    screenshots: [],
    category: "Education",
    downloads: "50M+",
    size: "78.5MB",
    version: "4.6.2",
    rating: 4.6,
    reviews: 42156,
    developer: "EduLearn Global",
    features: [
      "Interactive lessons with native speakers",
      "Speech recognition for pronunciation",
      "Offline mode for learning anywhere",
      "Personalized learning paths",
      "Cultural context and real-life scenarios",
      "Daily practice reminders"
    ],
    updatedAt: "2024-10-22"
  },
  {
    id: "music-studio",
    name: "Music Studio",
    tagline: "Create music anywhere, anytime",
    description: "Professional music production in your pocket. Record, mix, and master your tracks with studio-quality tools. Perfect for musicians, producers, and creators.",
    icon: "🎵",
    screenshots: [],
    category: "Music & Audio",
    downloads: "15M+",
    size: "156.3MB",
    version: "2.8.5",
    rating: 4.9,
    reviews: 19823,
    developer: "SoundWave Studios",
    features: [
      "Multi-track recording and editing",
      "Virtual instruments and synthesizers",
      "Professional audio effects",
      "MIDI support and controllers",
      "Cloud collaboration with other artists",
      "Export in multiple audio formats"
    ],
    updatedAt: "2024-10-15"
  },
  {
    id: "task-manager-pro",
    name: "Task Manager Pro",
    tagline: "Organize your life effortlessly",
    description: "Stay productive with smart task management. Create projects, set priorities, track time, and collaborate with teams. Get more done with less stress.",
    icon: "✓",
    screenshots: [],
    category: "Productivity",
    downloads: "8M+",
    size: "28.4MB",
    version: "6.0.1",
    rating: 4.5,
    reviews: 12567,
    developer: "ProductivityHub",
    features: [
      "Smart task organization and priorities",
      "Calendar integration and reminders",
      "Team collaboration and sharing",
      "Time tracking and productivity analytics",
      "Cross-platform synchronization",
      "Customizable workflows and templates"
    ],
    updatedAt: "2024-10-21"
  },
  {
    id: "recipe-finder",
    name: "Recipe Finder",
    tagline: "Discover delicious recipes daily",
    description: "Find the perfect recipe for any occasion. Search thousands of recipes, save favorites, create shopping lists, and follow step-by-step cooking instructions.",
    icon: "🍳",
    screenshots: [],
    category: "Food & Drink",
    downloads: "12M+",
    size: "41.7MB",
    version: "3.4.0",
    rating: 4.7,
    reviews: 16789,
    developer: "Culinary Apps",
    features: [
      "Thousands of tested recipes",
      "Advanced search and filters",
      "Personalized recipe recommendations",
      "Shopping list generator",
      "Step-by-step cooking mode",
      "Nutritional information"
    ],
    updatedAt: "2024-10-19"
  }
];
