/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    Author: River
    Desc: Let's users pick a destination and tickets to
            display ticket costs, additional fee, tax costs
            and total ticket cost
    Date: 2/20/2025
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

"use strict";

window.onload = () => {
    // Steps to create program
    //1. Accept appropriate input parameters
            //ONLY numbers
            //ONLY positive numerical values greater than 0
    //2. Verify that a positive, numerical value was entered for ticket quantity
            //IF the user enters anything, but a positve number display an error
                    //message that tells them what's wrong
    // 3. If data is valid, return the following calculated values 
            //that are then displayed on the page
                //ELSE display divResults
    let iceland = document.getElementById("iceland");
    let france = document.getElementById("france");
    let ticket = document.getElementById("ticket");
    let dest = document.getElementById("dest");

    let spnError = document.getElementById("spnError");

    //

    //output divs when user enters info

    let divResults = document.getElementById("divResults");
    let spnCost = document.getElementById("spnCost");
    let spnTax = document.getElementById("spnTax");
    let spnFee = document.getElementById("spnFee");
    let spnTotal = document.getElementById("spnTotal");

    //style display for divResults

        //

    ticket.oninput = () => {

    //obtain information from form
        let myCost = ticket.value;
        let myDest = dest.value;

        let myTicketCost;
        let myTax;
        let myFee;
        let myTotal;
    //if statement that checks if user enters non-numerical value or number 
    //in ticket textbox less than 1
        if (isNaN(ticket.value) || ticket.value < 1 || dest.value == "") {
        //display spnError message
            spnError.style.display = "block";
        //hide divResults
            divResults.style.display = "none";
        } 
    //else statement executes if user enters a positive numerical value in
    // the ticket textbox
        else {
        //calculations for divResults
            myTicketCost = myCost * myDest;
            myTax = myTicketCost * (4.5/100);
            myFee = myCost * 50;
            myTotal = myTicketCost + myTax + myFee;

        //output values to divResults spans
            spnCost.innerHTML = "$" + myTicketCost.toFixed(2);
            spnTax.innerHTML = "$" + myTax.toFixed(2);
            spnFee.innerHTML = "$" + myFee.toFixed(2);
            spnTotal.innerHTML = "$" + myTotal.toFixed(2);

        //show divResults
            divResults.style.display = "block";
        //hide error span
            spnError.style.display = "none";
        }
    
} //end ticket oninput
dest.onchange = () => {

    //obtain information from form
        let myCost = ticket.value;
        let myDest = dest.value;

        let myTicketCost;
        let myTax;
        let myFee;
        let myTotal;
    //if statement that checks if user enters non-numerical value or number 
    //in ticket textbox less than 1
        if (isNaN(ticket.value) || ticket.value < 1 || dest.value == "") {
        //display spnError message
            spnError.style.display = "block";
        //hide divResults
            divResults.style.display = "none";
        } 
    //else statement executes if user enters a positive numerical value in
    // the ticket textbox
        else {
        //calculations for divResults
            myTicketCost = myCost * myDest;
            myTax = myTicketCost * (4.5/100);
            myFee = myCost * 35;
            myTotal = myTicketCost + myTax + myFee;

        //output values to divResults spans
            spnCost.innerHTML = "$" + myTicketCost.toFixed(2);
            spnTax.innerHTML = "$" + myTax.toFixed(2);
            spnFee.innerHTML = "$" + myFee.toFixed(2);
            spnTotal.innerHTML = "$" + myTotal.toFixed(2);

        //show divResults
            divResults.style.display = "block";
        //hide error span
            spnError.style.display = "none";
        }
    } // end on change
} // end onload