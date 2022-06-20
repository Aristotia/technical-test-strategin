const express = require("express")
const mongoose = require("mongoose")
const Post = require("./Post")
require('dotenv').config()


mongoose
  .connect(`mongodb+srv://Antoine:${process.env.ATLAS_BDD_PASSWORD}@test-strategin.gwwcb6x.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser:true, useUnifiedTopology: true})
  .then(() => {
    const app = express()

    app.get("/users", async (req,res) => {
      const members = await Post.find()
      res.send(members)
    })

    app.listen(27017, () => {
  console.log("Server has started!")
})
  })
