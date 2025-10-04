const courseService = require("../services/courseService");

const createCourse = (req, res) => {
  const { title, code } = req.body || {};
  if (!title || !code) {
    return res.status(400).send("Faltan datos del curso (title y code)");
  }
  const newCourse = courseService.create({ title, code });
  res.send(`Curso ${newCourse.title} agregado exitosamente.`);
};

const listCourse = (req, res) => {
  const list = courseService.list();
  res.json(list);
};

module.exports = { createCourse, listCourse };