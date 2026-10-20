/* =========================================================
   TOOLSHARE - SCRIPT.JS
   Includes:
   - Events
   - Tools
   - Camping
   - Gadgets & Cameras
   - Accessories included inside each gadget card
   - Search
   - Product details
   - Quantity
   - Booking schedule
   - Pickup / Delivery
   - ID verification
   - Terms & Conditions
   - Booking summary
   - Confirmation
   - My Rentals
   - Messages
   - Profile
   - Notifications
========================================================= */


/* =========================================================
   DATA
========================================================= */

const equipment = [

  /* ===================== EVENTS ===================== */

  {
    id: "event-1",
    category: "events",
    name: "Plastic Tables",
    icon: "🪑",
    price: 150,
    unit: "per day",
    description: "Durable plastic tables suitable for birthdays, parties, weddings, and other events.",
    location: "Quezon City",
    stock: 20
  },

  {
    id: "event-2",
    category: "events",
    name: "Plastic Chairs",
    icon: "💺",
    price: 50,
    unit: "per day",
    description: "Clean and comfortable plastic chairs for parties and gatherings.",
    location: "Quezon City",
    stock: 100
  },

  {
    id: "event-3",
    category: "events",
    name: "Party Tent",
    icon: "⛺",
    price: 1200,
    unit: "per day",
    description: "Large event tent suitable for outdoor parties and celebrations.",
    location: "Quezon City",
    stock: 5
  },

  {
    id: "event-4",
    category: "events",
    name: "Sound System",
    icon: "🔊",
    price: 1800,
    unit: "per day",
    description: "Complete sound system for parties, birthdays, and small events.",
    location: "Quezon City",
    stock: 4
  },

  {
    id: "event-5",
    category: "events",
    name: "Projector",
    icon: "📽️",
    price: 1000,
    unit: "per day",
    description: "Projector for presentations, movie nights, and special events.",
    location: "Quezon City",
    stock: 5
  },

  {
    id: "event-6",
    category: "events",
    name: "Karaoke Machine",
    icon: "🎤",
    price: 1200,
    unit: "per day",
    description: "Karaoke machine with microphones and speakers.",
    location: "Quezon City",
    stock: 5
  },

  {
    id: "event-7",
    category: "events",
    name: "Party Lights",
    icon: "💡",
    price: 500,
    unit: "per day",
    description: "Decorative party lights for birthdays and celebrations.",
    location: "Quezon City",
    stock: 15
  },


  /* ===================== TOOLS ===================== */

  {
    id: "tool-1",
    category: "tools",
    name: "Cordless Drill & Impact Driver Set",
    icon: "🔧",
    price: 250,
    unit: "per day",
    description: "Cordless drill and impact driver set for drilling, construction, and home projects.",
    location: "Quezon City",
    stock: 8
  },

  {
    id: "tool-2",
    category: "tools",
    name: "Circular Saw",
    icon: "🪚",
    price: 300,
    unit: "per day",
    description: "Powerful circular saw for cutting wood and construction materials.",
    location: "Quezon City",
    stock: 5
  },

  {
    id: "tool-3",
    category: "tools",
    name: "Jigsaw",
    icon: "🛠️",
    price: 250,
    unit: "per day",
    description: "Electric jigsaw for detailed and curved cutting.",
    location: "Quezon City",
    stock: 5
  },

  {
    id: "tool-4",
    category: "tools",
    name: "Angle Grinder",
    icon: "⚙️",
    price: 300,
    unit: "per day",
    description: "Angle grinder for cutting, polishing, and grinding.",
    location: "Quezon City",
    stock: 5
  },

  {
    id: "tool-5",
    category: "tools",
    name: "Orbital Sander",
    icon: "🔨",
    price: 280,
    unit: "per day",
    description: "Orbital sander for smooth wood and surface finishing.",
    location: "Quezon City",
    stock: 5
  },

  {
    id: "tool-6",
    category: "tools",
    name: "Electric Planer",
    icon: "🪵",
    price: 300,
    unit: "per day",
    description: "Electric planer for smoothing and leveling wooden surfaces.",
    location: "Quezon City",
    stock: 4
  },

  {
    id: "tool-7",
    category: "tools",
    name: "Brad Nailer / Nail Gun",
    icon: "🔩",
    price: 350,
    unit: "per day",
    description: "Electric nail gun suitable for furniture and woodworking.",
    location: "Quezon City",
    stock: 4
  },

  {
    id: "tool-8",
    category: "tools",
    name: "Heat Gun",
    icon: "🔥",
    price: 200,
    unit: "per day",
    description: "Heat gun for paint removal, shrink wrapping, and DIY projects.",
    location: "Quezon City",
    stock: 5
  },

  {
    id: "tool-9",
    category: "tools",
    name: "Laser Level",
    icon: "📐",
    price: 250,
    unit: "per day",
    description: "Laser level for accurate construction and installation work.",
    location: "Quezon City",
    stock: 6
  },

  {
    id: "tool-10",
    category: "tools",
    name: "Pressure Washer",
    icon: "💦",
    price: 450,
    unit: "per day",
    description: "High-pressure washer for cleaning vehicles, floors, and outdoor areas.",
    location: "Quezon City",
    stock: 4
  },

  {
    id: "tool-11",
    category: "tools",
    name: "Wet/Dry Shop Vacuum",
    icon: "🧹",
    price: 400,
    unit: "per day",
    description: "Vacuum cleaner suitable for both wet and dry cleaning.",
    location: "Quezon City",
    stock: 4
  },

  {
    id: "tool-12",
    category: "tools",
    name: "Paint Sprayer",
    icon: "🎨",
    price: 350,
    unit: "per day",
    description: "Electric paint sprayer for faster painting projects.",
    location: "Quezon City",
    stock: 4
  },

  {
    id: "tool-13",
    category: "tools",
    name: "Grass Cutter",
    icon: "🌱",
    price: 400,
    unit: "per day",
    description: "Grass cutter and string trimmer for garden maintenance.",
    location: "Quezon City",
    stock: 4
  },

  {
    id: "tool-14",
    category: "tools",
    name: "Mini Cordless Chainsaw",
    icon: "🪓",
    price: 350,
    unit: "per day",
    description: "Compact cordless chainsaw for light cutting tasks.",
    location: "Quezon City",
    stock: 4
  },


  /* ===================== CAMPING ===================== */

  {
    id: "camp-1",
    category: "camping",
    name: "Camping Tent",
    icon: "⛺",
    price: 400,
    unit: "per day",
    description: "Comfortable camping tent suitable for outdoor adventures.",
    location: "Quezon City",
    stock: 10
  },

  {
    id: "camp-2",
    category: "camping",
    name: "Camping Chair",
    icon: "🪑",
    price: 150,
    unit: "per day",
    description: "Foldable camping chair for outdoor activities.",
    location: "Quezon City",
    stock: 15
  },

  {
    id: "camp-3",
    category: "camping",
    name: "Sleeping Bag",
    icon: "🛏️",
    price: 200,
    unit: "per day",
    description: "Warm and comfortable sleeping bag for camping.",
    location: "Quezon City",
    stock: 10
  },

  {
    id: "camp-4",
    category: "camping",
    name: "Portable Stove",
    icon: "🔥",
    price: 250,
    unit: "per day",
    description: "Portable cooking stove for camping and outdoor trips.",
    location: "Quezon City",
    stock: 8
  },

  {
    id: "camp-5",
    category: "camping",
    name: "Portable Power Station",
    icon: "🔋",
    price: 500,
    unit: "per day",
    description: "Portable power station for charging phones and small devices.",
    location: "Quezon City",
    stock: 5
  },


  /* ===================== GADGETS ===================== */

  {
    id: "gadget-1",
    category: "gadgets",
    name: "iPhone 15 Pro Rental Kit",
    icon: "📱",
    price: 1200,
    unit: "per day",
    description: "iPhone 15 Pro rental package for content creation, events, travel, and personal use.",
    location: "Quezon City",
    stock: 3,
    accessories: [
      "Original Charger",
      "Charging Cable",
      "Protective Case",
      "Power Bank"
    ]
  },

  {
    id: "gadget-2",
    category: "gadgets",
    name: "iPhone 16 Pro Rental Kit",
    icon: "📱",
    price: 1500,
    unit: "per day",
    description: "iPhone 16 Pro rental package ideal for photography, video creation, events, and travel.",
    location: "Quezon City",
    stock: 3,
    accessories: [
      "Original Charger",
      "Charging Cable",
      "Protective Case",
      "Power Bank"
    ]
  },

  {
    id: "gadget-3",
    category: "gadgets",
    name: "iPhone 16 Pro Max Rental Kit",
    icon: "📱",
    price: 1800,
    unit: "per day",
    description: "Premium iPhone 16 Pro Max package for professional-looking content and special events.",
    location: "Quezon City",
    stock: 2,
    accessories: [
      "Original Charger",
      "Charging Cable",
      "Protective Case",
      "Power Bank"
    ]
  },

  {
    id: "gadget-4",
    category: "gadgets",
    name: "DJI Osmo Pocket 3 Kit",
    icon: "📷",
    price: 1000,
    unit: "per day",
    description: "Compact DJI camera package for vlogging, travel, events, and social media content.",
    location: "Quezon City",
    stock: 3,
    accessories: [
      "Charging Cable",
      "Protective Case",
      "Power Bank",
      "Mini Tripod",
      "Camera Strap"
    ]
  },

  {
    id: "gadget-5",
    category: "gadgets",
    name: "DJI Osmo Action 5 Pro Kit",
    icon: "📹",
    price: 900,
    unit: "per day",
    description: "Action camera package suitable for travel, sports, outdoor activities, and content creation.",
    location: "Quezon City",
    stock: 3,
    accessories: [
      "Charging Cable",
      "Protective Case",
      "Power Bank",
      "Mount Set",
      "Camera Strap"
    ]
  },

  {
    id: "gadget-6",
    category: "gadgets",
    name: "Canon EOS R50 Kit",
    icon: "📸",
    price: 1300,
    unit: "per day",
    description: "Canon mirrorless camera package for photography, vlogging, events, and content creation.",
    location: "Quezon City",
    stock: 2,
    accessories: [
      "Battery Charger",
      "Extra Battery",
      "Camera Strap",
      "Memory Card",
      "Camera Bag"
    ]
  },

  {
    id: "gadget-7",
    category: "gadgets",
    name: "Canon EOS R10 Kit",
    icon: "📷",
    price: 1500,
    unit: "per day",
    description: "Canon EOS R10 mirrorless camera package for advanced photography and video creation.",
    location: "Quezon City",
    stock: 2,
    accessories: [
      "Battery Charger",
      "Extra Battery",
      "Camera Strap",
      "Memory Card",
      "Camera Bag"
    ]
  },

  {
    id: "gadget-8",
    category: "gadgets",
    name: "Sony ZV-E10 Kit",
    icon: "🎥",
    price: 1200,
    unit: "per day",
    description: "Sony vlogging camera package designed for creators, livestreaming, and video production.",
    location: "Quezon City",
    stock: 2,
    accessories: [
      "Battery Charger",
      "Extra Battery",
      "Memory Card",
      "Mini Tripod",
      "Camera Bag"
    ]
  },

  {
    id: "gadget-9",
    category: "gadgets",
    name: "GoPro Action Camera Kit",
    icon: "🏄",
    price: 800,
    unit: "per day",
    description: "GoPro action camera package for travel, sports, outdoor activities, and adventure content.",
    location: "Quezon City",
    stock: 3,
    accessories: [
      "Charging Cable",
      "Protective Case",
      "Mount Set",
      "Extra Battery",
      "Camera Strap"
    ]
  },

  {
    id: "gadget-10",
    category: "gadgets",
    name: "DJI Mini Drone Kit",
    icon: "🚁",
    price: 1800,
    unit: "per day",
    description: "Compact DJI drone package for aerial photography and outdoor content creation.",
    location: "Quezon City",
    stock: 2,
    accessories: [
      "Remote Controller",
      "Charging Cable",
      "Extra Battery",
      "Propeller Set",
      "Carrying Case"
    ]
  }

];


