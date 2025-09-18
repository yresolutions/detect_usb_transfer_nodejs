import express from 'express'
import config from './config/index.js'
import router from './routes/index.js'

const app = express()

app.use(express.json())

app.use(router)

app.listen(config.PORT, () => {
  console.log(`Server is running on http://localhost:${config.PORT}`)
})
