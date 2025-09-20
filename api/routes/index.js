import Router from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('Aplicando estructura correcta!')
})

export default router
