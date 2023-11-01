const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3000;
app.use(express.json());
const footballerRoutes = require('./routes/footballerRoute');
require('dotenv').config();

// Conexión a MongoDB
mongoose.connect(process.env.MONGOOSE_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado a MongoDB");
}).catch(err => {
    console.error("Error conectando a MongoDB:", err);
});

app.get('/', (req, res) => {
    res.send(process.env.MONGOOSE_KEY)
  })
  
  app.get('/home', (req, res) => {
      res.send('This is Home')
    })
  
    app.get('/logout', (req, res) => {
      res.send('Goodbye!')
    })

app.use('/footballer', footballerRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})