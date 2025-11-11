const express = require("express");
const app = express();
const db = require("./db"); // importing data base files//`
const bodyParser = require("body-parser");
app.use(bodyParser.json());



const personRoutes = require('./routes/personroutes')
app.use('/Person' , personRoutes)

const menuRouters = require('./routes/menuroutes')
app.use('/MenuItems' , menuRouters)

app.listen(3000, ()=>{
console.log('listing at port 3000')
})