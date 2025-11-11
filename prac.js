app.get("/", function (req, res) {
  res.send("your server is sucesfully opened how can i help you?");
});

app.get("/chicken", (req, res) => {
  //insted of fucttion we can use arrow function//
  var customisedchicken = {
    t1: "roasted",
    t2: "tandoor",
    t3: "kabab",
    chutney: "true",
  };
  res.send(customisedchicken);

  // var customisedchickenobject = JSON.stringify(customisedchicken)
  // console.log(customisedchickenobject)
});

app.listen(3000, () => {
  console.log("server is listining onport no 3000");
});