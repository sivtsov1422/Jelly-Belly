export type Bean = {
  backgroundColor: string;
  beanId: number;
  colorGroup: string;
  description: string;
  flavorName: string;
  glutenFree: boolean;
  groupName: string[];
  imageUrl: string;
  ingredients: string[];
  kosher: boolean;
  seasonal: boolean;
  sugarFree: boolean;
};

export type Fact = {
  description: string;
  factId: number;
  title: string;
};

export type Recipe = {
  additions1: additions1;
  additions2: [];
  additions3: [];
  directions: [];
  tips: [];
  recipeId: number;
  name: string;
  description: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  makingAmount: string;
  imageUrl: string;
  ingredients: ingredients;
};

export type Comb = {
  combinationId: number;
  name: string;
  tag: CombTag;
};

export type HistoryFact = {
  description: string;
  mileStoneId: number;
  year: number;
};

type CombTag = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
};
type additions1 = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
};

type ingredients = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
};
