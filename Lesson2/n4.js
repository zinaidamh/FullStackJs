//Реализовать функцию для фильтрации массива чисел по убыванию


function sortDesc(numbers)
{
  
  return numbers.sort((a,b)=>  b - a)
  
}

const numbers = [-20, -10, 0, 10, 20, 30]

console.log(sortDesc(numbers)) // [30, 20, 10, 0, -10, -20]
