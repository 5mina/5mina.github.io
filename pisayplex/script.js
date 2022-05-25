var orderArray = [];
const itemList = [
    {
        prod_name: "G8 AdTech Set",
        prod_price: 450,
        prod_pic: "../pics/adtech_g8.jpg"
    },
    {
        prod_name: "General AdTech Set",
        prod_price: 550,
        prod_pic: "../pics/adtech_gen.jpg"
    },
    {
        prod_name: "Ballpen",
        prod_price: 15,
        prod_pic: "../pics/pen.jpg"
    },
    {
        prod_name: "Fita",
        prod_price: 12,
        prod_pic: "../pics/fita.jpg"
    },
    {
        prod_name: "Hansel",
        prod_price: 10,
        prod_pic: "../pics/hansel.jpg"
    },
    {
        prod_name: "Hi-ro",
        prod_price: 8,
        prod_pic: "../pics/hiro.jpg"
    },
    {
        prod_name: "Rebisco",
        prod_price: 10,
        prod_pic: "../pics/rebisco.jpg"
    },
    {
        prod_name: "Skyflakes",
        prod_price: 10,
        prod_pic: "../pics/skyflakes.jpg"
    },
    {
        prod_name: "Whatta Tops",
        prod_price: 9,
        prod_pic: "../pics/whatta_tops.jpg"
    },
    {
        prod_name: "Bluetooth Earphones",
        prod_price: 800,
        prod_pic: "../pics/bt_earphones.jpg"
    },
    {
        prod_name: "A4 Bond Paper (30pcs)",
        prod_price: 40,
        prod_pic: "../pics/bondp_a4.jpg"
    },
    {
        prod_name: "Long Bond Paper (30pcs)",
        prod_price: 40,
        prod_pic: "../pics/bondp_long.jpg"
    },
    {
        prod_name: "Short Bond Paper (30pcs)",
        prod_price: 40,
        prod_pic: "../pics/bondp_short.jpg"
    },
    {
        prod_name: "Book (Soft Copy)",
        prod_price: 150,
        prod_pic: "../pics/book.jpg"
    },
    {
        prod_name: "Broom and Dustpan Set",
        prod_price: 175,
        prod_pic: "../pics/broom_dustpan.jpg"
    },
    {
        prod_name: "Canva Poster Templates",
        prod_price: 75,
        prod_pic: "../pics/poster.jpg"
    },
    {
        prod_name: "Canva Presentation Templates",
        prod_price: 75,
        prod_pic: "../pics/presentation.jpg"
    },
    {
        prod_name: "Clipboard",
        prod_price: 50,
        prod_pic: "../pics/clipboard.jpg"
    },
    {
        prod_name: "3-in-1 Coffee",
        prod_price: 25,
        prod_pic: "../pics/coffee.jpg"
    },
    {
        prod_name: "Colored Pencils (24 Color Set)",
        prod_price: 100,
        prod_pic: "../pics/colored_pencils.jpg"
    },
    {
        prod_name: "Correction Tape",
        prod_price: 35,
        prod_pic: "../pics/correction_tape.jpg"
    },
    {
        prod_name: "Dormer Pajama Set",
        prod_price: 230,
        prod_pic: "../pics/pajamas.jpg"
    },
    {
        prod_name: "Envelopes (15pcs)",
        prod_price: 90,
        prod_pic: "../pics/envelopes.jpg"
    },
    {
        prod_name: "Eraser (3pcs)",
        prod_price: 60,
        prod_pic: "../pics/eraser.jpg"
    },
    {
        prod_name: "Feminine Hygiene Products",
        prod_price: 150,
        prod_pic: "../pics/fem_hygiene.jpg"
    },
    {
        prod_name: "Floor Mat",
        prod_price: 20,
        prod_pic: "../pics/mat.jpg"
    },
    {
        prod_name: "Highlighter (5 Color Set)",
        prod_price: 125,
        prod_pic: "../pics/highlighter.jpg"
    },
    {
        prod_name: "Hotel Slippers",
        prod_price: 60,
        prod_pic: "../pics/hotel_slippers.jpg"
    },
    {
        prod_name: "ID Lace",
        prod_price: 100,
        prod_pic: "../pics/id_lace.jpg"
    },
    {
        prod_name: "Index Cards (30pcs)",
        prod_price: 30,
        prod_pic: "../pics/index_cards.jpg"
    },
    {
        prod_name: "Lab Gown",
        prod_price: 500,
        prod_pic: "../pics/lab_gown.jpg"
    },
    {
        prod_name: "Laptop",
        prod_price: 40000,
        prod_pic: "../pics/laptop.jpg"
    },
    {
        prod_name: "Globe Load (500)",
        prod_price: 500,
        prod_pic: "../pics/load_globe.jpg"
    },
    {
        prod_name: "Smart Load (500)",
        prod_price: 500,
        prod_pic: "../pics/load_smart.jpg"
    },
    {
        prod_name: "Sun Load (500)",
        prod_price: 500,
        prod_pic: "../pics/load_sun.jpg"
    },
    {
        prod_name: "TM Load (500)",
        prod_price: 500,
        prod_pic: "../pics/load_tm.jpg"
    },
    {
        prod_name: "TNT Load (500)",
        prod_price: 500,
        prod_pic: "../pics/load_tnt.jpg"
    },
    {
        prod_name: "Lysol",
        prod_price: 200,
        prod_pic: "../pics/lysol.jpg"
    },
    {
        prod_name: "USB Microphone",
        prod_price: 250,
        prod_pic: "../pics/mic.jpg"
    },
    {
        prod_name: "Mop",
        prod_price: 900,
        prod_pic: "../pics/mop.jpg"
    },
    {
        prod_name: "Mouthwash",
        prod_price: 50,
        prod_pic: "../pics/mouthwash.jpg"
    },
    {
        prod_name: "Cup Noodles",
        prod_price: 25,
        prod_pic: "../pics/noodles.jpg"
    },
    {
        prod_name: "1/4 Pad Paper",
        prod_price: 20,
        prod_pic: "../pics/1_4_pad.jpg"
    },
    {
        prod_name: "Crosswise Pad Paper",
        prod_price: 20,
        prod_pic: "../pics/cwise_pad.jpg"
    },
    {
        prod_name: "Intermediate Pad Paper",
        prod_price: 30,
        prod_pic: "../pics/intermediate_pad.jpg"
    },
    {
        prod_name: "Lengthwise Pad Paper",
        prod_price: 20,
        prod_pic: "../pics/lwise_pad.jpg"
    },
    {
        prod_name: "Yellow Pad Paper",
        prod_price: 60,
        prod_pic: "../pics/yellow_pad.jpg"
    },
    {
        prod_name: "Paperclips (25pcs)",
        prod_price: 30,
        prod_pic: "../pics/paperclips.jpg"
    },
    {
        prod_name: "PE Uniform Pants",
        prod_price: 350,
        prod_pic: "../pics/pe_pants.jpg"
    },
    {
        prod_name: "PE Uniform Shirt",
        prod_price: 350,
        prod_pic: "../pics/pe_shirt.jpg"
    },
    {
        prod_name: "Pencils (8pcs)",
        prod_price: 80,
        prod_pic: "../pics/pencils.jpg"
    },
    {
        prod_name: "Phone Charger",
        prod_price: 80,
        prod_pic: "../pics/charger.jpg"
    },
    {
        prod_name: "Globe Pocket Wifi",
        prod_price: 800,
        prod_pic: "../pics/wifi_globe.jpg"
    },
    {
        prod_name: "Smart Pocket Wifi",
        prod_price: 500,
        prod_pic: "../pics/wifi_smart.jpg"
    },
    {
        prod_name: "Sun Pocket Wifi",
        prod_price: 1500,
        prod_pic: "../pics/wifi_sun.jpg"
    },
    {
        prod_name: "Printed Notes",
        prod_price: 500,
        prod_pic: "../pics/notes.jpg"
    },
    {
        prod_name: "Protective Equipment",
        prod_price: 450,
        prod_pic: "../pics/protective_equipment.jpg"
    },
    {
        prod_name: "Rags (4pcs)",
        prod_price: 200,
        prod_pic: "../pics/rags.jpg"
    },
    {
        prod_name: "College Review Booklets",
        prod_price: 500,
        prod_pic: "../pics/col_review.jpg"
    },
    {
        prod_name: "Competition Review Booklets",
        prod_price: 500,
        prod_pic: "../pics/comp_review.jpg"
    },
    {
        prod_name: "Ruler Set",
        prod_price: 45,
        prod_pic: "../pics/rulers.jpg"
    },
    {
        prod_name: "School Uniform Blouse & Skirt",
        prod_price: 250,
        prod_pic: "../pics/uniform_bs.jpg"
    },
    {
        prod_name: "School Uniform Polo & Pants",
        prod_price: 250,
        prod_pic: "../pics/uniform_pp.jpg"
    },
    {
        prod_name: "Scientific Calculator",
        prod_price: 1000,
        prod_pic: "../pics/scical.jpg"
    },
    {
        prod_name: "Shampoo & Conditioner",
        prod_price: 150,
        prod_pic: "../pics/shampoo_conditioner.jpg"
    },
    {
        prod_name: "Skincare Products Set",
        prod_price: 750,
        prod_pic: "../pics/skincare.jpg"
    },
    {
        prod_name: "Slippers",
        prod_price: 80,
        prod_pic: "../pics/slippers.jpg"
    },
    {
        prod_name: "Dove Soap",
        prod_price: 150,
        prod_pic: "../pics/soap.jpg"
    },
    {
        prod_name: "Sports Attire",
        prod_price: 500,
        prod_pic: "../pics/sports_attire.jpg"
    },
    {
        prod_name: "Stapler",
        prod_price: 50,
        prod_pic: "../pics/stapler.jpg"
    },
    {
        prod_name: "Summer Uniform Boys",
        prod_price: 500,
        prod_pic: "../pics/sum_uniform_b.jpg"
    },
    {
        prod_name: "Summer Uniform Girls",
        prod_price: 500,
        prod_pic: "../pics/sum_uniform_g.jpg"
    },
    {
        prod_name: "Tablet + Stylus",
        prod_price: 2500,
        prod_pic: "../pics/tablet.jpg"
    },
    {
        prod_name: "Scotch Tape",
        prod_price: 25,
        prod_pic: "../pics/tape.jpg"
    },
    {
        prod_name: "Tesla",
        prod_price: 2500000,
        prod_pic: "../pics/tesla.jpg"
    },
    {
        prod_name: "Test Reviewer",
        prod_price: 200,
        prod_pic: "../pics/test.jpg"
    },
    {
        prod_name: "Tissue Roll",
        prod_price: 20,
        prod_pic: "../pics/tissue.jpg"
    },
    {
        prod_name: "Toilet Cleanser",
        prod_price: 200,
        prod_pic: "../pics/toilet_cleanser.jpg"
    },
    {
        prod_name: "Toilet Scrubber",
        prod_price: 50,
        prod_pic: "../pics/toilet_scrubber.jpg"
    },
    {
        prod_name: "Toothbrush & Toothpaste Set",
        prod_price: 125,
        prod_pic: "../pics/tooth_set.jpg"
    },
    {
        prod_name: "Body Towel",
        prod_price: 80,
        prod_pic: "../pics/towel_b.jpg"
    },
    {
        prod_name: "Face Towel",
        prod_price: 30,
        prod_pic: "../pics/towel_f.jpg"
    },
    {
        prod_name: "Tutoring/Consultation Service (per Hour)",
        prod_price: 250,
        prod_pic: "../pics/tutor.jpg"
    },
    {
        prod_name: "USB Webcam",
        prod_price: 450,
        prod_pic: "../pics/cam.jpg"
    },
    {
        prod_name: "Wipes",
        prod_price: 200,
        prod_pic: "../pics/wipes.jpg"
    },
    {
        prod_name: "Wired Earphones",
        prod_price: 300,
        prod_pic: "../pics/wr_earphones.jpg"
    },
    {
        prod_name: "Wired Mouse",
        prod_price: 300,
        prod_pic: "../pics/wr_mouse.jpg"
    },
    {
        prod_name: "Wireless Keyboard",
        prod_price: 500,
        prod_pic: "../pics/wrls_keyboard.jpg"
    },
    {
        prod_name: "Wireless Mouse",
        prod_price: 300,
        prod_pic: "../pics/wrls_mouse.jpg"
    },
    {
        prod_name: "Hoshi Kwon",
        prod_price: 15000000,
        prod_pic: "../pics/hoshi.jpg"
    },
    {
        prod_name: "Kwon Soonyoung",
        prod_price: 15000000,
        prod_pic: "../pics/soonyoung.jpg"
    },
    {
        prod_name: "Changmin Ji",
        prod_price: 15000000,
        prod_pic: "../pics/q.jpg"
    },
    {
        prod_name: "Juyeon + Q",
        prod_price: 30000000,
        prod_pic: "../pics/jukyu.jpg"
    },
    {
        prod_name: "Maverick Agbayani",
        prod_price: 1000000,
        prod_pic: "../pics/agbayani.jpg"
    },
    {
        prod_name: "Xabi Difuntorum",
        prod_price: 1000000,
        prod_pic: "../pics/difuntorum.jpg"
    },
    {
        prod_name: "John Paul Tabrilla",
        prod_price: 1000000,
        prod_pic: "../pics/tabrilla.jpg"
    },
    {
        prod_name: "Eunys Barbon",
        prod_price: 1000000,
        prod_pic: "../pics/barbon.jpg"
    },
    {
        prod_name: "Mariah Guisdan",
        prod_price: 1000000,
        prod_pic: "../pics/guisdan.jpg"
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
            orderBox+="<div class=\"cart-item\"><span class=\"product-name\">"+(i+1)+")&nbsp;"+orderArray[i].prod_name+"</span><br><span class=\"product-price\">₱"+orderArray[i].prod_price+"</span>&nbsp;&nbsp;<span class=\"remove-item\" style=\"user-select: none;\" onclick=\"removeItem("+i+");saveForm()\">Remove Item</span></div><hr>";
        }
        orderBox+="<div class=\"remove-item cart-item\" style=\"user-select: none;text-align:right;margin-right:1vw;margin-bottom:1vw\" onclick=\"orderArray=[];displayOrder();saveForm()\">Remove All Items</div>";
    } else {orderBox = "<div style=\"font-size:4vw;color:gray;text-align:center;user-select: none;\"><br>Empty Cart</div>"; x = ''}
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
        //setTimeout(() => { document.getElementById("order-box").scrollTop=document.getElementById("order-box").scrollHeight; }, 1);
    }
    displayOrder();
}

