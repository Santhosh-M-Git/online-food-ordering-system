const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<h2 style='text-align:center'>🛒 Cart is empty</h2>";
    totalPrice.innerText = "";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img src="${item.image}" class="cart-img">
      <div>
        <h3>${item.name}</h3>
        <p>₹${item.price} × ${item.qty}</p>
      </div>
      <div>
        <button onclick="decreaseQty(${index})">➖</button>
        <button onclick="increaseQty(${index})">➕</button>
        <button onclick="removeItem(${index})">❌</button>
      </div>
    `;

    cartItems.appendChild(div);
  });

  totalPrice.innerText = "Total Amount: ₹" + total;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function increaseQty(index) {
  cart[index].qty++;
  renderCart();
}

function decreaseQty(index) {
  if (cart[index].qty > 1) {
    cart[index].qty--;
  }
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function goToCheckout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  window.location.href = "checkout.html";
}

renderCart();
