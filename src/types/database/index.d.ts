import { ClientConfig } from "pg";

export type Config = ClientConfig;

export type Jsonb = Record<string | number, Json> | Json[];

export type MongodDBConfig = {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
};
