import { homepage, saveStudent, updateStudent, removeStudent, removeAllStudents, getStudentByStdnum, getAllStudents } from './controller.js';

const router = (app) => {
    app.get('/', homepage);
    
    // POST requests
    app.post('/save-student', saveStudent);
    app.post('/update', updateStudent);
    app.post('/remove-user', removeStudent);
    app.post('/remove-all-user', removeAllStudents);

    // GET requests
    app.get('/user', getStudentByStdnum);  // Search user by stdnum
    app.get('/members', getAllStudents);  // Get all 
};

export default router;
