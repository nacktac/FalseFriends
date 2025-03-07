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
      theme: "Famous Paintings",
      clues: ["Nighthawks", "Mona Lisa", "Starry Night", "Scream"],
      falseFriend: "Scream"
    },
    {
      theme: "1 word for \"Leave!\"",
      clues: ["Shoo", "Vamoose", "Scram", "Get Out"],
      falseFriend: "Get Out"
    },
    {
      theme: "Pronouns for People",
      clues: ["He", "She", "They", "It"],
      falseFriend: "It"
    },
    {
      theme: "Things we've found in space",
      clues: ["Meteor", "blackhole", "Satellite", "Alien"],
      falseFriend: "Alien"
    }
  ],
  falseFriendTheme: "Horror Movies"
  },
  {
    id: 3,
 rows: [
    {
      theme: "Leaky Kitchen Gear",
      clues: ["Funnel", "Colander", "Grater", "Bowls"],
      falseFriend: "Bowls"
    },
    {
      theme: "3D Arts",
      clues: ["Ceramics", "Topiary", "Origami", "Painting"],
      falseFriend: "Painting"
    },
    {
      theme: "Regal Resting Places",
      clues: ["Canopy Bed", "Liter", "Throne", "Statue"],
      falseFriend: "Statue"
    },
    {
      theme: "Inorganic Earthen Spoils",
      clues: ["Minerals", "Rocks", "Gems", "Fossils"],
      falseFriend: "Fossils"
    }
  ],
  falseFriendTheme: "Museum Finds"
},
  {
    id: 4,
Let me convert this text string into the structured JSON format:
jsonCopy{
  id: 5,
  rows: [
    {
      theme: "Sleep",
      clues: ["Snooze", "Nap", "Slumber", "Alarm"],
      falseFriend: "Alarm"
    },
    {
      theme: "More than sufficient",
      clues: ["Copious", "Abundant", "Ample", "Positive"],
      falseFriend: "Positive"
    },
    {
      theme: "Man Made Tools",
      clues: ["Hammers", "Levers", "Doors", "Teeth"],
      falseFriend: "Teeth"
    },
    {
      theme: "Bright and Showy",
      clues: ["Flamboyent", "Flashy", "Flare", "Flag"],
      falseFriend: "Flag"
    }
  ],
  falseFriendTheme: "False ____"
}];

window.gameBoards = gameBoards;
