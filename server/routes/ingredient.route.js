import { Router } from "express";

import { getIngredient, addIngredient, updateIngredient, deleteIngredient } from "../controllers/ingredient.controller.js";

const router = Router();

router.get("/", getIngredient);
router.post('/', addIngredient);
router.put('/:sku', updateIngredient);
router.delete('/:sku', deleteIngredient);


export default router;