import { App } from "electron";
import express from "express";
import mongoose from "mongoose";
import http from "node:http";

let server: http.Server;
const app = express();

app.get("/fish", async (req, res) => {
  res.status(200).send({
    message: "fish served",
  });
});

app.post("/fish", async (req, res) => {
  res.status(200).send({
    message: "hit fish post",
  });
});

export const connectDb = async (uri: string) => {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(uri)
    .then(() => {
      server = app.listen(3001);
      console.log("Connected to database successfully");
    })
    .catch((e) => console.error(e));
};

export const closeExpressProcess = () => {
  if (server) {
    return server.close(() => {
      console.log("server closed");
    });
  }
};
