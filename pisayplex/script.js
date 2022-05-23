var orderArray = [];
var orderBox = "";
const itemList = [
    {
        prod_name: "Book (Soft Copy)",
        prod_price: 150
    },
    {
        prod_name: "Canva Poster Templates",
        prod_price: 75
    },
    {
        prod_name: "Canva Presentation Templates",
        prod_price: 75
    },
    {
        prod_name: "Printed Notes",
        prod_price: 500
    },
    {
        prod_name: "College Review Booklets",
        prod_price: 500
    },
    {
        prod_name: "Competition Review Booklets",
        prod_price: 500
    },
    {
        prod_name: "Test Reviewer",
        prod_price: 200
    },
    {
        prod_name: "Tutoring/Consultation Service",
        prod_price: 250
    }
];

function addOrder(x) {
    orderArray[orderArray.length] = itemList[x-1];
    document.getElementById("cust_order").setAttribute("value", JSON.stringify(orderArray));
    setTimeout(() => { displayOrder() }, 10);
}

function displayOrder() {
    orderBox = "<hr>";
    for (var i = 0; i < orderArray.length; i++) {
        orderBox+="<div class=\"cart-item\"><span class=\"product-name\">"+orderArray[i].prod_name+"</span><br><span class=\"product-price\">₱"+orderArray[i].prod_price+"</span>&nbsp;&nbsp;<span class=\"remove-item\" onclick=\"removeItem("+i+")\">Remove Item</span></div><hr>";
    }
    document.getElementById("order-box").innerHTML=orderBox;
}

function removeItem(x) {
    orderArray.splice(x, 1);
    displayOrder();
}