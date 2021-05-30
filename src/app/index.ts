import express from "express";
import router from "./http/routes/api";

const app = express();

app.use(express.json());

app.use("/api", router);

app.use((req, res, next) => {
  res.status(404).send({ error: "page not found!" });
  next();
});

export { app };
