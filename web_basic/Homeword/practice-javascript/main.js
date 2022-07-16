console.warn("1.1");

function usd2vnd(amount) {
  return amount * 23000;
}
console.log(usd2vnd(2)); // 46000
//--------------------------------------------
console.warn("1.2");

function findArea(a, b) {
  return a * b;
}
console.log(findArea(5, 6)); // 30
//--------------------------------------------
console.warn("1.3");

function celsiusToFahrenheit(c) {
  return c * 1.8 + 32;
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(10));
//--------------------------------------------
console.warn("1.4");

function pow(a, b) {
  return a ** b;
}

console.log(pow(2, 2));
//--------------------------------------------
console.warn("1.5");

function findAreaOfTriangle(a, b, c) {
  const p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

console.log(findAreaOfTriangle(10, 17, 21));
//--------------------------------------------
console.warn("2.1");

function isOddNumber(number) {
  if (number % 2 == 0) return true;
  else return false;
}

console.log(isOddNumber(10));
console.log(isOddNumber(13));
//--------------------------------------------
console.warn("2.2");

function maxOfTwo(a, b) {
  if (a > b) return a;
  else if (a < b) return b;
  else return "Hai số bằng nhau";
}

console.log(maxOfTwo(3, 5));
console.log(maxOfTwo(5, 5));
//--------------------------------------------
console.warn("2.3");

function divisibleByThreeAndFive(number) {
  if (number % 3 == 0 && number % 5 == 0) return true;
  else return false;
}

console.log(divisibleByThreeAndFive(15));
console.log(divisibleByThreeAndFive(11));
//--------------------------------------------
console.warn("2.4");

function season(month) {
  if (month == 12 || month == 1 || month == 2) return "Winter";
  if (month == 3 || month == 4 || month == 5) return "Spring";
  if (month == 6 || month == 7 || month == 8) return "Summer";
  if (month == 9 || month == 10 || month == 11) return "Fall";
}

console.log(season(7));
//--------------------------------------------
console.warn("2.5");

function trafficLight(light) {
  if (light == "Green") return "Được phép di chuyển";
  if (light == "Yellow") return "Giảm tốc độ và dừng lại";
  if (light == "Red") return "Dừng lại";
}

console.log(trafficLight("Red"));
//--------------------------------------------
console.warn("2.6");

function calcCommissions(totalSales) {
  if (totalSales <= 100000000) return totalSales * 0.05;
  else if (100000000 < totalSales && totalSales <= 300000000)
    return totalSales * 0.1;
  else return totalSales * 0.2;
}

console.log(calcCommissions(50000000));
//--------------------------------------------
console.warn("2.7");

function isLeafYear(year) {
  if (year % 400 === 0) return true;
  else if (year % 4 && year % 100 !== 0) return true;
  else return false;
}

console.log(isLeafYear(2100));

//--------------------------------------------
console.warn("2.8");

function daysOfMonth(month, year) {
  if (month === 2) {
    if (isLeafYear(year)) {
      return 29;
    } else {
      return 28;
    }
  } else if (month === 4 || month === 6 || month === 9 || month === 11)
    return 30;
  else return 31;
}

console.log(daysOfMonth(2, 2100));
//--------------------------------------------
console.warn("2.9");

function calcGrade(point) {
  if (point < 4.0) return "Xếp loại F";
  else if (point >= 4.0 && point < 5.0) return "Xếp loại D";
  else if (point >= 5.5 && point < 7.0) return "Xếp loại C";
  else if (point >= 7.0 && point < 8.5) return "Xếp loại B";
  else return "Xếp loại A";
}

console.log(calcGrade(6));
//--------------------------------------------
console.warn("2.10");

function calcTaxiFee(km) {
  if (km <= 30) return 10000 + km * 11000;
  else if (km > 30) return 10000 + 30 * 11000 + (km - 30) * 9500;
}

console.log(calcTaxiFee(31));
//--------------------------------------------
console.warn("2.11");

function maxOfThree(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  if (c >= a && c >= b) return c;
}

console.log(maxOfThree(1, 2, 2));
console.log(maxOfThree(10, 5, 8));
//--------------------------------------------
console.warn("2.12");

function solveEquation(a, b, c) {
  if (a == b && b == c && c == 0) return Infinity;
  else if (a == 0 && b == 0) return null;
  else if (a == 0) return -c / b;
  else if (a !== 0) {
    let x1, x2;
    const delta = b ** 2 - 4 * a * c;
    if (delta < 0) return null;
    else {
      x1 = (-b + Math.sqrt(delta)) / (2 * a);
      x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return [x1, x2];
    }
  }
}

console.log(solveEquation(1, 6, 5));
//--------------------------------------------
console.warn("3.1");

function printNumbers(a, b) {
  for (i = a; i <= b; i++) {
    console.log(i);
  }
}

printNumbers(1, 10);
//--------------------------------------------
console.warn("3.2");

function sumOfOddNumbers(a, b) {
  for (i = b; i >= a; i--) {
    console.log(i);
  }
}

console.log(sumOfOddNumbers(1, 10));
//--------------------------------------------
console.warn("3.3");

function sumOfOddNumbers(a, b) {
  let sum = 0;
  if (a < b) {
    for (i = a; i <= b; i++) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
    return sum;
  } else {
    for (i = b; i <= a; i++) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
    return sum;
  }
}

console.log(sumOfOddNumbers(1, 10)); // 1+3+5+7+9 = 25
console.log(sumOfOddNumbers(10, 1));
//--------------------------------------------
console.warn("3.4");

function divisor(number) {
  for (i = 1; i <= number; i++) {
    if (number % i == 0) console.log(i);
  }
}

console.log(divisor(10));
//--------------------------------------------
console.warn("3.5");

function factorial(number) {
  let tich = 1;
  for (i = 1; i <= number; i++) {
    tich = tich * i;
  }
  return tich;
}

console.log(factorial(10));
//--------------------------------------------
console.warn("3.6");

// Bài toán tính số lần gập đôi tờ giấy đến độ dày nhất định
// Đổi đơn vị về mm
// Sử dụng vòng lặp while, nếu giá trị currentThickness vẫn chưa bằng giá trị thickness mong muốn thì vòng lặp vẫn tiếp tục được thực hiện
// số lần lặp count + 1 ; giá trị độ dày hiện tại được tăng gấp đôi.
function countFolding(thickness) {
  thickness = thickness * 1000;
  let count = 0,
    currentThickness = 0.1;
  while (currentThickness <= thickness) {
    count++;
    currentThickness *= 2;
  }
  return count;
}

console.log(countFolding(1));
//--------------------------------------------
console.warn("3.7");

function countYears(dad, son) {
  let year = 0;
  while (son * 2 !== dad) {
    son++;
    dad++;
    year++;
  }
  return year;
}

console.log(countYears(30, 12));
//--------------------------------------------
console.warn("3.8");

// Bài toán tìm số chân gà và số chân chó.
// Khởi tạo  các biến ban đầu: chân gà = 2, chân chó = 4
// Giả sử số gà ban đầu là 1

function numLegs() {
  const CHICKENLEGS = 2,
    DOGLEGS = 4;

  let chickens = 1,
    dogs = 36 - chickens;

  while (chickens * CHICKENLEGS + dogs * DOGLEGS !== 100) {
    chickens++;
    dogs--;
  }

  console.log("Số gà là:" + chickens);
  console.log("Số chó là:" + dogs);
}

numLegs();
//--------------------------------------------
console.warn("3.9");

// Số nguyên tố là số lớn hơn 1, chỉ chia hết cho 1 và chính nó
// Số nào cũng chia hết cho 1 và chính nó. vì thế nếu nó chia hết cho bất cứ số nào khác từ 2 - number (Không lấy giá trị bằng) thì trả về false

function isPrime(number) {
  if (number < 2) return false;
  for (i = 2; i < number; i++) {
    if (number % i == 0) return false;
    else return true;
  }
}

console.log(isPrime(3));
console.log(isPrime(8));
//--------------------------------------------
console.warn("3.11");

// In ra dãy số Fibonacci
// Fibonacci là dãy số bắt đầu bằng 0 và 1, các số tiếp theo bằng tổng 2 số đứng trước nó
// Khởi tạo giá trị ban đầu là a = 0; b = 1; c = a + b

function fibonacci(n) {
  let a = 0,
    b = 1,
    c;
  for (i = 1; i <= n; i++) {
    c = a + b;
    console.log(a);
    a = b;
    b = c;
  }
}

fibonacci(8);
//--------------------------------------------
console.warn("3.14");
// Bài toán đảo ngược số (Không sử dụng chuỗi)
// Gán number vào 1 biến trung gian để không bị mất giá trị ban đầu của number
// Tạo biến đảo được reverseNumber = temp(Giá trị ban đầu = 0) * 10 + (Số dư của Number/10)

function reverseNumber(n) {
  let copy = n,
    numReverse = 0;

  while (copy !== 0) {
    numReverse = numReverse * 10 + (copy % 10);
    copy = (copy - (copy % 10)) / 10;
  }

  return numReverse;
}

console.log(reverseNumber(12345));
//--------------------------------------------
console.warn("3.12");
// Bài toán kiểm tra xem 1 số có phải là số palimdome hay không
// Tiến hành đảo ngược số
// So sánh số đảo ngược với số ban đầu. nếu 2 số bằng nhau thì trả về true

function isPalindrome(n) {
  if (n == reverseNumber(n)) return true;
  else return false;
}

console.log(isPalindrome(12321));
console.log(isPalindrome(4004));
console.log(isPalindrome(123));
//--------------------------------------------
console.warn("3.13");
// Bài toán tính tổng của các số palimdome

function sumOfPalindrome(n) {
  let sum = 0;
  for (i = 10; i <= n; i++) {
    if (i == reverseNumber(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfPalindrome(22));
//--------------------------------------------
console.warn("4.1");

function DOG(name, age, bread, gender, color, legs, favourite) {
  this.name = name;
  this.age = age;
  this.bread = bread;
  this.gender = gender;
  this.color = color;
  this.legs = legs;
  this.favourite = favourite;
}

let dog = new DOG("Bingo", 7, "pit-bull", "male", "black", 4, "hot dog");

DOG.prototype.eat = function () {
  console.log(`${this.name} is eating ${this.favourite}, yum yum...`);
};

DOG.prototype.run = function () {
  console.log(`${this.name} is running on ${this.legs} legs...`);
};

DOG.prototype.bark = function () {
  console.log(`Woof woof woof...`);
};

console.log(dog);

console.log(dog.name);
console.log(dog.favourite);
dog.color = "Brown";
console.log(dog.color);
dog.age += 2;
console.log(dog.age);
dog.eat();
dog.run();

for (let key in dog) {
  console.log(key);
}

for (let key in dog) {
  console.log(`${key}: ${dog[key]}`);
}

dog.isCrazy = false;

console.log(dog.isCrazy);

DOG.prototype.crazy = function (isCrazy) {
  if (isCrazy) {
    console.log(`${this.name} is not crazy`);
  } else {
    for (i = 1; i <= 5; i++) {
      this.run();
      this.bark();
    }
  }
};

dog.crazy("true");

//--------------------------------------------
console.warn("5.1");

const guess_list = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};

console.log("Randy" in guess_list);
