const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

//register view engine
app.set("view engine", "ejs");
app.use(express.static("./views/public"));

app.use(
  cors({
    origin: "http://localhost:8000",
  })
);

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

// Cookies
app.use(cookieParser());

// Forms
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing
app.use("/", require("./routes/orders_routes"));
