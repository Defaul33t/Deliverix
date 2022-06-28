const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const connection = mysql.createConnection({
  host: "185.146.22.238",
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: "carlgalc_deliverix",
});

connection.connect();

const ordersPage = (req, res) => {
  const QUERY = "SELECT * FROM `orders`";

  connection.query(QUERY, (error, orders, fields) => {
    const clonedOrders = JSON.parse(JSON.stringify(orders));

    const formattedOrders = clonedOrders.map((order) => {
      return {
        ...order,
        products: JSON.parse(order.products),
        date: moment(order.date).format("DD.MM.YYYY HH:mm"),
      };
    });

    res.render("index", { orders: formattedOrders });
  });
};

const loginPage = (req, res) => {
  res.render("login");
};

const loginHandler = (req, res) => {
  const { name, password } = req.body;

  if (name === "admin" && password === "123") {
    const token = jwt.sign({ name }, process.env.JWT_SECRET);

    res.cookie("jwt", token, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000 });
    res.status(200).json({ code: 200, message: "prihlásenie prebehlo úspešne" });
  } else {
    res.status(400).json({ code: 400, message: "nesprávne údaje" });
  }
};

const logoutHandler = (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, maxAge: 0 });

  res.redirect("/login");
};

const newOrder = (req, res) => {
  const QUERY = `INSERT INTO orders (id, products, price, delivery, date) VALUES (NULL, '${JSON.stringify(
    req.body.products
  )}', "${req.body.price}", ${req.body.delivery}, current_timestamp());`;

  connection.query(QUERY, (error, results, fields) => {
    res.status(200).json({ message: "Objednávka bola odoslaná." });
  });
};

const deleteOrder = (req, res) => {
  const { id } = req.body;

  const QUERY = `DELETE FROM orders WHERE id = ${id}`;

  connection.query(QUERY, (error, results, fields) => {
    res.status(200).json({ code: 200, message: "Objednávka bola vybavená." });
  });
};

module.exports = { ordersPage, loginPage, newOrder, deleteOrder, loginHandler, logoutHandler };
