// Bai 1

console.warn("Bai 1");

date = new Date();

console.log(date);

day = date.getDate();
console.log(day);

month = ("0" + (date.getMonth() + 1)).slice(-2);
console.log(month);

year = date.getFullYear();
console.log(year);

function curDate() {
  console.log(`${day}/${month}/${year}`);
}

curDate();

//Bai 2
console.warn("Bai 2");

function curTime() {
  hour = ("0" + (date.getHours() + 1)).slice(-2);
  minutes = ("0" + (date.getMinutes() + 1)).slice(-2);
  seconds = ("0" + (date.getSeconds() + 1)).slice(-2);
  console.log(`${hour}:${minutes}:${seconds}`);
}

curTime();

//Bai 3
console.warn("Bai 3");

function weekday() {
  let days = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  //   console.log(date.getDay());
  //   console.log(days);
  console.log(days[date.getDay() - 1]);
}

weekday();

//Bai 4
console.warn("Bai 4");

function getDateAgo(days) {
  daysAgo = date.getDate() - days;
  newDay = new Date(year, date.getMonth(), daysAgo);
  console.log(
    newDay.getFullYear() +
      "/" +
      (newDay.getMonth() + 1) +
      "/" +
      newDay.getDate()
  );
}

getDateAgo(10);

//Bai 5
console.warn("Bai 5");

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 0));
console.log(getLastDayOfMonth(2022, 1));

// Bài 6
console.warn("Bai 6");

// Khởi tạo biến thời gian hiện tại now
// Khởi tạo biến nhận thời gian sinh nhật birthday
// Nếu now.getTime > birthday.getTime => Đã qua sinh nhật => Sinh nhật tiếp theo vào năm sau => birthday.getFullYear +=1

function getDaysToNextBirthday(date, month) {
  var now, diff, days, birthDay;
  now = new Date();
  birthDay = new Date(now.getFullYear(), month - 1, date);

  if (now.getTime() > birthDay.getTime()) {
    birthDay.setFullYear(birthDay.getFullYear() + 1);
  }

  diff = birthDay.getTime() - now.getTime();
  days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return days;
}

console.log(getDaysToNextBirthday(17, 8));

// Bài 7
console.warn("Bai 7");

function humanize(date) {
  const now = new Date();
  const diff = (now.getTime() - date.getTime()) / 1000;

  if (diff < 5) return "Vừa xong";
  else if (diff < 60) return `${Math.floor(diff)} giây trước`;
  else if (diff < 3600) return `${Math.floor(diff / 60)} phút trước`;
  else if (diff < 86400) return `${Math.floor(diff / 3600)} giờ trước`;
  else if (diff < 2592000) return `${Math.floor(diff / 86400)} ngày trước`;
  else if (diff < 946080000) return `${Math.floor(diff / 2592000)} tháng trước`;
  else return "Ngày xửa ngày xưa";
}

const now = new Date();
console.log(humanize(now));

now.setSeconds(now.getSeconds() - 10);
console.log(humanize(now));

now.setHours(now.getHours() - 3);
console.log(humanize(now));
