let dog = {
  name: "Cún",
  age: 4,
  bread: "Coggy",
  color: "yellow",
  legs: 4,
  "favourite food": "hot dog",

  eat() {
    console.log(
      this.name + " is eating " + this["favourite food"] + ", yum yum..."
    );
  },

  run() {
    console.log(this.name + " is running on " + this.legs + " legs...");
  },

  bark() {
    console.log("Woof woof woof...");
  },

  valueOf() {
    return this.age;
  },
};

console.warn("In dog ra console");
console.log(dog);

console.warn("In name ra console");
console.log(dog.name);

console.warn("In favourite food ra console");
console.log(dog["favourite food"]);

console.warn("Thay đổi color thành Brown");
dog.color = "Brown";
console.log(dog.color);

console.warn("Viết câu lệnh để tăng age thêm 2 tuổi");
dog.age += 2;
console.log(dog.age);

console.warn("Viết câu lệnh để gọi ra phương thức eat()");
dog.eat();

console.warn("Viết câu lệnh để gọi ra phương thức run()");
dog.run();

console.warn("Sử dụng vòng lặp in ra tất cả các key");
for (let key in dog) {
  console.log(key);
}

console.warn("Sử dụng vòng lặp in ra tất cả các value");
for (let key in dog) {
  console.log(dog[key]);
}

console.warn(
  "Viết câu lệnh để thêm một thuộc tính isCrazy với giá trị Boolean tùy ý"
);

dog.isCrazy = true;
console.log(dog.isCrazy);

// console.log(dog);

console.warn("Viết câu lệnh để thêm phương thức crazy cho dog");
dog.crazy = function (isCrazy) {
  if (isCrazy == false) {
    console.log(this.name + " is not crazy");
  } else {
    for (i = 1; i <= 5; i++) {
      this.run() + this.bark();
    }
  }
};

dog.crazy(false);
dog.crazy(true);

console.warn(
  "Viết câu lệnh để xóa isCrazy và kiểm tra xem đã xóa thành công hay chưa"
);

delete dog.isCrazy;

console.log("isCrazy" in dog);
console.log(dog);

console.warn(
  "Viết câu lệnh gọi ra phương thức crazy sau khi xóa isCrazy khỏi Obj"
);

dog.crazy(false);
dog.crazy();

// Sau khi xóa isCrazy khỏi dog, phương thức crazy vẫn trả ra kết quả bình thường vì trong
// phương thức isCrazy mình đã khai báo tham số isCrazy có giá trị mặc đinh là true, nếu đảo giá trị Boolean của thằng isCrazy kết quả sẽ rõ ràng hơn

console.warn(
  "Dùng vòng lặp để in  ra tất cả thuộc tính và giá trị tương ứng (không phải phương thức)"
);

for (let key in dog) {
  if (typeof dog[key] !== "function") {
    console.log(key + ": " + dog[key]);
  }
}

console.warn(
  "Viết câu lệnh khai báo một biến mới clone và gán giá trị của dog cho clone"
);

let clone = dog;

console.log(clone);

console.warn(
  "Viết câu lệnh Chỉnh sửa name trong clone thành một giá trị khác bất kỳ"
);

clone.name = "Mic";

console.log(clone.name);

console.warn("Viết câu lệnh in ra dog và clone");

console.log(dog);
console.log(clone);

// Nếu dùng phép gán, giá trị của dog sẽ được copy sang clone
// Nhưng khi thay đổi giá trị của clone.name thì giá trị của dog.name cũng thay đổi theo

console.warn("Viết câu lệnh khai báo ra 1 Obj copy rỗng");

let copy = {};

console.warn(
  "Sử dụng vòng lặp để sao chép thuộc tính và giá trị (bao gồm phương thức) trong dog sang copy"
);

for (let key in dog) {
  copy.key = dog.key;
  copy[key] = dog[key];
}

console.log(copy);

console.warn("Viết câu lệnh chỉnh sửa name trong copy thành tên khác bất kỳ");

copy.name = "Luxy";

console.log(copy.name);

console.warn("Viết câu lệnh in copy và dog ra console");

console.log(dog);
console.log(copy);

// Kết quả: Sử dụng vòng lặp gán giá trị của dog cho copy, khi thay đổi giá trị của copy thì giá trị của dog không thay đổi

console.warn("2.1");

const guess_list = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};

function greeting(name) {
  if (name in guess_list) {
    console.log("Hi, I'm " + name + ", and I'm from " + guess_list[name]);
  } else {
    console.log("Hi! I'm a guess.");
  }
}

greeting("Randy");
greeting("Tuan");
greeting("Sam");

console.warn("2.2");

function afterNextYear(family, years) {
  family = {
    Dad: 54,
    Mom: 48,
    Me: 23,
    Sister: 29,
  };
  for (key in family) {
    family[key] += years;
  }

  console.log(family);
}

afterNextYear("family", 5);

console.warn("2.3");

const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

const obj = { a: 1, b: 2, c: 3 };

function invert(object) {
  let copy = {};

  for (let key in object) {
    copy.key = object[key];
    copy[key] = object.key;
    return copy;
  }
}

console.log(invert(obj));

console.warn("2.5");

let items = {
  tv: 300,
  ipad: 1000,
  iphone: 200,
  car: 10000,
};

function totalAmount(n) {
  let sum = 0;

  for (let key in n) {
    sum = sum + n[key];
  }

  return sum;
}

console.log(totalAmount(items));

console.warn("2.6");

let item = {
  "Gucci Fur": 3000,
  Icecream: 4,
  "Dolce Gabana Heels": 4000,
  Humbergur: 10,
  "Other items": 10000,
};

function expensiveItems(obj) {
  let copy = {};
  for (let key in obj) {
    if (obj[key] >= 1000) {
      copy[key] = obj[key];
    }
  }
  return copy;
}

console.log(expensiveItems(item));
