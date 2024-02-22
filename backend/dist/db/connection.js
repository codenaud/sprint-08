"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Option 3: Passing parameters separately (other dialects)
const sequelize = new sequelize_1.Sequelize('user_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // Eliminar SELECT 1+1 AS result
    // logging:false
});
exports.default = sequelize;
