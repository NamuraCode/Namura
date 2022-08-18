const db = require('../database/models')

const PointsModels = {
    getAll: async () => {
        try{
            let EveryPoints = await db.Punto.findAll()
            return EveryPoints
        }catch(error){
            console.log(`error ${error}`)
        }
    }
}

module.exports = PointsModels