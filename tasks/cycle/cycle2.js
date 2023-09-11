/*

Найдите сумму  всех целых чисел от 1 до n включительно и верните из функции результат.

Sample Input 1:

3

Sample Output 1:

6

Sample Input 2:

6

Sample Output 2:

21

*/

function testCycle(n) {
    var x=0;//задать значение переменной 0, объявляя начало функции
    for (i=0; i<=n; i++){
        x=x+i}//тело цикла увеличиваем каждый шаг
    return x;
}
