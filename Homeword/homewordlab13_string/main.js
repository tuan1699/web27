console.warn("Bài 1");

function capitalize(str) {
  // Xử lý khoảng trắng của chuỗi và gán vào một chuỗi mới
  let trimmer = str.trim();

  return (
    trimmer
      // Tách lấy ký tự đầu tiên của chuỗi và biến ký tự đó thành in hoa
      .slice(0, 1)
      .toUpperCase()
      // Nối ký tự đầu tiên với chuỗi còn lại
      .concat(trimmer.slice(1).toLowerCase())
  );
}

str1 = "xin chào, tôi là Tuấn   ";
console.log(capitalize(str1));

console.warn("Bài 2");
// Xử lý khoảng trắng của chuỗi và gán vào một chuỗi mới
// Tách các từ của chuỗi thành mảng, biến ký tự đầu tiên của mỗi value trong mảng thành chữ in hoa, nối với các ký tự còn lại
// Nối các giá trị trong mảng thành chuỗi, sử dụng join()

function title(str) {
  str = str.trim();

  let strToArr = str.split(" ");
  for (i = 0; i < strToArr.length; i++) {
    strToArr[i] = strToArr[i]
      .slice(0, 1)
      .toUpperCase()
      .concat(strToArr[i].slice(1));
  }
  return (str = strToArr.join(" "));
}

console.log(title(str1));

console.warn("Bài 3");
// Xử lý khoảng trắng của chuỗi và gán vào một chuỗi mới
// Lấy ra 2 ký tự đầu của chuỗi
// Lấy ra 10 ký tự cuối của chuỗi (@gmail.com)
// Nối các ký tự vào với nhau + "..." ở giữa

function protectEmail(email) {
  email = email.trim().slice(0, 2).concat("...").concat(email.slice(-10));
  return email;
}
let mail1 = "tuandangvan1609@gmail.com";
let mail2 = "banx9x@gmail.com";

console.log(protectEmail(mail1));
console.log(protectEmail(mail2));

console.warn("Bài 4");
// Viết hàm đảo ngược tất cả các ký tự trong một chuỗi
// Xử lý khoảng trắng
// Biến các ký tự trong chuỗi thành 1 Array
// Dùng hàm reverse() đảo ngược lại tất cả các ký tự của chuỗi

function reverse(str) {
  str = str.trim().split("").reverse().join("");
  return str;
}

str4 = "béo ú";

console.log(reverse(str4));

console.warn("Bài 5");

let vowel = ["u", "o", "e", "a", "i"];
console.log(vowel);
// Biến các ký tự của chuỗi thành 1 Array
// Tạo 1 biến đếm count = 0
// Lặp qua các giá trị của chuỗi
// Nếu các ký tự của chuỗi thuộc arr => count + 1

function countVowel(str) {
  let count = 0;
  str = str.trim().split("");
  for (i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      count += 1;
    }
  }
  return count;
}

str5 = "ue oai";
console.log(countVowel(str5));

console.warn("Bài 6");

// Xử lý khoảng trắng giữa các ký tự
// Tác các từ của chuỗi thành mảng
// Đảo ngược các giá trị của mảng dùng reverse()
// Nối các giá trị của mảng về thành 1 chuỗi

function reverseWords(str) {
  str = str.trim().split(" ").reverse().join(" ");
  console.log(str);
}

let str6 = "The fox is comming for the chicken";

reverseWords(str6);

console.warn("Bài 7");
// Tạo giá trị # cố định
// Tạo ra 1 biến lưu trữ các ký tự trong dãy HEX (16 kí tự)
// Sử dụng vòng lặp, cho i chạy từ 1-6 (số kí tự của mã HEX color), cộng dồn giá trị ngẫu nhiên lấy được vào biến result ban đầu
function randomHex() {
  let result = "#";
  let characters = "abcdef0123456789";
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
console.log(randomHex());
console.log(randomHex());

console.warn("Bài 8");

function parameterize(str) {
  str = str.trim().toLowerCase().split(" ");
  return str.join("-");
}
console.log(parameterize(" javascript is very funny "));
console.log(parameterize("Hello World"));

console.warn("Bài 9");

function isPalindrome(str) {
  let oldStr = str.toLowerCase().replaceAll(" ", "");
  let newStr = str
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .reverse()
    .join("");
  if (oldStr == newStr) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("Race car"));
console.log(isPalindrome("Ba"));
