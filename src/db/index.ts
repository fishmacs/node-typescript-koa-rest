import { createConnection } from 'typeorm';
import parseDbUrl from 'parse-database-url'

import { config } from '../config'

export function connect() {
  const opt = parseDbUrl(config.databaseUrl)
  let connOptions = {
    type: opt.driver,
    host: opt.host,
    port: opt.port,
    database: opt.database,
    username: opt.user,
    password: opt.password,
    logging: true,
    entities: [
      'dist/entity/**/*.js'
    ]
  }
  return createConnection(connOptions)
}
