import Ingredient from "../models/ingredient.schema.js"

const getIngredient = async (req, res) => {
   try {
      const ingredients = await Ingredient.find({}); 
      console.log(ingredients);
      res.send(ingredients);
   } catch (error) {
      res.status(500).send({
         ok: false,
         message: "Server error"
      })
   }
};

const addIngredient = async (req, res) => {
   const newIngredient = new Ingredient({
      sku: req.body.sku,
      name: req.body.name,
      quantity: req.body.quantity,
      bestbyDate: new Date(req.body.bestbyDate),
      boughtDate: new Date(req.body.boughtDate),
      price: req.body.price
   })

   await newIngredient.save()
      .then(newIngredient => {
         res.status(200).send({
            ok: true,
            message: "Ingredient added successfully",
            newIngredient
         })
      })
      .catch((error) => {
         console.error(error);
         res.status(500).send({
            ok: false,
            message: "Server error"
         })
      })
};

const updateIngredient = async (req, res) => {
   await Ingredient.updateOne({ 
         sku: req.body.sku
      },
      { 
         $set: { 
            name: req.body.name,
            price: req.body.price
         } 
      })
      .then(() => {
         res.status(200).send({
            ok: true,
            message: "Ingredient has been updated successfully"
         })
      })
      .catch(() => {
         res.status(500).send({
            ok: false,
            message: "Server error"
         })
      })
};

const deleteIngredient = async (req, res) => {
   await Ingredient.deleteOne({
      sku: req.body.sku   
   })
      .then(() => {
         res.status(200).send({
            ok: true,
            message: "Ingredient has been deleted successfully"
         })
      })
      .catch(() => {
         res.status(500).send({
            ok: false,
            message: "Server error"
         })
      })
};

export {getIngredient, addIngredient, updateIngredient, deleteIngredient}