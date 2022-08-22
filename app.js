const express = require("express");
const validate = require("./middleware/validate.mw")
const UserController= require("./controllers/user.controller")
const app = express(); //create server
const PORT = 3000;


const parseBody = express.json();

app.get("/users", UserController.showUsers)
app.get("/user/:id", UserController.showUser)
app.post("/user", parseBody, validate, UserController.createUser);
// app.put("/user/:qqq", parseBody, validate, updateUser);
// app.delete("/user/:id", UserController.delete);

app.listen(PORT, () => {
  console.log("server started at port " + PORT);
});
