function getCardPrice(id){
    const a = document.querySelector(id);
    const b =parseFloat(a.innerText);
    const price = parseFloat(b.toFixed(2));
    return price;
}
function totalPrice(){
    const a = document.getElementById("total_price");
    const b =parseFloat(a.innerText);
    const price = parseFloat(b.toFixed(2));
    return price; 
}
function discount(){
    const a = document.getElementById("discount");
    const b =parseFloat(a.innerText);
    const price = parseFloat(b.toFixed(2));
    return price; 
}
function total(){
    const a = document.getElementById("total");
    const b =parseFloat(a.innerText);
    const price = parseFloat(b.toFixed(2));
    return price; 
}
function purchase(cardPrice){
    // for total price
    let total_price = totalPrice();
    total_price += cardPrice;
    const innerTP = document.getElementById("total_price");
    total_price = total_price.toFixed(2);
    innerTP.innerText = total_price;
    if(total_price>=200){
        document.getElementById("coupon_btn").removeAttribute("disabled");
        document.getElementById("coupon_btn").style.backgroundColor = "#E527B2";
    }
    // for total 
    let t = total();
    t = t + cardPrice;
    const innerT = document.getElementById("total");
    t = t.toFixed(2);
    innerT.innerText = t;
    if(t>0){
        document.getElementById("purchase_btn").removeAttribute("disabled");
        document.getElementById("purchase_btn").style.backgroundColor = "#E527B2";
    }
  
}

