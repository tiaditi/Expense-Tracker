let expenses = [];

function addExpense() {
  let name = document.getElementById("expenseName").value;
  let amount = document.getElementById("expenseAmount").value;
  let category = document.getElementById("expenseCategory").value;

  if (name === "" || amount === "") {
    alert("Please fill in all fields!");
    return;
  }

  expenses.push({ name, amount: Number(amount), category });

  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";

  displayExpenses();
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  displayExpenses();
}

function displayExpenses() {
  let list = document.getElementById("expenseList");
  let total = 0;
  list.innerHTML = "";

  expenses.forEach(function(expense, index) {
    total += expense.amount;
    list.innerHTML += `
      <li>
        <span>${expense.name} (${expense.category})</span>
        <span>₹${expense.amount}</span>
        <button onclick="deleteExpense(${index})">Delete</button>
      </li>
    `;
  });

  document.getElementById("total").innerText = total;
}