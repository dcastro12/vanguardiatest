import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config'
const port = 3000;

import ingredientRoutes from './routes/ingredient.route.js';
import pizzaRoutes from './routes/pizza.route.js';
import menuRoutes from './routes/menu.route.js';

const app = express()
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_KEY, {
      useNewUrlParser: true
    });
    console.log("DB is connected");
  } catch (error) {
    console.error(error);
  }
};

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World! 2')
})

app.use("/ingredients", ingredientRoutes);
app.use("/pizzas", pizzaRoutes);
app.use("/menus", menuRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})