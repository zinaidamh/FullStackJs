/*Реализовать if для проверки доступа
Выполняется проверка прав доступа пользователя к сайту при соблюдении следующих условий:
1. Возраст от 18 до 35 лет
2. Оплачена месячная подписка
3. Не действует блокировка
4. Имя пользователя не содержит внутри себя запрещенные слова
Если пользователь является администратором, для получения доступа достаточно соблюдения только первого условия
Информация о пользователе хранится в объекте такого вида:
{
 age: 18,
 paid: true,
 blocked: false,
 badUsername: false,
 isAdmin: false
}
Переписать if с помощью тернарного оператора ( Да, это будет выглядеть страшно 
*/
<script>
document.write("begin")
const user1 = {
 age: 18,
 paid: true,
 blocked: false,
 badUsername: false,
 isAdmin: false
}

const user2 = {
 age: 28,
 paid: false,
 blocked: false,
 badUsername: false,
 isAdmin: false
}

const user3 = {
 age: 17,
 paid: false,
 blocked: false,
 badUsername: true,
 isAdmin: false
}


const user4 = {
 age: 27,
 paid: false,
 blocked: false,
 badUsername: true,
 isAdmin: true
}


function userAccessCheck(user)
{
if (user.age>=18 && user.age<=35)
   if (user.isAdmin==true)
       return true;
   else
      return user.paid==true && user.blocked==false && user.badUsername==false
else
   return false;
}


function userAccessCheck_tr(user)
{
 return user.age>=18 && user.age<=35 ? 
        user.isAdmin==true ? true: user.paid==true && user.blocked==false && user.badUsername==false: 
        false

}

document.write ("<p> check with if ")
document.write("<br> user1 access =" + userAccessCheck(user1))
document.write("<br> user2 access =" + userAccessCheck(user2))
document.write("<br> user3 access =" + userAccessCheck(user3))
document.write("<br> user4 access =" + userAccessCheck(user4))
document.write("</p>");

document.write ("<p> check with ? ")
document.write("<br> user1 access =" + userAccessCheck_tr(user1))
document.write("<br> user2 access =" + userAccessCheck_tr(user2))
document.write("<br> user3 access =" + userAccessCheck_tr(user3))
document.write("<br> user4 access =" + userAccessCheck_tr(user4))
document.write("</p>");
