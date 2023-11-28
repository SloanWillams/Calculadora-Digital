let transactions = [];

function displayTransactions() {
  const transactionList = document.getElementById('transaction-list');
  transactionList.innerHTML = '';

  transactions.forEach(transaction => {
    const listItem = document.createElement('li');
    listItem.textContent = `${transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}: $${transaction.amount}`;
    transactionList.appendChild(listItem);
  });
}

function addTransaction() {
  const transactionType = document.getElementById('transaction-type').value;
  const transactionAmount = parseFloat(document.getElementById('transaction-amount').value);

  if (transactionType && !isNaN(transactionAmount)) {
    const transaction = {
      type: transactionType,
      amount: transactionAmount
    };

    transactions.push(transaction);
    displayTransactions();
  } else {
    alert('Por favor, insira um tipo e um valor válido.');
  }
}


displayTransactions();