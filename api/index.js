import app from './app.js'
import config from './config/index.js'

// Conecto la Base de Datos

// Inicio el servidor solo si la Base de Datos se 
app.listen(config.PORT, () => {
  console.log(`Server is running on http://localhost:${config.PORT}`)
})
