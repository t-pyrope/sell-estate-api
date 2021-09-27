import EstatesDAO from '../dao/estatesDAO.js'

export default class EstatesController {
    static async apiGetEstates(req, res, next) {
        const { estatesList } = await EstatesDAO.getEstates()
        let response = {
            estates: estatesList
        }
        res.json(response)
    }
    static async apiPutEstate(req, res, next) {
        console.log(req);
        try {
            const fullName = req.body.fullName
            const phone = req.body.phone
            const email = req.body.email
            const estateType = req.body.estateType
            const region = req.body.region
            const district = req.body.district
            const date = new Date()

            const EstateResponse = await EstatesDAO.addEstate(
                fullName, phone, email,
                estateType, region, district,
                date,
            )
            res.json({ status: "success" })
        } catch(e) {
            res.status(500).json({ error: e.message })
        }
    }
}