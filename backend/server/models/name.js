export default (sequelize, DataTypes) => {
  const Name = sequelize.define('Name', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your username'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email address'
      },
      unique: {
        args: true,
        msg: 'Email already exists'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address'
        },
      },
    }
  }, {});
  Name.associate = (models) => {
    // associations can be defined here
    Name.hasMany(models.Number, { foreignKey: 'nameId' }), {as: 'Numbers'};
  };
  return Name;
};