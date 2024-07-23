const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let linesLength = 0;
  try {
    const data = fs.readFileSync(fileName, 'utf-8');
    const lines = data.toString().split('\n');
    for (let d = 0; d < lines.length; d += 1) {
      if (lines[d]) {
        linesLength += 1;
        const field = lines[d].toString().split(',');
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }
    const linesLength = linesLength - 1;
    console.log(`Number of students: ${linesLength}`);
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
