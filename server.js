import express from 'express'
import cors from 'cors'
import estates from './api/estates.route.js'

const app = express()

app.use(cors())

app.use(express.json())

app.use("/lead", estates)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app
