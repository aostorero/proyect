const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:papa44@localhost:5432/db_proyect');
/*try {
    sequelize.authenticate();
    console.log("Conexión exitosa");
} catch (error) {
    console.log("Error, ", error);
}*/
module.exports = sequelize;