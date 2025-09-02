document.getElementById('loginButton').addEventListener('click', function(e) {
   e.preventDefault()
   const mobileNumber = 1774178772
   const pinNumber = 5656
   const mobileNumberValue = document.getElementById('mobile-number').value
   const mobileNumberValueConverted = parseInt(mobileNumberValue)
   const pinNumberValue = document.getElementById('pin-number').value
   const pinNumberValueConverted = parseInt(pinNumberValue)

   if (mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber) {
      window.location.href = "home.html"
   } else if (mobileNumberValueConverted !== mobileNumber && pinNumberValueConverted !== pinNumber) {
      alert("⚠️ Invalid Mobile & Pin number")
      return
   } else if (mobileNumberValueConverted !== mobileNumber) {
      alert("Invalid Mobile number ❌")
      return
   } else if (pinNumberValueConverted !== pinNumber) {
      alert("Invalid Pin number ❌")
      return
   }
})
