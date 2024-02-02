const studentService = require('./studentService')

 //------------------- Get all students -------------------//

 const getAllStudents = async () => {
    try {
        return await studentService.getAllStudents();
    } catch (error) {
        console.error('Error :', error);
        throw new Error('Internal Server Error');
    }
};

module.exports = {getAllStudents}