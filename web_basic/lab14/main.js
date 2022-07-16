// call back
// Arr Methods
// Hàm for-each: tự động lặp qua và thực hiện hàm truyền vào
// Gọi hàm callback 1 lần ới mỗi giá trị  trong mảng, callback có thể nhận tối đa 3 tham số (value, index, arr)
// let arr = ["Tuấn", "Sang", "Duy", "Đạt", "Thuần"];

// Khai báo 1 hàm ở trước
// function logUpperName(name) {
//   console.log(name.toUpperCase());
// }
// GỌi hàm đã được khai báo bằng for-each
// arr.forEach(logUpperName);

// Ưu tiên sử dụng cú pháp kiểu này hơn
// arr.forEach(function (name) {
//   console.log(name.toUpperCase());
// });

// arr.forEach(console.log);

// Hàm trên hoạt động theo cách sau:
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i], i, arr);
// }

// Hàm find():

// Cách viết thông thường

// let name;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].startsWith("T")) {
//     name = arr[i];
//     break;
//   }
// }

// Cách viết với hàm find(): Trả về giá trị Boolean
// Lưu ý: Hàm find() để tìm một giá triị trong mảng khớp với điều kiện được đánh giá bởi hàm callback truyền vào
// Callback trả về kết quả là Boolean để cho biết giá trị có phù hợp với điều kiện hay không.
// findname = arr.find(function (name) {
//   if (name.startsWith("T")) return true;
//   else return false;
// });

// console.log(findname);

// Hàm filter()

// Cách làm thông thư
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].startsWith("T")) result.push(arr[i]);
// }

// console.log(result);

// Làm với hàm filter

// filterName = arr.filter(function (name) {
//   return name.startsWith("T");
// });

// console.log(filterName);

// map(): Ánh xạ từ giá trị này sang giá trị khác, trả về một mảng mới
// VD: Trả về mảng mới chứa những ký tự đầu tiên của mảng
// Cách làm thông thường
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   result.push(arr[i].charAt(0));
// }
// console.log(result);

// firstKey = arr.map(function (name) {
//   return name.charAt(0);
// });

// console.log(firstKey);

// length = arr.map(function (name) {
//   return name.length;
// });

// console.log(length);

// Hàm reduce: Dùng để tính giá trị tích lũy sau mỗi lần lặp

let arr = [10, 2, 60, 30, 50];

// let total = 0;

// for (let i = 0; i < arr.length; i++) {
//   total += arr[i];
// }
// console.log(total);

// sum = arr.reduce(function (total, number) {
//   total += number;
//   return total;
// }, 100); // 100 là giá trị ban đầu của total

// console.log(sum);

// sort() dùng để sắp xếp
// Lưu ý: Mặc định hàm sort là sắp xếp theo chuỗi: Tự động chuyển giá trị trong mảng về chuỗi, so sánh chuỗi r sắp xếp theo thứ tự tăng dần
// sort chri hoạt động tốt nếu các giá trị bên trong mảng đều là chuỗi
// Nếu là 1 sô hay 1 object:
// callback truyền vào sort phảii trả về một giá trị số nguyên (âm, dương) cho biết giá trị nào nhỏ hơn: nhỏ hơn => return ra
// sortNumber = arr.sort(function (number1, number2) {
//   if (number1 < number2) return -1;
//   else return 1;
// });

// console.log(sortNumber);

cong = {
  name: "Công",
  age: 24,
  weight: 70,
};

sang = {
  name: "Sang",
  age: 27,
  weight: 60,
};

dat = {
  name: "Dat",
  age: 23,
  weight: 45,
};

tuan = {
  name: "Tuan",
  age: 23,
  weight: 70,
};

let students = [cong, tuan, dat, sang];

sortWeight = students.sort(function (student1, student2) {
  if (student1.weight < student2.weight) return -1;
  else return 1;
});

// Hoặc viết theo cách sau:
// sortWeight = students.sort(function (student1, student2) {
//   return student1.weight - student2.weight;
// });

console.log(sortWeight);

sortName = students.sort(function (student1, student2) {
  if (student1.name < student2.name) return -1;
  else return 1;
});

console.log(sortName);

// arr.some
// arr.findIndex
// arr.reduceRight
// arr.flat

function max(arr)
