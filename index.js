var billInput = document.getElementById("billInput");
var customTipInput = document.getElementById("Custom");
var peopleInput = document.getElementById("amountPeople");
var tipAmounts = document.getElementById("tipAmount");
var total = document.getElementById("total");
var errorSpan = document.querySelector(".errorSpan");
var resetButton = document.getElementById("reset");

document.querySelectorAll(".buttons-div button").forEach((button) => {
  button.addEventListener("click", function () {
    var tipPercentage = parseFloat(this.textContent) / 100;
    var billAmount = parseFloat(billInput.value);
    var tipAmount = billAmount * tipPercentage;
    total.innerText = tipAmount.toFixed(2);
    if (peopleInput.value === "") {
      errorSpan.style.display = "block";
      peopleInput.style.border = "1px solid rgb(181, 68, 68)";
    } else {
      var last = tipAmount / peopleInput.value;
      tipAmounts.innerText = last.toFixed(2);
    }
  });
});

resetButton.addEventListener("click", function () {
  billInput.value = " ";
  customTipInput.value = "";
  peopleInput.value = " ";
  errorSpan.style.display = "none";
  peopleInput.style.border = "none";
  tipAmounts.innerHTML = 0.0;
  total.innerHTML = 0.0;
});
customTipInput.addEventListener("input", function () {
  var customValue = customTipInput.value;
  var cutomidi = customValue / 100;
  console.log(cutomidi);
  var billAmount = parseFloat(billInput.value);
  var tipAmount = billAmount * cutomidi;
  total.innerText = tipAmount.toFixed(2);

  var last = tipAmount / peopleInput.value;
  tipAmounts.innerText = last.toFixed(2);
});
