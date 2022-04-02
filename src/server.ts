import express from 'express'
import bodyParser from 'body-parser'
// import { Kafka } from 'kafkajs'

import routers from './routers'

// const kafka = new Kafka({
//   clientId: 'my-app',
//   brokers: ['kafka1:9092', 'kafka2:9092']
// })

const app = express()

// app.use((req, res, next) => {
//   req.producer = kafka.producer()
// })
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  next()
})
app.use('/api/v1', routers)
console.log('Server On')
app.listen(3333)
