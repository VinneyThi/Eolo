import express from 'express'
import bodyParser from 'body-parser'
import routers from './routers'
const app = express()

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  next()
})
app.use('/api/v1', routers)
console.log('Server On')
app.listen(3333)
