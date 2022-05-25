var orderArray = [];
const itemList = [
    {
        prod_name: "G8 AdTech Set",
        prod_price: 450,
        prod_pic: "adtech_g8.jpg"
    },
    {
        prod_name: "General AdTech Set",
        prod_price: 550,
        prod_pic: "adtech_gen.jpg"
    },
    {
        prod_name: "Ballpen",
        prod_price: 15,
        prod_pic: "pen.jpg"
    },
    {
        prod_name: "Fita",
        prod_price: 12,
        prod_pic: "fita.jpg"
    },
    {
        prod_name: "Hansel",
        prod_price: 10,
        prod_pic: "hansel.jpg"
    },
    {
        prod_name: "Hi-ro",
        prod_price: 8,
        prod_pic: "hiro.jpg"
    },
    {
        prod_name: "Rebisco",
        prod_price: 10,
        prod_pic: "rebisco.jpg"
    },
    {
        prod_name: "Skyflakes",
        prod_price: 10,
        prod_pic: "skyflakes.jpg"
    },
    {
        prod_name: "Whatta Tops",
        prod_price: 9,
        prod_pic: "whatta_tops.jpg"
    },
    {
        prod_name: "Bluetooth Earphones",
        prod_price: 800,
        prod_pic: "bt_earphones.jpg"
    },
    {
        prod_name: "A4 Bond Paper (30pcs)",
        prod_price: 40,
        prod_pic: "bondp_a4.jpg"
    },
    {
        prod_name: "Long Bond Paper (30pcs)",
        prod_price: 40,
        prod_pic: "bondp_long.jpg"
    },
    {
        prod_name: "Short Bond Paper (30pcs)",
        prod_price: 40,
        prod_pic: "bondp_short.jpg"
    },
    {
        prod_name: "Book (Soft Copy)",
        prod_price: 150,
        prod_pic: "book.jpg"
    },
    {
        prod_name: "Broom and Dustpan Set",
        prod_price: 175,
        prod_pic: "broom_dustpan.jpg"
    },
    {
        prod_name: "Canva Poster Templates",
        prod_price: 75,
        prod_pic: "poster.jpg"
    },
    {
        prod_name: "Canva Presentation Templates",
        prod_price: 75,
        prod_pic: "presentation.jpg"
    },
    {
        prod_name: "Clipboard",
        prod_price: 50,
        prod_pic: "clipboard.jpg"
    },
    {
        prod_name: "3-in-1 Coffee",
        prod_price: 25,
        prod_pic: "coffee.jpg"
    },
    {
        prod_name: "Colored Pencils (24 Color Set)",
        prod_price: 100,
        prod_pic: "colored_pencils.jpg"
    },
    {
        prod_name: "Correction Tape",
        prod_price: 35,
        prod_pic: "correction_tape.jpg"
    },
    {
        prod_name: "Dormer Pajama Set",
        prod_price: 230,
        prod_pic: "pajamas.jpg"
    },
    {
        prod_name: "Envelopes (15pcs)",
        prod_price: 90,
        prod_pic: "envelopes.jpg"
    },
    {
        prod_name: "Eraser (3pcs)",
        prod_price: 60,
        prod_pic: "eraser.jpg"
    },
    {
        prod_name: "Feminine Hygiene Products",
        prod_price: 150,
        prod_pic: "fem_hygiene.jpg"
    },
    {
        prod_name: "Floor Mat",
        prod_price: 20,
        prod_pic: "mat.jpg"
    },
    {
        prod_name: "Highlighter (5 Color Set)",
        prod_price: 125,
        prod_pic: "highlighter.jpg"
    },
    {
        prod_name: "Hotel Slippers",
        prod_price: 60,
        prod_pic: "hotel_slippers.jpg"
    },
    {
        prod_name: "ID Lace",
        prod_price: 100,
        prod_pic: "id_lace.jpg"
    },
    {
        prod_name: "Index Cards (30pcs)",
        prod_price: 30,
        prod_pic: "index_cards.jpg"
    },
    {
        prod_name: "Lab Gown",
        prod_price: 500,
        prod_pic: "lab_gown.jpg"
    },
    {
        prod_name: "Laptop",
        prod_price: 40000,
        prod_pic: "laptop.jpg"
    },
    {
        prod_name: "Globe Load (500)",
        prod_price: 500,
        prod_pic: "load_globe.jpg"
    },
    {
        prod_name: "Smart Load (500)",
        prod_price: 500,
        prod_pic: "load_smart.jpg"
    },
    {
        prod_name: "Sun Load (500)",
        prod_price: 500,
        prod_pic: "load_sun.jpg"
    },
    {
        prod_name: "TM Load (500)",
        prod_price: 500,
        prod_pic: "load_tm.jpg"
    },
    {
        prod_name: "TNT Load (500)",
        prod_price: 500,
        prod_pic: "load_tnt.jpg"
    },
    {
        prod_name: "Lysol",
        prod_price: 200,
        prod_pic: "lysol.jpg"
    },
    {
        prod_name: "USB Microphone",
        prod_price: 250,
        prod_pic: "mic.jpg"
    },
    {
        prod_name: "Mop",
        prod_price: 900,
        prod_pic: "mop.jpg"
    },
    {
        prod_name: "Mouthwash",
        prod_price: 50,
        prod_pic: "mouthwash.jpg"
    },
    {
        prod_name: "Cup Noodles",
        prod_price: 25,
        prod_pic: "noodles.jpg"
    },
    {
        prod_name: "1/4 Pad Paper",
        prod_price: 20,
        prod_pic: "1_4_pad.jpg"
    },
    {
        prod_name: "Crosswise Pad Paper",
        prod_price: 20,
        prod_pic: "cwise_pad.jpg"
    },
    {
        prod_name: "Intermediate Pad Paper",
        prod_price: 30,
        prod_pic: "intermediate_pad.jpg"
    },
    {
        prod_name: "Lengthwise Pad Paper",
        prod_price: 20,
        prod_pic: "lwise_pad.jpg"
    },
    {
        prod_name: "Yellow Pad Paper",
        prod_price: 60,
        prod_pic: "yellow_pad.jpg"
    },
    {
        prod_name: "Paperclips (25pcs)",
        prod_price: 30,
        prod_pic: "paperclips.jpg"
    },
    {
        prod_name: "PE Uniform Pants",
        prod_price: 350,
        prod_pic: "pe_pants.jpg"
    },
    {
        prod_name: "PE Uniform Shirt",
        prod_price: 350,
        prod_pic: "pe_shirt.jpg"
    },
    {
        prod_name: "Pencils (8pcs)",
        prod_price: 80,
        prod_pic: "pencils.jpg"
    },
    {
        prod_name: "Phone Charger",
        prod_price: 80,
        prod_pic: "charger.jpg"
    },
    {
        prod_name: "Globe Pocket Wifi",
        prod_price: 800,
        prod_pic: "wifi_globe.jpg"
    },
    {
        prod_name: "Smart Pocket Wifi",
        prod_price: 500,
        prod_pic: "wifi_smart.jpg"
    },
    {
        prod_name: "Sun Pocket Wifi",
        prod_price: 1500,
        prod_pic: "wifi_sun.jpg"
    },
    {
        prod_name: "Printed Notes",
        prod_price: 500,
        prod_pic: "notes.jpg"
    },
    {
        prod_name: "Protective Equipment",
        prod_price: 450,
        prod_pic: "protective_equipment.jpg"
    },
    {
        prod_name: "Rags (4pcs)",
        prod_price: 200,
        prod_pic: "rags.jpg"
    },
    {
        prod_name: "College Review Booklets",
        prod_price: 500,
        prod_pic: "col_review.jpg"
    },
    {
        prod_name: "Competition Review Booklets",
        prod_price: 500,
        prod_pic: "comp_review.jpg"
    },
    {
        prod_name: "Ruler Set",
        prod_price: 45,
        prod_pic: "rulers.jpg"
    },
    {
        prod_name: "School Uniform Blouse & Skirt",
        prod_price: 250,
        prod_pic: "uniform_bs.jpg"
    },
    {
        prod_name: "School Uniform Polo & Pants",
        prod_price: 250,
        prod_pic: "uniform_pp.jpg"
    },
    {
        prod_name: "Scientific Calculator",
        prod_price: 1000,
        prod_pic: "scical.jpg"
    },
    {
        prod_name: "Shampoo & Conditioner",
        prod_price: 150,
        prod_pic: "shampoo_conditioner.jpg"
    },
    {
        prod_name: "Skincare Products Set",
        prod_price: 750,
        prod_pic: "skincare.jpg"
    },
    {
        prod_name: "Slippers",
        prod_price: 80,
        prod_pic: "slippers.jpg"
    },
    {
        prod_name: "Dove Soap",
        prod_price: 150,
        prod_pic: "soap.jpg"
    },
    {
        prod_name: "Sports Attire",
        prod_price: 500,
        prod_pic: "sports_attire.jpg"
    },
    {
        prod_name: "Stapler",
        prod_price: 50,
        prod_pic: "stapler.jpg"
    },
    {
        prod_name: "Summer Uniform Boys",
        prod_price: 500,
        prod_pic: "sum_uniform_b.jpg"
    },
    {
        prod_name: "Summer Uniform Girls",
        prod_price: 500,
        prod_pic: "sum_uniform_g.jpg"
    },
    {
        prod_name: "Tablet + Stylus",
        prod_price: 2500,
        prod_pic: "tablet.jpg"
    },
    {
        prod_name: "Scotch Tape",
        prod_price: 25,
        prod_pic: "tape.jpg"
    },
    {
        prod_name: "Tesla",
        prod_price: 2500000,
        prod_pic: "tesla.jpg"
    },
    {
        prod_name: "Test Reviewer",
        prod_price: 200,
        prod_pic: "test.jpg"
    },
    {
        prod_name: "Tissue Roll",
        prod_price: 20,
        prod_pic: "tissue.jpg"
    },
    {
        prod_name: "Toilet Cleanser",
        prod_price: 200,
        prod_pic: "toilet_cleanser.jpg"
    },
    {
        prod_name: "Toilet Scrubber",
        prod_price: 50,
        prod_pic: "toilet_scrubber.jpg"
    },
    {
        prod_name: "Toothbrush & Toothpaste Set",
        prod_price: 125,
        prod_pic: "tooth_set.jpg"
    },
    {
        prod_name: "Body Towel",
        prod_price: 80,
        prod_pic: "towel_b.jpg"
    },
    {
        prod_name: "Face Towel",
        prod_price: 30,
        prod_pic: "towel_f.jpg"
    },
    {
        prod_name: "Tutoring/Consultation Service (per Hour)",
        prod_price: 250,
        prod_pic: "tutor.jpg"
    },
    {
        prod_name: "USB Webcam",
        prod_price: 450,
        prod_pic: "cam.jpg"
    },
    {
        prod_name: "Wipes",
        prod_price: 200,
        prod_pic: "wipes.jpg"
    },
    {
        prod_name: "Wired Earphones",
        prod_price: 300,
        prod_pic: "wr_earphones.jpg"
    },
    {
        prod_name: "Wired Mouse",
        prod_price: 300,
        prod_pic: "wr_mouse.jpg"
    },
    {
        prod_name: "Wireless Keyboard",
        prod_price: 500,
        prod_pic: "wrls_keyboard.jpg"
    },
    {
        prod_name: "Wireless Mouse",
        prod_price: 300,
        prod_pic: "wrls_mouse.jpg"
    }
];

