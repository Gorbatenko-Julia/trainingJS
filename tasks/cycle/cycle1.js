

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




function testCycle(a, b) {
    let x = "";
    
    if (a >= b) { //условие если а больше или равно б
        for (;b <= a; b++){ //инициализация условие изменение
            x = x + b + " "; // тело цикла 
       }
    }
       return x;
    

     if (a <= b) { //условие если а меньше или равно б 
        for (;a <= b; a++) {//инициальзация условие изменение
           x = x + a + " "; // тело цикла 
       }
     }
    
   return x;
}