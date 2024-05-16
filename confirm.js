
    // Retrieve form values from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const fullName = urlParams.get('fullName');
    const email = urlParams.get('email');
    const pan = urlParams.get('pan');
    const loanAmount = urlParams.get('loanAmount');

    // Generate a 4-digit random number (OTP)
    const randomOTP = Math.floor(1000 + Math.random() * 9000);
    console.log('Random OTP:', randomOTP);

    // Display confirmation message
    document.write(`<p class="container">Dear ${fullName.split(' ')[0]},</p>`);
    document.write('<p class="container">Thank you for your inquiry. A 4 digit verification number has been sent to your email: ');
    document.write(`${email}, please enter it in the following box and submit for confirmation:</p>`);
    document.write('<form id="otpForm" class="container">');
    document.write('<input type="number" id="otpInput" placeholder="Enter OTP">');
    document.write('<button type="submit">Validate</button>');
    document.write('</form>');
    
    // OTP validation logic
    let attempts = 0;
    const expectedOTP = randomOTP;
    const otpForm = document.getElementById('otpForm');
    otpForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const enteredOTP = document.getElementById('otpInput').value;
      
      if (enteredOTP === expectedOTP.toString()) {
     setTimeout(function() {
            window.location.href = 'adddress.html';
          });
      } else {
        attempts++;
        if (attempts >= 3) {
          document.write('<p>Validation Failed!</p>');
          setTimeout(function() {
            window.location.href = 'https://www.google.com/';
          }, 2000);
        } else {
          // Reset form and prompt user to try again
          document.getElementById('otpInput').value = ''; // Clear the input field
          alert('<p>Invalid OTP. Please try again.</p>');
        }
      }
    });