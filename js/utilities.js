function getValue(id){
    return parseFloat(document.getElementById(id).value);
}

function getBalance(id){
    return parseFloat(document.getElementById(id).innerText);
}

function calculate(Amount,myBalance,locationBalance,id,locationTitle){
    if(Amount < 1 || isNaN(Amount)){
        alert('Invalid Donation!');
    }else if(myBalance < Amount){
        alert("Sorry! You Have Insufficient Balance!");
    }else{
        modal1.showModal();
        document.getElementById(id).innerText = (locationBalance + Amount);
        document.getElementById('balance').innerText = (myBalance-Amount);
        history(Amount,locationTitle);
    }
}

