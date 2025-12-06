var amount_in_EGP =Number(window.prompt("Enter number_to_cheak"));
var amount_in_USD=amount_in_EGP /47.22.toFixed(2)
var amount_in_EUR=amount_in_EGP     /54.35.toFixed(2)
var amount_in_GBP=amount_in_EGP    /61.95.toFixed(2)


console.log(amount_in_EGP+" EGP = $"+amount_in_USD+" USD"+", €"+amount_in_EUR+" EUR"+", £"+amount_in_GBP+" GBP")