const mongoose = require("mongoose");
const menuItemschems = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "sour", "spicy"],
    required: true,
  },
  its_drink: {
    type: Boolean,
    default:false
  },
  ingridents:{
    type: [String],
    default:[]
  },
 
});

const MenuItems = mongoose.model('MenuItems', menuItemschems);
module.exports = MenuItems;
