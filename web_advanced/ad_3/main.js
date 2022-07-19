// const totalBill = document.getElementById("#totalBill");
// console.log(totalBill.value);

// const numOfGuess = document.getElementById("#numOfGuess");

// const option = document.getElementById("#option");

// const btn = document.querySelector("button");

document.forms.tip.addEventListener("submit", function (e) {
  e.preventDefault();
  // const bill = totalBill.value;
  // const guess = numOfGuess.value;
  // const percent = option.value;

  // let tip = (bill * percent) / guess;
  // return tip;
  const amount = this.elements.amount.value;
  const guess = this.elements.guess.value;
  const count = this.elements.count.value;

  let result = (amount * count) / guess;
  this.elements.result.innerHTML = `tip ${result} each person`;
});
