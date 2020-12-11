const Sequelize = require('sequelize');
const db = require('../config/db');

const Person = db.define('person', {
    name: {
        type: Sequelize.STRING
    },
    birthday: {
        type: Sequelize.DATE
    },
    sex: {
        type: Sequelize.CHAR
    },
    home_address: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});

module.exports = Person;