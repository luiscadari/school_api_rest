import Student from "../models/Student";

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: "Luís",
      last_name: "Cadari",
      age: 20,
      email: "luiscadari@icloud.com",
      weight: 90,
      height: 1.8,
    });
    return res.json(newStudent);
  }
}

export default new HomeController();
