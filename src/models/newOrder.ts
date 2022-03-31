import { DataTypes } from 'sequelize'
import db from '@db/index'

const newOrderModel = db
const columns = {
  orderID: {
    type: DataTypes.STRING,
    allowNull: false
  },
  product: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

const options = {
  freezeTableName: true,
  tableName: 'newOrders',
  timestamps: true
}

export default newOrderModel.define('newOrders', columns, options)
