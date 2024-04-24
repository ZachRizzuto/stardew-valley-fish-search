export interface ProcessEnv {
  API_KEY: string;
}

export type TFish = {
  id: number;
  name: string;
  location: string;
  time: string;
  imageUrl: string;
  sellPrice: number[][];
  description: string;
  season: string;
  difficulty: string;
  usedIn?: string[];
  weather: string;
};
