const validPin = 5656;

// Function to get input value -------

function getInputValueNumber (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber
}

function getInputValue (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue 
}

// Function to get innerText-------
function getInnerText(id){
     const element = document.getElementById(id)
     const elementValue = element.innerText
     const elementValueNumber = parseInt(elementValue)
     return elementValueNumber
}

// Function to set innerText-------
function setInnerText(id, value){
     const availableBalanceElement = document.getElementById(id)
      availableBalanceElement.innerText = value
      
}

//Add money features--------
document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();

    const bank = getInputValue ('bank')

    const accountNumber = getInputValue ('account-number')

    const amount = getInputValueNumber ('add-amount')

    const pin = getInputValueNumber ('add-pin')

    const availableBalance = getInnerText('available-balance')

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

    if (isNaN(amount) || amount <= 0) {
        alert('⚠️ Please enter a valid amount');
        return;
    }

    const totalNewAvailableBalance = amount + availableBalance;
     setInnerText('available-balance', totalNewAvailableBalance);
});

// Cash out features-------
document.getElementById('Withdraw-btn').addEventListener('click', function(e){
    e.preventDefault();

    const agent = getInputValue ('agent-number')

    const amount = getInputValueNumber ('Withdraw-amount')

    const pin = getInputValueNumber ('Withdraw-pin')

    const availableBalance =getInnerText('available-balance')

    if (agent.length < 11) {
        alert('🧾 Please provide valid agent number');
        return;
    }

    if (pin !== validPin) {
        alert('📌 Please provide valid pin number');
        return;
    }

    
    if (isNaN(amount) || amount <= 0) {
        alert('⚠️ Please enter a valid amount');
        return;
    }

    if (amount > availableBalance) {
        alert('⚠️ Insufficient balance');
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount ;
     setInnerText('available-balance', totalNewAvailableBalance);
});

// Transfer features-------
document.getElementById('Transfer-btn').addEventListener('click', function(e){
    e.preventDefault();

    const user = getInputValue ('user-number')

    const amount = getInputValueNumber ('transfer-amount')

    const pin = getInputValueNumber ('transfer-pin')

    const availableBalance =getInnerText('available-balance')

    if (user.length < 11) {
        alert('🧾 Please provide valid user number');
        return;
    }

    if (pin !== validPin) {
        alert('📌 Please provide valid pin number');
        return;
    }

    
    if (isNaN(amount) || amount <= 0) {
        alert('⚠️ Please enter a valid amount');
        return;
    }

    if (amount > availableBalance) {
        alert('⚠️ Insufficient balance');
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount ;
     setInnerText('available-balance', totalNewAvailableBalance);
});

// toggling features------
 


// Add money-----
document.getElementById('add-button').addEventListener('click',function(){
   const forms = document.getElementsByClassName('form') 

    for(const form of forms){
        form.style.display = "none"
    }

    document.getElementById('add-money-parent').style.display = "block"
})

// Cash out money-----
document.getElementById('cash-out-button').addEventListener('click',function(){
   const forms = document.getElementsByClassName('form') 

    for(const form of forms){
        form.style.display = "none"
    }

    document.getElementById('cash-out-parent').style.display = "block"
})

// Transfer money-----
document.getElementById('transfer-button').addEventListener('click',function(){
   const forms = document.getElementsByClassName('form') 

    for(const form of forms){
        form.style.display = "none"
    }

    document.getElementById('transfer-parent').style.display = "block"
})