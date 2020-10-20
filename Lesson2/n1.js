<!DOCTYPE html>
<html>
<body>

<p>Creating a JavaScript Object.</p>

<p id="demo"></p>

<script>
//{ word: 'smth', length: 1, isCapitalized: false}

//console.log('begin')

                       
const newObj=
      Object.create(

  { 
    word: 'smth', 
    length: 1, 
    isCapitalized: false
  }
)
//console.log(newObj.word);
//console.log(newObj.length);
//console.log(newObj.isCapitalized);

//document.getElementById("demo").innerHTML = newObj.word

function checkWord(word)
{
   
  var isUpper=false
  if (word.length>1)
     if (word[0]==word[0].toUpperCase())
       isUpper=true;
  
 // console.log(isUpper)
  
var obj=
      Object.create(

  { 
    word: 'smth', 
    length: 1, 
    isCapitalized: false
  }
)
   
  // console.log(obj.isCapitalized)
//document.getElementById("demo").innerHTML = newObj.word
return obj
  
}
//newObj=checkWord("Hello word")
document.getElementById("demo").innerHTML = 'test='+ newObj.word


</script>

</body>
</html>
