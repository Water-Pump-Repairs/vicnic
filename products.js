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

const container = document.getElementById('products-container');

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img class="product-image" src="${product.image}" alt="${product.name}">
    <div class="product-info">
      <h2 class="product-name">${product.name}</h2>
      <p class="product-description">${product.description}</p>
      <span class="product-price">${product.price}</span>
    </div>
  `;
  container.appendChild(card);
});
// send-to-whatsapp.js
// Call this script from your contact form page (e.g. <script src="send-to-whatsapp.js"></script>)
// Make sure your form has id="contactForm" and fields with ids: name, email, message

document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    var whatsappNumber = '263774816199'; // Replace with your WhatsApp number (no + or spaces)
    var text =
      'Name: ' + encodeURIComponent(name) +
      '%0AEmail: ' + encodeURIComponent(email) +
      '%0AMessage: ' + encodeURIComponent(message);

    var url = 'https://wa.me/' + whatsappNumber + '?text=' + text;
    window.open(url, '_blank');
  });
});
