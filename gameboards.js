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
        clues: ["Meteor", "Blackhole", "Satellite", "Alien"],
        falseFriend: "Alien"
      }
    ],
    falseFriendTheme: "Horror Movies"
  },
  {
    id: 3,
    rows: [
      {
        theme: "Bodies of Water",
        clues: ["Fjord", "Shoal", "Ocean", "Isthmus"],
        falseFriend: "Isthmus"
      },
      {
        theme: "2 Player Games",
        clues: ["Checkers", "Cribbage", "Gin Rummy", "Bridge"],
        falseFriend: "Bridge"
      },
      {
        theme: "-am Names",
        clues: ["Sam", "Cam", "Pam", "Dam"],
        falseFriend: "Dam"
      },
      {
        theme: "Words with silent letters",
        clues: ["Gnu", "Gnat", "Gnome", "Gondola"],
        falseFriend: "Gondola"
      }
    ],
    falseFriendTheme: "Things that Span bodies of water"
  }
];

window.gameBoards = gameBoards;
