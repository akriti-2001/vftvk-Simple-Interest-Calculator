function compute()
{
    // Get  input values
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;

    // Validation
    if (principal <= 0) {
        alert("Enter a positive number");

        document.getElementById("principal").focus();
        document.getElementById("principal").click();
    }

    // Computations
    interest = principal * years * rate / 100;
    endYear = new Date().getFullYear() + parseInt(years);

    // Display Result
    el = document.getElementById("result");
    el.innerHTML = "If you deposit <span class='highlight'><mark>" + principal + "</mark></span><br/>";
    el.innerHTML += "at an interest rate of <span class='highlight'><mark>" + rate + "%." + "</mark></span><br/>";
    el.innerHTML += "You will recieve an amount of <span class='highlight'><mark>" + interest + "</mark></span>,<br/>";
    el.innerHTML += "in the year <span class='highlight'><mark>" + endYear + "</mark></span>.<br/>";
}

function rateUpdate() {
    rate = document.getElementById("rate").value;
    document.getElementById("rate-update").innerHTML = rate + "%";
}
