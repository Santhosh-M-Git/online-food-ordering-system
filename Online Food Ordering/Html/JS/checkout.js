function goToPayment() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
  
    if (!name || !address || !phone) {
      alert("Please fill all details");
      return;
    }
  
    localStorage.setItem("customer", JSON.stringify({
      name,
      address,
      phone
    }));
  
    window.location.href = "payment.html";
  }
  