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

// Bài 7


