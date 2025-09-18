import Router from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('Proyecto inicializado con exito!')
})

export default router
