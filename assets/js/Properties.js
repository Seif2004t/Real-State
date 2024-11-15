// Sample property data
const properties = [
    {
        title: "Luxury Family Home",
        price: "$13000/mo",
        location: "1421 San Pedro St, Los Angeles, CA",
        beds: 1,
        baths: 1,
        sqft: 8200,
        type: "Apartment",
        status: "For Sale",
        featured: true,
        img: "../assets/images/property.jpeg",
        agent: "Ali Tufan",
        date: "1 year ago"
    },
    {
        title: "Renovated Apartment",
        price: "$14000/mo",
        location: "1421 San Pedro St, Los Angeles, CA",
        beds: 2,
        baths: 2,
        sqft: 5280,
        type: "Bungalow",
        status: "For Rent",
        featured: true,
        img: "../assets/images/property.jpeg",
        agent: "Ali Tufan",
        date: "1 year ago"
    },
    {
        title: "Renovated Apartment",
        price: "$14000/mo",
        location: "1421 San Pedro St, Los Angeles, CA",
        beds: 2,
        baths: 2,
        sqft: 5280,
        type: "Bungalow",
        status: "For Rent",
        featured: true,
        img: "../assets/images/property.jpeg",
        agent: "Ali Tufan",
        date: "1 year ago"
    },
    {
        title: "Renovated Apartment",
        price: "$14000/mo",
        location: "1421 San Pedro St, Los Angeles, CA",
        beds: 2,
        baths: 2,
        sqft: 5280,
        type: "Bungalow",
        status: "For Rent",
        featured: true,
        img: "../assets/images/property.jpeg",
        agent: "Ali Tufan",
        date: "1 year ago"
    },
    {
        title: "Renovated Apartment",
        price: "$14000/mo",
        location: "1421 San Pedro St, Los Angeles, CA",
        beds: 2,
        baths: 2,
        sqft: 5280,
        type: "Bungalow",
        status: "For Rent",
        featured: true,
        img: "../assets/images/property.jpeg",
        agent: "Ali Tufan",
        date: "1 year ago"
    },
    {
        title: "Renovated Apartment",
        price: "$14000/mo",
        location: "1421 San Pedro St, Los Angeles, CA",
        beds: 2,
        baths: 2,
        sqft: 5280,
        type: "Bungalow",
        status: "For Rent",
        featured: true,
        img: "../assets/images/property.jpeg",
        agent: "Ali Tufan",
        date: "1 year ago"
    },
    {
        title: "Renovated Apartment",
        price: "$14000/mo",
        location: "1421 San Pedro St, Los Angeles, CA",
        beds: 2,
        baths: 2,
        sqft: 5280,
        type: "Bungalow",
        status: "For Rent",
        featured: true,
        img: "../assets/images/property.jpeg",
        agent: "Ali Tufan",
        date: "1 year ago"
    },
    {
        title: "Renovated Apartment",
        price: "$14000/mo",
        location: "1421 San Pedro St, Los Angeles, CA",
        beds: 2,
        baths: 2,
        sqft: 5280,
        type: "Bungalow",
        status: "For Rent",
        featured: true,
        img: "../assets/images/property.jpeg",
        agent: "Ali Tufan",
        date: "1 year ago"
    },
    {
        title: "Renovated Apartment",
        price: "$14000/mo",
        location: "1421 San Pedro St, Los Angeles, CA",
        beds: 2,
        baths: 2,
        sqft: 5280,
        type: "Bungalow",
        status: "For Rent",
        featured: true,
        img: "../assets/images/property.jpeg",
        agent: "Ali Tufan",
        date: "1 year ago"
    },
    {
        title: "Renovated Apartment",
        price: "$14000/mo",
        location: "1421 San Pedro St, Los Angeles, CA",
        beds: 2,
        baths: 2,
        sqft: 5280,
        type: "Bungalow",
        status: "For Rent",
        featured: true,
        img: "../assets/images/property.jpeg",
        agent: "Ali Tufan",
        date: "1 year ago"
    },
    {
        title: "Renovated Apartment",
        price: "$14000/mo",
        location: "1421 San Pedro St, Los Angeles, CA",
        beds: 2,
        baths: 2,
        sqft: 5280,
        type: "Bungalow",
        status: "For Rent",
        featured: true,
        img: "../assets/images/property.jpeg",
        agent: "Ali Tufan",
        date: "1 year ago"
    },
    // Add more property objects here...
];


// Function to generate property cards
function generatePropertyCards() {
    const container = document.getElementById('propertyCards');
    container.innerHTML = '';

    properties.forEach(property => {
        const card = `
            <div class="col mb-4">
                <div class="card shadow-sm h-100 ms-2">
                    <div class="position-relative ">
                        <img src="${property.img}" alt="${property.title}" class="card-img-top py-1 px-1 rounded overflow-hidden">
                        ${property.featured ? '<span class="featured secondary-bg text-white py-1 px-2 rounded">Featured</span>' : ''}
                        ${property.status === "For Rent" ? '<span class="status primary-bg text-white py-1 px-2 rounded">Rent</span>' : ''}
                        ${property.status === "For Sale" ? '<span class="status primary-bg text-white py-1 px-2 rounded">Sale</span>' : ''}
                    </div>
                <div class="card-body">
                    <h3 class="card-title h5">${property.title}</h3>
                    <p class="card-text text-danger fw-bold">${property.price}</p>
                    <p class="card-text text-muted">${property.location}</p>
                    <div class="d-flex justify-content-start text-muted mt-2">
                        <p class="me-3">Beds: ${property.beds}</p>
                        <p class="me-3">Baths: ${property.baths}</p>
                        <p>Sqft: ${property.sqft}</p>
                    </div>
                    <div class="d-flex align-items-center mt-4">
                        <img src="../assets/images/agent.jpeg" alt="Agent" class="rounded-circle me-2" style="width: 32px; height: 32px;">
                        <p class="mb-0 me-2">${property.agent}</p>
                        <p class="text-muted mb-0">${property.date}</p>
                    </div>
                </div>
                </div>
            </a>
        `;
        container.innerHTML += card;
    });
}

// Call the function to load the cards
generatePropertyCards();
