"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
// user => nombre del controlador
const User = connection_1.default.define('User', {
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    phone: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
    },
    hobby: {
        type: sequelize_1.DataTypes.STRING,
    },
}
/* {
  tableName: 'users',
} */
/* {
  createdAt: false,
  updatedAt: false,
} */
);
exports.default = User;
/** pruebas método postUser
{
  "name": "Mark",
  "lastName": "Otto",
  "email": "mark.otto@demo.com",
  "phone": "609123123",
  "location": "Portland, Oregon",
  "hobby": "Photography"
}
 */
