//Реализовать функцию для случайной сортировки элементов массива
const shuffledArr = (function()
{
  return Math.random() - 0.5;
});

const numbers=[]
const n=100
for (let i=0; i<n; i++)
{
   numbers.push(i) 
}
const shuffle = numbers.sort(shuffledArr)
console.log(shuffle)

//Fisher–Yates shuffle
function shuffleFY(arr)
{
  let j, temp;
  for(let i = arr.length - 1; i > 0; i--)
  {
    let rand=Math.random()
    j = Math.floor(rand*(i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];   
  }
  return arr;
}  
console.log(shuffleFY(numbers))
