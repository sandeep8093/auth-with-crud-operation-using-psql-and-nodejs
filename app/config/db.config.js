module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Nayak_8093",
    DB: "testdb",
    dialect: "postgres",
    port: 5432 ,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };