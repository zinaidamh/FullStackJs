/*Создайте калькулятор позволяющий добавлять в него дополнительные методы и сохранять результат, по умолчанию должны присутствовать методы add, substract

Пример: 
const calculator = new Calc()

calculator.operation('31 + 32') // 63
calculator.operation('10 * 2') // 20
calculator.addOperation('/', (a, b) => a / b)
calculator.operation('10 / 2') // 5

Также, он должен хранить историю всех операций и выводить ее по запросу:
 
calculator.history() /* [{operation: '+', operands: [31,32]}, {operation: '*', 
operands: [10,2]}, {operation: '/', operands: [10,2]}] */
 
И очищать историю
calculator.clearHistory()
calculator.history() // [] */

function Calc()
{
   let result=0;
   let hist=[];
   let operations=[];
   this.addOperation=function(op,f)
   {
       
        let oper=Object.create(
       {
            operator:op,
            func: f
       
        });
       
        operations.push(oper);
    } 
   
   this.operation=function(expr)
   {
      this.parseExpression=function(expr)
     {
       let arr=expr.split(' ');
       let a = parseInt(arr[0]);
       let b = parseInt(arr[2]);
       let op = arr[1];
       let data=
       {
          operation: op,
          operands: [a,b]
       }
       hist.push(data);
       return data;
      }
   
      let data=this.parseExpression(expr)
      let oper=operations.find(x=>x.operator==data.operation)
      if (oper!=undefined)
      {
         let a=data.operands[0];
         let b=data.operands[1];
         result=oper.func(a,b);
         console.log('result = '+result)
       }
       else
       {
         console.log('operation is not defined')
       }
       return result;
   }
   
   
   this.history = function()
   {
       console.log("History: ")
       console.log(hist);
   }
   
   this.clearHistory = function()
   {
       hist=[];
   
   }
   
   if (operations.length==0)
   {
       this.addOperation('+', (a, b) => a + b);
       this.addOperation('-', (a, b) => a - b);      
       
   }
 
}

const calculator = new Calc()
//console.log(calculator)
calculator.operation('31 + 32') 
calculator.addOperation('*', (a, b) => a * b)
calculator.operation('10 * 2')
calculator.addOperation('/', (a, b) => a / b)
calculator.operation('10 / 2') 
calculator.history();
calculator.clearHistory();
calculator.history();
calculator.operation("5 * 3");
calculator.operation("12 - 5");
calculator.history();