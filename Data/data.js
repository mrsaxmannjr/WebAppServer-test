var bios = [
  {
    name: "Goku",
    race: "Saiyan"
  },
  {
    name: "Vegeta",
    race: "Saiyan"
  }
];

var stats = [
  {
    name: "Goku",
    strength: 9,
    specialMoves: [],
    combos: []
  },
  {
    name: "Vegeta",
    strength: 10,
    specialMoves: [],
    combos: []
  },
  {
    name: "Krillin",
    strength: 5,
    specialMoves: [],
    combos: []
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
