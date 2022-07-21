const table = document.querySelector("table");
const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");
const body = document.querySelector("body");

const datathead = ["STT", "Tên", "Mức đóng góp", "Nhận xét"];
const dataKey = ["stt", "name", "donate", "note"];
const databody = [
  {
    stt: 1,
    name: "Giang Hồng Sơn",
    donate: 1000000,
    note: "Sugar Daddy",
  },
  {
    stt: 2,
    name: "Nguyễn Thế Anh",
    donate: 200000,
    note: "Sugar Brother",
  },
  {
    stt: 3,
    name: "Bùi Lan Nhi",
    donate: 100000,
    note: "Định mời Nhi ăn tối hóa ra lại thành bữa tối của Nhi",
  },
  {
    stt: 4,
    name: "Nguyễn Hữu Hà",
    donate: 150000,
    note: "Tuổi trẻ tài cao :D",
  },
  {
    stt: 5,
    name: "Phạm Hồng Anh",
    donate: 100000,
    note: "Lúc đầu gáy to, về sau hơi rén :))",
  },
  {
    stt: 6,
    name: "Nguyễn Văn Hùng",
    donate: 200000,
    note: "Kèo nào cũng cân",
  },
  {
    stt: 7,
    name: "Bùi Minh Đức",
    donate: 100000,
    note: "Hơi rén, lần sau cần mạnh dạn hơn",
  },
  {
    stt: 8,
    name: "Nguyễn Văn Tùng",
    donate: 200000,
    note: "Bị buồn =]]",
  },
  {
    stt: 9,
    name: "Dương Đức Thịnh",
    donate: 100000,
    note: "Mồm to húp hết nửa bill @@",
  },
  {
    stt: 10,
    name: "Thầy giá Barr",
    donate: 100000,
    note: "Cám ơn Nhi đã mời mình :)",
  },
];

function creatTable(datathead, databody, dataKey) {
  let thr = document.createElement("tr");
  datathead.forEach(function (title) {
    const th = document.createElement("th");
    th.appendChild(document.createTextNode(title));
    thr.appendChild(th);
  });

  thead.appendChild(thr);

  databody.forEach(function (man) {
    let tr = document.createElement("tr");
    dataKey.forEach(function (key) {
      let td = document.createElement("td");
      td.appendChild(document.createTextNode(man[key]));
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

creatTable(datathead, databody, dataKey);

const text = document.createElement("div");
text.innerHTML =
  "<p class='right'><i>Tổng bill ca 1: 2022000</i> </br> <i>Tổng bill ca 2</i>: 105000 </br> <i>Tổng thiệt hại: 2127000</i> </br> <i>Tổng đóng góp: <b>2150000</b> </i></p>";
body.append(text);
