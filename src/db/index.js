import Sequelize from 'sequelize'
import 'dotenv/config'

const isProduction = process.env.DATABASE_URL
// local connection string
// const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`

// connect to pg
const sequelize = new Sequelize('postgres://vhalywzmjyzuqu:fdcad1e94d321a268fd43b8c73da8c52a153fc269522e950ee97de71f01a1033@ec2-174-129-255-21.compute-1.amazonaws.com:5432/de62agb9r71pd4', {
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const db = {
    User: sequelize.import('../model/user'),
    LocalAuth: sequelize.import('../model/localAuth'),
    FbAuth: sequelize.import('../model/fbAuth'),
    GoogleAuth: sequelize.import('../model/googleAuth'),
    Menu: sequelize.import('../model/menu'),
    Order: sequelize.import('../model/order')
}

Object.keys(db).forEach(modelName => {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize

export default db