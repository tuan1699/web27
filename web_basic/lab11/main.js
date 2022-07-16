// for (begin; Condition; step){
//     // Thực thi khối mã lặp đi lặp lại
//     // Cho tới khi condition là false
// }

// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// B1: In ra các số chẵn trong khoảng 1 - 100

// for (let i = 1; i < 101; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// B2: In ra bảng cửu chương của 3

// for (let i = 1; i < 11; i++) {
//   let result = i * 3;
//   console.log("3 x " + i + " = " + result);
// }

// Bài 3: in các số lẻ trong khoảng từ 1 đến 100 theo thứ tự giảm dần
// for (let i = 100; i > 0; i--) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// for: Dùng khi xác định được số lần lặp và khoảng lặp cụ thể
// white: Không xác định được số lần lặp mà chỉ xác định được điều kiện, lặp đến khi điều kiện sai thì thôi
// VD:
// let accept = false;

// while (accept === false) {
//   accept = confirm("Lam nguoi yeu anh nha");
// }

// console.log("Di choi thoi");

// const user = {
//   username: "banx",
//   password: "123456",
// };

// let username;
// let password;

// while (username !== user.username || password !== user.password) {
//   username = prompt("Ten tai khoan");
//   password = prompt("Mat khau");
// }

// alert("Chao mung " + user.username + " quay tro lai");

// Câu lệnh đặc biệt continue && break: Cho phép điều khiển luồng lặp (Chỉ dùng với for)
// continue: Bỏ qua các thao tác hiện tại đi và chuuyển sang vòng lặp tiếp theo
// break: Tìm được điều kiện phù hợp sẽ dừng

// const girls = ["Xinh", "Xấu", "Xinh", "Xấu", "Xinh"];

// for (let each of girls) {
//   if (each !== "Xinh") {
//     continue;
//   }

//   console.log("Nhắn tin");
//   console.log("Đi chơi");
//   console.log("Đi xem phim");
//   console.log("Đi ăn");
//   console.log("Tặng iphone 13");
// }

// const girls = ["Xinh", "Xấu", "Xinh", "Xấu", "Xinh"];

// for (let each of girls) {
//   if (each == "Xinh") {
//     console.log("Nhắn tin");
//     console.log("Đi chơi");
//     console.log("Đi xem phim");
//     console.log("Đi ăn");
//     console.log("Tặng iphone 13");
//     break;
//   }
// }

console.warn("1");

function printNumbers(a, b) {
  for (i = a; i <= b; i++) {
    console.log(i);
  }
}
printNumbers(1, 9);

console.warn("2");

function printNumbers(a, b) {
  for (i = b; i >= a; i--) {
    console.log(i);
  }
}
printNumbers(1, 20);

console.warn("3");

function sumOfOddNumbers(a, b) {
  let sum = 0;

  let min = a;
  max = b;

  //   if (a > b) {
  //     min = b;
  //     max = a;
  //   }
  //   for (i = a; i <= b; i++) {
  //     if (i % 2 !== 0) {
  //       sum = sum + i;
  //     }
  //   }
  //   console.log(sum);

  if (a < b) {
    for (i = a; i <= b; i++) {
      if (i % 2 !== 0) {
        sum = sum + i;
      }
    }
  }
  if (a > b) {
    for (i = b; i <= a; i++) {
      if (i % 2 !== 0) {
        sum = sum + i;
      }
    }
  }
  console.log(sum);
}

sumOfOddNumbers(1, 10);
sumOfOddNumbers(3, 5);
sumOfOddNumbers(4, 7);
sumOfOddNumbers(9, 1);

console.warn("4");

function divisor(number) {
  for (i = 1; i <= number; i++) {
    if (number % i == 0) {
      console.log(i);
    }
  }
}

divisor(8);

console.warn("5");

function factorial(number) {
  let result = 1;
  for (i = 1; i <= number; i++) {
    result = result * i;
  }
  console.log(result);
}

factorial(5);

console.warn("6");

function countFolding(thickness) {
  thickness *= 1000;
  let count = 0;
  let currentThickness = 0.1;
  //   KHi mà độ dày chưa đạt mức mong muốn
  while (currentThickness < thickness) {
    currentThickness *= 2; // gấp đôi tờ giấy
    count++;
  }
  return count;
}

console.log(countFolding(1));
console.log(countFolding(10));

console.warn("7");

function countYears(dad, son) {
  year = 0;
  while (son * 2 !== dad) {
    son++;
    dad++;
    year++;
  }
  return year;
}

console.log(countYears(40, 8));
console.log(countYears(22, 1));

console.warn("8");

