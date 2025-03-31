// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         host: process.env.DB_HOST,
//         dialect: 'mysql',
//         logging: false,
//         pool: {
//             max: 20,
//             min: 0,
//             acquire: 30000,
//             idle: 10000
//         },
//         dialectOptions: {
//             ssl: {
//                 require: true,
//                 rejectUnauthorized: false,
//             },
//         },
//     }
// );

// async function checkDataBaseConnection() {
//     try {
//         await sequelize.authenticate();
//         console.log('✅ Connecté à la base de données Postgres');
//     } catch(err) {
//         console.error('❌ Erreur de connexion à Postgres : ', err);
//         process.exit(1);
//     }
// }

// checkDataBaseConnection();

// module.exports = sequelize;