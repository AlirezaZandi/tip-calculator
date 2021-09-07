const bill = document.forms["operation-form"]["bill"];
const percent = document.querySelectorAll(".tip-selector input");
const percentBackground = document.querySelectorAll(".tip-selector label");
const percentBackgroundCustom = document.getElementById("custom-percent");
const peopleCount = document.forms["operation-form"]["NumberOfPeople"];
const totalAmount = document.getElementById("total-value");
const tipAmount = document.getElementById("tip-value");
const reset = document.getElementById("reset-button");
let billValue = 100,
  peopleNumber = 1,
  percentValue = 5;

window.onload = function () {
  calculateTip();
};

reset.onclick = function () {
  (billValue = 0), (peopleNumber = 1);
  bill.value = 0;
  peopleCount.value = 1;
  calculateTip();
};

bill.oninput = function () {
  billValue = bill.value;
  calculateTip();
};

peopleCount.oninput = function () {
  peopleNumber = peopleCount.value;
  calculateTip();
};
for (let index = 0; index < percent.length; index++) {
  const element = percent[index];
  element.oninput = function () {
    percentValue = element.value;
    percentBackgroundCustom.style.border = "none";
    for (let j_index = 0; j_index < 5; j_index++) {
      const element = percentBackground[j_index];
      percentBackground[j_index].style.backgroundColor = "hsl(183, 100%, 15%)";
    }
    percentBackgroundCustom.style.backgroundColor = "rgb(244,250,250)";
    if (index < 5) {
      percentBackground[index].style.backgroundColor = "hsl(172, 67%, 45%)";
    } else {
      percentBackgroundCustom.style.border = "3px solid hsl(183, 100%, 15%)";
    }
    calculateTip();
  };
}

function calculateTip() {
  percentValue2 = percentValue / 100;
  const tipValue = (billValue * percentValue2) / peopleNumber;
  const totalValue = billValue / peopleNumber + tipValue;
  tipAmount.innerHTML = "$" + tipValue.toFixed(2);
  totalAmount.innerHTML = "$" + totalValue.toFixed(2);
  console.log("tip:" + tipValue + "total:" + totalValue);
}
