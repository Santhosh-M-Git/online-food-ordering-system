function placeOrder() {
    alert("🎉 Payment Successful!\nYour order has been placed.");
  
    localStorage.removeItem("cart");
    localStorage.removeItem("customer");
  
    window.location.href = "index.html";
  }
  