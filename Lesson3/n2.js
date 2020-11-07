//Кэширование

//Замыкания можно использовать для сохранения состояния и дальнейшей работы с ним.

//Реализуйте функцию cache, которая вернет функцию, возводящую число в степень и возвращающую результат. 
//Функция должна запоминать аргументы, которые она уже получала и возвращать результат сразу, не вычисляя //его повторно

//Пример:  
function cache()
{
  let x=0;
  let y=0;
  let result=0;
    
  return function calculate(x1,y1)
  {  
    if (x1==x && y1==y)
    {
       console.log('value: ' + result+', fromCache:true');
       return;
    }
    else
    {        
       x=x1;
       y=y1;
       result=Math.pow(x,y)
       console.log('value: ' + result+' , fromCache:false');
    }
  }
}

const calculate = cache();
calculate(3, 3); // " value: 27, fromCache: false "
calculate(2, 10); // " value: 1024, fromCache: false "
calculate(2, 10); // " value: 1024, fromCache: true "

