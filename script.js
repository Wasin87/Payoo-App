// Login Button Logic
document.getElementById('loginButton').addEventListener('click', function(e) {
    e.preventDefault();

    const mobileNumber = 1774178772;
    const pinNumber = 5656;

    const mobileNumberValue = document.getElementById('mobile-number').value.trim();
    const pinNumberValue = document.getElementById('pin-number').value.trim();

    const mobileNumberValueConverted = parseInt(mobileNumberValue);
    const pinNumberValueConverted = parseInt(pinNumberValue);

    if (mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber) {
        // Successful login → redirect
        window.location.href = "home.html";
    } else if (mobileNumberValueConverted !== mobileNumber && pinNumberValueConverted !== pinNumber) {
        alert("⚠️ Invalid Mobile & Pin number");
    } else if (mobileNumberValueConverted !== mobileNumber) {
        alert("Invalid Mobile number ❌");
    } else if (pinNumberValueConverted !== pinNumber) {
        alert("Invalid Pin number ❌");
    }
});

// Toggle Pin Visibility
const pinInput = document.getElementById("pin-number");
const togglePin = document.getElementById("toggle-pin");
let isVisible = false;

togglePin.addEventListener("click", () => {
    if (isVisible) {
        pinInput.type = "password";
        togglePin.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    } else {
        pinInput.type = "text";
        togglePin.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    }
    isVisible = !isVisible;
});
