import mongodb from 'mongodb'

let estates

export default class EstatesDAO {
    static async injectDB(conn) {
        if (estates) {
            return
        }
        try {
            estates = await conn.db(process.env.ESTATE_NS).collection("estates")
        } catch (e) {
            console.error(e)
        }
    }

    static async getEstates() {
        let cursor;
        try {
            cursor = await estates.find()
        } catch (e) {
            console.error(e)
            return { estatesList : []}
        }
        try {
            let estatesList = await cursor.toArray()
            return { estatesList }
        } catch (e) {
            console.error(e)
        }
    }

    static async addEstate(
        fullName, phone, email,
        estateType, region, district,
        date
    ) {
        try {
            const estateDoc = {
                fullName, phone, email,
                estateType, region, district, date
            }
        return await estates.insertOne(estateDoc)
        } catch (e) {
            console.error(e);
            return { error: e }
        }
    }
}
