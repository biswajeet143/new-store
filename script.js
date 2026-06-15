let cart = [];
let total = 0;

function addToCart(name, price){

    cart.push({
        name:name,
        price:price
    });

    total += price;

    displayCart();
}

function displayCart(){

    let cartItems =
    document.getElementById("cartItems");

    cartItems.innerHTML = "";

    cart.forEach(item=>{

        cartItems.innerHTML +=
        `<li>${item.name} - ₹${item.price}</li>`;

    });

    document.getElementById("total")
    .innerText = total;
}

function showForm(){

    document.getElementById("orderForm")
    .style.display="block";
}

function sendWhatsAppOrder(){

    let name =
    document.getElementById("name").value;

    let phone =
    document.getElementById("phone").value;

    let address =
    document.getElementById("address").value;

    let orderText =
    "🛒 New Order%0A%0A";

    cart.forEach(item=>{
        orderText +=
        item.name + " - ₹" +
        item.price + "%0A";
    });

    orderText +=
    "%0ATotal: ₹" + total +
    "%0A%0AName: " + name +
    "%0APhone: " + phone +
    "%0AAddress: " + address;

    let whatsappNumber =
    "918789484462"; // Replace with your WhatsApp number

    window.open(
      `https://wa.me/${whatsappNumber}?text=${orderText}`,
      "_blank"
    );
}