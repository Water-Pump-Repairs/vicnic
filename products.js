// Example product data
const products = [
  {
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: "$99.99",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600"
  },
  {
    name: "Smart Watch",
    description: "Track your fitness and stay connected with this stylish smartwatch.",
    price: "$149.99",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600"
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with deep bass and long battery life.",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1470259078422-826894b933aa?w=600"
  },
  {
    name: "HD Webcam",
    description: "1080p HD webcam for video calls and streaming.",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600"
  }
  {
    name: "HD Webcam",
    description: "1080p HD webcam for video calls and streaming.",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600"
  },
  {
    name: "HD Webcam",
    description: "1080p HD webcam for video calls and streaming.",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600"
  },
    {
    name: "HD Webcam",
    description: "1080p HD webcam for video calls and streaming.",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600"
  },
      {
    name: "HD Webcam",
    description: "1080p HD webcam for video calls and streaming.",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600"
  },
      {
    name: "HD Webcam",
    description: "1080p HD webcam for video calls and streaming.",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600"
  } ,
     {
    name: "HD Webcam",
    description: "1080p HD webcam for video calls and streaming.",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600"
  },
     {
    name: "HD Webcam",
    description: "1080p HD webcam for video calls and streaming.",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600"
  }  
];

// Render the products
const container = document.getElementById("products-container");

function renderProducts(products) {
  container.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <div class="product-info">
        <div>
          <div class="product-name">${product.name}</div>
          <div class="product-description">${product.description}</div>
        </div>
        <div class="product-price">${product.price}</div>
      </div>
    </div>
  `).join('');
}

renderProducts(products);
