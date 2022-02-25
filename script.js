//+
let addButtons=Array.from(document.querySelectorAll("#add-button"))
console.log(addButtons)

//-
let minusButtons=Array.from(document.querySelectorAll("#minus-button"))
console.log(minusButtons)

//quantité
let quantitys=Array.from(document.querySelectorAll("#quantity"))
console.log(quantitys)
//price
let prices=Array.from(document.querySelectorAll("#price"))
console.log(prices)

//delete
let deletes=Array.from(document.querySelectorAll("#delete"))
console.log(deletes)

//parent
let parents=Array.from(document.querySelectorAll("#parent"))
console.log(parents)

//heart
let hearts=Array.from(document.querySelectorAll("#heart"))
console.log(hearts)

let arrOfQuantitys=[]//[0,0,0,0,0,0]
let arrOfPrices=[] //[11,30,24,12,15,155]



for(let i in quantitys){
    arrOfQuantitys[i] = 0 ;
}
for(let i in prices ){
    arrOfPrices[i] = +prices[i].innerHTML;
}

function updateTotal(){
    let total = 0 ;
    for(let i in quantitys)
    total += arrOfPrices[i]*arrOfQuantitys[i];
    document.getElementById('totale-price').textContent=`TOTALE PRICE : ${total} $`;
}
updateTotal();

//(plus_Button)
for(let i in addButtons){
    addButtons[i].addEventListener("click",function(){
        arrOfQuantitys[i]++;
        quantitys[i].innerHTML = arrOfQuantitys[i];
        updateTotal();
        
    });
}

//(minus_Button)
for(let i in minusButtons){
    minusButtons[i].addEventListener("click",function(){
        if(arrOfQuantitys[i]>0){
        arrOfQuantitys[i]--;
        quantitys[i].innerHTML = arrOfQuantitys[i];
        updateTotal();
    }
        
    });
}

//Delete button
for (let i in deletes){
    deletes[i].addEventListener("click",function(){
        arrOfQuantitys[i]= 0;
        updateTotal();
        parents[i].remove()

})}
//heart button
for(let i in hearts){
    hearts[i].addEventListener("click",function(){
        if(hearts[i].getAttribute('src') == "heartNull.png")
        hearts[i].setAttribute('src','heartLike.png');
        else
        hearts[i].setAttribute('src','heartNull.png');
    });
}




