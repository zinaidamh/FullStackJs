1  var x = 6, y = 15, z = 4; 
y /= x + 5 % z; 

The same as:

y=y / (x + (5%z))

result
y=2.142857142857143



2 var x = 6, y = 15, z = 4; 
z = x++ + y * 5; 

the same as

z = x +  (y * 5) 
x = x + 1 (from increment)
result
x=7
z=81


3.  
var x = 6, y = 15, z = 4; 
x += y - x++ * z; 

the same as:
x = x + ( y - (x*z))
 
result
x=-3

(question: but how to explain that increment x++ not influence on x value ?)

4.  
var x = 6, y = 15, z = 4; 
z = -- x - y * 5;
the same as 
z = (x-1) - (y*5)
x = x -1

result 
z=-70
x =5 





5. 
var a = 3;  
var b = ++a + 1 + a++;

the same as
var b = (a+1) + 1 
a = a + 1  //pre increcemnt
b = b + a
a = a + 1  //post increment
result
a = 5
b = 9










