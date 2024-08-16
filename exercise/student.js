const students = [
    { name: 'Alice', age: 20, grades: [85, 92, 88] },
    { name: 'Bob', age: 22, grades: [78, 81, 79] },
    { name: 'Charlie', age: 23, grades: [95, 90, 93] },
    { name: 'David', age: 21, grades: [70, 75, 72] }
];


students.forEach((student) =>{
    let avGrade = 0;
    student.grades.forEach((el) => (avGrade +=el));

    console.log(`${student.name}  average grade is ${avGrade}`);

    
 })



    

//console.log (e.grades)

//let studentAve= 

//studentAve = studentGrade.forEach
    
