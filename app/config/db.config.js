module.exports = {
  HOST: "us-cdbr-east-04.cleardb.com",
  USER: "b996cf1fdc4d11",
  PASSWORD: "d06fcaaa ",
  DB: "heroku_dd20ed31fda6079",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};