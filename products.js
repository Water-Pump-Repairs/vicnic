const products = [
  {
    name: "Water Pump Repairs",
    description: "Water Pump Repairs.",
    price: "$99.99",
    image: "https://3.imimg.com/data3/YV/VT/MY-2350301/pumps-industrial-500x500.jpg"
  },
  {
    name: "Water Pump Repairs",
    description: "Water Pump Repairs.",
    price: "$149.99",
    image: "https://e7.pngegg.com/pngimages/803/553/png-clipart-submersible-pump-water-well-pump-centrifugal-pump-pump-miscellaneous-axialflow-pump.png"
  },
  {
    name: "Water Pump Repairs",
    description: "Water Pump Repairs.",
    price: "$59.99",
    image: "https://w7.pngwing.com/pngs/436/527/png-transparent-submersible-pump-wellers-hire-wastewater-water-submersible-drinking-water-submersible-pump.png"
  },
  {
    name: "Water Pump Repairs",
    description: "Water Pump Repairs.",
    price: "$39.99",
    image: "https://e7.pngegg.com/pngimages/338/65/png-clipart-submersible-pump-water-well-manufacturing-faridabad-others-miscellaneous-company.png"
  },
  {
    name: "Water Pump Repairs",
    description: "Water Pump Repairs.",
    price: "$39.99",
    image: "https://img.freepik.com/free-photo/deep-well-submersible-pump-isolated-white_627829-7499.jpg"
  },
  {
    name: "Water Pump Repairs",
    description: "Water Pump Repairs.",
    price: "$39.99",
    image: "https://e7.pngegg.com/pngimages/137/277/png-clipart-submersible-pump-product-water-solar-powered-pump-water-compressor-hydraulic-pump.png"
  },
  {
    name: "Water Pump Repairs",
    description: "Water Pump Repairs.",
    price: "$39.99",
    image: "https://thumbs.dreamstime.com/z/water-pump-submersible-pump-set-submersible-borehole-supplying-clean-water-great-depth-house-motor-water-pump-submersible-pump-set-242661550.jpg"
  },
  {
    name: "Water Pump Repairs",
    description: "Water Pump Repairs.",
    price: "$39.99",
    image: "https://e7.pngegg.com/pngimages/343/164/png-clipart-submersible-pump-solar-powered-pump-water-pumping-irrigation-water-submersible-pump-borstelloze-elektromotor.png"
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
