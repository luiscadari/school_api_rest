import Sequelize, { Model } from "sequelize";

import appConfig from "../config/appConfig";

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
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.getDataValue("filename")}`;
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
