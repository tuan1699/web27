console.log("Hello JavaScript");

//Không bắt buộc có ; để kết thúc dòng lệnh
console.log("Đặng Văn Tuấn");
// alert để hiển thị một thông báo trên trình duyệt
// alert("hello world")

console.log("Hello world");

// console.log(...) để hiển thị ra kết quả trong tab console của DT
// Dùng cho Dev để test khi lập trình
// Dùng alert để hiển thị ra cho trình duyệt

let myName = "Dang Van Tuan";
let myAge = 23;
let myJob = "student";
// Biến khai báo với let và const không được khai báo 2 lần
myName = "A";

console.log(myName);
console.log(myAge);
console.log(myJob);
// Gọi biến trong console.log không cần phải có dấu ''

let ba = {
  name: "Ba",
  age: 30,
  job: "teacher",
  isHandSome: true,
};
// In toàn bộ giá trị
console.log(ba);
// Để truy cập từng giá trị riêng lẻ
// obj.key - dot natation
console.log(ba.name);

console.log(console);

console.error("Huhu lỗi rồi");
console.warn("chú ý nguy hiểm");

// Để kiểm tra xem 1 biến sử dụng kiểu dữ liệu gì, dùng typeof
// Kết quả là một chuỗi đại diện cho kiểu
console.log(typeof ba);
console.log(typeof myName);
console.log(typeof myAge);

// function là một cách để cấu trúc mã (gói đoạn  mã vào 1 khối) và tái sử dụng được
// Dùng function là một chương trình, có thể bao gồm nhiều CT con
console.log("Chào mừng Ba đến trang web!");
// cú pháp:
// input của hàm được khai báo bên trong cặp ngoặc tròn () parameters
function greeting(name) {
  // Sử dụng , để cho phép in hàng loạt
  console.log("Hàm nhận vào tham số name có giá trị là:", name);
  //   Sử dụng cú pháp nối chuỗi
  console.log("Chao mung " + name + " den trang web!");
}

// gọi hàm functionName()
// Tryền các input vào cho hàm - arguments
// input truyền vào theo thứ tự tương ứng trong khai báo
greeting("Ba");
greeting("Tuấn");
greeting("Đạt");
greeting("Chinh");
greeting("Duy");

// Các công việc của hàn
// 1. Thực hiện tác vụ/ công việc nào đó, không cho ra output

// VD 1 functionđể tính tổng 2 số
function add(a, b) {
  let result = a + b;
  return result;
  //   Để trả về kết quả, trong hàm phải dùng câu lệnh return cho vị trí gọi hàm
}

const result = add(1, 3);
console.log("Kết quả phép tính 1 + 3 = " + result);

// sub(a,b) thực hiện trừ a và b, trả lại kết quả
function sub(a, b) {
  let resulthieu = a - b;
  return resulthieu;
}

console.warn("Ví dụ mới");

const resulthieu = sub(10, 7);
console.log("Hiệu hai số 10 - 7 =" + resulthieu);

// div(a,b) thực hiện nhân a và b, trả lại kết quả
function div(a, b) {
  let thuong = a / b;
  return thuong;
}

const thuong = div(20, 5);
console.log("Thương cho kết quả 20 : 5 = " + thuong);

// mul(a,b) thực hiện nhân a với b

function mul(a, b) {
  let tich = a * b;
  return tich;
}

const tich = mul(7, 8);
console.log("Tích hai số 7 x 8 = " + tich);
// Với toán tử cộng:
// + Nếu có một toán hạng là chuỗi thì  sẽ chuyển toán hạng còn lại thành chối và cho phép nói chuỗi
// Trong các trường hơp khác thì chuyển về số và cho phép cojng số

// Với tất cả  toán tử khác - * / % ** => chhuyển về số và tính toán số
// Với NaN => Nếu là cộng chuỗi thì trả về chuối
// Nếu là phép tính khác => NaN

console.warn("BAI TAP VE NHA");

console.warn(
  "1. Viết hàm usd2vnd(amount) nhận vào 1 tham số amount là số tiền đô la Mẽo,chuyển sang mệnh giá đồng VN và trả về kết quả theo tỉ giá $1 = 23000d"
);
function usd2vnd(amount) {
  let usd = amount * 23000;
  console.log("Giá " + amount + " Đô la Mẽo là " + usd + " đồng");
  return usd;
}

usd2vnd(12);
usd2vnd(36);
usd2vnd(90);

console.warn(
  "2.Viết hàm findArea(a, b) nhận vào 2 tham số a và b tương ứng là độ dài 2 cạnh của hình chữ nhật, tính và trả về diện tích hình chữ nhật đó"
);

function findArea(a, b) {
  let area = a * b;
  console.log(
    "Diện tích hình chữ nhật có 2 cạnh " + a + " và " + b + " là: " + area
  );
  return area;
}

findArea(3, 4);
findArea(4, 5);

console.warn(
  "3. Viết hàm celsiusToFahrenheit(c) nhận vào 1 tham số c là nhiệt độ ở thang nhiệt Celsius (độC), tính và trả về nhiệt độ tương đương ở thang nhiệt Fahrenheit theo công thức"
);

function celsiusToFahrenheit(c) {
  let nhietdo = c * 1.8 + 32;
  console.log(c + " độ C = " + nhietdo + " độ F");
  return nhietdo;
}

celsiusToFahrenheit(32);
celsiusToFahrenheit(56);
celsiusToFahrenheit(37);

console.warn(
  "4. Viết hàm pow(a, b) nhận vào 2 tham số a và b là 2 số bất kỳ, tính và trả về kết quả a mũ b"
);

function pow(a, b) {
  let luythua = a ** b;
  console.log("Kết quả " + a + " mũ " + b + " = " + luythua);
  return luythua;
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
  console.log("Diện tích tam giác = " + s);
}

findAreaOfTriangle(3, 4, 5);
