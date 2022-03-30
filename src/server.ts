import express from 'express'
const app = express()

app.use('/', (req, resp) => {
  resp.send('Oi')
})
console.log('Server On')
app.listen(3333)
