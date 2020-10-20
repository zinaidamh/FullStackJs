//Реализовать функцию для фильтрации массива по длине слов, значения длины указываются включительно,// фильтр должен работать так:  
const fruits = ['orange', 'apple', 'banana', '']

//filterByLength(fruits, 0,5) // [‘apple’, ‘’]

function filterByLength(arr, min, max)
{
   return arr.filter(item => item.length >= min && item.length <= max)  
  
}


//const filtered=fruits.filter(item => item.length <= 5)
console.log(filterByLength(fruits,0,5))

console.log(filterByLength(fruits,4,7))

console.log(filterByLength(fruits,6,6))