const amount = document.getElementById("amount")
const guests = document.getElementById("guests")
const quality = document.getElementById("quality")
const tipeAmount = document.getElementById("tip-amount")

calculate = ()=>{
const tip= ((amount.value * quality.value)/(guests.value)).toFixed(2)
amount.value = ""
guests.value =""
quality.value =""
if (tip==="NaN") {
    tipeAmount.innerHTML = "Tip FCFA0 each"
    showTipAmount()
}else{
    tipeAmount.innerHTML = "Tip FCFA" + tip + "par personne"
    showTipAmount()
}
}


showTipAmount = () =>{
    let x = tipeAmount
    x.className = "show"
    setTimeout(function(){x.className = x.className.replace('show','')},3000)
}
