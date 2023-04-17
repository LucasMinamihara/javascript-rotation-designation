import express from "express";
import path from "path";
import router from "./api/controller/user.controller.js";
import routerLogin from "./api/controller/login.controller.js";
import connectDatabase from "./database/db.connection.js";

const __dirname = path.resolve();

const app = express();

const PORT = 5000;

connectDatabase();

app.use(express.json());

app.use("/user", router);
app.use("/login", routerLogin);

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "./public")));

app.listen(PORT, () => {
  console.log(`Api rodando na porta ${PORT}`);
});
