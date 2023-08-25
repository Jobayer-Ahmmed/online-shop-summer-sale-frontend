// kitchen
document.getElementById("kitchen_card_1").addEventListener("click", function(){
    const a = "#kitchen_card_1 #price";
    let cardPrice = getCardPrice(a);
    purchase(cardPrice);  

    const b ="#kitchen_card_1 #card_name";
    addElement(b); 
});
document.getElementById("kitchen_card_2").addEventListener("click", function(){
    const a = "#kitchen_card_2 #price";
    let cardPrice = getCardPrice(a);
    purchase(cardPrice);
    
    const b ="#kitchen_card_2 #card_name";
    addElement(b);
});
document.getElementById("kitchen_card_3").addEventListener("click", function(){
    const a = "#kitchen_card_3 #price";
    let cardPrice = getCardPrice(a);
    purchase(cardPrice);   

    const b ="#kitchen_card_3 #card_name";
    addElement(b);
});
// sports
document.getElementById("sports_card_1").addEventListener("click", function(){
    const a = "#sports_card_1 #price";
    let cardPrice = getCardPrice(a);
    purchase(cardPrice);  
    
    const b ="#sports_card_1 #card_name";
    addElement(b);
});
document.getElementById("sports_card_2").addEventListener("click", function(){
    const a = "#sports_card_2 #price";
    let cardPrice = getCardPrice(a);
    purchase(cardPrice);  
    
    const b ="#sports_card_2 #card_name";
    addElement(b);
});
document.getElementById("sports_card_3").addEventListener("click", function(){
    const a = "#sports_card_3 #price";
    let cardPrice = getCardPrice(a);
    purchase(cardPrice); 
    
    const b ="#sports_card_3 #card_name";
    addElement(b);
});
// furniture
document.getElementById("furniture_card_1").addEventListener("click", function(){
    const a = "#furniture_card_1 #price";
    let cardPrice = getCardPrice(a);
    purchase(cardPrice);
    
    const b ="#furniture_card_1 #card_name";
    addElement(b);
});
document.getElementById("furniture_card_2").addEventListener("click", function(){
    const a = "#furniture_card_2 #price";
    let cardPrice = getCardPrice(a);
    purchase(cardPrice);  
    
    const b ="#furniture_card_2 #card_name";
    addElement(b);
});
document.getElementById("furniture_card_3").addEventListener("click", function(){
    const a = "#furniture_card_3 #price";
    let cardPrice = getCardPrice(a);
    purchase(cardPrice);
    
    const b ="#furniture_card_3 #card_name";
    addElement(b);
});


document.getElementById("coupon_btn").addEventListener("click", function(){
    console.log("apply clicked");
    let getValue = document.getElementById("coupon_field").value;
    if(getValue==="SELL200"){
        let d = discount();
        let total_price = totalPrice();
        d = total_price * 0.2;        
        let t = total_price - d; 
        const innerD = document.getElementById("discount");
        const total = document.getElementById("total");
        d = d.toFixed(2);
        t = t.toFixed(2);
        innerD.innerText = d;
        total.innerText = t;

    }
})
document.getElementById("go_home").addEventListener("click", function(){
    const innerD = document.getElementById("discount");
    const innerT = document.getElementById("total");
    const innerTP = document.getElementById("total_price");
    innerD.innerText = "00.00";
    innerT.innerText = "00.00";
    innerTP.innerText = "00.00";

    removeElement();  
})
