import Sequelize, { Model } from "sequelize";

export default class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: "",
          allowNull: false,
          validate: {
            notEmpty: true,
            len: {
              args: [3, 255],
              msg: "Name must be between 3 and 255 characters long",
            },
          },
        },
        last_name: {
          type: Sequelize.STRING,
          defaultValue: "",
          allowNull: false,
          validate: {
            notEmpty: true,
            len: {
              args: [3, 255],
              msg: "Last Name must be between 3 and 255 characters long",
            },
          },
        },
        age: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            isInt: {
              msg: "Age must be an integer",
            },
            notEmpty: true,
          },
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: {
            msg: "Email must be unique",
          },
          validate: {
            isEmail: {
              msg: "Email must be a valid email address",
            },
            notEmpty: true,
          },
        },
        weight: {
          type: Sequelize.FLOAT,
          allowNull: false,
          validate: {
            isFloat: {
              msg: "Weight must be a valid float number",
            },
            notEmpty: true,
          },
        },
        height: {
          type: Sequelize.FLOAT,
          allowNull: false,
          validate: {
            isFloat: {
              msg: "Height must be a valid float number",
            },
            notEmpty: true,
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: "student_id" });
  }
}
