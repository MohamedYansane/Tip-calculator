/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip (i'll call it for mine custom)
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/
let billInput = document.querySelector("#billTotalInput");
let custom = document.querySelector('#tipInput');
let btnTipCustom = document.querySelectorAll(".tipInput_custom");
let numberOfPeople = document.querySelector('#nbPeople');
let tipAmount = document.querySelector('#tipAmount');
let perPersonTotal = document.querySelector("#totalPerPers");

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
//Notice by Mohamed Yansane inside function to get a value from input use .value not
// .innerText but outside of a function u can use innerText but pay attention check both if t's ok
// dont forget textContent also if both not working 


// Get number of people from number of people div


// ** Calculate the total bill per person **
// j'ai rajoute e en parametre #Mohamed Yansane
let tipPercent = 0;
let bill;

btnTipCustom.forEach(btnTip => {
    btnTip.addEventListener("click", (e) => {
        e.preventDefault();
        // console.log(e);//me permet de connaitre les propriétés de e
        if (e.type === "click")
        //je fais du slicing afin de ne pas recuperer dans ma variable tipPercent le %
            tipPercent = Number(e.target.textContent.slice(0, e.target.textContent.length - 1)) / 100;

        /*totalBill = bill + tip
        totalTip.innerText = `${totalBill.toFixed(2)}`;*/
    })
})

const calculateBill = () => {
    // get bill from user input & convert it into a number
    bill = Number(billInput.value);
    let totalBill;
    // get the tip from user & convert it into a percentage (divide by 100)
    // i got it at the top too from click event on buttons and the second with custom input

    // get the total tip amount
    let totalTipAmount;
    if (Number(custom.value) === 0) {

        totalTipAmount = bill * tipPercent;
    } else {
        tipPercent = Number(custom.value) / 100;
        totalTipAmount = bill * tipPercent;
    }
    tipAmount.innerText = `$${totalTipAmount.toFixed(2)}`;

    // calculate the total (tip amount + bill)
    totalBill = totalTipAmount + bill
        // calculate the per person total (total divided by number of people)
    let nbpeople = 1;
    let perPerson;
    if (Number(numberOfPeople.value) === 0)
        perPerson = totalBill / nbpeople
    else
        perPerson = totalBill / Number(numberOfPeople.value)
        // total tip amount

    // update the perPersonTotal on DOM & show it to user
    //   perPersonTotal.innerText = `$${perPerson.toFixed(2)}`;
    perPersonTotal.innerText = `$${perPerson.toFixed(2)}`;

}

const renitialiser = () => {
    tipAmount.innerText = `$${0}`;
    perPersonTotal.innerText = `$${0}`;
    custom.value = "";
    billInput.value = "";

}