import User from "../models/User";

class UserController {
  async create(req, res) {
    try {
      const newStudent = await User.create(req.body);
      return res.status(200).json(newStudent);
    } catch (e) {
      console.log(e);
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }
  //index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (e) {
      console.log("Erro", e);
      return res.status(400).json({ message: "Bad Request" });
    }
  }
}

export default new UserController();
