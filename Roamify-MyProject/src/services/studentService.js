const studnetRepository = require('../repository/studnetRepository');

 //------------------- Get all students -------------------//

    const getAllStudents = async () => {
        try {
            return await studnetRepository.getAllStudents();
        } catch (error) {
            console.error('Error :', error);
            throw new Error('Internal Server Error');
        }
    };

 //------------------ Add a new student ------------------//

    const addStudnet = async({first_name,last_name,age,email,phone_number})=>{ // u can use DTO for this 
        try {
            const result = await studnetRepository.addStudnet({first_name,last_name,age,email,phone_number});// u can use DAO for this if u want 
            return {
                Message : "Student Added succesufuly",
                studentId : result.insertId,
            };
        } catch (error) {
            console.error('Error:', error);
            throw new Error('Internal Server Error');
        }

    }

   //------------------ Soft Delete ------------------//

    const deleteStudent = async(studentId)=>{
        try {
            const result = await studnetRepository.deleteStudent(studentId);
            if (result.affectedRows === 0) {
                return { message: `Student with ID:${studentId.replace(/\n/g, '')} not found`, success: false };
            }
            return { message: `Student with ID:${studentId.replace(/\n/g, '')} deleted successfully`, success: true };
        } catch (error) {
            console.error('Error:', error);
            throw new Error('Internal Server Error');
        } 
    }

  //------------------ Permanent Delete ------------------//

    const deleteStudentPermanently = async (studentId) =>{
        try {
            const result = await studnetRepository.deleteStudentPermanently(studentId);
            if (result.affectedRows === 0) {
                return { message: `Student with ID:${studentId.replace(/\n/g, '')} not found`, success: false };
            }
            return { message: `Student with ID:${studentId.replace(/\n/g, '')} Permanently Deleted Successfully`, success: true };
        } catch (error) {
            console.error('Error:', error);
            throw new Error('Internal Server Error'); 
        }
    } 

 //------------------ Restore Student ------------------//

    const restoreStudent = async (studentId) => {
        try {
        const result = await studnetRepository.restoreStudent(studentId);
    
        if (result.affectedRows === 0) {
            return { message: `Student with ID:${studentId.replace(/\n/g, '')} not found`, success: false };
        }
    
        return { message: `Student with ID:${studentId.replace(/\n/g, '')} restored successfully`, success: true };
        } catch (error) {
        console.error('Error:', error);
        throw new Error('Internal Server Error');
        }
    };

 //------------------ Update Student ------------------//

    const updateStudent = async (studentId, updatedFields) => {
        try {
        const result = await studnetRepository.updateStudent(studentId,updatedFields);
        if (result.affectedRows === 0) {
            return { message: `Student with ID:${studentId.replace(/\n/g, '')} not found`, success: false };
        }
        return { message: `Student with ID:${studentId.replace(/\n/g, '')} updated successfully`, success: true };
        } catch (error) {
        console.error('Error:', error);
        throw new Error('Internal Server Error');
        }
    };
  
  module.exports = {getAllStudents,addStudnet,deleteStudent,deleteStudentPermanently,restoreStudent,updateStudent}