import Sequelize, { Model } from "sequelize";

export default class Photo extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: "",
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Originalname must be not empty",
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: "",
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Filename must be not empty",
            },
          },
        },
      },
      {
        sequelize,
        tableName: "photos",
      }
    );
    return this;
  }
}
