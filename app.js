import express from "express";
import cors from "cors";
import helmet from "helmet";
import "./src/database";
import homeRoutes from "./src/routes/homeRoutes";
import userRoutes from "./src/routes/userRoutes";
import tokenRoutes from "./src/routes/tokenRoutes";
import studentsRoutes from "./src/routes/studentsRoutes";
import photoRoutes from "./src/routes/photoRoutes";
import dotenv from "dotenv";
dotenv.config();

const whitelist = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    console.log(whitelist, origin);
    if (whitelist.find((link) => link == origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by cors"));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }
  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/students/", studentsRoutes);
    this.app.use("/photos/", photoRoutes);
  }
}

export default new App().app;
