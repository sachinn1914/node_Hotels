const express = require("express");
const router = express.Router();
const menuItems = require("./../models/menuItems");

//POST FOR MENU ITEMS//

router.post("/", async (req, res) => {
  const list = req.body;
  const newmenuItems = new MenuItems(list);
  try {
    const responce = await newmenuItems.save();
    console.log("data was saved sucessfully", responce);
    res.status(200).json(responce);
  } catch (error) {
    console.log("internal server error", error);
    res.status(500).json({ error: "internal error occured in server" });
  }
});

//GET FOR MENU ITEMS//

router.get("/", async (req, res) => {
  try {
    const items = await menuItems.find();
    console.log("we found the data");
    res.status(200).json(items);
  } catch (error) {
    console.log("an error occured", error);
    res.status(500).json({ error: "internal error occured" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const menuItemsId = req.params.id;
    const updatedmenuItems = req.body;
    const responce = await menuItems.findByIdAndUpdate(
      menuItemsId,
      updatedmenuItems,
      {
        new: true,
        runvalidators: true,
      }
    );

    if (!responce) {
      res.json({ error: "menu item not found" });
    }
    console.log("menu item updated successfully", responce);
    res.status(200).json(responce);
  } catch (error) {
    console.log("error occured", error);
    res.status(500).json({ error: " internal error occured" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const menuItemsId = req.params.id;
    const responce = await menuItems.findByIdAndDelete(menuItemsId);

    if (!responce) {
      res.json({ error: "no match found for this id" });
    }
    console.log("deleted sucessfully");
    res.status(200).json(responce);
  } catch (error) {
    console.log("error occured", error);
    res.status(500).json({ error: " internal error occured" });
  }
});

module.exports = router;
