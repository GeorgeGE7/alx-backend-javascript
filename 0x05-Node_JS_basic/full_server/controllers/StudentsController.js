const readDatabase = require("../utils");

class StudentsController {
  static getAllStudents(request, response) {
    const data = [];
    readDatabase(process.argv[2].toString())
      .then((students) => {
        data.push("This is the list of our students");
        const studentsKeys = Object.keys(students);
        studentsKeys.sort();
        for (let i = 0; i < studentsKeys.length; i += 1) {
          data.push(
            `Number of students in ${studentsKeys[i]}: ${
              students[studentsKeys[i]].length
            }. List: ${students[studentsKeys[i]].join(", ")}`
          );
        }
        response.status(200).send(data.join("\n"));
      })
      .catch(() => {
        response.status(500).send("Cannot load the database");
      });
  }

  static getAllStudentsByMajor(request, response) {
    const field = request.params.major;
    readDatabase(process.argv[2].toString())
      .then((students) => {
        if (!(field in students)) {
          response.status(500).send("Major parameter must be CS or SWE");
        } else {
          response.status(200).send(`List: ${students[field].join(", ")}`);
        }
      })
      .catch(() => {
        response.status(500).send("Cannot load the database");
      });
  }
}

module.exports = StudentsController;
