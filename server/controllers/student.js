const Student = require("../models/student");

const createStudentProfile = async (req, res) => {
  try {
    const newStudent = await Student.create({ ...req.body });
    res.status(201).json({ message: "Data registered Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getStudentById = async (req, res) => {
  try {
    // const student = await Student.findById(req.params.id)
    const students = await Student.find({ _id: req.params.id });
    if (students.length === 0) {
      res.status(404).json({ message: "Student Not Found" });
    }
    res.json(students[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateStudentProfile = async (req, res) => {
  try {
    // const updatedStudent = await Student.findByIdAndUpdate(req.params.id);
    const updateStudentProfile = await Student.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (!updateStudentProfile) {
      res.status(404).json({ message: "Student Not Found" });
    }
    res.json(updateStudentProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteStudentProfile = async (req, res) => {
  try {
    const deletedStudent = await Student.findOneAndDelete({
      _id: req.params.id,
    });
    if (!deletedStudent) {
      res.status(404).json({ message: "Student Not Found" });
    }
    res.json(deletedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createStudentProfile,
  getAllStudents,
  getStudentById,
  updateStudentProfile,
  deleteStudentProfile,
};
