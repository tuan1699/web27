const td = document.querySelectorAll("td");

for (i = 0; i < td.length; i += 6) {
  console.log(td[i]);
  td[i].style.backgroundColor = "red";
}
