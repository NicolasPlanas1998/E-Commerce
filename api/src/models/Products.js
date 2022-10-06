const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Products', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color:{
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    images: {
      type: DataTypes.STRING(1234),
    },
    description: {
      type: DataTypes.STRING(12347),
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stock:{
      type: DataTypes.INTEGER
    }
  });
};
