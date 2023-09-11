

/*
Даны числа a и b. Выведите строку с числами между а и b включая границы, отсортированными по возрастанию. Неизвестно, какое из чисел больше, но известно, что и a и b больше 0.

Sample Input 1:

8 1

Sample Output 1:

1 2 3 4 5 6 7 8

Sample Input 2:

6 6

Sample Output 2:

6

Sample Input 3:

3 5

Sample Output 3:

3 4 5
*/



function testCycle(a, b) {
  let x = "", min, max;
  
  if (a >= b) { // проверка на max
    min = b;
    max = a;
  } else {
    min = a;
    max = b;
  }
  
  while (min <= max) {
    x = x + min + ' ';
    min++; 
  }
  
  return x;
  }