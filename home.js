const validPin = 5656;

//Add money features--------
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

    const totalNewAvailableBalance = amount + availableBalance;
    document.getElementById('available-balance').innerText = totalNewAvailableBalance;
});

// Cash out features-------
document.getElementById('Withdraw-btn').addEventListener('click', function(e){
    e.preventDefault();

    const agent = document.getElementById('agent-number').value;

    const amount = parseInt(document.getElementById('Withdraw-amount').value);

    const pin = parseInt(document.getElementById('Withdraw-pin').value);

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if (agent.length < 11) {
        alert('🧾 Please provide valid agent number');
        return;
    }

    if (pin !== validPin) {
        alert('📌 Please provide valid pin number');
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount ;
    document.getElementById('available-balance').innerText = totalNewAvailableBalance;
});


// toggling features------
document.getElementById('add-button').addEventListener('click',function(){
   document.getElementById('cash-out-parent').style.display = "none"; 
   document.getElementById('add-money-parent').style.display = "block";
})

document.getElementById('cash-out-button').addEventListener('click',function(){
   document.getElementById('add-money-parent').style.display = "none"; 
   document.getElementById('cash-out-parent').style.display = "block";
})
