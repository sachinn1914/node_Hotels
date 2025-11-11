const express = require("express");
const router = express.Router();
const Person = require("./../models/person");

//POST FOR PEOPLES IN HOTEL//

router.post("/", async (req, res) => {
  try {
    const data = req.body; // getting data from body //

    const newPerson = new Person(data); // creating new person object //

    const responce = await newPerson.save();
    console.log("data saved succesfully");
    res.status(200).json(responce);
  } catch (error) {
    console.log("error in saving data;", error);
    res.status(500).json({ error: "internal error in server" });
  }
});

//GET PERSON DATA //
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched sucessfully");
    res.status(200).json(data);
  } catch (error) {
    console.log("error in saving data;", error);
    res.status(500).json({ error: "internal error in server" });
  }
});

router.get("//:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const responce = await Person.find({ work: workType });
      console.log("requeste fetched");
      res.status(200).json(responce);
    } else {
      res.status(404).json({ error: "invalid syntax" });
    }
  } catch (error) {
    console.log("error");
    res.status(500).json({ error: "invalid" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const PersonId = req.params.id; //"URL nundi id value ni teesukuntam. Daanini PersonId variable lo store chesthunam."//
    const updatedpersonid = req.body; //"Client (frontend nundi) pampina kotha data ni body nundi teesukoni, updatedpersonid variable lo pettham."//

    const responce = await Person.findByIdAndUpdate(PersonId, updatedpersonid, {
      //
      new: true,
      runValidators: true,
    });

    // //Ee line lo manam database lo Person document ni id tho kanukoni, updated data tho replace chesthunam.
    // //new: true ante kotha updated document ni return chesthundi.
    // runValidators: true ante mongoose schema lo unna validation rules ni follow chesthundi."//

    if (!responce) {
      return res.status(404).json({ error: "person not found" });
    }
    console.log("responce");
    res.status(200).json(responce);
  } catch (error) {
    console.log("error");
    res.status(500).json({ error: "intrnal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personID = req.params.id;
    const responce = await Person.findByIdAndDelete(personID);

    if (!responce) {
      return res.status(404).json({ error: "person not found" });
    }

    console.log("repsonce");
    res.status(200).json({ responce: "person deleted successfully" });
  } catch (error) {
    console.log("error");
    res.status(500).json({ error: "internal server error" });
  }
});
module.exports = router;
