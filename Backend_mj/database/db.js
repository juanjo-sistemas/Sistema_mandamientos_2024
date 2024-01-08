import Sequelize from 'sequelize'

const db = new Sequelize('mandbus', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db