const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const stdList = students.map((student, index) => ({
    name: student,
    grade: grades[index].reduce((acc ,curr) => (acc + curr)) / grades[index].length 
  }));
   return stdList;
}
console.log(studentAverage());
