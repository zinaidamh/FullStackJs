//Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой { word: //'smth', length: 1, isCapitalized: false}
function textToArray(txt)
{
  const txtArray = txt.split(" ")
  const objArray = txtArray.map(checkWord)
  return objArray 
}

function checkWord(word)
{
 let isUpper=false
 if (word.length>1)
 {
   if (word[0]==word[0].toUpperCase())
   {
      isUpper=true;
   }
 }   
 
 const obj=
 { 
     word:  word, 
     length: word.length, 
     isCapitalized: isUpper
 }
  return obj  
}

const objArray= textToArray("Hello world. I love Java Script")
objArray.forEach((item)=>console.log(item))

