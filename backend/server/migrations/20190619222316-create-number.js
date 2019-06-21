module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Numbers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      number_type: {
        allowNull: true,
        type: Sequelize.STRING
      },
      nameId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Names',
          key: 'id',
          as: 'nameId',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: queryInterface /* , Sequelize */ => queryInterface.dropTable('Numbers')

};