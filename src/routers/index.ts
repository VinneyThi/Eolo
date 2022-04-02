import { Router } from 'express'
import { NewOrderController } from '@controllers/NewOrdersContoller'
const routers = Router()

routers.options('/', (req, res) => {
  res.set('Access-Control-Allow-Methods', 'GET, POST')
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  res.status(204)
  res.end()
})

routers.get('/newOrders', NewOrderController.CretedNewOrder)

routers.post('/newOrders', NewOrderController.CretedNewOrder)

export default routers
