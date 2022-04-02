import newOrderModel from '@models/newOrder'
import { Request, Response } from 'express'
import { CompressionTypes } from 'kafkajs'
export class NewOrderController {
  static async CretedNewOrder (req :Request, res :Response) {
    const reqBody = req.body
    console.log(reqBody)
    try {
      await newOrderModel.create(reqBody)
      await req.producer.connect()
      await req.producer.send({
        topic: 'newOrder_Processing',
        compression: CompressionTypes.GZIP,
        messages: [
          { value: JSON.stringify(reqBody) }
        ]
      })
      await req.producer.disconnect()
      res.status(201)
      res.end()
    } catch (error) {
      res.status(406)
      res.send({ msg: error.message })
    }
  }
}
