export default function getListStudentIds(students) {
  let studentsList = [];
  if (students instanceof Array) {
    studentsList = students.map((item) => item.id);
  }

  return studentsList;
}
