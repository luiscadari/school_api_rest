import Student from "../models/Student";
import User from "../models/User";
import jwt from "jsonwebtoken";

class TokenController {
  async index(req, res) {
    return res.json("ok");
  }
  async store(req, res) {
    const { email = "", password = "" } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        errors: ["e-mail ou senha faltando"],
      });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({
        errors: ["Usuário não encontrado"],
      });
    }
    if (!(await user.isPasswordValid(password))) {
      return res.status(401).json({
        errors: ["SEnha inválida"],
      });
    }
    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.status(200).json({ token });
  }
}

export default new TokenController();
