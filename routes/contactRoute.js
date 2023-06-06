const express = require("express");

const contactSchema = require("../models/contact");

const contactRoute = express.Router();

//route get all contacts
//==>> http://localhost:8000/contact/getall

contactRoute.get("/getall", async (req, res) => {
  try {
    const contact = await contactSchema.find();
    res.status(200).json({ msg: "all users: ", contact });
  } catch (err) {
    console.log(err);
    res.send("you have a problem");
  }
});

//route post or add contact
//==>> http://localhost:8000/contact/addcontact

contactRoute.post("/addcontact", async (req, res) => {
  try {
    const addContact = new contactSchema(req.body);
    await addContact.save();
    res.status(200).json({ msg: "user added successfully", addContact });
  } catch (err) {
    console.log(err);
    res.send("you have a problem");
  }
});

//route update contact
//==>> http://localhost:8000/contact/update/:id

contactRoute.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateContact = await contactSchema.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });
    res.status(200).json({ msg: "user updated successfully", updateContact });
  } catch (err) {
    console.log(err);
    res.send("you have a problem");
  }
});

//route delete contact
//==>> http://localhost:8000/contact/delete/:id

contactRoute.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteContact = await contactSchema.findByIdAndDelete(id);
    res.status(200).json({ msg: "user deleted successfully" });
  } catch (err) {
    console.log(err);
    res.send("you have a problem");
  }
});

//route get unique contact
//==>> http://localhost:8000/contact/getone/:id

contactRoute.get("/getone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getuser = await contactSchema.findById(id);
    res.status(200).json({ msg: "one user: ", getuser });
  } catch (err) {
    console.log(err);
    res.send("you have a problem");
  }
});

module.exports = contactRoute;
