
// Logout button functionality
    document.getElementById("logout-btn").addEventListener("click", function() {
      alert("You have been logged out!");
      window.location.href = "index.html";  
    });

const validPin = 5656;
const bonusCoupon = 'AB34F7'
const transactionData = []

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

// Function: Show Balance-card after transaction
function showBalanceCard() {
  const balanceCard = document.getElementById("Balance-card");
  balanceCard.style.display = "block";
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
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
        alert('⚠️ Invalid amount');
        return;
    }

    const totalNewAvailableBalance = amount + availableBalance;
     setInnerText('available-balance', totalNewAvailableBalance);

const data = {
    name: `<span class="text-white">Transfer Money</span>`,
    date: `<span class="text-white">${new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hour12: true 
    })}</span>`
};

transactionData.push(data);

 showBalanceCard();
    
});

// Cash out features-------
document.getElementById('Withdraw-btn').addEventListener('click', function(e){
    e.preventDefault();

    const agent = getInputValue('agent-number');
    const amount = getInputValueNumber('Withdraw-amount');
    const pin = getInputValueNumber('Withdraw-pin');
    const availableBalance = getInnerText('available-balance');

    if (agent.length < 11) {
        alert('🧾 Please provide valid agent number');
        return;
    }

    if (pin !== validPin) {
        alert('📌 Please provide valid pin number');
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        alert('⚠️ Invalid amount');
        return;
    }

    if (amount > availableBalance) {
        alert('⚠️ Insufficient balance');
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount;
    setInnerText('available-balance', totalNewAvailableBalance);

const data = {
    name: `<span class="text-white">Transfer Money</span>`,
    date: `<span class="text-white">${new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hour12: true 
    })}</span>`
};

transactionData.push(data);
 showBalanceCard();

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
        alert('⚠️ Invalid amount');
        return;
    }

    if (amount > availableBalance) {
        alert('⚠️ Insufficient balance');
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount ;
     setInnerText('available-balance', totalNewAvailableBalance);

const data = {
    name: `<span class="text-white">Transfer Money</span>`,
    date: `<span class="text-white">${new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hour12: true 
    })}</span>`
};

transactionData.push(data);
 showBalanceCard();
     
});

document.getElementById('Transactions-button').addEventListener('click', function () {
  const TransactionContainer = document.getElementById('Transaction-container')
 TransactionContainer.innerText = " "
  for (const data of transactionData) {
    const div = document.createElement("div")
    div.innerHTML = `
      <div class="bg-gradient-to-br from-[#182f6a] via-[#1b2960] to-[#17386c] shadow-md shadow-blue-400 rounded-xl p-3 flex justify-between items-center mt-4">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-[#2353b5]">
            <img src="assets/purse1.png" class="mx-auto" alt="">
          </div>
          <div class="ml-3">
            <h1>${data.name}</h1>
            <p>${data.date}</p>
          </div>
        </div>
       <i class="fa-solid fa-ellipsis-vertical" style="color: #fcfcfc;"></i>
      </div>
    `
    TransactionContainer.appendChild(div)
  }
})


// Bonus features-------
document.getElementById('Bonus-btn').addEventListener('click', function(e){
    e.preventDefault();

    const Bonus = getInputValue ('Bonus-Coupon')


    if (Bonus !== bonusCoupon) {
        alert('🧾 Please provide valid bonus coupon');
        return;
    }
  showBalanceCard();

});

//Pay bill features--------
document.getElementById('pay-money-btn').addEventListener('click', function(e){
    e.preventDefault();

    const bank = getInputValue ('pay-bank')

    const billAccountNumber = getInputValue ('Bill-account-number')

    const payAmount = getInputValueNumber ('pay-amount')

    const pin = getInputValueNumber ('pay-pin')

    const availableBalance = getInnerText('available-balance')

    if (billAccountNumber.length < 11) {
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

    if (isNaN(payAmount) || payAmount <= 0) {
        alert('⚠️ Please enter a valid amount');
        return;
    }

    const totalNewAvailableBalance = availableBalance - payAmount ;
     setInnerText('available-balance', totalNewAvailableBalance);

const data = {
    name: `<span class="text-white">Transfer Money</span>`,
    date: `<span class="text-white">${new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hour12: true 
    })}</span>`
};

transactionData.push(data);
 showBalanceCard();

});



// toggling features------
function handleToggle(id){
    const forms = document.getElementsByClassName('form');  
    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}
// toggling button features------
function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName('form-btn');
    for(const btn of formBtns){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
         btn.classList.add('border-gray-200');
    }

       document.getElementById(id).classList.remove("border-gray-200");
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]");

}


// Add money-----
document.getElementById('add-button').addEventListener('click',function(){
    handleToggle('add-money-parent');

    handleButtonToggle('add-button')
});

// Cash out money-----
document.getElementById('cash-out-button').addEventListener('click',function(){
    handleToggle('cash-out-parent');

    handleButtonToggle('cash-out-button')
});

// Transfer money-----
document.getElementById('transfer-button').addEventListener('click',function(){
    handleToggle('transfer-parent');

    handleButtonToggle('transfer-button')
});

//  Bonus Coupon-----
document.getElementById('Bonus-button').addEventListener('click',function(){
    handleToggle('Bonus-parent');

    handleButtonToggle('Bonus-button')
});

// Pay bill-----
document.getElementById('Bill-button').addEventListener('click',function(){
    handleToggle('pay-money-parent');

    handleButtonToggle('Bill-button')
});

// Transaction History-----
document.getElementById('Transactions-button').addEventListener('click',function(){
    handleToggle('Transaction-parent');

    handleButtonToggle('Transactions-button')
});