/* =========================================================
   STATE
========================================================= */

let currentCategory = "events";
let currentProduct = null;

let bookingData = {
  product: null,
  quantity: 1,
  startDate: "",
  endDate: "",
  startTime: "",
  returnTime: "",
  fullName: "",
  contactNumber: "",
  address: "",
  idType: "",
  idNumber: "",
  idFile: "",
  fulfillment: "Pickup"
};


let rentals =
  JSON.parse(
    localStorage.getItem("toolshareRentals")
  ) || [];


let notifications =
  JSON.parse(
    localStorage.getItem("toolshareNotifications")
  ) || [];


let messages =
  JSON.parse(
    localStorage.getItem("toolshareMessages")
  ) || [];


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    addGadgetCategory();

    renderEquipment("events");

    setupSearch();

    setupForms();

    renderRentals();

    renderMessages();

    renderProfile();

    renderNotifications();

    updateNotificationBadge();

    setMinimumDates();

  }
);


/* =========================================================
   ADD GADGET CATEGORY
========================================================= */

function addGadgetCategory() {

  const categoryGrid =
    document.querySelector(".category-grid");

  if (!categoryGrid) return;

  if (
    document.querySelector(".gadgets-card")
  ) {
    return;
  }

  const gadgetsCard =
    document.createElement("button");

  gadgetsCard.className =
    "category-card gadgets-card";

  gadgetsCard.setAttribute(
    "onclick",
    "openCategory('gadgets')"
  );

  gadgetsCard.innerHTML = `
    <div class="category-icon">📱</div>

    <h2>GADGETS</h2>

    <p>Phones, cameras & creator gear</p>
  `;

  categoryGrid.appendChild(gadgetsCard);

}


