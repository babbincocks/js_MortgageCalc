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

    

}