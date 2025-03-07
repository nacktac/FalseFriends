// Array of game boards
const gameBoards = [
  {
    id: 1,
    rows: [
      {
        theme: "Biomes",
        clues: ["Desert", "Taiga", "Savannah", "Canyon"],
        falseFriend: "Canyon"
      },
      {
        theme: "Wind Instruments",
        clues: ["Flute", "Oboe", "Organ", "Piano"],
        falseFriend: "Piano"
      },
      {
        theme: "WWII Generals",
        clues: ["Patton", "MacArthur", "Eisenhower", "Marshal"],
        falseFriend: "Marshal"
      },
      {
        theme: "Game Enders",
        clues: ["Pin", "Checkmate", "Knockout", "Slam"],
        falseFriend: "Slam"
      }
    ],
    falseFriendTheme: "Grand ____"
  },
  {
    id: 2,
    rows: [
      {
        theme: "Mammals",
        clues: ["Lion", "Elephant", "Tiger", "Eagle"],
        falseFriend: "Eagle"
      },
      {
        theme: "Planets",
        clues: ["Mercury", "Venus", "Earth", "Moon"],
        falseFriend: "Moon"
      },
      {
        theme: "Currencies",
        clues: ["Euro", "Pound", "Yen", "Amber"],
        falseFriend: "Amber"
      },
      {
        theme: "Vegetables",
        clues: ["Carrot", "Broccoli", "Radish", "Seal"],
        falseFriend: "Seal"
      }
    ],
    falseFriendTheme: "American _____"
  },
  {
    id: 3,
    rows: [
      {
        theme: "Citrus Fruits",
        clues: ["Lemon", "Lime", "Grapefruit", "Apple"],
        falseFriend: "Apple"
      },
      {
        theme: "Planets with Rings",
        clues: ["Saturn", "Jupiter", "Uranus", "Mars"],
        falseFriend: "Mars"
      },
      {
        theme: "Rodents",
        clues: ["Mouse", "Hamster", "Squirrel", "Pie"],
        falseFriend: "Pie"
      },
      {
        theme: "Web Browsers",
        clues: ["Chrome", "Firefox", "Safari", "Bottom"],
        falseFriend: "Bottom"
      }
    ],
    falseFriendTheme: "_____ of a chart"
  },
  {
    id: 4,
    rows: [
      {
        theme: "Stringed Instruments",
        clues: ["Violin", "Guitar", "Cello", "Cross"],
        falseFriend: "Cross"
      },
      {
        theme: "Berries",
        clues: ["Strawberry", "Blueberry", "Raspberry", "Bold"],
        falseFriend: "Bold"
      },
      {
        theme: "Ancient Civilizations",
        clues: ["Egyptian", "Mayan", "Roman", "Beautiful"],
        falseFriend: "Beautiful"
      },
      {
        theme: "Mountains",
        clues: ["Everest", "Kilimanjaro", "Denali", "Brave"],
        falseFriend: "Brave"
      }
    ],
    falseFriendTheme: "_____ and the _____ (Disney movie)"
  },
  {
    id: 5,
    rows: [
      {
        theme: "Spices",
        clues: ["Cinnamon", "Turmeric", "Cardamom", "Paint"],
        falseFriend: "Paint"
      },
      {
        theme: "Dogs",
        clues: ["Labrador", "Poodle", "Beagle", "Fresh"],
        falseFriend: "Fresh"
      },
      {
        theme: "Vegetables",
        clues: ["Carrot", "Celery", "Spinach", "Wash"],
        falseFriend: "Wash"
      },
      {
        theme: "Software Companies",
        clues: ["Microsoft", "Adobe", "Oracle", "Dry"],
        falseFriend: "Dry"
      }
    ],
    falseFriendTheme: "Laundry _____"
  },
  {
    id: 6,
    rows: [
      {
        theme: "Rivers",
        clues: ["Amazon", "Nile", "Mississippi", "Pencil"],
        falseFriend: "Pencil"
      },
      {
        theme: "Metals",
        clues: ["Gold", "Silver", "Copper", "Case"],
        falseFriend: "Case"
      },
      {
        theme: "Flowers",
        clues: ["Rose", "Tulip", "Daisy", "Pillow"],
        falseFriend: "Pillow"
      },
      {
        theme: "Social Media",
        clues: ["Twitter", "Instagram", "Facebook", "Book"],
        falseFriend: "Book"
      }
    ],
    falseFriendTheme: "School supplies"
  },
  {
    id: 7,
    rows: [
      {
        theme: "Liquids",
        clues: ["Water", "Oil", "Vinegar", "Day"],
        falseFriend: "Day"
      },
      {
        theme: "Desserts",
        clues: ["Cake", "Pie", "Ice Cream", "Light"],
        falseFriend: "Light"
      },
      {
        theme: "Ball Sports",
        clues: ["Soccer", "Basketball", "Tennis", "Break"],
        falseFriend: "Break"
      },
      {
        theme: "Trees",
        clues: ["Oak", "Pine", "Maple", "Time"],
        falseFriend: "Time"
      }
    ],
    falseFriendTheme: "Parts of the day"
  }
  // Add more game boards as needed
];

window.gameBoards = gameBoards;
