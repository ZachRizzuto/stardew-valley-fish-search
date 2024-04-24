import { TFish } from "./src/types";

export const dataAllFish: TFish[] = [
  {
    id: 0,
    name: "Pufferfish",
    location: "Ocean, Ginger Island Ocean",
    time: "12-4pm",
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
];

// Outline:
// {
//     name: "",
//     location: "",
//     time: "",
//     imageUrl: "",
//     sellPrice: [],
//     description: "",
//     season: "",
//     difficulty: "",
//     usedIn: [],
//     weather: "",
//   }
