import express from "express";
const cartRouter = express.Router();

import {
  addToCart,
  removeFromCart,
  getCart,
  updateCartQuantity, // 👈 Import the new controller function
} from "../controller/cartController.js";

import { Protect } from "../controller/authController.js";

// Existing routes
cartRouter.post("/add", Protect, addToCart);
cartRouter.post("/remove", Protect, removeFromCart);
cartRouter.get("/get", Protect, getCart);

// 🆕 New route to update quantity
cartRouter.put("/update-quantity", Protect, updateCartQuantity);

export default cartRouter;
