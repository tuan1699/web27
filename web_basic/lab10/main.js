function isOddNumber(number) {
  let result;
  result = number % 2;
  if (result !== 0) {
    console.log(number + " là số lẻ");
  } else {
    console.log(number + " là số chẵn");
  }
}

function isOddNumber(number) {
  return number % 2 !== 0;
}

isOddNumber(90);
isOddNumber(87);

isOddNumber(80);

console.warn(
  "1-2. Viết hàm maxOfTwo(a, b) nhận hai giá trị đầu vào a, b là 2 số bất kỳ, kiểm tra và trả về số lớn hơn"
);

function maxOfTwo(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(maxOfTwo(5, 4));
console.log(maxOfTwo(5, 7));
console.log(maxOfTwo(2, 9));
console.log(maxOfTwo(12, 4));

console.warn(
  "1-3. Viết hàm divisibleByThreeAndFive(number) nhận một giá trị đầu vào number là một số nguyên bất kỳ, kiểm tra và trả về kết quả cho biết số đó có chia hết cho cả 3 và 5 (true) haykhông (false)"
);

function divisibleByThreeAndFive(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    return true;
  } else {
    return false;
  }
}

function divisibleByThreeAndFive(number) {
  return number % 3 == 0 && number % 5 == 0;
}

console.log(divisibleByThreeAndFive(15));
console.log(divisibleByThreeAndFive(20));

console.warn(
  "1-4. Viết hàm season(month) nhận một giá trị đầu vào month là một tháng trong năm (number),kiểm tra và in ra mùa tương ứng với tháng đó:"
);

function season(month) {
  if (month == 12 || month == 1 || month == 2) {
    console.log("Winter");
  }
  if (month == 3 || month == 4 || month == 5) {
    console.log("Spring");
  }
  if (month == 6 || month == 7 || month == 8) {
    console.log("Summer");
  }
  if (month == 9 || month == 10 || month == 11) {
    console.log("Fall");
  }
}

season(8);
season(3);
season(9);
season(1);

console.warn(
  "1-5. Viết hàm trafficLight(light) nhận một giá trị đầu vào light là tín hiệu đèn giao thông Red, Yellow, Green, in ra thông báo tương ứng với tín hiệu đèn:"
);

function trafficLight(light) {
  if (light == "green") {
    console.log("Được phép di chuyển");
  } else if (light == "yellow") {
    console.log("Giảm tốc độ và dừng lại");
  } else {
    console.log("Dừng lại");
  }
}

trafficLight("green");
trafficLight("red");
trafficLight("yellow");

console.warn(
  "1-6. Viết hàm calcCommissions(totalSales) nhận một giá trị đầu vào totalSales là tổng doanh số bán hàng của một đại lý, kiểm tra và trả về kết quả là tiền hoa hồng mà đại lý nhận được quy định như sau"
);

function calcCommissions(totalSales) {
  if (totalSales <= 100_000_000) {
    totalSales = (totalSales / 100) * 5;
    return totalSales;
  } else if (totalSales <= 300000000) {
    return (totalSales / 100) * 10;
  } else {
    return (totalSales / 100) * 20;
  }
}

console.log(calcCommissions(10000000));
console.log(calcCommissions(45454540000000));
console.log(calcCommissions(2432422000000));

console.warn(
  "2-1. Viết hàm isLeafYear(year) nhận một giá trị đầu vào year là một năm bất kỳ, kiểm tra và trảvề kết quả năm đó có phải là năm nhuận (true) hay không (false)"
);

function isLeafYear(year) {
  return year % 4 == 0 && year % 100 !== 0;
}
console.log(isLeafYear(2020));
console.log(isLeafYear(2022));
console.log(isLeafYear(2021));
console.log(isLeafYear(2100));
console.log(isLeafYear(2104));

console.warn(
  "2-2. Viết hàm daysOfMonth(month, year) nhận một giá trị đầu vào month, trả về số ngày của tháng đó"
);

