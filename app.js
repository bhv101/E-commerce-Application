const products = [
    {name:"Laptop, price : 1200, category: Electronics"},
    {name: "T-shirt", price: 25, category: "Clothing"},
    {name: "Coffee Mug", price: 10, category: "Home & Kitchen"},
    {name: "Headphones", price: 100, category: "Electronics"},
    {name: "Sneakers", price: 80, category: "Clothing"}
]

const productsDiv = document.getElementById("products");

products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `<h3>${p.name}</h3>
                    <p>Price: $${p.price}</p>
                    <p>Category: ${p.category}</p>`;
  productsDiv.appendChild(card);
});