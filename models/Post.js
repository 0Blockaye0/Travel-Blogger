const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_destination: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
      },
    },
    post_content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 250],
      },
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
      user_id: {
         type: DataTypes.INTEGER,
         references: {
           model: 'user',
           key: 'id'
         }
       }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
