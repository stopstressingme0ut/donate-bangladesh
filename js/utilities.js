function getValue(id){
    return parseFloat(document.getElementById(id).value);
}

function getBalance(id){
    return parseFloat(document.getElementById(id).innerText);
}

function calculate(Amount,myBalance,locationBalance,id,locationTitle){
    if(Amount < 1 || isNaN(Amount)){
        alert('Sorry! Amount is not valid!');
    }else if(myBalance < Amount){
        alert("Sorry! You Have Insufficient Balance!");
    }else{
        modal1.showModal();
        document.getElementById(id).innerText = (locationBalance + Amount);
        document.getElementById('balance').innerText = (myBalance - Amount);
        historyFunc(Amount,locationTitle);
    }
}

function historyFunc(Amount,locationTitle){
    const div = document.createElement('div');
    const time = new Date()
    const dateTime = time.toString();
    div.classList.add( 'flex', 'flex-col', 'gap-1', 'p-5', 'border-2', 'rounded-xl');
    div.innerHTML = `
        <h2 class="text-lg font-bold text-black">
            ${Amount} Taka donated to: ${locationTitle}
        </h2>
        <p class="text-[#111111B3] rounded-xl px-2">Date: 
            ${dateTime}
        </p>   
    `;
    document.getElementById('historySec').appendChild(div);
   
}


