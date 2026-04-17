export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type Category = 'Sweet' | 'Savory' | 'Healthy' | 'Bakery';
export type CostEstimate = '$' | '$$' | '$$$';

export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
  optional?: boolean;
}

export interface Step {
  order: number;
  text: string;
  image?: string;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: Category;
  subcategory?: string;
  difficulty: Difficulty;
  prepTime: number; // minutes
  cookTime: number; // minutes
  costEstimate: CostEstimate;
  servings: number;
  ingredients: Ingredient[];
  steps: Step[];
  images: string[];
  ratingAvg: number;
  ratingCount: number;
  authorId: string;
  createdAt: string;
}

export interface UserProfile {
  uid: string;
  displayName: string;
  photoURL: string;
  favorites: string[]; // array of recipe IDs
}

export interface RecipeComment {
  id: string;
  userId: string;
  userName: string;
  userPhoto: string;
  text: string;
  rating: number;
  imageUrl?: string;
  createdAt: string;
}
