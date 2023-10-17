let bill_amount = document.querySelector("#bill-amount");
let tip_persentage = document.querySelector("#tip-persentage");
let span = document.querySelector("span");

let button = document.querySelector("button");
button.addEventListener("click", () => {
  if (bill_amount.value == "" || tip_persentage.value == "") {
    alert("Please Enter bill amount or Tip Persentage Amount");
  } else {
    let total =
      Number(bill_amount.value) +
      (Number(bill_amount.value) * Number(tip_persentage.value)) / 100;
    span.style.fontWeight = "bold";
    span.innerText = `${total.toFixed(2)}`;
    bill_amount.value = "";
    tip_persentage.value = "";
  }
});
