/*
 

Даны числа a и b. Найдите сумму квадратов чисел между a и b включительно. Неизвестно, какое из чисел a или b больше.

Sample Input 1:

9 4

Sample Output 1:

271

Sample Input 2:

2 7

Sample Output 2:

139

*/


function testCycle(a, b) {
    let x = 0, min, max;
    
    if (a >= b) { // проверка на max
      min = b;
      max = a;
    } else {//противный случай
      min = a;
      max = b;
    }
    
    while (min <= max) {
      x =x + min **2;//сумма квадратов 
      min++; 
    
    }
    
    return x;
    }