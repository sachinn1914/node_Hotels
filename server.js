var fs = require('fs')
var os = require('os')

var user = os.userInfo();
console.log(user)
fs.appendFile("greeting.txt", "hi" + user.username, ()=>{
    console.log("file is created")
})

const notes = require('./notes.js')
var age = notes.age;
console.log(age)
var name = notes.name;
console.log(name)


const result = notes.addnumbers(age+10 ,1000);
console.log(result)

var lodash = require('lodash')  //USE OF LOADASH// //TP GET UNIQUE ELEMENTS FROM AN ARRAY//
var data =["name" ,"sachin", "name", 21,12,21,12,"name", "sachin", ]
var filter = lodash.uniq(data)
console.log(filter)


const jsonString = '{"name": "sachin", "age": "32", "class": "ug"}'
const jsonObject = JSON.parse(jsonString)
console.log(jsonObject)

const objecttoconvert = {
    name: "sachin",
    age : 21
}
const string = JSON.stringify(objecttoconvert)
console.log(string);