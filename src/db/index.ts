import { Sequelize, Dialect } from 'sequelize'
import 'dotenv/config'

const db = new Sequelize(
  process.env.DATABASE,
  process.env.USER_db,
  process.env.USER_PASSWORD,
  {
    host: process.env.HOST_DB,
    dialect: process.env.TYPE_DB as Dialect
  }
)

export default db