/* =========================================================
   CATEGORY
========================================================= */

function openCategory(category) {

  currentCategory = category;

  updateCategoryTitle();

  const search =
    document.getElementById("categorySearch");

  if (search) {
    search.value = "";
  }

  renderEquipment(category);

  showScreen("categoryScreen");

}


/* =========================================================
   CATEGORY TITLE
========================================================= */

function updateCategoryTitle() {

  const title =
    document.getElementById("categoryTitle");

  const subtitle =
    document.getElementById("categorySubtitle");

  if (!title || !subtitle) return;

  const names = {
    events: "Events",
    tools: "Tools",
    camping: "Camping",
    gadgets: "Gadgets"
  };

  const descriptions = {
    events: "Party & event equipment",
    tools: "Tools & construction equipment",
    camping: "Outdoor & camping gear",
    gadgets: "Phones, cameras & creator gear"
  };

  title.textContent =
    names[currentCategory] || "Equipment";

  subtitle.textContent =
    descriptions[currentCategory] ||
    "Available equipment";

}


/* =========================================================
   RENDER EQUIPMENT
========================================================= */

function renderEquipment(
  category,
  searchTerm = ""
) {

  const container =
    document.getElementById("equipmentList");

  if (!container) return;

  let items =
    equipment.filter(
      item => item.category === category
    );


  const keyword =
    String(searchTerm || "")
      .trim()
      .toLowerCase();


  if (keyword) {

    items =
      items.filter(item =>
        item.name
          .toLowerCase()
          .includes(keyword) ||

        item.description
          .toLowerCase()
          .includes(keyword) ||

        item.location
          .toLowerCase()
          .includes(keyword)
      );

  }


  if (!items.length) {

    container.innerHTML = `
      <div class="no-results">
        <div style="font-size:42px;">🔍</div>
        <h3>No equipment found</h3>
        <p>Try another search.</p>
      </div>
    `;

    return;

  }


  container.innerHTML =
    items.map(item => {

      const hasAccessories =
        Array.isArray(item.accessories) &&
        item.accessories.length > 0;


      const accessoriesHTML =
        hasAccessories
          ? `
            <div class="accessories-box">

              <div class="accessories-title">
                INCLUDED ACCESSORIES
              </div>

              <div class="accessories-list">

                ${item.accessories
                  .map(
                    accessory =>
                      `<span class="accessory-chip">${accessory}</span>`
                  )
                  .join("")}

              </div>

            </div>
          `
          : "";


      return `
        <div
          class="equipment-card
          ${hasAccessories ? "has-accessories" : ""}"
        >

          <div class="equipment-top">

            <div class="equipment-icon">
              ${item.icon}
            </div>

            <div class="equipment-info">

              <h3>
                ${item.name}
              </h3>

              <div class="card-meta">

                <span>
                  📦 ${item.stock} available
                </span>

                <span>
                  ${item.category}
                </span>

              </div>

              <div class="equipment-location">
                📍 ${item.location}
              </div>

              <div class="equipment-price">
                ₱${formatMoney(item.price)}
                <small>/ day</small>
              </div>

            </div>

            <button
              class="view-btn"
              onclick="openDetails('${item.id}')"
            >
              View
            </button>

          </div>

          ${accessoriesHTML}

        </div>
      `;

    }).join("");

}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

  const homeSearch =
    document.getElementById("homeSearch");

  const categorySearch =
    document.getElementById("categorySearch");


  if (homeSearch) {

    homeSearch.addEventListener(
      "input",
      function () {

        const value =
          this.value.trim();

        if (!value) {
          return;
        }

        searchEquipment();

      }
    );

  }


  if (categorySearch) {

    categorySearch.addEventListener(
      "input",
      function () {

        filterEquipment();

      }
    );

  }

}


/* =========================================================
   DETAILS
========================================================= */

function openDetails(productId) {

  const product =
    equipment.find(
      item => item.id === productId
    );


  if (!product) return;


  currentProduct = product;


  const detailIcon =
    document.getElementById("detailIcon");

  const detailName =
    document.getElementById("detailName");

  const detailDescription =
    document.getElementById("detailDescription");

  const detailPrice =
    document.getElementById("detailPrice");


  if (detailIcon)
    detailIcon.textContent = product.icon;

  if (detailName)
    detailName.textContent = product.name;

  if (detailDescription)
    detailDescription.textContent =
      product.description;

  if (detailPrice)
    detailPrice.textContent =
      `₱${formatMoney(product.price)}`;


  renderDetailAccessories(product);


  showScreen("detailsScreen");

}


