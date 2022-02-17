//function
function getUpdate(inputId) {
  const foodTotal = document.getElementById(inputId);
  const foodText = foodTotal.value;
  const foodAmount = parseInt(foodText);
  //clear
  foodTotal.value = "";
  return foodAmount;
}
// income option
document.getElementById("btn-calculate").addEventListener("click", function () {
  const foodAmount = getUpdate("food-total");
  const rentAmount = getUpdate("rent-total");
  const otherAmount = getUpdate("other-total");

  // total express
  if (foodAmount >= 0 && rentAmount >= 0 && otherAmount >= 0) {
    const totalExpress = document.getElementById("expenses-total");
    const totalText = totalExpress.innerText;
    const totalAmount = parseInt(totalText);
    const totalAmountCost = totalAmount + otherAmount + rentAmount + foodAmount;

    //income total
    const totalIncome = document.getElementById("income-total");
    const totalIncomeText = totalIncome.value;
    const totalIncomeAmount = parseInt(totalIncomeText);

    //Total Balance
    const totalBalance = document.getElementById("balance-total");
    const totalBalanceText = totalBalance.innerText;
    if (totalAmountCost < totalIncomeAmount) {
      const totalBalanceAmount = totalIncomeAmount - totalAmountCost;
      totalBalance.innerText = totalBalanceAmount;
      totalExpress.innerText = totalAmountCost;
    } else {
      alert("Your Income Balance Is Low");
    }
  } else {
    alert("Please Enter a Number");
  }
});

//........... Saving Part......................

document.getElementById("btn-save").addEventListener("click", function () {
  //income total
  const totalIncome = document.getElementById("income-total");
  const totalIncomeAmount = parseInt(totalIncome.value);
  //save amount
  const saveTotal = document.getElementById("save-total");
  const saveAmount = saveTotal.value;
  if (saveAmount > 0) {
    const saveParsent = saveAmount / 100;
    const savingAmount = document.getElementById("amount-save");
    const valueCheek = saveParsent * totalIncomeAmount;
    const cheekBalance = document.getElementById("balance-total");
    if (parseInt(valueCheek) < parseInt(cheekBalance.innerText)) {
      savingAmount.innerText = valueCheek;
      //reaming balance
      const remBalance = document.getElementById("rem-balance");
      remBalance.innerText = cheekBalance.innerText - savingAmount.innerText;
      //clear
      saveTotal.value = "";
      totalIncome.value = "";
    } else {
      alert("Your Balance Is Low");
    }
  } else {
    alert("Please Enter A Number");
  }
});
