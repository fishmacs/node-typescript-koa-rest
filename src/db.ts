// import parseDbUrl from 'parse-database-url'

import { config, dbConfig } from "./config";
import { createConnection, ConnectionOptions } from "typeorm";

export function connect() {
  const opt: ConnectionOptions = {
    ...dbConfig,
    logging: true,
    entities: config.dbEntitiesPath,
    synchronize: true
  };
  // let connOptions: ConnectionOptions = {
  //   type: config.databaseUrl.split(':')[0],
  //   // host: opt.host,
  //   // port: opt.port,
  //   url: config.databaseUrl,
  //   // database: opt.database,
  //   // username: opt.user,
  //   // password: opt.password,
  //   logging: true,
  //   entities: config.dbEntitiesPath
  // }
  return createConnection(opt);
}