/* =========================================================
   DETAIL ACCESSORIES
========================================================= */

function renderDetailAccessories(product) {

  const existing =
    document.getElementById(
      "dynamicDetailAccessories"
    );


  if (existing) {
    existing.remove();
  }


  if (
    !product ||
    !Array.isArray(product.accessories) ||
    !product.accessories.length
  ) {
    return;
  }


  const detailContent =
    document.querySelector(
      ".details-content"
    );


  if (!detailContent) return;


  const box =
    document.createElement("div");

  box.id =
    "dynamicDetailAccessories";

  box.className =
    "detail-accessories";


  box.innerHTML = `
    <h3>Included Accessories</h3>

    <ul>

      ${product.accessories
        .map(
          accessory =>
            `<li>${accessory}</li>`
        )
        .join("")}

    </ul>
  `;


  const infoCard =
    detailContent.querySelector(
      ".info-card"
    );


  if (infoCard) {
    infoCard.after(box);
  } else {
    detailContent.prepend(box);
  }

}


/* =========================================================
   OPEN BOOKING / RENTAL DETAILS
========================================================= */

function openBooking() {

  if (!currentProduct) {

    alert(
      "Please select equipment first."
    );

    return;

  }


  bookingData.product =
    currentProduct;


  bookingData.quantity = 1;


  const bookingIcon =
    document.getElementById("bookingIcon");

  const bookingName =
    document.getElementById("bookingName");

  const bookingPrice =
    document.getElementById("bookingPrice");

  const quantity =
    document.getElementById("quantity");


  if (bookingIcon)
    bookingIcon.textContent =
      currentProduct.icon;

  if (bookingName)
    bookingName.textContent =
      currentProduct.name;

  if (bookingPrice)
    bookingPrice.textContent =
      `₱${formatMoney(currentProduct.price)} / day`;

  if (quantity)
    quantity.textContent = "1";


  showScreen("bookingScreen");

}


/* =========================================================
   QUANTITY
========================================================= */

function changeQuantity(delta) {

  if (!currentProduct) return;


  let quantity =
    parseInt(
      document.getElementById("quantity")
        ?.textContent || "1",
      10
    );


  quantity += delta;


  if (quantity < 1) {
    quantity = 1;
  }


  if (
    currentProduct.stock &&
    quantity > currentProduct.stock
  ) {

    quantity =
      currentProduct.stock;

  }


  const quantityElement =
    document.getElementById("quantity");


  if (quantityElement) {

    quantityElement.textContent =
      quantity;

  }

}


function increaseQuantity() {
  changeQuantity(1);
}


function decreaseQuantity() {
  changeQuantity(-1);
}


/* =========================================================
   FORM SETUP
========================================================= */

function setupForms() {

  const contact =
    document.getElementById(
      "contactNumber"
    );


  if (contact) {

    contact.addEventListener(
      "input",
      function () {

        sanitizeContactNumber(this);

      }
    );

  }


  const fulfillmentInputs =
    document.querySelectorAll(
      'input[name="fulfillment"]'
    );


  fulfillmentInputs.forEach(
    input => {

      input.addEventListener(
        "change",
        updateFulfillmentHint
      );

    }
  );


  updateFulfillmentHint();

}


/* =========================================================
   FULFILLMENT
========================================================= */

function getSelectedFulfillment() {

  const selected =
    document.querySelector(
      'input[name="fulfillment"]:checked'
    );


  return selected
    ? selected.value
    : "Pickup";

}


function updateFulfillmentHint() {

  const hint =
    document.getElementById(
      "scheduleHint"
    );


  if (!hint) return;


  const fulfillment =
    getSelectedFulfillment();


  if (fulfillment === "Delivery") {

    hint.textContent =
      "🚚 Your equipment will be delivered to the address you provide at the selected start time.";

  } else {

    hint.textContent =
      "📦 Your equipment will be ready for pickup at the selected start time.";

  }

}


/* =========================================================
   VALIDATE RENTAL DETAILS
========================================================= */

function validateBooking() {

  if (!currentProduct) {

    alert(
      "Please select equipment first."
    );

    return false;

  }


  const quantity =
    parseInt(
      document.getElementById("quantity")
        ?.textContent || "1",
      10
    );


  const startDate =
    document.getElementById(
      "startDate"
    )?.value || "";


  const endDate =
    document.getElementById(
      "endDate"
    )?.value || "";


  const startTime =
    document.getElementById(
      "startTime"
    )?.value || "";


  const returnTime =
    document.getElementById(
      "returnTime"
    )?.value || "";


  const fullName =
    document.getElementById(
      "fullName"
    )?.value.trim() || "";


  const contactNumber =
    document.getElementById(
      "contactNumber"
    )?.value.trim() || "";


  const address =
    document.getElementById(
      "address"
    )?.value.trim() || "";


  const idType =
    document.getElementById(
      "idType"
    )?.value || "";


  const idNumber =
    document.getElementById(
      "idNumber"
    )?.value.trim() || "";


  const idFile =
    document.getElementById(
      "idFile"
    );


  const fulfillment =
    getSelectedFulfillment();


  if (!quantity || quantity < 1) {

    alert(
      "Please select a valid quantity."
    );

    return false;

  }


  if (
    currentProduct.stock &&
    quantity > currentProduct.stock
  ) {

    alert(
      `Only ${currentProduct.stock} unit(s) are available.`
    );

    return false;

  }


  if (!startDate) {

    alert(
      "Please select a start date."
    );

    return false;

  }


  if (!endDate) {

    alert(
      "Please select a return date."
    );

    return false;

  }


  if (endDate < startDate) {

    alert(
      "Return date cannot be earlier than the start date."
    );

    return false;

  }


  if (!startTime) {

    alert(
      "Please select a rental start time."
    );

    return false;

  }


  if (!returnTime) {

    alert(
      "Please select a return time."
    );

    return false;

  }


  if (!fullName) {

    alert(
      "Please enter your full name."
    );

    return false;

  }


  if (!/^09\d{9}$/.test(contactNumber)) {

    alert(
      "Please enter a valid 11-digit Philippine contact number starting with 09."
    );

    return false;

  }


  if (!address) {

    alert(
      "Please enter your complete address."
    );

    return false;

  }


  if (!idType) {

    alert(
      "Please select your valid ID type."
    );

    return false;

  }


  if (!idNumber) {

    alert(
      "Please enter your ID number."
    );

    return false;

  }


  if (
    !idFile ||
    !idFile.files ||
    !idFile.files.length
  ) {

    alert(
      "Please upload a valid ID."
    );

    return false;

  }


  bookingData = {

    product: currentProduct,

    quantity,

    startDate,

    endDate,

    startTime,

    returnTime,

    fullName,

    contactNumber,

    address,

    idType,

    idNumber,

    idFile:
      idFile.files[0]
        ? idFile.files[0].name
        : "",

    fulfillment

  };


  const verificationStatus =
    document.getElementById(
      "verificationStatus"
    );


  if (verificationStatus) {

    verificationStatus.textContent =
      "✓ ID information submitted for verification.";

    verificationStatus.style.background =
      "#e7f8ef";

    verificationStatus.style.color =
      "#24794f";

  }


  return true;

}


