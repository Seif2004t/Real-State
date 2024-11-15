document.addEventListener("DOMContentLoaded", function() {
    const cardData = [
        { title: 'Trusted By Thousands', icon: '👥', description: 'Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.' },
        { title: 'Wide Range Of Properties', icon: '🏡', description: 'Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.' },
        { title: 'Financing Made Easy', icon: '💰', description: 'Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.' }
    ];

    const container = document.getElementById('cards-container');

    function createCard(card) {
        const cardElement = `
        <div class="bg-white rounded-lg p-10 text-center">
            <div class="bg-pink-100 rounded-full p-8 inline-block mb-8">
                <span class="text-6xl text-pink-500">${card.icon}</span>
            </div>
            <h3 class="text-xl font-semibold mb-6">${card.title}</h3>
            <p class="text-gray-600 text-sm">${card.description}</p>
        </div>
        `;
        return cardElement;
    }

    cardData.forEach(card => {
        container.innerHTML += createCard(card);
    });
});
