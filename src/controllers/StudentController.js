import Student from "../models/Student";

class StudentController {
  async index(req, res) {
    try {
      const students = await Student.findAll();
      res.status(200).json(students);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: e });
    }
  }
  async store(req, res) {
    try {
      if (!req.body) {
        return res.status(400).json({ error: "Invalid request body" });
      }
      const student = await Student.create(req.body);
      res.status(201).json(student);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: e });
    }
  }
  async update(req, res) {
    try {
      const student = await Student.findByPk(req.params.id);
      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }
      await student.update(req.body);
      res.status(200).json(student);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: e });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: "Invalid ID" });
      }
      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }
      await student.destroy();
      res.status(200).json({ message: "Student deleted" });
    } catch (e) {
      console.error(e);
      res.json({ error: e });
    }
  }
  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: "Invalid ID" });
      }
      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }
      res.status(200).json(student);
    } catch (e) {
      console.error(e);
      res.json({ error: e });
    }
  }
}

export default new StudentController();
