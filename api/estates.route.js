import express from 'express'
import EstatesController from './estates.controller.js'

const router = express.Router()

router.route("/")
    .get(EstatesController.apiGetEstates)
    .put(EstatesController.apiPutEstate)

export default router
