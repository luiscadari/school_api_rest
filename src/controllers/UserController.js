import User from "../models/User";

class UserController {
  async create(req, res) {
    try {
      const newStudent = await User.create(req.body);
      const { email, name } = newStudent;
      return res.status(200).json({ email, name });
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
      const users = await User.findAll({ attributes: ["id", "nome", "email"] });
      console.log("userid: ", req.userId);
      console.log("user email: ", req.userEmail);
      return res.status(200).json(users);
    } catch (e) {
      console.log("Erro", e);
      return res.status(400).json({ message: "Bad Request" });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, email, nome } = user;
      return res.status(200).json({ id, email, nome });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: "BadRequest" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errros: ["id is missing!"],
        });
      }
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }
      const newUser = await user.update(req.body);
      const { name, email } = newUser;
      return res.status(200).json({ name, email });
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.json(null);
      }
      const user = await User.findByPk(id);
      await user.destroy();
      return res.status(200).json(user);
    } catch (e) {
      return res.status(400).json({
        errors: [e],
      });
    }
  }
}

export default new UserController();
