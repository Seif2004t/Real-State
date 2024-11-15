document.addEventListener("DOMContentLoaded", function() {
    const cardsData = [
        {
            image: './assets/images/1.jpg',
            category: 'Business',
            title: 'Skills That You Can Learn In The Real Estate Market',
            author: 'Ali Tufan',
            date: '7 August 2022',
            authorImage: './assets/images/1.jpg'
        },
        {
            image: './assets/images/1.jpg',
            category: 'Construction',
            title: 'Bedroom Colors You Will Never Regret',
            author: 'Ali Tufan',
            date: '7 August 2022',
            authorImage: './assets/images/1.jpg'
        },
        {
            image: './assets/images/1.jpg',
            category: 'Business',
            title: '5 Essential Steps for Buying Everyone Investment',
            author: 'Ali Tufan',
            date: '7 August 2022',
            authorImage: './assets/images/1.jpg'
        }
    ];

    const container = document.getElementById('cards-container-Tips');

    function createCard(card) {
        const cardElement = `
        <a href="../pages/Blog.html" class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="${card.image}" alt="${card.title}" class="w-full h-48 object-cover">
            <div class = "p-6">
                <span class="text-red-500 text-sm font-semibold">${card.category}</span>
                <h3 class="text-xl font-semibold mt-2">${card.title}</h3>
                </div>
                <div class = "w-full h-[1px] bg-gray-300"></div>
                <div class="flex items-center p-6">
                    <img src="${card.authorImage}" alt="${card.author}" class="w-10 h-10 rounded-full mr-4">
                    <div class="text-sm flex justify-between w-full">
                        <p class="text-gray-900 leading-none">${card.author}</p>
                        <p class="text-gray-600">${card.date}</p>
                    </div>
                </div>
            
        </a>
        `;
        return cardElement;
    }

    cardsData.forEach(card => {
        container.innerHTML += createCard(card);
    });
});
