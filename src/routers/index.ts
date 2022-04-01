import { Router } from 'express'

const routers = Router()

routers.options('/', (req, res) => {
  res.set('Access-Control-Allow-Methods', 'GET, POST')
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  res.status(204)
  res.end()
})

routers.get('/newOrders', (req, res) => {
  res.status(200)
  res.send('get')
})

routers.post('/newOrders', (req, res) => {
  const reqBody = req.body
  console.log(reqBody)
  res.status(201)
  res.end()
})

export default routers
