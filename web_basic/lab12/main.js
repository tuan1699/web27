let tuan = {
  //properties
  name: "Tuan",
  age: 23,
  gender: "male",
  favourite: "cafe",
  call: "0975975731",
};
//   //methods
//   run() {
//     console.log("Chạy bộ vào mỗi cuối tuần");
//   },
//   study: function () {
//     console.log("Học code ít nhất 5h mỗi ngày");
//   },
// };

// console.log(tuan);
// console.log(tuan.gender);

// tuan.run();
// tuan.study();

// Các cách truy cập vào đối tượng: 2 cách
// DOT notation: Dùng khi key viết theo quy tắc CamelCase
//
// + obj.key
// + obj.mehod()
// Bracket Notation: Sử dụng với 1 key là một biến
// + obj["key"]
// + obj["method"]()
//VD:
// let key = prompt("Bạn muốn biết thông tin gì về tôi");
// console.log(tuan[key]);

// Cú pháp thêm/ xóa thuộc tính cho obj
// tuan.job = "student"; // thêm properties
// delete tuan.age;
// console.log(tuan);

// Kiểm tra xem 1 key có tồn tại trong đối tượng không: Dùng in

// console.log("name" in tuan);

// let key = "job";
// console.log(key in tuan);

// // Duyệt qua các key bên trong đối tượng

// for (let key in tuan) {
//   console.log(key + ": " + tuan[key]);
// }

// Biến đặc biệt -this- : Xác định this: là đối tượng trước dấu .
//  tai sao phải dùng this: VD hàm chung ta sẽ tham chiếu đến thuộc tính khác qua this
// chứ không qua tên của đối tượng.

// let dog = {
//   name: "Bingo",
//   age: 7,
//   breed: "Bec-gie",
//   legs: 4,

//   bark() {
//     console.log(this.name + " is barking");
//   },

//   run() {
//     console.log(this.name + " is running on " + this.legs + " legs");
//   },

//   crazy() {
//     this.bark();
//     this.run();
//   },

//   // Phương thức chuyển 1 obj thành 1 giá trị nguyên thủy
//   //Tự động gọi khi cần chuyển đối tượng về kiểu nguyên thủy
//   toString() {
//     return this.name;
//   },

//   valueOf() {
//     return this.age;
//   },
// };

// console.log(dog.crazy());
// console.log(dog - 1);

// Tạo hàm khởi tạo
function Book(isbn, author, title, page) {
  this.isbn = isbn;
  this.author = author;
  this.title = title;
  this.page = page;
}

const book1 = new Book("1", "Ba", "JavaScript", "10");
const book2 = new Book("2", "Tuan", "JavaScript", "10");
const book3 = new Book("3", "Chinh", "JavaScript", "10");
const book4 = new Book("4", "Dat", "JavaScript", "10");
const book5 = new Book("5", "Chung", "JavaScript", "10");
const book6 = new Book("6", "Thuan", "JavaScript", "10");

console.log(book1.title);
console.log(book2);
console.log(book3);
console.log(book4);
console.log(book5);
console.log(book6);

// prototype: Kế thừa nguyên mẫu

function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

Dog.prototype.bark = function () {
  console.log(this.name + " is barking...");
};

Dog.prototype.eat = function () {
  console.log(this.name + " is eating...");
};

let sam = new Dog("Sam", 2, "Bull");

console.log(sam);

sam.bark();
sam.eat();

let bingo = new Dog("Bingo", 2, "Pitbull");

console.log(bingo);
bingo.eat();
bingo.bark();

function Weapon(name, type, damage, speed) {
  this.name = name;
  this.type = type;
  this.damage = damage;
  this.speed = speed;
}

function Character(name, level, blood, weapon, amor) {
  this.name = name;
  this.level = level;
  this.blood = blood;
  this.weapon = weapon;
  this.amor = amor;
}

Character.prototype.attack = function (other) {
  const damage = this.weapon.damage - other.amor;
  other.blood -= damage;
};

Character.prototype.changeWeapon = function (newWeapon) {
  this.weapon = newWeapon;
};

const knife = new Weapon("Dao", "Knife", 100, 1.0);
const shortGun = new Weapon("shortGun", "Gun", 1000, 5.0);

const ba = new Character("Ba", 100, 1000, knife, 200);
const beo = new Character("Béo", 200, 1000, shortGun, 200);

console.log(ba);
console.log(beo);

ba.changeWeapon(shortGun);
console.log(ba);
ba.attack(beo);
console.log(beo);
beo.attack(ba);
console.log(ba);

// let date = new Date();

// date.setFullYear(2023);
// console.log(date.getFullYear());

let date = new Date();

function getNextYear() {
  date.setFullYear(date.getFullYear() + 1);
  console.log(date.getFullYear());
}

getNextYear();
// function getNextYear() {
//   let year;
//   year = date.setFullYear(date.getFullYear() + 1);
//   console.log(year);
// }

// getNextYear();

let arr = [1,2,3,4,5,6,7];

function getRandomItem(n) {
    let random = Math.floor(Math.random()* 6);

console.log(n[random]);
}
getRandomItem(arr)