function addOrder(x) {
    orderArray[orderArray.length] = itemList[x-1];
    setTimeout(() => { displayOrder();setTimeout(() => { document.getElementById("order-box").scrollTop=document.getElementById("order-box").scrollHeight; }, 1) }, 1);
}

function displayOrder() {
    var orderBox = "";
    var x;
    if (orderArray.length != 0) {
        x = JSON.stringify(orderArray);
        orderBox = "<hr>";
        for (var i = 0; i < orderArray.length; i++) {
            orderBox+="<div class=\"cart-item\"><span class=\"product-name\">"+(i+1)+")&nbsp;"+orderArray[i].prod_name+"</span><br><span class=\"product-price\">₱"+orderArray[i].prod_price+"</span>&nbsp;&nbsp;<span class=\"remove-item\" onclick=\"removeItem("+i+");saveForm()\">Remove Item</span></div><hr>";
        }
        orderBox+="<div class=\"remove-item cart-item\" style=\"text-align:right;margin-right:1vw;margin-bottom:1vw\" onclick=\"orderArray=[];displayOrder();saveForm()\">Remove All Items</div>";
    } else {orderBox = "<div style=\"font-size:4vw;color:gray;text-align:center;\"><br>Empty Cart</div>"; x = ''}
    document.getElementById("cust_order").setAttribute("value", x);
    document.getElementById("order-box").innerHTML=orderBox;
}

