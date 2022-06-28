const express = require("express");
const router = express.Router();
const orders_controller = require("../controllers/orders_controllers");
const authMiddleware = require("../middleware/auth_middleware");

router.get("/login", orders_controller.loginPage);

router.get("/", authMiddleware, orders_controller.ordersPage);

router.get("/logout", orders_controller.logoutHandler);

router.post("/login", orders_controller.loginHandler);

router.post("/api", orders_controller.newOrder);

router.delete("/api", orders_controller.deleteOrder);

router.get("*", (req, res) => {
  res.redirect("/");
});

module.exports = router;
