function updateCasenNunber(inputId){
    const caseField =document.getElementById("case-number-field");
    const caseString = caseField.value;
    const previcusat = parseFloat(caseString);

    let newCasenumber;
    if(inputId ===true ){
        newCasenumber =previcusat + 1;

    }
    else{
        newCasenumber = previcusat - 1;
    }
    caseField.value = newCasenumber;
    return newCasenumber;
}

function updateCaseTotalPrice (newCasenumber){
    const caseTotalElement = newCasenumber * 59;
    const caseElementTotal = document.getElementById('total-number');
    caseElementTotal.innerText = caseTotalElement;

}
document.getElementById('btn-case-plus').addEventListener('click',function(){
  const newCasenumber = updateCasenNunber(true);

  updateCaseTotalPrice(newCasenumber);
  calculateSubTotal()
})
document.getElementById('btn-case-minas').addEventListener('click',function(){
   const newCasenamber = updateCasenNunber(false)

    updateCaseTotalPrice(newCasenamber);
    calculateSubTotal()
})