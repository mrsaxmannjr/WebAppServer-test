const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const data = require("./Data/data");
const bios = data.bios
const stats = data.stats
var result = [];

function combine(data1, data2) {
  for (var i = 0; i < data1.length; i++) {
    result.push(data1[i]);
    for (var j = 0; j < data2.length; j++) {
      if (result[i].name === data2[j].name) {
        result[i].strength = data2[j].strength
        result[i].specialMoves = data2[j].specialMoves
        result[i].combos = data2[j].combos
      }
    }
  }
}
combine(bios, stats);


app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.json(result);
});

app.post("/", (request, response) => {
  response.json(request.body);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on port 3000');
});
