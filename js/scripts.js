const innerContainer = document.querySelector('.inner');
const btn = document.querySelector('.btn');
const api = "https://jsonplaceholder.typicode.com/users";




async function showFriendsList() {
    try {
        const response = await fetch(api);
        if (response.ok) {
            const data = await response.json();
            createCards(data);
        } else {
        console.log('Error HTTP: ' + response.status);
    }
    } catch (error) {
        console.log('Ошибка при выполнении запроса: ' + error.message);
    }
}

function createCards(cardData) {
    cardData.forEach(cardData => {
        const card = 
        `<div class="card">
                <div class="card__img"><img src="img/me.png" alt="avatar"></div>
                <div class="card__name">${cardData.name}</div>
                <div class="card__name">${cardData.img}</div>
                <div class="card__email">${cardData.email}</div>
                <div class="card__city">${cardData.address.city}</div>
                <div class="card__website">${cardData.website}</div>
            </div>`;
        innerContainer.insertAdjacentHTML('beforeEnd', card);
    });
};

btn.addEventListener('click', function() {
    if (innerContainer.childElementCount > 0) {
        innerContainer.innerHTML = '';
    } else {
        showFriendsList();
    }
});
