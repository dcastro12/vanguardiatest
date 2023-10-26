const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
app.use(express.json());
require('dotenv').config();
const Characters = require('./Models/characters.model')

const connectionDB = async () => {
  try{
    await mongoose.connect(process.env.MONGOOSE_KEY, {
      useNewUrlParser: true
    });
    console.log("Conexión Exitosa");
  }catch (error) {
    console.error(error);
  }
};

connectionDB();

app.post("/personajes", async (req, res) => {
  const {name, age} = req.body;
  const newCharacters = new Characters({
    name,
    age
  });

  await newCharacters.save();

  res.status(200).send({
    ok: true,
    message: "Personaje insertado con exito",
  });
});

app.get('/', (req, res) => {
  res.send("hola")
})

app.get('/home', (req, res) => {
    res.send('This is Home')
  })

  app.get('/logout', (req, res) => {
    res.send('Goodbye!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})