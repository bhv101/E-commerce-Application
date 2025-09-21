const products = [
    {name:"Laptop", price : 1900, category: "laptop", image: "images/Laptopa.jpg"},
    {name: "Handphones", price: 1000, category: "handphones", image: "images/Handphones.jpg"},
    {name: "Monitor", price: 500, category: "monitor", image: "images/Monitor.jpg"},
    {name: "Headphones", price: 300, category: "headphones", image: "images/Headphones.jpg"},
    {name: "Others", price: 80, category: "others", image: "images/others.jpg"}
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