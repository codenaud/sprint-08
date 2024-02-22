import { DataTypes } from 'sequelize';
import db from '../db/connection';

// user => nombre del controlador
const User = db.define(
  'User',
  {
    name: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.NUMBER,
    },
    location: {
      type: DataTypes.STRING,
    },
    hobby: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'users',
  }
  /* {
    createdAt: false,
    updatedAt: false,
  } */
);

export default User;
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
