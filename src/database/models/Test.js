export default (sequelize, dataTypes) => {
    const alias = "Punto"
    const colums = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
        }
    }
    const config = {
        tableName: "punto",
        timestamps: false
    }
    const Perfil = sequelize.define(alias, colums, config)
    return Perfil
}