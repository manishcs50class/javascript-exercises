const findTheOldest = function (peopleObjects) {
  return peopleObjects.reduce((a, b) =>
    (a.yearOfDeath || new window.Date().getFullYear()) - a.yearOfBirth >
    (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth
      ? a
      : b
  );
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
