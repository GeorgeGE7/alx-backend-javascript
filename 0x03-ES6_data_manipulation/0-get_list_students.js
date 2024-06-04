export default function getListStudents() {
  const firstUser = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };

  const secondeUser = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };

  const thirdUser = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  };
  const response = [firstUser, secondeUser, thirdUser]
  return response;
}
