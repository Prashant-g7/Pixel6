   
  // Function to calculate estimated EMI
    function calculateEstimatedEMI() {
      const loanAmount = parseFloat(document.getElementById('loanAmount').value);
      const monthlyInterestRate = 8.5/(12*100); // yearly interest rate (8.5%)
      const months = 12*15; // Loan tenure in months
      const numerator = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months);
      const denominator = Math.pow(1 + monthlyInterestRate, months) - 1;
      const estimatedEMI = numerator / denominator;
      document.getElementById('estimatedEMI').textContent = 'Rs. ' + estimatedEMI.toFixed(2) + ' per month for ' + months + ' months';
    }
    
    // Add event listener to loan amount input field
    document.getElementById('loanAmount').addEventListener('input', calculateEstimatedEMI);
    calculateEstimatedEMI();
