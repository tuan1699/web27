console.warn("BAI TAP VE NHA");

console.warn(
  "1. Viết hàm usd2vnd(amount) nhận vào 1 tham số amount là số tiền đô la Mẽo,chuyển sang mệnh giá đồng VN và trả về kết quả theo tỉ giá $1 = 23000d"
);
function usd2vnd(amount) {
  let result = amount * 23000;
  console.log("Giá " + amount + " Đô la Mẽo là " + result + " đồng");
  return result;
}

usd2vnd(12);
usd2vnd(36);
usd2vnd(90);

console.warn(
  "2.Viết hàm findArea(a, b) nhận vào 2 tham số a và b tương ứng là độ dài 2 cạnh của hình chữ nhật, tính và trả về diện tích hình chữ nhật đó"
);

function findArea(a, b) {
  let result = a * b;
  console.log(
    "Diện tích hình chữ nhật có 2 cạnh " + a + " và " + b + " là: " + result
  );
  return result;
}

findArea(3, 4);
findArea(4, 5);

console.warn(
  "3. Viết hàm celsiusToFahrenheit(c) nhận vào 1 tham số c là nhiệt độ ở thang nhiệt Celsius (độC), tính và trả về nhiệt độ tương đương ở thang nhiệt Fahrenheit theo công thức"
);

function celsiusToFahrenheit(c) {
  let result = c * 1.8 + 32;
  console.log(c + " độ C = " + result + " độ F");
  return result;
}

celsiusToFahrenheit(32);
celsiusToFahrenheit(56);
celsiusToFahrenheit(37);

console.warn(
  "4. Viết hàm pow(a, b) nhận vào 2 tham số a và b là 2 số bất kỳ, tính và trả về kết quả a mũ b"
);

function pow(a, b) {
  let result = a ** b;
  console.log("Kết quả " + a + " mũ " + b + " = " + result);
  return result;
}
pow(3, 3);
pow(3, 4);
pow(7, 8);

console.warn(
  "Viết hàm findAreaOfTriangle(a, b, c) nhận vào 3 tham số a, b, c tương ứng là độ dài 3 cạnh tam giác, tính và trả về diện tích hình tam giác theo công thức Heron"
);

function findAreaOfTriangle(a, b, c) {
  let p = (a + b + c) / 2;
  let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  console.log("Diện tích tam giác có 3 cạnh " + a, b, c + " = " + s);
}

findAreaOfTriangle(3, 4, 5);
findAreaOfTriangle(7, 6, 8);
