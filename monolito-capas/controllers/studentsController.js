const studentService = require("../services/studentService");

const createStudent = (req, res) => {
  const { name, id } = req.body || {};
  if (!name || !id) {
    return res.status(400).send("Faltan datos del estudiante (name y id)");
  }
  const newStudent = studentService.create({ name, id });
  res.send(`Estudiante ${newStudent.name} agregado exitosamente.`);
};

const listStudent = (req, res) => {
  const list = studentService.list();
  res.json(list);
};

module.exports = { createStudent, listStudent };
