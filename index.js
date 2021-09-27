import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"

import EstatesDAO from './dao/estatesDAO.js';

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.ESTATE_DB_URI
).catch(e => {
    console.error(e.stack)
    process.exit(1)
}).then(async client => {
    await EstatesDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})
