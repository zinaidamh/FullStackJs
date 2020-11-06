//Реализуйте функцию MoneyBox, который будет создавать объект с двумя методами:
//    addCoin - Добавляет 1 монету в копилку 
//    getAmount - Возвращает количество монет в копилке 
//Не должно быть возможности задать количество монет напрямую, минуя метод addCoin. При создании в копилке нет монет.

function MoneyBox()
{
   let count=0;
   const box=
   {
    getAmount: function()
    {
      return count;
    },
    addCoin:function()
    {
      count++;  
    }
  }
  return box;
}


const box = new MoneyBox();
box.getAmount(); // 0
console.log(box.count) //not accessible
box.addCoin();
box.addCoin();
box.addCoin();
box.addCoin();
console.log(box.getAmount());
