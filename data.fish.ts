import { TFish } from "./src/types";

export const dataAllFish: TFish[] = [
  {
    id: 0,
    name: "Pufferfish",
    location: "Ocean, Ginger Island Ocean",
    time: "12pm-4pm",
    imageUrl:
      "https://stardewvalleywiki.com/mediawiki/images/b/ba/Pufferfish.png",
    sellPrice: [
      [200, 250, 300, 400],
      [250, 312, 375, 500],
      [300, 375, 450, 600],
    ],
    description: "Inflates when threatened",
    season: "Summer, All Seasons Ginger Island",
    difficulty: "80",
    usedIn: [
      "Speacialty Fish Bundle",
      "Abigail loved Gift",
      "Aquatic Research Quest",
    ],
    weather: "Sun",
  },
  {
    id: 1,
    name: "Anchovy",
    location: "Ocean",
    time: "Anytime",
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/7/79/Anchovy.png",
    sellPrice: [
      [30, 37, 45, 60],
      [37, 46, 56, 75],
      [45, 55, 67, 90],
    ],
    description: "A small silver fish found in the ocean",
    season: "Spring and Fall",
    difficulty: "30",
    usedIn: [],
    weather: "Any",
  },
  {
    id: 2,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/c/c5/Tuna.png",
    name: "Tuna",
    description: "A large fish that lives in the ocean.",
    sellPrice: [
      [100, 125, 150, 200],
      [125, 156, 187, 250],
      [150, 187, 225, 300],
    ],
    location: "Ocean, Ginger Island Ocean",
    time: "6am-7pm",
    season: "Summer, Winter, All Seasons Ginger Island",
    weather: "Any",
    difficulty: "70",
    usedIn: ["Ocean Fish Bundle", "Quality Fish Bundle", "Fish Taco"],
  },
  {
    id: 3,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/0/04/Sardine.png",
    name: "Sardine",
    description: "A common ocean fish.",
    sellPrice: [
      [40, 50, 60, 80],
      [50, 62, 75, 100],
      [60, 75, 90, 120],
    ],
    location: "Ocean",
    time: "6am-7pm",
    season: "Spring, Fall, and Winter",
    weather: "Any",
    difficulty: "30",
    usedIn: ["Ocean Fish Bundle", "Dish O' The Sea"],
  },
];

// Outline:
// {
//     id: 0,
//     imageUrl: "",
//     name: "",
//     description: "",
//     sellPrice: [[],[],[]],
//     location: "",
//     time: "",
//     season: "",
//     weather: "",
//     difficulty: "",
//     usedIn: [],
//   }
