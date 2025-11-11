const express = require("express");
const app = express();
const db = require("./db"); // importing data base files//`
const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();

const personRoutes = require("./routes/personroutes");
app.use("/Person", personRoutes);

const menuRouters = require("./routes/menuroutes");
app.use("/MenuItems", menuRouters);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("listing at port 3000");
});
