require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const { errors } = require("celebrate");
const routes = require("./routes");
const { PORT, URL } = require("./utils/config");
const limiter = require("./middlewares/rateLimiter");
const { requestLogger, errorLogger } = require("./middlewares/logger");

mongoose.set("strictQuery", true);

mongoose
  .connect(URL)
  .then(() => {
    console.log("БД подключена");
  })
  .catch(() => {
    console.log("Не удалось подключиться к БД");
  });

const app = express();

const allowedCors = [
  "https://project-mesto-deploy.nomoredomains.xyz",
  "http://project-mesto-deploy.nomoredomains.xyz",
  "https://localhost:3000",
  "http://localhost:3001",
];

const corsOptions = {
  origin: allowedCors,
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(limiter);










app.listen(PORT, () => {
  console.log("Сервер подключён ...");
});
