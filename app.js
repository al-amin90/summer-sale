let listCount = 1;
let totalPrice = 0;

const cards = document.querySelectorAll(".card");
for (const card of cards) {
    card.addEventListener("click", function () {
        const title = card.querySelector("h3").innerText;
        const price = parseFloat(card.querySelector("#price").innerText);
        
        const ulContainer = document.getElementById("ul-container");
        
        const p = document.createElement("p");
        p.innerText = listCount + ". " + title;
        ulContainer.appendChild(p);
        listCount++;

        totalPrice += price;

        document.getElementById("total-price").innerText = totalPrice.toFixed(2);
    })
}

const applyBtn = document.getElementById("apply-btn");
applyBtn.addEventListener("click", function () {
    const inputFiled = document.getElementById("input-filed").value;
    const couponCode = inputFiled.split(" ").join().toUpperCase();

    if (totalPrice > 200) {
        if (inputFiled === "SELL200") {
            const discountElement = document.getElementById("discount-price");  
            
            const discountAmount = totalPrice * 0.2;
            discountElement.innerText = discountAmount.toFixed(2);


            // rest total 
            const restTotal = document.getElementById("total");
            restTotal.innerText = totalPrice - discountAmount;
            document.getElementById("input-filed").value = "";
        }
        else {
            alert("invalid Coupon")
        }
    }
    else {
        alert("please at least $200 khoroch koren")
    }
})