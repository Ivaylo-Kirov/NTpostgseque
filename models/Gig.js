const Sequelize = require('sequelize');
const db = require('../config/db');

const Gig = db.define('gig', {
    gigname: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.STRING
    }
});

module.exports = Gig;
