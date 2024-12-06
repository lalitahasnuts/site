// 1.
/*let name = "Лалита"; 
let age = 18; 

if (age >= 18) 
{
  console.log("Вы совершеннолетний");
} 
else 
{
  console.log("Вы несовершеннолетний");
}*/

//2
/*
for (let i = 1; i < 11; i++) {
    console.log(i);
}

let j = 10;
while (j >= 1) 
{
  console.log(j);
  j--;
}*/

//3
/*
const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
const practices = ['Практика 1', 'Практика 2', 'Практика 3'];

lectures.push('Тема 4');
practices.unshift('Практика 0'); 

console.log("Лекции:");
lectures.forEach(lecture => console.log(lecture));

console.log("\nПрактики:");
practices.forEach(practice => console.log(practice));

function printArray(arr) 
{
  if (arr === null || arr === undefined || arr.length === 0) 
  {
    console.log("Массив пуст.");
    return;
  }
  let output = "";
  arr.forEach((element, index) => 
  {
    output += element;
    if (index < arr.length - 1) 
    {
      output += ", ";
    }
  });
  console.log(output);
}*/

//4
function getLectures(lectures) 
{
    return lectures.filter(lectures => lectures.startsWith("О"));
}

const lectures = ['Тема 1', 'Основы программирования', 'Тема 3', 'Определение'];

const filter = getLectures(lectures);
console.log("Темы лекций, начинающиеся с 'О':");
console.log(filter); 
