import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config'

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.BACKEND_PORT;

import ingredientRoutes from './routes/ingredient.route.js';
import pizzaRoutes from './routes/pizza.route.js';
import menuRoutes from './routes/menu.route.js';

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
  
  app.use("/ingredients", ingredientRoutes);
  app.use("/pizzas", pizzaRoutes);
  app.use("/menus", menuRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })