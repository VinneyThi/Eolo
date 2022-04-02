import newOrderModel from '@models/newOrder'
import { Request, Response } from 'express'

export class NewOrderController {
  static async CretedNewOrder (req :Request, res :Response) {
    const reqBody = req.body
    console.log(reqBody)
    try {
      await newOrderModel.create(reqBody)
      res.status(201)
      res.end()
    } catch (error) {
      res.status(406)
      res.send({ msg: error.message })
    }
  }
}
