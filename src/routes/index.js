const express = require('express');
const router = express.Router();
const Task = require("../models/taks")

router.get("/", async (req, res) => {
    const tasks = await Task.find()
    res.render ("index", { tasks: tasks})
})

router.post("/add", async (req, res) => {
    const task = new Task(req.body)
    await task.save()
    res.send("received")
})

module.exports = router