import mongoose from 'mongoose';

await mongoose.connect('mongodb://127.0.0.1:27017/StudentDatabase');

//schema for the Student model
const studentSchema = new mongoose.Schema({
    // student details 
    stdnum: String, 
    fname: String,
    lname: String,
    age: Number
});

// nag ccreate ng another if simply studentData lang and ginagawag plural 
// so i used:
const Student = mongoose.model('Student', studentSchema, 'studentData');


// // Homepage route
// const homepage = (req, res) => {
//     res.send('Welcome to the Homepage');
// };

// Save a new student
const saveStudent = async (req, res) => {
    try {
        const { stdnum, fname, lname, age } = req.body;
        const newStudent = new Student({ stdnum, fname, lname, age });

        await newStudent.save();
        res.send({ inserted: true }); 
    } catch (error) {
        console.error(error);
        res.send({ inserted: false });
    }
};

// Update exisiting student 
const updateStudent = async (req, res) => {
    try {
        const { fname, newFname, newLname } = req.body;
        const result = await Student.updateOne(
            { fname: fname },
            { fname: newFname, lname: newLname } // updated name 
        );

        if (result.modifiedCount > 0) {
            res.send({ updated: true }); // successfully updated
        } else {
            res.send({ updated: false });
        }
    } catch (error) {
        console.error(error);
        res.send({ updated: false });
    }
};

// Remove a specific student using stdnum
const removeStudent = async (req, res) => {
    try {
        const { stdnum } = req.body;
        const result = await Student.deleteOne({ stdnum });

        if (result.deletedCount > 0) {
            res.send({ deleted: true });
        } else {
            res.send({ deleted: false });
        }
    } catch (error) {
        console.error(error);
        res.send({ deleted: false });
    }
};

// Remove all students
const removeAllStudents = async (req, res) => {
    try {
        const result = await Student.deleteMany({});
        
        if (result.deletedCount > 0) {
            res.send({ deleted: true });
        } else {
            res.send({ deleted: false });
        }
    } catch (error) {
        console.error(error);
        res.send({ deleted: false });
    }
};

// Find a student using stdnum
const getStudentByStdnum = async (req, res) => {
    try {
        const { stdnum } = req.query;
        const student = await Student.find({ stdnum });

        res.send(student);
    } catch (error) {
        console.error(error);
        res.send([]);
    }
};

// Get all members (students)
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find({});
        res.send(students);
    } catch (error) {
        console.error(error);
        res.send([]);
    }
};

// Export the functions
export { Student, homepage, saveStudent, updateStudent, removeStudent, removeAllStudents, getStudentByStdnum, getAllStudents };
