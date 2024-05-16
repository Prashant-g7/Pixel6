        // JavaScript for maintaining session and EMI calculation
       

        function logout() {
            sessionStorage.removeItem("username");
            window.location.href = "index.html"; // Redirect to index page after logout
        }

        function calculateEMI() {
            var loanAmount = parseFloat(document.getElementById("loanAmount").value);
            var interestRate = parseFloat(document.getElementById("interestRate").value);
            var loanTenure = parseFloat(document.getElementById("loanTenureEMI").value);

            var monthlyInterestRate = (interestRate / 100) / 12;
            var numberOfPayments = loanTenure * 12;

            var emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
            emi = emi.toFixed(2);

            document.getElementById("emiResult").innerHTML = "Estimated Monthly EMI: $" + emi;
        }

