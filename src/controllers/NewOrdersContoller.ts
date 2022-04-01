import newOrderModel from '@models/newOrder'
import { InewOrder } from '@interfaces/InewOrder'

export class NewOrderController {
  static async CretedNewOrder (order : InewOrder) : Promise<boolean> {
    try {
      await newOrderModel.create(order)
      return true
    } catch (error) {
      console.log(error)
    }
  }
}
