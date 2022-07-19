// function createTable() {
//   const table = document.querySelector("table");
//   const thead = document.querySelector("thead");

//   for (let i = 0; i < 3; i++) {
//     const tr = thead.insertRow();
//     for (let j = 0; j < 2; j++) {}
//   }
// }

// const data = [

//   [1, "Giang Hồng Sơn", "1000000", "Sugar Daddy"],

//   [2, "Nguyễn Thế Anh", "200000", "Sugar Brother"],

//   [3, "Nguyễn Thế Anh", "200000", "Sugar Brother"],
// ];

// const table = document.querySelector("table");
// const thead = document.querySelector("thead");
// const tbody = document.querySelector("tbody");

// function creatThead(data) {
//   const th = thead.insertRow();

//   const datathead = data[0];

//   for (j = 0; j < datathead.length; j++) {
//     const cell = th.insertCell(j);
//     cell.appendChild(document.createTextNode(datathead[j]));
//   }
// }

// creatThead(data);

// function creatBody(data) {
//   const result = data.forEach(function (paticipant) {
//     const tr = tbody.insertRow();
//     for (i = 0; i < paticipant.length; i++) {
//       const cell = tr.insertCell(i);
//       cell.appendChild(document.createTextNode(paticipant[i]));
//     }
//   });
// }

// creatBody(data);

// const tr = thead.insertRow();
// for (let i = 0; i < 3; i++) {
//   const cell = tr.insertCell(i);
//   cell.appendChild(document.createTextNode("test:" + i));
// }

const table = document.querySelector("table");
const thead = document.querySelector("thead");

const datathead = ["STT", "Tên", "Mức đóng góp", "Nhận xét"];

const databody = [
  [1, "Giang Hồng Sơn", "1000000", "Sugar Daddy"],

  [2, "Nguyễn Thế Anh", "200000", "Sugar Brother"],

  [3, "Nguyễn Thế Anh", "200000", "Sugar Brother"],
];

function createthead(datathead) {
  const thr = document.createElement("tr");
  datathead.forEach(function (title) {
    const th = document.createElement("th");
    th.appendChild(document.createTextNode(title));
    thr.appendChild(th);
  });
  return thr;
}
// console.log(createthead(datathead));

function creatBody(databody) {
  const tbody = document.querySelector("tbody");
  const tbr = document.createElement("tr");

  databody.forEach(function (dataTable) {
    let td = document.createElement("td");
    for (i = 0; i < dataTable.length; i++) {
      let td = document.createElement("td");
      td.appendChild(document.createTextNode(dataTable[i]));
      tbr.appendChild(td);
    }
  });

  return tbr;
}
console.log(creatBody(databody));