/* =========================================================
   OPEN TERMS
========================================================= */

function openTerms() {

  if (!validateBooking()) {
    return;
  }


  showScreen("termsScreen");

}


/* =========================================================
   ACCEPT TERMS
========================================================= */

function acceptTerms() {

  const checkbox =
    document.getElementById(
      "agreeTerms"
    );


  if (!checkbox || !checkbox.checked) {

    alert(
      "Please read and agree to the Terms & Conditions before continuing."
    );

    return false;

  }


  showBookingSummary();

  return true;

}


/* =========================================================
   SHOW BOOKING SUMMARY
========================================================= */

function showBookingSummary() {

  const checkbox =
    document.getElementById(
      "agreeTerms"
    );


  if (
    !checkbox ||
    !checkbox.checked
  ) {

    alert(
      "Please read and agree to the Terms & Conditions before reviewing your booking."
    );

    return;

  }


  if (!bookingData.product) {

    alert(
      "Rental information is missing. Please go back and complete the rental details."
    );

    return;

  }


  const product =
    bookingData.product;


  const quantity =
    bookingData.quantity || 1;


  const days =
    calculateRentalDays(
      bookingData.startDate,
      bookingData.endDate
    );


  const subtotal =
    product.price *
    quantity *
    days;


  const summaryIcon =
    document.getElementById(
      "summaryIcon"
    );

  const summaryName =
    document.getElementById(
      "summaryName"
    );

  const summaryQuantity =
    document.getElementById(
      "summaryQuantity"
    );

  const summaryStart =
    document.getElementById(
      "summaryStart"
    );

  const summaryEnd =
    document.getElementById(
      "summaryEnd"
    );

  const summaryDays =
    document.getElementById(
      "summaryDays"
    );

  const summarySchedule =
    document.getElementById(
      "summarySchedule"
    );

  const summaryFulfillment =
    document.getElementById(
      "summaryFulfillment"
    );

  const summaryPrice =
    document.getElementById(
      "summaryPrice"
    );

  const summarySubtotal =
    document.getElementById(
      "summarySubtotal"
    );

  const summaryTotal =
    document.getElementById(
      "summaryTotal"
    );


  if (summaryIcon)
    summaryIcon.textContent =
      product.icon;

  if (summaryName)
    summaryName.textContent =
      product.name;

  if (summaryQuantity)
    summaryQuantity.textContent =
      quantity;

  if (summaryStart)
    summaryStart.textContent =
      formatDate(
        bookingData.startDate
      );

  if (summaryEnd)
    summaryEnd.textContent =
      formatDate(
        bookingData.endDate
      );

  if (summaryDays)
    summaryDays.textContent =
      `${days} day${days > 1 ? "s" : ""}`;

  if (summarySchedule)
    summarySchedule.textContent =
      `${bookingData.startTime} – ${bookingData.returnTime}`;

  if (summaryFulfillment)
    summaryFulfillment.textContent =
      bookingData.fulfillment;

  if (summaryPrice)
    summaryPrice.textContent =
      `₱${formatMoney(product.price)}`;

  if (summarySubtotal)
    summarySubtotal.textContent =
      `₱${formatMoney(subtotal)}`;

  if (summaryTotal)
    summaryTotal.textContent =
      `₱${formatMoney(subtotal)}`;


  const summaryFullName =
    document.getElementById(
      "summaryFullName"
    );

  const summaryContact =
    document.getElementById(
      "summaryContact"
    );

  const summaryAddress =
    document.getElementById(
      "summaryAddress"
    );

  const summaryVerification =
    document.getElementById(
      "summaryVerification"
    );


  if (summaryFullName)
    summaryFullName.textContent =
      `👤 ${bookingData.fullName}`;

  if (summaryContact)
    summaryContact.textContent =
      `📱 ${bookingData.contactNumber}`;

  if (summaryAddress)
    summaryAddress.textContent =
      `📍 ${bookingData.address}`;

  if (summaryVerification)
    summaryVerification.textContent =
      `🛡️ ${bookingData.idType} submitted`;


  showScreen("summaryScreen");

}


/* =========================================================
   CONFIRM BOOKING
========================================================= */