function numOfLegs() {
  const CHICK_LEGS = 2;
  const DOG_LEGS = 4;

  let chicken = 1;
  let dogs = 36 - chicken;

  while (chicken * CHICK_LEGS + dogs * DOG_LEGS !== 100) {
    chicken++;
    dogs--;
  }

  console.log("Số gà là ", +chicken);
  console.log("Số chó là ", +dogs);
}
numOfLegs();

console.warn(
  "2.1. Viết hàm isPrime(number) nhận một giá trị đầu và number là một số nguyên dương bất kỳ,kiểm tra và trả về kết quả số đó có phải là số nguyên tố (true) hay không (false)"
);

function isPrime(number) {
  let count = 0;
  if (number < 2) return false;
  for (i = 1; i <= number; i++) {
    if (number % i == 0) {
      count++;
    }
  }

  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrime(5));
console.log(isPrime(10));
console.log(isPrime(7));
console.log(isPrime(13));

// Chữa bài

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }
  return true;
}
// Tính tổng số nguyên tố
function sumOfPrimes(a, b) {
  let total = 0;

  for (let i = a; i <= b; i++) {
    if (isPrime(i)) total += i;
  }
  return total;
}
console.warn(
  "2.3. Viết hàm fibonacci(n) nhận một giá trị đầu vào n là một số nguyên dương bất kỳ, in ra dãy n số Fibonacci"
);

function fibonacci(n) {
  let n1 = 0,
    n2 = 1,
    nextNumber;
  for (i = 1; i <= n; i++) {
    console.log(n1);
    nextNumber = n1 + n2;
    n1 = n2;
    n2 = nextNumber;
  }
}

// Chua bai

function fibonacci(n) {
  let n1 = 0,
    n2 = 1,
    nextNumber;
  for (i = 1; i <= n; i++) {
    console.log(n1);
    nextNumber = n1 + n2;
    n1 = n2;
    n2 = nextNumber;
  }
}

console.warn("dãy 1");
fibonacci(4); // 0 1 1 2
console.warn("dãy 2");
fibonacci(8); // 0 1 1 2 3 5 8 13
console.warn("dãy 3");
fibonacci(10); // 0 1 1 2 3 5 8 13 21 34

// function fibonacci(n) {
//   let n1 = 0,
//     n2 = 1,
//     nextNumber;

//   console.log(n1);
//   console.log(n2);
//   nextNumber = n1 + n2;
//   while (nextNumber <= n) {
//     console.log(nextNumber);
//     n1 = n2;
//     n2 = nextNumber;
//     nextNumber = n1 + n2;
//   }
// }

// fibonacci(8);

console.warn(
  "2.6. Viết hàm reverseNumber(n) nhận một giá trị đầu vào n là một số nguyên bất kỳ, đảo ngược các chữ số và trả về kết quả (không sử dụng chuỗi)"
);

// Tìm số đảo ngược
function reverseNumber(n) {
  let temp = n,
    reverse = 0;
  while (temp !== 0) {
    reverse = reverse * 10 + (temp % 10);
    temp = (temp - (temp % 10)) / 10;
  }
  return reverse;
}

console.log(reverseNumber(4321));
console.log(reverseNumber(98765));
console.log(reverseNumber(2434334));
console.log(reverseNumber(45454));

console.warn(
  "2.4. Viết hàm isPalindrome(n) nhận một giá trị đầu vào n là một số nguyên dương bất kỳ, kiểm tra và trả về kết quả cho biết số đó có phải số Palindrome (true) hay không (false)"
);

function isPalindrome(n) {
  if (n == reverseNumber(n)) {
    return true;
  } else return false;
}

console.log(isPalindrome(12321));
console.log(isPalindrome(343432));
console.log(isPalindrome(65656));

console.warn(
  "2.5. Viết hàm sumOfPalindrome(n) nhận một giá trị đầu vào n là một số nguyên dương bất kỳ, tính và trả về kết quả là tổng của các số Palindrome trong khoảng từ 1 -> n"
);

function sumOfPalindrome(n) {
  let sum = 0;
  for (i = 11; i <= n; i++) {
    if (i == reverseNumber(i)) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(sumOfPalindrome(22)); // 11 + 22 = 33
console.log(sumOfPalindrome(55));
console.log(sumOfPalindrome(125));
console.log(sumOfPalindrome(1000));

function getRandNumbers(min, max, length) {
  let arr = [];
  for (i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min) + min));
  }
  return arr;
}

console.log(getRandNumbers(1, 10, 10));

// function getTotal(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// }

// getTotal([1, 2, 3]);
var orders = [
  {
    name: "Khóa học HTML - CSS Pro",
    price: 3000000,
  },
  {
    name: "Khóa học Javascript Pro",
    price: 2500000,
  },
  {
    name: "Khóa học React Pro",
    price: 3200000,
  },
];

function getTotal(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i].price;
  }
  console.log(sum);
}

getTotal(orders);