function createcard(x) {
    return "<div class=\"card\"><div class=\"card-img\"><img src=\""+itemList[x-1].prod_pic+"\" alt=\""+itemList[x-1].prod_name+"\"></div><div class=\"card-text\"><div class=\"card-name\">"+itemList[x-1].prod_name+"</div><div class=\"card-price\">₱"+itemList[x-1].prod_price+"</div></div><div class=\"card-button\"><button onclick=\"addOrder("+x+");saveForm()\">Add to Cart</button></div></div>";
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
        for (var i = 0; i < itemList.length-5; i++) {
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

function navDisplay(x) {
    const card_box = document.getElementById("card-box");
    const head = document.getElementById("header2");
    switch(x){
        case 1:
            card_box.innerHTML = createcardset(createset(12,89));
            head.innerHTML = "Welcome to PisayPlex";
            break;
        case 2:
            var v = [];
            for (var i = 1; i <= 89; i++){v[v.length] = i}
            card_box.innerHTML = createcardset(v);
            head.innerHTML = "All Items";
            break;
        case 3:
            var v = [29,31,49,50,57,62,63,69,71,72];
            card_box.innerHTML = createcardset(v);
            head.innerHTML = "Clothes";
            break;
        case 4:
            var v = [10,32,33,34,35,36,37,39,52,53,54,55,64,73,75,84,86,87,88,89];
            card_box.innerHTML = createcardset(v);
            head.innerHTML = "Technology";
            break;
        case 5:
            var v = [1,2,3,11,12,13,14,18,20,21,23,24,27,30,43,44,45,46,47,48,51,61,70,74];
            card_box.innerHTML = createcardset(v);
            head.innerHTML = "School Supplies";
            break;
        case 6:
            var v = [16,17,56,59,60,76,83];
            card_box.innerHTML = createcardset(v);
            head.innerHTML = "Supplementary Learning Materials";
            break;
        case 7:
            var v = [4,5,6,7,8,9,15,19,22,25,26,28,38,40,41,42,58,65,66,67,68,77,78,79,80,81,82,85];
            card_box.innerHTML = createcardset(v);
            head.innerHTML = "Dormer Items";
            break;
        case 8:
            var v = [itemList.length-4,itemList.length-3,itemList.length-2,itemList.length-1,itemList.length];
            card_box.innerHTML = createcardset(v);
            head.innerHTML = "About the Company";
            break;
    }
}

setTimeout(() => { 
    document.getElementById("search-box").addEventListener('focus', (event) => {sbool = true;});
    document.getElementById("search-box").addEventListener('blur', (event) => {sbool = false;});
    document.getElementById("search-box").addEventListener('keydown', () => {setTimeout(() => { search() }, 1 );}); }, 1);

setTimeout(() => { navDisplay(1); loadForm(); document.getElementById("searchResult").setAttribute("hidden", true) }, 1);