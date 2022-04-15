const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// Initialize Product model (table) by extending off Sequelize's Model class
class Playlist extends Model {}

// set up fields and rules for Product model
Playlist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    playlist_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //This string will populate an <a> on the html side
    playlist_link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
        unique: false
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'playlist',
  }
);

module.exports = Playlist; 