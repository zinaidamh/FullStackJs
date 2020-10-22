//Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент 


function compareArrays(arr1, arr2)
{
   if (arr1.length!=arr2.length)
       return false
       
  
     for(let i=0;i<=arr1.length;i++)
     {
         if (arr1[i]!=arr2[i])
             return false
       
     }     
  
  
  return true
}


const x=['a','b','c']
const y=['a','b','e']

console.log(compareArrays(x,y))

const z=['a','b','c']
console.log(compareArrays(x,z))