function removeItem(x) {
    orderArray.splice(x, 1);
    displayOrder();
}

function saveForm() {
    var x = {
        cust_name: document.getElementById("cust_name").value,
        cust_email: document.getElementById("cust_email").value,
        cust_addr: document.getElementById("cust_addr").value,
        cust_order: JSON.stringify(orderArray)
    };
    localStorage.setItem("formValues", JSON.stringify(x));
}

function loadForm() {
    if (localStorage.getItem("formValues") != null) {
        var x = JSON.parse(localStorage.getItem("formValues"));
        document.getElementById("cust_name").value = x.cust_name;
        document.getElementById("cust_email").value = x.cust_email;
        document.getElementById("cust_addr").value = x.cust_addr;
        orderArray = JSON.parse(x.cust_order);
        setTimeout(() => { document.getElementById("order-box").scrollTop=document.getElementById("order-box").scrollHeight; }, 1);
    }
    displayOrder();
}

function createcard(x) {
    return "<div class=\"card\"><div class=\"card-img\"><img src=\"../pics/"+itemList[x-1].prod_pic+"\"></div><div class=\"card-text\"><div class=\"card-name\">"+itemList[x-1].prod_name+"</div><div class=\"card-price\">₱"+itemList[x-1].prod_price+"</div></div><div class=\"card-button\"><button onclick=\"addOrder("+x+");saveForm()\">Add to Cart</button></div></div>";
}

