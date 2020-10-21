//Создать объект human со следующими возможностями:
//1. При записи значения в свойство fullName имя и фамилия должны записываться в отдельные свойства firstName и lastName
//2. При чтении значения fullName оно должно получаться из объединения firstName и lastName
//3. При задании значения свойства dateOfBirth должно так же устанавливаться свойство age в зависимости от разницы года рождения и текущего года


function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}

const human = 
{
   firstName: 'Alex',
   lastName : 'Smith',
   get fullname()
   {
      return `${this.firstName} ${this.lastName} `  
   },
   set dateOfBirth(birthDateString)
   {
       this.birthDate=new Date(birthDateString)
       this.age=getAge(birthDateString)
   }
 }

console.log(human.fullname)
human.dateOfBirth= '05/07/1990'
console.log(human.birthDate)
console.log(human.age)