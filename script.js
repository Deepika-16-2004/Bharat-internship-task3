const transactionForm = document.getElementById('transaction-form');
const transactionsList = document.getElementById('transactions');

transactionForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const type = document.getElementById('type').value;
  const amount = document.getElementById('amount').value;
  const description = document.getElementById('description').value;

  const transaction = { type, amount, description };

  try {
    const res = await fetch('http://localhost:5000/api/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    });

    const data = await res.json();
    addTransactionToList(data);
  } catch (err) {
    console.error(err);
  }
});

const getTransactions = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/transactions');
    const data = await res.json();
    data.forEach(addTransactionToList);
  } catch (err) {
    console.error(err);
  }
};

const addTransactionToList = (transaction) => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode('${transaction.type} - $${transaction.amount} - ${transaction.description}'));
  transactionsList.appendChild(li);
};

// Fetch transactions on load
getTransactions();