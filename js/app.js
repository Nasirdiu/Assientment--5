/* document.getElementById('income-total');
document.getElementById('food-total');
document.getElementById('rent-total');
document.getElementById('other-total');
document.getElementById('btn-calculate');
document.getElementById('expenses-total');
document.getElementById('balance-total');
document.getElementById('save-total');
document.getElementById('btn-save');
document.getElementById('amount-save');
document.getElementById('rem-balance');

 */
function getUpdate() {
  const foodTotal = document.getElementById("food-total");
  const foodText = foodTotal.value;
  const foodAmount = parseInt(foodText);
}
document.getElementById("btn-calculate").addEventListener("click", function () {
  //food amount
  /* const foodTotal = document.getElementById("food-total");
  const foodText = foodTotal.value;
  const foodAmount = parseInt(foodText); */
  // console.log(foodAmount);
  //rent amount
  const rentTotal = document.getElementById("rent-total");
  const rentText = rentTotal.value;
  const rentAmount = parseInt(rentText);
  // console.log(rentAmount);
  //other amount
  const otherTotal = document.getElementById("other-total");
  const otherText = otherTotal.value;
  const otherAmount = parseInt(otherText);
  // console.log(otherAmount);
  // otherTotal.value=otherAmount +rentAmount+foodAmount;
  // total express
  const totalExpress = document.getElementById("expenses-total");
  const totalText = totalExpress.innerText;
  const totalAmount = parseInt(totalText);
  const totalAmountCost = totalAmount + otherAmount + rentAmount + foodAmount;
  totalExpress.innerText = totalAmountCost;

  //income total
  const totalIncome = document.getElementById("income-total");
  const totalIncomeText = totalIncome.value;
  const totalIncomeAmount = parseInt(totalIncomeText);

  //Total Balance
  const totalBalance = document.getElementById("balance-total");
  const totalBalanceText = totalBalance.innerText;
  const totalBalanceAmount = totalIncomeAmount - totalAmountCost;

  totalBalance.innerText = totalBalanceAmount;

  //clear
  foodTotal.value = "";
  rentTotal.value = "";
  otherTotal.value = "";
});

document.getElementById("btn-save").addEventListener("click", function () {
  //income total
  const totalIncome = document.getElementById("income-total");
  const totalIncomeText = totalIncome.value;
  const totalIncomeAmount = parseInt(totalIncomeText);
  //save amount
  const saveTotal = document.getElementById("save-total");
  const saveText = saveTotal.value;
  const saveAmount = parseInt(saveText);
  const saveParsent = saveAmount / 100;
  //saving amount
  const savingAmount = document.getElementById("amount-save");
  savingAmount.innerText = saveParsent * totalIncomeAmount;
  //reaming balance
  const remBalance = document.getElementById("rem-balance");
  const totalBalance = document.getElementById("balance-total");
  remBalance.innerText =
    parseInt(totalBalance.innerText) - parseInt(savingAmount.innerText);
  //clear
  totalIncome.value = "";
});
