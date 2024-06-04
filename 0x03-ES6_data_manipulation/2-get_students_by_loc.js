export default function getStudentsByLocation(studentsArr, studentCity) {
  return studentsArr.filter((student) => student.location === studentCity);
}
