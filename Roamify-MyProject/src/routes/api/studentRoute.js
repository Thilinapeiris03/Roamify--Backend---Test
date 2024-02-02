const express = require("express");
const studentController = require('../../controller/studentController');
const router = express.Router();

router.get('/list',studentController.getAllStudents); // Get All Students

router.post('/add',studentController.addStudnet); // Add new Student

router.delete('/delete/:id',studentController.deleteStudent); // Soft delete Studnet
router.delete('/delete/perma/:id',studentController.deleteStudentPermanently); // Permanent delete Studnet

router.put('/restore/:id',studentController.restoreStudent); // Restore Student that soft Deleted

router.patch('/update/:id',studentController.updateStudent); // Update Student

module.exports = router;
