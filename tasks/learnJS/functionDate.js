/* 
В этом задании в нашу функцию testDateTime передаются две строки вида "03 November 2017 04:17".
Вам нужно превратить строки в даты, сравнить их. Для той, что больше получить день недели и вернуть его из функции.

Название дня недели должно быть по-русски, с большой буквы, например: "Понедельник".

Sample Input 1:

04 April 1909 17:29
21 July 1909 09:13

Sample Output 1:

Среда

Sample Input 2:

09 May 1909 07:49
25 September 1909 04:13

Sample Output 2:

Суббота
*/


function testDateTime(a, b) {
    let days = 'Воскресенье Понедельник Вторник Среда Четверг Пятница Суббота'.split(' ');
    let maxDate = new Date(Math.max(Date.parse(a), Date.parse(b)));
    let maxDateDayIndex = maxDate.getDay();
    return days[maxDateDayIndex];
}



