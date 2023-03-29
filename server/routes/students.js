const express = require('express');
const router = express.Router();
const {
  getAllStudents,
  getStudentById,
  createStudentProfile,
  updateStudentProfile,
  deleteStudentProfile,
} = require('../controllers/student');
const authenticate = require('../middlewares/auth');
router.use(authenticate);
router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.post('/', createStudentProfile);
router.put('/:id', updateStudentProfile);
router.delete('/:id', deleteStudentProfile);

module.exports = router;
