
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('freedb_myOctalogic', 'freedb_octalogic-user', '5z5mRyU2&%A%ZdF', {
  host: 'sql.freedb.tech',
  dialect: 'mysql', 
  port:3306,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Use this only if you trust the database server
    },
  },
  logging: false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};

export { sequelize, connectDB };
