// Example product data
const products = [
  {
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: "$99.99",
    image: "https://3.imimg.com/data3/YV/VT/MY-2350301/pumps-industrial-500x500.jpg"
  },
  {
    name: "Smart Watch",
    description: "Track your fitness and stay connected with this stylish smartwatch.",
    price: "$149.99",
    image: "https://e7.pngegg.com/pngimages/803/553/png-clipart-submersible-pump-water-well-pump-centrifugal-pump-pump-miscellaneous-axialflow-pump.png"
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with deep bass and long battery life.",
    price: "$59.99",
    image: "https://w7.pngwing.com/pngs/436/527/png-transparent-submersible-pump-wellers-hire-wastewater-water-submersible-drinking-water-submersible-pump.png"
  },
  {
    name: "HD Webcam",
    description: "1080p HD webcam for video calls and streaming.",
    price: "$39.99",
    image: "https://e7.pngegg.com/pngimages/338/65/png-clipart-submersible-pump-water-well-manufacturing-faridabad-others-miscellaneous-company.png"
  }
  {
    name: "HD Webcam",
    description: "1080p HD webcam for video calls and streaming.",
    price: "$39.99",
    image: "https://img.freepik.com/free-photo/deep-well-submersible-pump-isolated-white_627829-7499.jpg"
  },
  {
    name: "HD Webcam",
    description: "1080p HD webcam for video calls and streaming.",
    price: "$39.99",
    image: "https://e7.pngegg.com/pngimages/137/277/png-clipart-submersible-pump-product-water-solar-powered-pump-water-compressor-hydraulic-pump.png"
  },
    {
    name: "HD Webcam",
    description: "1080p HD webcam for video calls and streaming.",
    price: "$39.99",
    image: "https://th.bing.com/th/id/R.45d560fda6f28eb1d09b4e25212169fe?rik=R2tYDaY%2bspe6tg&riu=http%3a%2f%2fprintablegraphics.in%2fwp-content%2fuploads%2f2017%2f11%2fSubmersible-pump-Havells.png&ehk=XXLCv1jsiI%2fA9Wbhbtx%2bAq4NWI5t8REvKWsS%2fpsz0dM%3d&risl=&pid=ImgRaw&r=0"
  },
      {
    name: "HD Webcam",
    description: "1080p HD webcam for video calls and streaming.",
    price: "$39.99",
    image: "https://thumbs.dreamstime.com/z/water-pump-submersible-pump-set-submersible-borehole-supplying-clean-water-great-depth-house-motor-water-pump-submersible-pump-set-242661550.jpg"
  },
      {
    name: "HD Webcam",
    description: "1080p HD webcam for video calls and streaming.",
    price: "$39.99",
    image: "https://e7.pngegg.com/pngimages/343/164/png-clipart-submersible-pump-solar-powered-pump-water-pumping-irrigation-water-submersible-pump-borstelloze-elektromotor.png"
  } ,
     {
    name: "HD Webcam",
    description: "1080p HD webcam for video calls and streaming.",
    price: "$39.99",
    image: "https://th.bing.com/th/id/OIP.Fe1dZ0ziB9GjR6IcFnPs4gHaEa?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
  },
     {
    name: "HD Webcam",
    description: "1080p HD webcam for video calls and streaming.",
    price: "$39.99",
    image: "https://w7.pngwing.com/pngs/18/668/png-transparent-submersible-pump-aquatech-engineers-water-well-water-industry-submersible-pump-booster-pump.png"
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
