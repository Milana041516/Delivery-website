const modalFunc = () => {
    const modal = document.querySelector('.cart-modal-overlay')
    const cartBtn = document.querySelector('#cart-button')


    const openModal = () => {
        modal.classList.add('open');
    };

    const closeModal = () => {
        modal.classList.remove('open');
    };

    cartBtn.addEventListener('click', () => {
        openModal()
    });


    modal.addEventListener('click', (event) => {
        if (event.target.classList.contains('cart-modal-overlay') || event.target.closest('.cart-modal-header-close')
        ) {
            closeModal()
        }
    });

};

const restsFunc = () => {
    const container = document.querySelector('#rests-container')

    const restArray = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest1.jpg'
        },
        {
            id: 2,
            title: 'Тануки',
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest2.jpg'
        },
        {
            id: 3,
            title: 'FoodBand',
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest3.jpg'
        },
        {
            id: 4,
            title: 'Жадина-пицца',
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest4.jpg'
        },
        {
            id: 5,
            title: 'Точка еды',
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest5.jpg'
        },
        {
            id: 6,
            title: 'PizzaBurger',
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest6.jpg'
        },
    ];

    const loading = () => {
        container.innerHTML = '<p class="loading-text">Загрузка...</p>';
    }

    const renderRests = (array) => {
        container.innerHTML = '';

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <a href="./goods.html?id=${card.id}" class="products-card">
                            <div class="products-card-image">
                                <img src="images/rests/${card.image}" alt="${card.image}">
                            </div>

                            <div class="products-card-description">
                                <div class="products-card-description-row">
                                    <h4 class="products-card-description-title">${card.title}</h4>
                                    <div class="products-card-description-badge">${card.time} мин</div>
                                </div>

                                <div class="products-card-description-row">
                                    <div class="products-card-description-info">
                                        <div class="products-card-description-info-raiting">
                                            <img src="images/icons/star.svg" alt="star">
                                            ${card.raiting}
                                        </div>
                                        <div class="products-card-description-info-price">От ${card.price} ₽</div>
                                        <div class="products-card-description-info-group">${card.type}</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                `);
        });
    };

    if (container) {
        loading();


        setTimeout(() => {
            renderRests(restArray);
        }, 1000);
    }
};

const goodsFunc = () => {
    const container = document.querySelector('#goods-container')

    const goodArray = [
        {
            id: 0,
            title: 'Ролл угорь стандарт',
            ingredients: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            price: 250,
            image: 'good1.jpg'
        },
        {
            id: 1,
            title: 'Калифорния лосось стандарт',
            ingredients: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            price: 395,
            image: 'good2.jpg'
        },
        {
            id: 2,
            title: 'Окинава стандарт',
            ingredients: ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            price: 250,
            image: 'good3.jpg'
        },
        {
            id: 3,
            title: 'Цезарь маки хl',
            ingredients: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            price: 250,
            image: 'good4.jpg'
        },
        {
            id: 4,
            title: 'Ясай маки стандарт 185 г',
            ingredients: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            price: 250,
            image: 'good5.jpg'
        },
        {
            id: 5,
            title: 'Ролл с креветкой стандарт',
            ingredients: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            price: 250,
            image: 'good6.jpg'
        },
    ];

    const loading = () => {
        container.innerHTML = '<p class="loading-text">Загрузка...</p>';
    }

    const renderGoods = (array) => {
        container.innerHTML = '';

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
               <div class="products-card">
                            <div class="products-card-image">
                                <img src="images/goods/${card.image}" alt="${card.image}">
                            </div>

                            <div class="products-card-description">
                                <div class="products-card-description-row">
                                    <h5 class="products-card-description-name">${card.title}</h5>
                                </div>

                                <div class="products-card-description-row">
                                    <p class="products-card-description-text">${card.ingredients}</p>
                                </div>

                                <div class="products-card-description-row">
                                    <div class="products-card-description-controls">
                                        <button class="btn btn-primary">
                                            В корзину
                                            <img src="./images/icons/shopping-cart-white.svg" alt="shopping cart">
                                        </button>
                                        <span class="products-card-description-controls-price">${card.price} ₽</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                `);
        });
    };

    if (container) {
        loading();


        setTimeout(() => {
            renderGoods(goodArray);
        }, 1000);
    };
};

modalFunc();
restsFunc();
goodsFunc();