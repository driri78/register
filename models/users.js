module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_pwd: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_addr: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
  return User;
};
