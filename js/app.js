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

document.getElementById("btn-calculate").addEventListener("click", function () {
  //food amount
  const foodTotal = document.getElementById("food-total");
  const foodText = foodTotal.value;
  const foodAmount = parseInt(foodText);
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
  totalExpress.innerText = totalAmount + otherAmount + rentAmount + foodAmount;
  foodTotal.value = "";
  rentTotal.value = "";
  otherTotal.value = "";

  //income total
  const totalIncome = document.getElementById("income-total");
  const totalIncomeText = totalIncome.value;
  const totalIncomeTextAmount = parseInt(totalIncomeText);
  //  totalIncome.value=totalIncomeTextAmount -totalExpress;

  //Total Balance
  const totalBalance = document.getElementById("balance-total");
  const totalBalanceText = totalBalance.innerText;
  const totalBalanceAmount = parseInt(totalBalanceText);
  totalBalanceAmount = totalIncomeTextAmount - totalExpress;
  //clear
});
