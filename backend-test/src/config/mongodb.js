const mongoose = require('mongoose')
require('dotenv').config()

const DB_URL = process.env.DB_URL ?? "http://localhost:5000"
mongoose.connect(`mongodb+srv://Antoine:bangarang@test-strategin.gwwcb6x.mongodb.net/?retryWrites=true&w=majority` , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
  console.log(`Connected to database`)
})

module.exports = db