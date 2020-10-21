
//Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой { word: //'smth', length: 1, isCapitalized: false}



function textToArray(txt)
{
  const txtArray = txt.split(" ")
  //console.log(txtArray)
  const objArray = txtArray.map(checkWord)
  //console.log(objArray)
  return objArray 
  
  
}


function checkWord(word)
{
   
  var isUpper=false
  if (word.length>1)
     if (word[0]==word[0].toUpperCase())
       isUpper=true;
  
 // console.log(isUpper)
  
var obj=
     

  { 
    word:  word, 
    length: word.length, 
    isCapitalized: isUpper
  }

//console.log(obj)   

return obj
  
}


const objArray= textToArray("Hello world. I love Java Script")
objArray.forEach((item)=>console.log(item))
