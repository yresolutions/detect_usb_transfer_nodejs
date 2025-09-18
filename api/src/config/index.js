import dotenv from 'dotenv'
dotenv.config()

const config = {
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/myapp'
}

export default config
