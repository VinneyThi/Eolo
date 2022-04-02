import express from 'express'
import bodyParser from 'body-parser'
import { Kafka, logLevel } from 'kafkajs'

import routers from './routers'

/**
 * Faz conexão com o Kafka
 */
const kafka = new Kafka({
  clientId: 'api',
  brokers: ['localhost:9092'],
  logLevel: logLevel.WARN,
  retry: {
    initialRetryTime: 300,
    retries: 10
  }
})

const app = express()

app.use((req, res, next) => {
  req.producer = kafka.producer()
  next()
})
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  next()
})
app.use('/api/v1', routers)
console.log('Server On')
app.listen(3333)
