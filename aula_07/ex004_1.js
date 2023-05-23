/* Ordem de Precedencia dos operadores
        1 -> ()
        2 -> **
        3 -> *, /, %
        4 -> +, -
        */
var a = 5 + 3;
var b = a % 5;
var c = 5 * b ** 2;
var d = 10 - a / 2;
var e = (6 * 2) / d;
var f = (b % e) + 4 / e;
var n = 3;
n += 4; // 7
n -= 5; // 2
n *= 4; // 8
n /= 2; // 4
n **= 2; // 16
n %= 5; // 1
var x = 5;
++x; // 6
--x; // 4
