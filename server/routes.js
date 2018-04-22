const userCtrl = require("./controllers/User/UserCtrl");

module.exports = app => {
  app.get("/api/users/:id", userCtrl.get);
  app.put("/api/users/:id", userCtrl.put);
  app.post("/api/users", userCtrl.post);
  app.delete("/api/users/:id", userCtrl.delete);
};
