const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// 1. Отримати студентів з оцінкою більше 80
console.log(getTopScoringStudents(students));
// ["John", "Jane", "Jack"]

// 2. Отримати середній вік студентів
console.log(getAverageAge(students));
// 21

// 3. Додати нового студента
addStudent(students, { name: "Tom", age: 24, score: 88 });
console.log(students);
// Масив студентів тепер містить студента Tom

// 4. Видалити студента за іменем
removeStudentByName(students, "Jim");
console.log(students);
// Студент Jim буде видалений з масиву
