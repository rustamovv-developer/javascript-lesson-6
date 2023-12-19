// Function1

// let power = (a, b) => a ** b;

// console.log(power(3, 4));

// Function2

// function mean(a, b) {
//   let a_m = (a + b) / 2;
//   let g_m = Math.sqrt(a * b);
//   return { a_m, g_m };
// }

// let result = mean(12, 48);
// console.log(result);

// Function3

// let sign = (n) => {
//   if (n < 0) {
//     console.log(-1);
//   }
//   if (n > 0) {
//     console.log(1);
//   }
//   if (n == 0) {
//     console.log(0);
//   }
// };

// sign(-4)

// Function4

// function numberOfRoots(a, b, c) {
//   let d = b * b - 4 * a * c;
//   if (d > 0) {
//     return 2;
//   } else if (d === 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// let result = numberOfRoots(1, -6, 9);
// console.log(result);

// Function5

// function areaCircle(r) {
//   let s = Math.PI * r ** 2;
//   console.log(s);
// }

// areaCircle(10);

// Function6

// function sumRange(a, b) {
//   let count = 0;
//   if (a > b) {
//     console.log(0);
//   } else {
//     for (let i = a; i <= b; i++) {
//       count += i;
//     }
//     console.log(count);
//   }
// }

// sumRange(3, 5);

// Function7

// function calc(a, b, s) {
//   if (s == "+") {
//     console.log(a + b);
//   }
//   if (s == "-") {
//     console.log(a - b);
//   }
//   if (s == "/") {
//     console.log(a / b);
//   }
//   if (s == "*") {
//     console.log(a * b);
//   }
// }

// calc(3, 1, "/");

// Function8

// function isEven(k) {
//     if (k % 2 == 0){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }

// isEven(0)

// Function9

// function sortABC(a, b, c) {
//   let small = Math.min(a, b, c);
//   let big = Math.max(a, b, c);
//   let middle = a + b + c - small - big;
//   return small + ", " + middle + ", " + big;
// }

// let result = sortABC(12, 3, 8);
// console.log(result);

// Function10

// function isPowerN(K, N) {
//   if (K <= 0 || N <= 0) {
//     return false;
//   }

//   let result = 1;
//   while (result < K) {
//     result *= N;
//   }

//   return result === K;
// }

// console.log(isPowerN(8, 2));
// console.log(isPowerN(10, 3));

// Function11

// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }

//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(19));
// console.log(isPrime(12));

// Function12

// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }

//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function numberOfPrime(n) {
//     let count = 0;
//     for (let i = 2; i <= n; i++){
//         if(isPrime(i)){
//             count++
//         }
//     }
//     return count
// }

// console.log(numberOfPrime(999));

// Function13

// Function 14

// function inverseNumber(n) {
//   let reversed = 0;
//   while (n > 0) {
//     reversed = reversed * 10 + (n % 10);
//     n = Math.floor(n / 10);
//   }
//   return reversed;
// }

// console.log(inverseNumber(56));

// Function15

// function isPalindrom(n) {
//     return n === inverseNumber(n);
// }

// function inverseNumber(n) {
//     let reversed = 0;
//     let original = n;
//     while (n > 0) {
//         reversed = reversed * 10 + (n % 10);
//         n = Math.floor(n / 10);
//     }
//     return reversed === original;
// }

// console.log(isPalindrom(1678761));
// console.log(isPalindrom(12345));

// Function16

// function factorial(n) {
//   let count = 1;
//   if (n < 0) {
//     return 1;
//   }
//   for (let i = 1; i <= n; i++) {
//     count *= i;
//   }
//   return count;
// }

// console.log(factorial(4));

// Function17

// function getSum3(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(getSum3(15));

// Function18

// function sumOddEven(n) {
//   let count = "";
//   let even = 0;
//   let odd = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//       even += i;
//     }
//     if (i % 2 == 1) {
//       odd += i;
//     }
//   }
//   return (count += [even, odd]);
// }

// console.log(sumOddEven(10));

// Function19

// function invertTime(h, m, s) {
//   return h * 3600 + m * 60 + s;
// }

// console.log(invertTime(0, 6, 40));

// Function 20

// Function 21

// function isLeapYear(y) {
//   return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
// }

// console.log(isLeapYear(2024));
// console.log(isLeapYear(2023));

// Function 22

// function isLeapYear(Y) {
//     return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// function monthDays(M, Y) {
//     const daysInMonth = [31, isLeapYear(Y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//     return daysInMonth[M - 1];
// }

// console.log(monthDays(2, 2020));
// console.log(monthDays(3, 2021));

// Function 23

// function isLeapYear(Y) {
//   return (Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0;
// }

// function monthDays(M, Y) {
//   const daysInMonth = [
//     31,
//     isLeapYear(Y) ? 29 : 28,
//     31,
//     30,
//     31,
//     30,
//     31,
//     31,
//     30,
//     31,
//     30,
//     31,
//   ];
//   return daysInMonth[M - 1];
// }

// function prevDate(D, M, Y) {
//   if (D > 1) {
//     return `${D - 1}.${("0" + M).slice(-2)}.${Y}`;
//   } else {
//     const prevMonth = M === 1 ? 12 : M - 1;
//     const prevYear = M === 1 ? Y - 1 : Y;
//     const prevDay = monthDays(prevMonth, prevYear);
//     return `${prevDay}.${("0" + prevMonth).slice(-2)}.${prevYear}`;
//   }
// }

// console.log(prevDate(10, 3, 2022));

// Function 24

// function isLeapYear(Y) {
//   return (Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0;
// }

// function monthDays(M, Y) {
//   const daysInMonth = [
//     31,
//     isLeapYear(Y) ? 29 : 28,
//     31,
//     30,
//     31,
//     30,
//     31,
//     31,
//     30,
//     31,
//     30,
//     31,
//   ];
//   return daysInMonth[M - 1];
// }

// function nextDate(D, M, Y) {
//   const daysInCurrentMonth = monthDays(M, Y);

//   if (D < daysInCurrentMonth) {
//     return `${D + 1}.${("0" + M).slice(-2)}.${Y}`;
//   } else {
//     const nextMonth = M === 12 ? 1 : M + 1;
//     const nextYear = M === 12 ? Y + 1 : Y;
//     return `01.${("0" + nextMonth).slice(-2)}.${nextYear}`;
//   }
// }

// console.log(nextDate(10, 3, 2022)); 

// Function 25

// function getDividersNumberAndSum(N) {
//   let dividersCount = 0;
//   let dividersSum = 0;

//   for (let i = 1; i <= N; i++) {
//     if (N % i === 0) {
//       dividersCount++;
//       dividersSum += i;
//     }
//   }

//   return `${dividersCount}, ${dividersSum}`;
// }

// console.log(getDividersNumberAndSum(12));

