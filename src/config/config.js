module.exports = {
    development: {
        database: {
            host: "localhost",
            port: 5432,
            name: "spoiler",
            dialect: "postgres",
            user: "postgres",
            password: "postgres"
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        }
    }
};
