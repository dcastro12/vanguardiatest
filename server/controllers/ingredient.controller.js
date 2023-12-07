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
   const sku = req.params.sku;
   console.log(req.body);
   console.log(req.params);
   try {
      const result = await Ingredient.updateOne(
         { sku: sku },
         { $set: {
            name: req.body.name,
            quantity: req.body.quantity,
            price: req.body.price
         }}
      );

      if (result.modifiedCount === 0) {
         return res.status(404).send({
            ok: false,
            message: "No ingredient with such SKU to update found"
         });
      }

      res.status(200).send({
         ok: true,
         message: "Ingredient updated successfully"
      });
   } catch (error) {
      console.error(error);
      res.status(500).send({
         ok: false,
         message: "Server error",
         error: error.message
      });
   }
};


const deleteIngredient = async (req, res) => {
   const sku = req.params.sku;
   try {
      const result = await Ingredient.deleteOne({ sku: sku });

      if (result.deletedCount === 0) {
         return res.status(404).send({
            ok: false,
            message: "No ingredient with such SKU to delete found"
         });
      }

      res.status(200).send({
         ok: true,
         message: "Ingredient deleted successfully"
      });
   } catch (error) {
      console.error(error);
      res.status(500).send({
         ok: false,
         message: "Server error"
      });
   }
};

export {getIngredient, addIngredient, updateIngredient, deleteIngredient}