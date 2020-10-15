

/*Реализовать цикл перебирающий числа от одного до 20 и выводящий каждое четное значение на экран, реализация должна использовать все 3 вида циклов (отдельная реализация на каждый цикл)*/
<script>
document.write("<br>")
var i=1
do
{
   if (i%2==0)
   {
       document.write("&nbsp" + i)
   }

}
while(i++<=20)
document.write("<br>")

var i=0

while(++i<=20)
{
    
   if (i%2==0)
   {
       document.write("&nbsp" + i)
   }

}

document.write("<br>")
for (let i=1;i<=20;i++)
{
   //document.write(j)
   if (i%2==0)
   {
       document.write("&nbsp" + i)
   }
}

</script>