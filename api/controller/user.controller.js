import express from "express";

import {
  ladingRouter,
  userRouter,
  moderatorRouter,
  adminRouter,
} from "../routes/user.router.js";

const router = express.Router();

router.get("/", ladingRouter);

router.get("/user", userRouter);

router.get("/moderator", moderatorRouter);

router.get("/admin", adminRouter);

export default router;
