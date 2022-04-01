import { DataTypes } from 'sequelize'
import db from '@db/index'
import newOrder from '@models/newOrder'

const customersModelDB = db
const columns = {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

const options = {
  freezeTableName: true,
  tableName: 'customers',
  timestamps: true
}
const customersModel = customersModelDB.define('customers', columns, options)

customersModel.hasMany(newOrder, { foreignKey: 'customer_fk' })
export default customersModel
