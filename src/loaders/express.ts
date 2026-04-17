import express from "express";
import cors from "cors";
import router from "@/api/router";
import config from "config";

export default async ({ app }: { app: express.Application }) => {
  app.use(cors());
  app.use(express.json());

  app.use("/", router);

};
