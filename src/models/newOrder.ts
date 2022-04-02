import { DataTypes, Optional, ModelDefined } from 'sequelize'
import { InewOrder } from '@interfaces/InewOrder'
import db from '@db/index'

const newOrderModelDB = db

const columns = {
  orderID: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

const options = {
  freezeTableName: true,
  tableName: 'newOrders',
  timestamps: true
}

type NoteCreationAttributes = Optional<InewOrder, 'orderID'>;
const newOrderModel: ModelDefined<InewOrder, NoteCreationAttributes> = newOrderModelDB.define('newOrders', columns, options)

export default newOrderModel
