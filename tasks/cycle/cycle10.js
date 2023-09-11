/*


Дано число n (n > 1). Верните из функции n-ное число Фибоначчи

Sample Input 1:

4

Sample Output 1:

3

Sample Input 2:

7

Sample Output 2:

13

*/

function testCycle(n) {
    let x=0,a=1;
     for ( i=1; n>=i; i++){
         let c=a;
         a=x+a;
         x=c;  
     }
         return x;
 }
// условие задачи было в том что бы вывести номер Фиббоначе, соответствующий заданному порядковому номеру.