import brcrypt from "bcrypt";
import express from "express";

const encriptedPassword = (req, res, next) => {
  try {
    const { password } = req.body;

    if (!password) return;

    brcrypt.hash(password, 10, (err, hash) => {
      if (err) return { message: "something went wrong" };

      req.body.hash = hash;

      next();
    });
  } catch (err) {
    console.log(err);
  }
};

export default encriptedPassword;
