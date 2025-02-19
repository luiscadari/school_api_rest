import Student from "../models/Student";

class StudentController {
  async index(req, res) {
    try {
      const students = await Student.findAll();
      res.json(students);
    } catch (e) {
      console.error(e);
      res.json({ error: e });
    }
  }
}

export default new StudentController();
