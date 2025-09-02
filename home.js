const validPin = 5656;

document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();

    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const amount = parseInt(document.getElementById('add-amount').value);
    const pin = parseInt(document.getElementById('add-pin').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if (accountNumber.length < 11) {
        alert('🧾 Please provide valid account number');
        return;
    }

    if (bank === 'Select bank') {
        alert('🏦 Please select a bank');
        return;
    }

    if (pin !== validPin) {
        alert('📌 Please provide valid pin number');
        return;
    }

    if (pin !== validPin && accountNumber.length < 11) {
        alert('⚠️ Please provide valid account and pin number');
        return;
    }

    const totalNewAvailableBalance = amount + availableBalance;
    document.getElementById('available-balance').innerText = totalNewAvailableBalance;
});
