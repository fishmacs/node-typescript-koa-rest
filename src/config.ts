import dotenv from "dotenv";
import { ConnectionOptions } from "typeorm";

dotenv.config({ path: ".env" });

export interface Config {
    port: number;
    debugLogging: boolean;
    dbsslconn: boolean;
    jwtSecret: string;
    dbEntitiesPath: string[];
    cronJobExpression: string;
}

const isDevMode = process.env.NODE_ENV == "development";

const config: Config = {
    port: +(process.env.PORT || 3000),
    debugLogging: isDevMode,
    dbsslconn: !isDevMode,
    jwtSecret: process.env.JWT_SECRET || "your-secret-whatever",
    dbEntitiesPath: [
      ... isDevMode ? ["src/entity/**/*.ts"] : ["dist/entity/**/*.js"],
    ],
    cronJobExpression: "0 * * * *"
};

const dbConfig: ConnectionOptions = {
  type: "mongodb",
  host: "localhost",
};

export { config, dbConfig };
