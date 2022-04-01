import { DataTypes } from 'sequelize'
import db from '@db/index'
import newOrder from '@models/newOrder'

const productsModelDB = db
const columns = {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ammount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}

const options = {
  freezeTableName: true,
  tableName: 'products',
  timestamps: true
}
const productsModel = productsModelDB.define('products', columns, options)
productsModel.hasOne(newOrder, { foreignKey: 'product_fk' })
export default productsModel