function daysOfMonth(month, year) {
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    console.log("Tháng " + month + " có 31 ngày");
  }

  if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log("Tháng" + month + " có 30 ngày ");
  }

  if (month == 2 && year % 4 == 0 && year % 100 !== 0) {
    console.log("Tháng " + month + " năm " + year + " có 29 ngày ");
  } else {
    console.log("Tháng " + month + " năm " + year + " có 28 ngày ");
  }
}

daysOfMonth(2, 2100);
daysOfMonth(2, 2104);
daysOfMonth(2, 2104);

console.warn(
  "2-3. Viết hàm calcGrade(point) nhận một giá trị đầu vào point là điểm trung bình của sinh viên, kiểm tra và trả về kết quả xếp loại tốt nghiệp của sinh viên theo số điểm trung bình (point)"
);

function calcGrade(point) {
  if (point < 4.0) {
    console.log("Xếp loại F");
  } else if (4.0 <= point && point < 5.5) {
    console.log("Xếp loại D");
  } else if (5.5 <= point && point < 7.0) {
    console.log("Xếp loại C");
  } else if (7.0 <= point && point < 8.5) {
    console.log("Xếp loại B");
  } else {
    console.log("Xếp loại A");
  }
}

calcGrade(9.0);
calcGrade(6.5);
calcGrade(5.5);
calcGrade(3.9);

console.warn(
  "2-4. Viết hàm calcTaxiFee(km) nhận một giá trị đầu vào km là số km đã đi, tính và trả về kết quả là số tiền phải trả cho khách đi taxi theo số kilomet (km) đã di chuyển"
);

function calcTaxiFee(km) {
  if (km <= 30) {
    let fee;
    fee = 10000 + km * 11000;
    return fee;
  }

  if (km > 30) {
    fee = 10000 + 30 * 11000 + (km - 30) * 9500;
    return fee;
  }
}
console.log(calcTaxiFee(10));
console.log(calcTaxiFee(30));
console.log(calcTaxiFee(50));

console.warn(
  "2-5. Viết hàm maxOfThree(a, b, c) nhận ba giá trị đầu vào a, b, c là 3 số bất kỳ. Kiểm tra và in ra kết quả số lớn nhất trong 3 số"
);

function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  } else {
    console.log("Ba số bằng nhau");
  }
}

console.log(maxOfThree(3, 4, 5));
console.log(maxOfThree(3, 3, 3));
console.log(maxOfThree(10, 8, 5));

console.warn(
  "2-6. Viết hàm solveEquation(a, b, c) nhận ba giá trị đầu vào a, b, c tương ứng là 3 tham số của phương trình bậc 2 tìm và trả về nghiệm của phương trình"
);

function solveEquation(a, b, c) {
  if (a == 0 && b == 0 && c == 0) {
    return Infinity;
  } else if (a == 0 && b == 0) {
    return null;
  } else if (a == 0) {
    return -c / b;
  } else {
    const delta = b ** 2 - 4 * a * c;
    if (delta < 0) {
      return null;
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return [x1, x2];
    }
  }
}

console.log(solveEquation(0, 1, 2));
console.log(solveEquation(1, -3, 2));
console.log(solveEquation(1, 1, -6));
console.log(solveEquation(0, 0, 0));
console.log(solveEquation(3, 4, 5));

// Chữa bài
// function isLeafYear(year) {
//   if (year % 400 ===0)
//     return true;
//    else if (year % 4 && year % 100 !===0)
//     return true;
//    else  return false;
//  }

//  Bài 2
// function daysOfMonth(month,year) {
//   if (month===2) {
//     if (isLeafYear(year)) {
//       return 29;
//     } else {return 28;}
//   } else if (month ===4 || month === 6 || month === 9 ||| month === 11)
//   return 30;
//   else return 31;
// }

function daysOfMonth(month, year) {
  switch (month) {
    case 2:
      if (isLeafYear(year)) return 29;
      else return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }
}
daysOfMonth(2, 2100);

// Bai 3
//  Bai 5
// function maxOfThree(a,b,c) {
//   if (a>= b $$ a >= c) return a;
//   if (b>= a $$ b>= c) return b;
//   if (c>= a $$ c >= b) return c;
// }
