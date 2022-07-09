console.warn(
  "2.1. Viết hàm isPrime(number) nhận một giá trị đầu và number là một số nguyên dương bất kỳ,kiểm tra và trả về kết quả số đó có phải là số nguyên tố (true) hay không (false)"
);

function isPrime(number) {
  let count = 0;
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
