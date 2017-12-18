const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const data = require("./Data/data");
const bios = data.bios;
const stats = data.stats;
var result = [];

function combine(data1, data2) {
  for (var i = 0; i < data1.length; i++) {
    result.push(data1[i]);
    for (var j = 0; j < data2.length; j++) {
      if (result[i].name === data2[j].name) {
        result[i].Power = data2[j].Power;
        result[i].Speed = data2[j].Speed;
        result[i].Technique = data2[j].Technique;
        result[i].Reach = data2[j].Reach;
        result[i].Energy = data2[j].Energy;
        result[i]["Ease of use"] = data2[j]["Ease of use"];
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
  console.log("listening on port 3000");
});