function confirmBooking() {

  if (!bookingData.product) {

    alert(
      "No rental information found."
    );

    return;

  }


  const product =
    bookingData.product;


  const days =
    calculateRentalDays(
      bookingData.startDate,
      bookingData.endDate
    );


  const total =
    product.price *
    bookingData.quantity *
    days;


  const rental = {

    id:
      Date.now(),

    productId:
      product.id,

    productName:
      product.name,

    productIcon:
      product.icon,

    category:
      product.category,

    price:
      product.price,

    quantity:
      bookingData.quantity,

    startDate:
      bookingData.startDate,

    endDate:
      bookingData.endDate,

    startTime:
      bookingData.startTime,

    returnTime:
      bookingData.returnTime,

    days,

    fulfillment:
      bookingData.fulfillment,

    fullName:
      bookingData.fullName,

    contactNumber:
      bookingData.contactNumber,

    address:
      bookingData.address,

    idType:
      bookingData.idType,

    idNumber:
      bookingData.idNumber,

    idFile:
      bookingData.idFile,

    total,

    status:
      "Pending Verification",

    createdAt:
      new Date().toLocaleString(
        "en-PH"
      )

  };


  rentals.unshift(rental);


  localStorage.setItem(
    "toolshareRentals",
    JSON.stringify(rentals)
  );


  const notification = {

    id:
      Date.now(),

    title:
      "Rental Request Submitted",

    message:
      `${product.name} rental request has been submitted for verification.`,

    time:
      new Date().toLocaleString(
        "en-PH"
      ),

    unread:
      true

  };


  notifications.unshift(
    notification
  );


  localStorage.setItem(
    "toolshareNotifications",
    JSON.stringify(
      notifications
    )
  );


  const confirmationName =
    document.getElementById(
      "confirmationName"
    );

  const confirmationQuantity =
    document.getElementById(
      "confirmationQuantity"
    );

  const confirmationDates =
    document.getElementById(
      "confirmationDates"
    );

  const confirmationSchedule =
    document.getElementById(
      "confirmationSchedule"
    );

  const confirmationFulfillment =
    document.getElementById(
      "confirmationFulfillment"
    );

  const confirmationTotal =
    document.getElementById(
      "confirmationTotal"
    );


  if (confirmationName)
    confirmationName.textContent =
      product.name;

  if (confirmationQuantity)
    confirmationQuantity.textContent =
      `Quantity: ${bookingData.quantity}`;

  if (confirmationDates)
    confirmationDates.textContent =
      `${formatDate(bookingData.startDate)} → ${formatDate(bookingData.endDate)} (${days} day${days > 1 ? "s" : ""})`;

  if (confirmationSchedule)
    confirmationSchedule.textContent =
      `${bookingData.startTime} – ${bookingData.returnTime}`;

  if (confirmationFulfillment)
    confirmationFulfillment.textContent =
      `${bookingData.fulfillment}`;

  if (confirmationTotal)
    confirmationTotal.textContent =
      `Estimated Total: ₱${formatMoney(total)}`;


  updateNotificationBadge();

  showScreen(
    "confirmationScreen"
  );


  bookingData = {

    product: product,

    quantity: 1,

    startDate: "",

    endDate: "",

    startTime: "",

    returnTime: "",

    fullName: "",

    contactNumber: "",

    address: "",

    idType: "",

    idNumber: "",

    idFile: "",

    fulfillment: "Pickup"

  };

}


/* =========================================================
   MY RENTALS
========================================================= */

function showRentals() {

  renderRentals();

  showScreen(
    "rentalsScreen"
  );

}


function renderRentals() {

  const container =
    document.getElementById(
      "rentalHistory"
    );


  if (!container) return;


  if (!rentals.length) {

    container.innerHTML = `
      <div class="empty-rental">

        <div>📦</div>

        <h3>
          No rentals yet
        </h3>

        <p>
          Your confirmed rentals will appear here.
        </p>

      </div>
    `;

    return;

  }


  container.innerHTML =
    rentals.map(
      rental => {

        return `
          <div class="rental-card">

            <div class="rental-card-top">

              <div class="rental-product-icon">
                ${rental.productIcon}
              </div>

              <div class="rental-product-info">

                <span class="status-pill pending">
                  ${rental.status}
                </span>

                <h3>
                  ${rental.productName}
                </h3>

                <p>
                  ${rental.category}
                </p>

              </div>

            </div>


            <div class="rental-grid">

              <div>

                <small>
                  Quantity
                </small>

                <strong>
                  ${rental.quantity}
                </strong>

              </div>


              <div>

                <small>
                  Rental Days
                </small>

                <strong>
                  ${rental.days}
                </strong>

              </div>


              <div>

                <small>
                  Start
                </small>

                <strong>
                  ${formatDate(rental.startDate)}
                  <br>
                  ${rental.startTime}
                </strong>

              </div>


              <div>

                <small>
                  Return
                </small>

                <strong>
                  ${formatDate(rental.endDate)}
                  <br>
                  ${rental.returnTime}
                </strong>

              </div>


              <div>

                <small>
                  Method
                </small>

                <strong>
                  ${rental.fulfillment}
                </strong>

              </div>


              <div>

                <small>
                  Renter
                </small>

                <strong>
                  ${rental.fullName}
                </strong>

              </div>

            </div>


            <div class="rental-card-bottom">

              <span>
                ${rental.createdAt}
              </span>

              <strong>
                ₱${formatMoney(rental.total)}
              </strong>

            </div>

          </div>
        `;

      }
    ).join("");

}


/* =========================================================
   MESSAGES
========================================================= */

function showMessage() {

  renderMessages();

  showScreen(
    "messagesScreen"
  );

}


function renderMessages() {

  const container =
    document.getElementById(
      "messageList"
    );


  if (!container) return;


  if (!messages.length) {

    container.innerHTML = `
      <div class="empty-state">

        <div>
          💬
        </div>

        <h3>
          No messages yet
        </h3>

        <p>
          Start a conversation with ToolShare support.
        </p>

      </div>
    `;

    return;

  }


  container.innerHTML =
    messages.map(
      message => {

        return `
          <div
            class="message-row
            ${message.mine ? "mine" : ""}"
          >

            <div class="message-bubble">

              ${message.text}

              <small>
                ${message.time}
              </small>

            </div>

          </div>
        `;

      }
    ).join("");


  container.scrollTop =
    container.scrollHeight;

}


