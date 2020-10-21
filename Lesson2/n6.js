//Реализовать функцию для случайной сортировки элементов массива
const shuffledArr = (function(){
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
function shuffleFY(arr){
	var j, temp;
	for(var i = arr.length - 1; i > 0; i--){
    var rand=Math.random()
    
		j = Math.floor(rand*(i + 1));
    
     //console.log(j)
	  [arr[i], arr[j]] = [arr[j], arr[i]];
    console.log(rand ,i, j)
	}
	return arr;
}

console.log(shuffleFY(numbers))