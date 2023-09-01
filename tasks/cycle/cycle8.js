/*


Дано число n (n > 0). Верните из функции значение двойного факториала: n!!=n∗(n−2)∗(n−4)∗...∗2n!!=n∗(n−2)∗(n−4)∗...∗2 (или 1, в зависимости от четности n).

Пример, для n = 5: n!!=5∗3∗1=15n!!=5∗3∗1=15, для n = 6: n!!=6∗4∗2=48n!!=6∗4∗2=48

Sample Input 1:

7

Sample Output 1:

105

Sample Input 2:

8

Sample Output 2:

384

*/

function testCycle(n) {
    let x=n;
    for (a=2; a<=n-2; a=a+2){
   x=x*(n-a);

    }
    return x;
}