function createset(x,y) {
    if (x <= y && x >= 1) {
        var numset = [];
        for (var i = 0; i < x; i++){
            var c = false;
            do {
                numset[i] = Math.floor((Math.random() * y) + 1);
                if (i > 0) {
                    for (var v = 0; v < numset.length - 1; v++) {
                        if (numset[numset.length - 1] != numset[v]) {
                            c = true;
                        } else {
                            c = false;
                            v = numset.length;
                        }
                    }
                } else { c = true;}
            } while (c == false);
        }
        return numset;
    }
}

function createcardset(x) {
    var divset = "";
    for (var i = 0; i < x.length; i++) {
        divset+=createcard(x[i]);
    }
    return divset;
}

var addbool = true;
var sbool = false;

function search() {
    document.getElementById("searchResult").removeAttribute("hidden");
    document.getElementById("searchResult").innerHTML = "";
    if (document.getElementById( "search-box").value.trim() != "") {
        document.getElementById("searchResult").removeAttribute("hidden");
        var v = 0;
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i].prod_name.toLowerCase().search(document.getElementById( "search-box").value.toLowerCase()) >= 0) {
                document.getElementById("searchResult").innerHTML+=
                "<div class=\"cart-item\" id=\"searchResult-"+v+"\" onclick=\"addOrder("+(i+1)+");sfocus();saveForm();\">"+itemList[i].prod_name+"<span style=\"float:right;\">₱"+itemList[i].prod_price+"</span></div>";
                v++;
            }
        }
        if (v == 0) {document.getElementById("searchResult").innerHTML+="<div class=\"cart-item\">No Results</div>";}
    } else {document.getElementById("searchResult").setAttribute("hidden", true)}
}

function sfocus() {
    var x = window.scrollY;
    setTimeout(() => { document.getElementById( "search-box").focus(); }, 0.1 );
    setTimeout(() => { window.scroll(0, x); }, 0.11 );
}

setTimeout(() => { 
    document.getElementById("search-box").addEventListener('focus', (event) => {sbool = true;});
    document.getElementById("search-box").addEventListener('blur', (event) => {sbool = false;});
    document.getElementById("search-box").addEventListener('keydown', () => {setTimeout(() => { search() }, 1 );}); }, 1);

setTimeout(() => { document.getElementById("card-box").innerHTML = createcardset(createset(12,itemList.length)); loadForm(); document.getElementById("searchResult").setAttribute("hidden", true) }, 1);