import type { Application } from 'express';
import type { CorsOptions } from 'cors';
import type { RateLimitRequestHandler } from 'express-rate-limit';

const connectDB = require("./configs/db.config");
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const errorHandler = require('./utils/middlewares/errors.middleware');

const app: Application = express();
dotenv.config();

const DbConnect = async (): Promise<void> => {
  try {
    await connectDB();
    console.log("✓ [DB CONNECTED] - URI " + process.env.DB_URI);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error("[DB CONNECTION FAILED]:", errorMessage);
    setTimeout(DbConnect, 5000);
  }
};

(async () => {
  await DbConnect();
})();

const corsOptions: CorsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

const limiter: RateLimitRequestHandler = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

app.use(cors(corsOptions));
app.use(limiter);
app.use(express.json());
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello World 🔥');
});

// import routes here
const routes = require('./routes');

// routes
app.use("/api", routes)

app.use(errorHandler);

module.exports = app;

export type { Application };