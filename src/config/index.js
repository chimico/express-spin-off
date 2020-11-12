if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
  hostname: '0.0.0.0',
  port: process.env.PORT,
};
