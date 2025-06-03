const products=[
{id:1, name:"Wireless Headphone",price:2000, image:"image/wireless.jpg"},
{id:2, name:"Iphone 16 Pro Max", price:250000, image:"image/iphone.jpg"},
{id:3, name:"Mackbook", price:349000, image:"image/mac.jpg"},
{id:4, name:"Speaker", price:10000, image:"image/speaker.jpg"},
{id:5, name:"Iwatch", price:100000, image:"image/iwatch.jpg"},
];


let cart= JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts(){
    const list= document.getElementById("product-list");
    products.forEach(product=> {
        const div = document.createElement("div");
    
        div.className ="product";
        div.innerHTML= `
        <img src = "${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick = "addToCart(${product.id})">Add to Cart</button>
        `; 
    list.appendChild(div); 
});
   }
function addToCart(id){
    const product= products.find(p =>p.id===id);
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    updateCartCount();
}
function updateCartCount(){
    document.getElementById("cart-count").textContent=cart.length;
}
renderProducts();
updateCartCount();