const users = [{
  id: 1,
  name: "Matt",
  schoolId: 101,
},{
  id: 2,
  name: "Marc",
  schoolId: 999,
}];

const grades = [{
  id: 1,
  schoolId: 101,
  grade: 86,
},{
  id: 2,
  schoolId: 999,
  grade: 99,
},{
  id: 1,
  schoolId: 101,
  grade: 94,
}];

const getGrades = (schoolId) => {
  return new Promise((resolve, reject) => {
    resolve(grades.filter((grade) => grade.schoolId === schoolId));
  });
};

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find(user => user.id === id);

    if(user){
      resolve(user);
    } else {
      reject(`Unable to find user with id of ${id}.`)
    }
  });
};


const getStatusAlt = async (userId) => {
  console.log("user id", userId)
  const user = await getUser(userId);
  const grades = await getGrades(user.schoolId);

  let average = 0;

  if(grades.length > 0){
    average = grades.map(grade => grade.grade).reduce((a, b) => a + b) / grades.length;
  }

  return `${user.name} has a ${average}% in the class.`

  console.log("User inside alt", user)
};

getStatusAlt(1).then((name) => {
  console.log(name);
}).catch((e) => {
  console.log(e);
});











// const getStatus = (userId) => {
//   return getUser(userId).then((user) => {
//     return getGrades(user.schoolId);
//   }).then((grades) => {
//
//   })
// }


// getStatus(1).then((user) => {
//   console.log(user);
// }).catch((error) => {
//   console.log(error);
// })
