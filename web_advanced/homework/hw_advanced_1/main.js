const td = document.querySelectorAll("td");

for (i = 0; i < td.length; i += 6) {
  console.log(td[i]);
  td[i].style.backgroundColor = "red";
}

// Chữa bài
// const rows = document.querySelectorAll("tr");
// console.log(rows);
// rows[i].cells[i].style.backgroundColor = "red";
