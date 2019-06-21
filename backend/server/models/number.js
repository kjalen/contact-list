export default (sequelize, DataTypes) => {
  const Number = sequelize.define('Number', {
    number: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter a number'
      },
      unique: {
        args: true,
        msg: 'Number already exists'
      }
    },
    number_type: {
      type: DataTypes.STRING,
      allowNull: {
        args: true
      },
    },
    nameId: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Number must belong to a person'
      }
    }
  });
  Number.associate = (models) => {
    // associations can be defined here
    Number.belongsTo(models.Name, { foreignKey: 'nameId'});
  };
  return Number;
};