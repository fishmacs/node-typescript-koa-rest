import { createConnection } from 'typeorm';
import parseDbUrl from 'parse-database-url'

import { config } from '../config'

export function connect() {
  let connOptions = Object.assign(parseDbUrl(config.databaseUrl), {
    entities: [
      'dist/entity/**/*.js'
    ]
  })
  return createConnection(connOptions)
}
