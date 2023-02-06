function upDatePhonNumber(inpuText){
    const phonTotal = document.getElementById("phon-text-input");
    const phonTotalValue = phonTotal.value;
    const phonTotalString = parseInt(phonTotalValue);
    
    
    let newPhonNumber;

    if(inpuText){
        newPhonNumber =phonTotalString + 1;
    }
    else{
        newPhonNumber =phonTotalString - 1;
    }
    phonTotal.value = newPhonNumber;
    return newPhonNumber;
}
function updatePhonTotalAnomt(newPhonNumber){
    const totalPrice = newPhonNumber * 1219;
    const totalAmontPrice=document.getElementById("total-price");
    totalAmontPrice.innerText =totalPrice;

}

function getElementValueById(elementId){
    const phonTotalElement =document.getElementById(elementId);
    const phonTotalString =phonTotalElement.innerText;
    const phonTotal = parseInt(phonTotalString);
    return phonTotal;
    
}
// other
function setTextElementValueById(element ,value){
    const subTotalElement =document.getElementById(element)
    subTotalElement.innerText =value;
}
function calculateSubTotal(){
    const  priceTotal =getElementValueById("total-price")
    const caseTotal = getElementValueById("total-number")
    const currentTotalPrice = priceTotal + caseTotal;

    //    other
    setTextElementValueById("sub-total",currentTotalPrice);
     
    const taxAmontString =(currentTotalPrice * 0.1).toFixed(2);
      const taxAmont =parseFloat(taxAmontString)
    setTextElementValueById('tex-amont',taxAmont);

    const finalAmont =currentTotalPrice + taxAmont;
    setTextElementValueById('final-total',finalAmont);
    // other ext


}

document.getElementById('btn-phon-plus').addEventListener('click',function(){
   const newPhonNumber = upDatePhonNumber(true)
    updatePhonTotalAnomt(newPhonNumber);
    calculateSubTotal()
    
})
document.getElementById('btn-phon-minas').addEventListener('click',function(){
   const newPhonNumber = upDatePhonNumber(false)
    updatePhonTotalAnomt(newPhonNumber);
    calculateSubTotal()
})