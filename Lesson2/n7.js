//Создать пустой объект и наполнить его данными:
//1. Добавить свойство name и записать в него значение ‘Alex’
//2. Добавить свойство lastName и записать в него значение ‘Smith’
//3. Присвоить значение ‘Bob’ в свойство name
//4. Удалить оба свойства

const obj={}
obj.name="Alex"
console.log(obj)
obj.lastName="Smith"
console.log(obj)
obj.name="Bob"
console.log(obj)
delete obj.name
console.log(obj)
delete obj.lastName
console.log(obj)