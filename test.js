import needle from 'needle';

//student data
const students = [
  { stdnum: '202312456', fname: 'Mary Jane', lname: 'Watson', age: 20 },
  { stdnum: '202316035', fname: 'Princess', lname: 'Cacot', age: 21 },
  { stdnum: '202119835', fname: 'Mingyu', lname: 'Kim', age: 28 },
  { stdnum: '200115678', fname: 'Seungcheol', lname: 'Choi', age: 30 },
  { stdnum: '201362786', fname: 'Heeseung', lname: 'Lee', age: 23 },

];

// for adding the student data
const addStudents = async () => {
    console.log('\n--- ADD STUDENTS ---');
    for (const student of students) {
      try {
        const res = await needle('post', 'http://localhost:3000/save-student', student, { json: true });
        console.log('Response:', res.body);
      } catch (err) {
        console.error('Error:', err);
      }
    }
  };
  
const updateStudent = async () => {
  console.log('\n--- UPDATE STUDENT DATA  ---');
  const updateData = { fname: 'Mary Jane', newFname: 'Mary Jane', newLname: 'Parker' };
  await needle('post', 'http://localhost:3000/update', updateData, { json: true })
    .then(res => console.log('Response:', res.body))
    .catch(err => console.error('Error:', err));
};

// contains all the users 
const getAllStudents = async () => {
  console.log('\n--- GET ALL STUDENTS ---');
  await needle('get', 'http://localhost:3000/members')
    .then(res => console.log('Response:', res.body))
    .catch(err => console.error('Error:', err));
};

// Get the data using student's first name 
const getStudentByStdnum = async () => {
    console.log('\n--- GET STUDENT DATA USING FIRST NAME ---');
    await needle('get', `http://localhost:3000/user?stdnum=202316035`)
      .then(res => console.log('Response:', res.body))
      .catch(err => console.error('Error:', err));
  };
  
// Delete a student by their student number 
const deleteStudent = async () => { 
  console.log('\n--- REMOVE STUDENT BY THEIR STUDENT NUMBER ---');
  await needle('post', 'http://localhost:3000/remove-user', { stdnum: '201362786' }, { json: true })    .then(res => console.log('Response:', res.body))
    .catch(err => console.error('Error:', err));
};

// Delete all 
const deleteAllStudents = async () => {
  console.log('\n--- REMOVE ALL STUDENTS ---');
  await needle('post', 'http://localhost:3000/remove-all-user', {}, { json: true }) // Removed extra slash
  .then(res => console.log('Response:', res.body))
    .catch(err => console.error('Error:', err));
};

await addStudents();
await updateStudent();
await getStudentByStdnum();
await getAllStudents();
await deleteStudent();
//await deleteAllStudents(); 
// comment deleteAll to test in database


