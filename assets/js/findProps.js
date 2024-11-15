document.addEventListener("DOMContentLoaded", function() {
    const properties = [
        { city: 'Miami', image: './assets/images/1.jpg', properties: 24, url: '../pages/propertiesDetails.html' },
        { city: 'Los Angeles', image: './assets/images/1.jpg', properties: 18, url: '../pages/propertiesDetails.html' },
        { city: 'New York', image: './assets/images/1.jpg', properties: 89, url: '../pages/propertiesDetails.html' },
        { city: 'Florida', image: './assets/images/1.jpg', properties: 47, url: '../pages/propertiesDetails.html' }
    ];

    const cardContainer = document.getElementById('Cities-Cards');

    properties.forEach((property, index) => {
        let colSpan = '';

        if(index === 1 || index === 2) {
            colSpan = 'lg:col-span-2';
        }

        const card = `
      
            <a href="${property.url}" class="h-[21rem] mb-2 relative flex flex-col justify-end overflow-hidden rounded-lg shadow-lg bg-white ${colSpan}">
                <img src="${property.image}" alt="${property.city}" class="absolute inset-0 w-full h-full object-cover">
                <div class="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-black to-transparent"></div>
                <div class="absolute bottom-0 p-4 text-center w-full">
                    <h3 class="text-lg font-semibold text-white">${property.city}</h3>
                    <p class="text-gray-300">${property.properties} Properties</p>
                </div>
            </a>
        `;
        cardContainer.innerHTML += card;
    });
});
