import express from "express";
import encriptedPassword from "../middleware/bcrypt.js";

const router = express.Router();

router.post("/login", encriptedPassword, (req, res) => {
  try {
    res.status(200).send(req.body);
  } catch (err) {
    console.log(err);
  }
});

export default router;
