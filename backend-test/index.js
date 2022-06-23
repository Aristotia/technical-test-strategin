const express = require('express');
const mongoose = require('mongoose');
const argon2 = require('argon2');
const cors = require('cors');
const cookieParser = require('cookie-parser');
var jwt = require('jsonwebtoken');
require('dotenv').config();
const UserSchema = require('./src/models/UserSchema');


mongoose
  .connect(
    `${process.env.DB_URL}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(cookieParser());
    app.use(
      cors({
        origin: process.env.FRONTEND_URL ?? `${process.env.FRONTEND_URL}`,
        optionsSuccessStatus: 200,
        credentials: true,
      })
    )

    app.get('/users', async (req, res) => {
      const users = await UserSchema.find();
      res.send(users);
    });

    app.post('/users/register', async (req, res) => {
      const { email, password, firstName, lastName } = req.body;
      const user = new UserSchema(req.body);

      if (!firstName || !lastName || !email || !password  ) {
        res.status(400).send({ error: 'Tous les champs doivent être remplis' });
        return;
      }

      try {
        const hash = await argon2.hash(password);
        user.password = hash;
        await user.save();
        res.send(user);
        console.log(user)
      } catch (error) {
        console.error(error);
        res.status(500).send({
          error: error.message,
        });
      }
    });

    app.post('/users/login', async (req, res) => {
      const { email, password } = req.body;
      const user = new UserSchema(req.body);
      console.log(req.body)

      if (!email || !password) {
        res.status(401).send({ error: 'Préciser le mot de passe/email' });
        return;
      }

      try {
        const user = await UserSchema.find({ email: email });
        console.log(user);
        const hash = user[0].password;
        console.log(hash, password);
        if (await argon2.verify(hash, password)) {
          const token = jwt.sign({ email: email, password: password }, process.env.JWT_AUTH_SECRET, {expiresIn: 
            '24h'});
          
          return res.status(200)
          .cookie("access_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
          })
          .send({
            email: email,
            password: password,
          });
        } else {
          res.status(401).send({ error: 'Préciser le mot de passe/email' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).send({
          error: error.message,
        });
      }
    });

    app.listen(5000, () => {
      console.log('Server has started!');
    });
  });
