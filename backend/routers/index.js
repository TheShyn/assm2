import express from 'express'
import routerProduct from './product'
import routeCate from './categories'
import routeAuth from './auth'

const route = express.Router()
route.use("/products", routerProduct)
route.use('/categories',routeCate)
route.use('/auth', routeAuth)

export default route