function sendMessage() {

  const input =
    document.getElementById(
      "messageInput"
    );


  if (!input) return;


  const text =
    input.value.trim();


  if (!text) return;


  messages.push({

    id:
      Date.now(),

    text,

    mine:
      true,

    time:
      new Date().toLocaleTimeString(
        "en-PH",
        {
          hour: "numeric",
          minute: "2-digit"
        }
      )

  });


  localStorage.setItem(
    "toolshareMessages",
    JSON.stringify(messages)
  );


  input.value = "";

  renderMessages();


  setTimeout(
    function () {

      messages.push({

        id:
          Date.now(),

        text:
          "Thank you for contacting ToolShare. Our support team will get back to you shortly.",

        mine:
          false,

        time:
          new Date().toLocaleTimeString(
            "en-PH",
            {
              hour: "numeric",
              minute: "2-digit"
            }
          )

      });


      localStorage.setItem(
        "toolshareMessages",
        JSON.stringify(messages)
      );


      renderMessages();

    },
    500
  );

}


/* =========================================================
   PROFILE
========================================================= */

function showProfile() {

  renderProfile();

  showScreen(
    "profileScreen"
  );

}


function renderProfile() {

  const name =
    document.getElementById(
      "profileName"
    );

  const email =
    document.getElementById(
      "profileEmail"
    );


  const savedName =
    localStorage.getItem(
      "toolshareProfileName"
    );


  const savedEmail =
    localStorage.getItem(
      "toolshareProfileEmail"
    );


  if (name) {

    name.value =
      savedName || "";

  }


  if (email) {

    email.value =
      savedEmail || "";

  }

}


function saveProfile() {

  const name =
    document.getElementById(
      "profileName"
    )?.value.trim() || "";


  const email =
    document.getElementById(
      "profileEmail"
    )?.value.trim() || "";


  localStorage.setItem(
    "toolshareProfileName",
    name
  );


  localStorage.setItem(
    "toolshareProfileEmail",
    email
  );


  alert(
    "Profile saved successfully."
  );

}


/* =========================================================
   NOTIFICATIONS
========================================================= */

function showNotifications() {

  renderNotifications();

  showScreen(
    "notificationsScreen"
  );

}


function renderNotifications() {

  const container =
    document.getElementById(
      "notificationList"
    );


  if (!container) return;


  if (!notifications.length) {

    container.innerHTML = `
      <div class="empty-state">

        <div style="font-size:42px;">
          🔔
        </div>

        <h3>
          No notifications
        </h3>

        <p>
          You're all caught up.
        </p>

      </div>
    `;

    return;

  }


  container.innerHTML =
    notifications.map(
      notification => {

        return `
          <div
            class="notification-item
            ${notification.unread ? "unread" : ""}"
            onclick="readNotification(${notification.id})"
          >

            <div class="notification-icon">
              🔔
            </div>

            <div class="notification-copy">

              <strong>
                ${notification.title}
              </strong>

              <small>
                ${notification.message}
              </small>

              <em>
                ${notification.time}
              </em>

            </div>

            ${
              notification.unread
                ? `<span class="unread-dot"></span>`
                : ""
            }

          </div>
        `;

      }
    ).join("");

}


function readNotification(id) {

  notifications =
    notifications.map(
      notification => {

        if (
          notification.id === id
        ) {

          notification.unread =
            false;

        }

        return notification;

      }
    );


  localStorage.setItem(
    "toolshareNotifications",
    JSON.stringify(
      notifications
    )
  );


  renderNotifications();

  updateNotificationBadge();

}


function markAllNotificationsRead() {

  notifications =
    notifications.map(
      notification => {

        notification.unread =
          false;

        return notification;

      }
    );


  localStorage.setItem(
    "toolshareNotifications",
    JSON.stringify(
      notifications
    )
  );


  renderNotifications();

  updateNotificationBadge();

}


function updateNotificationBadge() {

  const badge =
    document.getElementById(
      "notificationBadge"
    );


  if (!badge) return;


  const unread =
    notifications.filter(
      notification =>
        notification.unread
    ).length;


  if (unread > 0) {

    badge.textContent =
      unread > 9
        ? "9+"
        : unread;

    badge.style.display =
      "flex";

  } else {

    badge.style.display =
      "none";

  }

}


/* =========================================================
   SCREEN NAVIGATION
========================================================= */

function showScreen(screenId) {

  const screens =
    document.querySelectorAll(
      ".screen"
    );


  screens.forEach(
    screen => {

      screen.classList.remove(
        "active"
      );

    }
  );


  const target =
    document.getElementById(
      screenId
    );


  if (target) {

    target.classList.add(
      "active"
    );

  }


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   HOME
========================================================= */

function goHome() {

  showScreen(
    "homeScreen"
  );

}


/* =========================================================
   ALL TOOLS
========================================================= */

function showAllTools() {

  openCategory(
    "tools"
  );

}


/* =========================================================
   BACK FUNCTIONS
========================================================= */

function backToHome() {

  showScreen(
    "homeScreen"
  );

}


function backToCategory() {

  openCategory(
    currentCategory
  );

}


function backToDetails() {

  showScreen(
    "detailsScreen"
  );

}


function backToBooking() {

  showScreen(
    "bookingScreen"
  );

}


function backToTerms() {

  showScreen(
    "termsScreen"
  );

}


/* =========================================================
   DATE FUNCTIONS
========================================================= */

function setMinimumDates() {

  const today =
    new Date()
      .toISOString()
      .split("T")[0];


  const startDate =
    document.getElementById(
      "startDate"
    );


  const endDate =
    document.getElementById(
      "endDate"
    );


  if (startDate) {

    startDate.min =
      today;

  }


  if (endDate) {

    endDate.min =
      today;

  }


  if (startDate) {

    startDate.addEventListener(
      "change",
      function () {

        if (endDate) {

          endDate.min =
            this.value;

        }

      }
    );

  }

}


/* =========================================================
   CALCULATE RENTAL DAYS
========================================================= */

function calculateRentalDays(
  start,
  end
) {

  if (!start || !end)
    return 1;


  const startDate =
    new Date(start);


  const endDate =
    new Date(end);


  const difference =
    endDate - startDate;


  const days =
    Math.ceil(
      difference /
      (1000 * 60 * 60 * 24)
    );


  return Math.max(
    1,
    days + 1
  );

}


/* =========================================================
   FORMAT DATE
========================================================= */

function formatDate(
  dateString
) {

  if (!dateString)
    return "-";


  const date =
    new Date(
      dateString +
      "T00:00:00"
    );


  return date.toLocaleDateString(
    "en-PH",
    {
      month: "short",
      day: "numeric",
      year: "numeric"
    }
  );

}


/* =========================================================
   FORMAT MONEY
========================================================= */

function formatMoney(number) {

  return Number(
    number || 0
  ).toLocaleString(
    "en-PH",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }
  );

}


