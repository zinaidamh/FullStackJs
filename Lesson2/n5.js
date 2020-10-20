////Есть массив сотрудников компании
const employees = [
    {
     firstName: 'Alex',
     lastName: 'Smith',
     age: 54,
     salary: 10000,
     position: 'Architect'
    },
    {
     firstName: 'Gustav',
     lastName: 'Andersen',
     age: 31,
     salary: 5000,
     position: 'Software engineer'
    },
    {
     firstName: 'Liz',
     lastName: 'Taylor',
     age: 20,
     salary: 7000,
     position: 'Manager'
    }
]
 
//Нужно выполнить с ним следующие преобразования:
//1. Узнать среднюю зарплату сотрудников
//2. Отсортировать сотрудников по зарплате
//3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет

function reducer (accumulator, item) {
  return accumulator + item.salary;
}

function sortSalary(arr)
{
   return arr.sort((a,b)=>  a.salary - b.salary)
}

const sum = employees.reduce(reducer, 0); 

console.log("Average salary: "+ Math.round(sum/employees.length))
console.log("Employees sorted by salary: ");
const ordEmp = sortSalary(employees)
console.log("=======================")
for(let o of ordEmp)
{
console.log(o.firstName+' '+o.lastName + ": " + o.salary)
}

console.log("=======================")
console.log("Employees filtered by age>25 and salary>4500: ");
const filtEmp=employees.filter((item)=>item.salary>4500 && item.age>25)

for(let o of filtEmp)
{
console.log(o.firstName+' '+o.lastName + ": " + o.salary)
}

