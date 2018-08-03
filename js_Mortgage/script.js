function calculateMonthly(loanAmount, loanLength, interestRate)
{
    
    let rate = interestRate / 1200;
    let monthly = 0;
    let inRate = rate + 1;
    if(document.querySelector("input[name='rbRate']:checked").value == "year")
    {
        loanLength *= 12;
    }
    inRate = Math.pow(inRate, loanLength);
    monthly = (loanAmount * ((rate * inRate)) / (inRate - 1));

    return monthly;
    

}


function preCheck()
    {
        let loan = parseFloat(document.getElementById('txtPrincipal').value);
        let loanLength = parseInt(document.getElementById('txtLength').value);
        let rate = parseInt(document.getElementById('txtInterest').value);

        let errLoan = document.getElementById("loanWarn");
        let errLength = document.getElementById("timeWarn");
        let errRate = document.getElementById("intWarn");

        let clear = true;

        errLoan.innerText = "";
        errLength.innerText = "";
        errRate.innerText = "";

        if(!loan || loan < 0)
        {
            
            let loanNode = document.createTextNode("Needs a value");
            errLoan.appendChild(loanNode);
            clear = false;
        }
        
        if(!loanLength || loanLength < 0)
        {
            let lengthNode = document.createTextNode("Needs a value");
            errLength.appendChild(lengthNode);
            clear = false;
        }
            
        if(!rate || rate < 0)
        {
            let rateNode = document.createTextNode("Needs a value");
            errRate.appendChild(rateNode);
            clear = false;
        }

        if(clear == true)
        {
            var total = calculateMonthly(loan, loanLength, rate);
            total = total.toFixed(2);
            let result = document.getElementById('Result');
            result.innerText = "Your monthly payment would be $" + total + "."

        }
            
        
    }