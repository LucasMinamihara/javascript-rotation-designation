import path from "path";

const __dirname = path.resolve();

const ladingRouter = (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
};

const userRouter = (req, res) => {
  res.render("../views/usersPage");
};

const moderatorRouter = (req, res) => {
  res.render("../views/moderatorPage");
};

const adminRouter = (req, res) => {
  res.render("../views/adminPage");
};

export { ladingRouter, userRouter, moderatorRouter, adminRouter };
