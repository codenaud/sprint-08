import { Sequelize } from 'sequelize';

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('user_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  // Eliminar SELECT 1+1 AS result
  // logging:false
});

export default sequelize;
