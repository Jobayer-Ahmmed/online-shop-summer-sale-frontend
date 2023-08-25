function addElement(id){
    const a = document.querySelector(id);
    const parent = document.getElementById("counter");
    const p = document.createElement("p");
    const count = parent.childElementCount;
    p.innerText = `${count+1}) ${a.innerText}`;    
    parent.appendChild(p);
}

function removeElement(){
    const elements = document.querySelectorAll("#counter p");
    for(const element of elements){
        element.remove();
    }

    const purchase_btn = document.getElementById("purchase_btn");
    purchase_btn.setAttribute('disabled', '');
    purchase_btn.style.backgroundColor = "#F8C3EA";

    const coupon_btn = document.getElementById("coupon_btn");
    coupon_btn.setAttribute('disabled', '');
    coupon_btn.style.backgroundColor = "#F8C3EA";
}