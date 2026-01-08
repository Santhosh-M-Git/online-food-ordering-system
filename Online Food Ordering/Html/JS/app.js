const foodList = document.getElementById("foodList");
const searchInput = document.getElementById("searchInput");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentCategory = "all";

// render food items
function renderFoods(list) {
  foodList.innerHTML = "";

  list.forEach(item => {
    const div = document.createElement("div");
    div.className = "food-card";

    div.innerHTML = `
      <img src="${item.image}">
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button>Add to Cart</button>
    `;

    div.querySelector("button").addEventListener("click", () => {
      addToCart(item);
    });

    foodList.appendChild(div);
  });
}

// initial load
renderFoods(foodItems);

// category filter
function filterCategory(category) {
  currentCategory = category;
  applyFilters();
}

// search filter
searchInput.addEventListener("keyup", applyFilters);

function applyFilters() {
  const searchText = searchInput.value.toLowerCase();

  let filtered = foodItems.filter(item => {
    const matchCategory =
      currentCategory === "all" || item.category === currentCategory;

    const matchSearch =
      item.name.toLowerCase().includes(searchText);

    return matchCategory && matchSearch;
  });

  renderFoods(filtered);
}

// add to cart
function addToCart(food) {
  const existing = cart.find(item => item.id === food.id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id: food.id,
      name: food.name,
      price: food.price,
      image: food.image,
      qty: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
}