/* =========================================================
   LOGOUT / RESET
========================================================= */

function logout() {

  const confirmed =
    confirm(
      "Are you sure you want to log out?"
    );


  if (!confirmed)
    return;


  alert(
    "Logout feature is ready for backend authentication."
  );

}


/* =========================================================
   CLEAR RENTALS
========================================================= */

function clearRentalHistory() {

  const confirmed =
    confirm(
      "Are you sure you want to clear your rental history?"
    );


  if (!confirmed)
    return;


  rentals = [];


  localStorage.removeItem(
    "toolshareRentals"
  );


  renderRentals();

}


/* =========================================================
   HTML COMPATIBILITY FUNCTIONS
========================================================= */

function sanitizeContactNumber(
  input
) {

  if (!input)
    return;


  input.value =
    input.value
      .replace(/\D/g, "")
      .slice(0, 11);

}


function searchEquipment() {

  const input =
    document.getElementById(
      "homeSearch"
    );


  const term =
    input
      ? input.value
      : "";


  if (!term.trim()) {

    return;

  }


  showScreen(
    "categoryScreen"
  );


  const container =
    document.getElementById(
      "equipmentList"
    );


  if (!container)
    return;


  const keyword =
    term
      .toLowerCase()
      .trim();


  const items =
    equipment.filter(
      item =>
        item.name
          .toLowerCase()
          .includes(keyword) ||

        item.description
          .toLowerCase()
          .includes(keyword) ||

        item.location
          .toLowerCase()
          .includes(keyword)
    );


  if (!items.length) {

    container.innerHTML = `
      <div class="empty-state">

        <div style="font-size:42px;">
          🔍
        </div>

        <h3>
          No equipment found
        </h3>

        <p>
          Try another search.
        </p>

      </div>
    `;

    return;

  }


  container.innerHTML =
    items.map(
      item => {

        const accessoriesHTML =
          item.accessories &&
          item.accessories.length

            ? `
              <div class="accessories-box">

                <div class="accessories-title">
                  INCLUDED ACCESSORIES
                </div>

                <div class="accessories-list">

                  ${item.accessories
                    .map(
                      accessory =>
                        `<span class="accessory-chip">${accessory}</span>`
                    )
                    .join("")}

                </div>

              </div>
            `

            : "";


        return `
          <div
            class="equipment-card
            ${item.accessories ? "has-accessories" : ""}"
          >

            <div class="equipment-top">

              <div class="equipment-icon">
                ${item.icon}
              </div>

              <div class="equipment-info">

                <h3>
                  ${item.name}
                </h3>

                <div class="card-meta">

                  <span>
                    📍 ${item.location}
                  </span>

                  <span>
                    📦 ${item.stock} available
                  </span>

                </div>

                <div class="equipment-price">
                  ₱${formatMoney(item.price)}
                  <small>
                    ${item.unit}
                  </small>
                </div>

              </div>

              <button
                class="view-btn"
                onclick="openDetails('${item.id}')"
              >
                View
              </button>

            </div>

            ${accessoriesHTML}

          </div>
        `;

      }
    ).join("");


  const title =
    document.querySelector(
      "#categoryScreen .page-header h2"
    );


  if (title) {

    title.textContent =
      "Search Results";

  }

}


function filterEquipment() {

  const input =
    document.getElementById(
      "categorySearch"
    );


  renderEquipment(
    currentCategory,
    input
      ? input.value
      : ""
  );

}


function goBackToCategory() {

  backToCategory();

}


function updateFulfillmentLabel() {

  updateFulfillmentHint();

}


function validateRentalDetails() {

  return openTerms();

}


function confirmRental() {

  return confirmBooking();

}


/* =========================================================
   GLOBAL EXPORTS
========================================================= */

window.openCategory =
  openCategory;

window.openDetails =
  openDetails;

window.openBooking =
  openBooking;

window.openTerms =
  openTerms;

window.acceptTerms =
  acceptTerms;

window.confirmBooking =
  confirmBooking;

window.confirmRental =
  confirmRental;

window.showRentals =
  showRentals;

window.showMessage =
  showMessage;

window.showProfile =
  showProfile;

window.showNotifications =
  showNotifications;

window.goHome =
  goHome;

window.showAllTools =
  showAllTools;

window.backToHome =
  backToHome;

window.backToCategory =
  backToCategory;

window.backToDetails =
  backToDetails;

window.backToBooking =
  backToBooking;

window.backToTerms =
  backToTerms;

window.increaseQuantity =
  increaseQuantity;

window.decreaseQuantity =
  decreaseQuantity;

window.changeQuantity =
  changeQuantity;

window.sendMessage =
  sendMessage;

window.saveProfile =
  saveProfile;

window.markAllNotificationsRead =
  markAllNotificationsRead;

window.readNotification =
  readNotification;

window.logout =
  logout;

window.clearRentalHistory =
  clearRentalHistory;

window.searchEquipment =
  searchEquipment;

window.filterEquipment =
  filterEquipment;

window.goBackToCategory =
  goBackToCategory;

window.updateFulfillmentLabel =
  updateFulfillmentLabel;

window.validateRentalDetails =
  validateRentalDetails;

window.showBookingSummary =
  showBookingSummary;
