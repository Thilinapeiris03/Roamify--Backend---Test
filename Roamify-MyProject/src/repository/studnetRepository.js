const db = require('../config/dbconfig')

 //------------------- Get all students -------------------//
const getAllStudents = async () => {
    try {
        const [rows] = await db.query('SELECT id, first_name, last_name, age, email, phone_number FROM student WHERE deleted_at IS NULL');
        return rows;
    } catch (error) {
        console.error('Error :', error);
        throw new Error('Internal Database Error');
    }
};

//------------------ Add a new student ------------------//

const addStudnet = async({first_name,last_name,age,email,phone_number})=>{ 
    try {
        const [result] = await db.query('INSERT INTO student (first_name, last_name, age, email, phone_number) VALUES (?, ?, ?, ?, ?)', [first_name, last_name, age, email, phone_number]);
       return result;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Internal Database Error');
    }

}
//------------------ Soft Delete ------------------//

const deleteStudent = async(studentId)=>{
    try {
        const [result] = await db.query('UPDATE student SET deleted_at = CURRENT_TIMESTAMP WHERE id = ?',[studentId]);
        return result;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Internal Database Error');
    } 
}

//------------------ Permanent Delete ------------------//

const deleteStudentPermanently = async (studentId) =>{
    try {
        const [result] = await db.query('DELETE FROM student WHERE id = ?', [studentId]);
        return result;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Internal Database Error'); 
    }
} 

//------------------ Restore Student ------------------//

const restoreStudent = async (studentId) => {
    try {
    const [result] = await db.query('UPDATE student SET deleted_at = NULL WHERE id = ?', [studentId]);
    return result;
    } catch (error) {
    console.error('Error:', error);
    throw new Error('Internal Database Error');
    }
};

//------------------ Update Student ------------------//

const updateStudent = async (studentId, updatedFields) => {
    try {
    const [result] = await db.query('UPDATE student SET ? WHERE id = ? AND deleted_at IS NULL', [updatedFields, studentId]);
    return result;
    } catch (error) {
    console.error('Error:', error);
    throw new Error('Internal Database Error');
    }
};


module.exports = {getAllStudents,addStudnet,deleteStudent,deleteStudentPermanently,restoreStudent,updateStudent}