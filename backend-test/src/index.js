const express = require("express")
const mongoose = require("mongoose")
const Post = require("./Post")
require('dotenv').config()


mongoose
  .connect(`mongodb+srv://Antoine:${process.env.ATLAS_BDD_PASSWORD}ATLAS_BDD_PASSWORD@test-strategin.a4y2b6b.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser:true, useUnifiedTopology: true})
  .then(() => {
    const app = express()

    app.get("/members", async (req,res) => {
      const members = await Post.find()
      res.send(members)
    })

    app.listen(5000, () => {
  console.log("Server has started!")
})
  })
