const donationButton = document.getElementById('donationBtn');
const historyButton = document.getElementById('historyBtn');

const donation = document.getElementById('donationPart');
const history = document.getElementById('historyPart');

historyButton.addEventListener('click',function(){
    donation.classList.add('hidden');
    history.classList.remove('hidden');

    historyButton.classList.add('bg-[#B4F461]','text-black','px-5','py-4');
    historyButton.classList.remove('border-2' ,'border-[#5a5858b3]' ,'text-[#111111B3]');

    donationButton.classList.remove('bg-[#B4F461]','text-black');
    donationButton.classList.add('border-2' ,'border-[#5a5858b3]' ,'text-[#111111B3]');
})

donationButton.addEventListener('click',function(){
    donation.classList.remove('hidden');
    history.classList.add('hidden');

    donationButton.classList.add('bg-[#B4F461]','text-black');
    donationButton.classList.remove('border-2' ,'border-[#5a5858b3]' ,'text-[#111111B3]');

    historyButton.classList.remove('bg-[#B4F461]','text-black');
    historyButton.classList.add('border-2' ,'border-[#5a5858b3]' ,'text-[#111111B3]');
})


const nkBtn = document.getElementById('nk-btn');
const feBtn = document.getElementById('fe-btn');
const quotaBtn = document.getElementById('quota-btn');

nkBtn.addEventListener('click',function(){
    
    const myBalance = getBalance('balance');
    const Amount = getValue('nk-input');
    const nkBalance = getBalance('nk-balance')
    const nkTitle = document.getElementById('nk-title').innerText;

    calculate(Amount,myBalance,nkBalance,'nk-balance',nkTitle);

})
feBtn.addEventListener('click',function(){
    
    const myBalance = getBalance('balance');
    const Amount = getValue('fe-input');
    const feBalance = getBalance('fe-balance')
    const feTitle = document.getElementById('fe-title').innerText;

    calculate(Amount,myBalance,feBalance,'fe-balance',feTitle);

})
quotaBtn.addEventListener('click',function(){
    
    const myBalance = getBalance('balance');
    const Amount = getValue('q-input');
    const qBalance = getBalance('q-balance')
    const quotaTitle = document.getElementById('q-title').innerText;

    calculate(Amount,myBalance,qBalance,'q-balance',quotaTitle);
})