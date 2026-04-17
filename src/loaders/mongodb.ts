import mongoose from "mongoose";
import { createLogger } from "logger";
import type { MongodDBConfig } from "@/types/database";
import config from "config";

const mongodbConfig = config.get<MongodDBConfig>("mongodb");

const env = process.env.NODE_ENV || "development";

const log = createLogger(`${env}.log`);

export default async () => {
  try {
    await mongoose.connect(`mongodb://${mongodbConfig.user}:${mongodbConfig.password}@${mongodbConfig.host}:${mongodbConfig.port}/${mongodbConfig.database}?authSource=admin`);
    log.info("Connected to MongoDB");
  } catch (err) {
    log.info("MongoDB connection failed:", err);
  }
};
