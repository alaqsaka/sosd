module.exports = { 
    HOST: "localhost",
    USER: 'root',
    PASSWORD: '',
    DB: 'node',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acuquire: 30000,
        idle: 10000
    }
}