# Expense-Tracker
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Expense Tracker</h1>
    <input type="text" id= "expenseName" placeholder="Expense Name">
    <input type="number" id="expenseAmount" placeholder="Amount (Rupees)">
     <select id="expenseCategory">
       <option value="Food">Food</option>
       <option value="Travel">Travel</option>
       <option value="Shopping">Shopping</option>
       <option value="Other">Other</option>
     </select>
     <button>Add Expense</button>
     <ul id="expenseList"></ul>
     <p>Total: ₹<span id="total">0</span></p>
</body>
</html>
