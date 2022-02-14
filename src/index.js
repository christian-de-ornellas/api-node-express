const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

require("./controllers/ProductController")(app);

app.listen(3333, () =>
  console.log("Server executando com sucesso na porta: 3333")
);
