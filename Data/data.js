var bios = [
  {
    name: "Goku",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!"
  },
  {
    name: "Vegeta",
    race: "Saiyan",
    bio: "A balanced fighter with good offensive and defensive capabilities"
  }
];

var stats = [
  {
    name: "Goku",
    Power: "S",
    Speed: "B",
    Technique: "A",
    Reach: "A",
    Energy: "A",
    "Ease of use": "SS",
  },
  {
    name: "Vegeta",
    Power: "A",
    Speed: "A",
    Technique: "B",
    Reach: "A",
    Energy: "S",
    "Ease of use": "SS",
  }
];

// function combine(data1, data2) {
//   var result = [];
//   for (var i = 0; i < data1.length; i++) {
//     result.push(data1[i]);
//     for (var j = 0; j < data2.length; j++) {
//       if (result[i].name === data2[j].name) {
//         result[i].strength = data2[j].strength
//         result[i].specialMoves = data2[j].specialMoves
//         result[i].combos = data2[j].combos
//       }
//     }
//   }
//   return result;
// }
//
// console.log(combine(bios, stats));

module.exports = {
  bios,
  stats
};
