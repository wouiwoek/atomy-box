// ======================================
// НАСТРОЙКИ
// ======================================

const PACKAGING_PRICE = 100;

const TELEGRAM_CHANNEL = "https://t.me/polvyatomy";


// ======================================
// КАТАЛОГ ТОВАРОВ
// ======================================

// cardImage — фотография для каталога
// boxImage — прозрачное изображение для коробки

const products = [
    {
        id: "foam-cleancer",
        name: "Foam Cleancer",
        category: "face",
        price: 750,
        cardImage: "images/пенкафон.png",
        boxImage: "images/пенка.png"
    },

    {
        id: "deap-cleancer",
        name: "Deap Cleancer",
        category: "face",
        price: 750,
        cardImage: "images/глубокоефон.png",
        boxImage: "images/глубокое.png"
    },
     {
        id: "peeling-gel",
        name: "Peeling Gel",
        category: "face",
        price: 750,
        cardImage: "images/пилингфон.png",
        boxImage: "images/пилинг.png"
    },
     {
        id: "peel-off-mask",
        name: "Peel-Off Mask",
        category: "face",
        price: 750,
        cardImage: "images/маскапленкафон.png",
        boxImage: "images/маскапленка.png"
    },
   {
        id: "lip-balm",
        name: "Бальзам для губ Atomy",
        category: "face",
        price: 400,
        cardImage: "images/бальзамфон.png",
        boxImage: "images/бальзам.png"
    },

    {
        id: "soft-poppy",
        name: "Крема для рук",
        category: "body",
        price: 1200,
        cardImage: "images/кремфон.png",
        type: "variants"
    },

    {
        id: "hand-balm",
        name: "Бальзамы для рук",
        category: "body",
        price: 600,
        cardImage: "images/бальзамыфон.png",
        type: "variants"
    },

    {
        id: "sheet-mask",
        name: "Увлажняющая тканевая маска",
        category: "face",
        price: 100,
        cardImage: "images/маскафон.png",
        boxImage: "images/маска1.png"
    },

    {
        id: "oral-care",
        name: "Дорожный набор Oral Care",
        category: "hygiene",
        price: 350,
        cardImage: "images/оралкеарфон.png",
        boxImage: "images/оралкеар.png"
    },

    {
        id: "cleansing-travel-kit",
        name: "Дорожный набор Atomy",
        category: "hygiene",
        price: 900,
        cardImage: "images/дорожныйфон.png",
        boxImage: "images/дорожный.png"
    },


    {
        id: "toothpaste",
        name: "Зубные пасты с прополисом Atomy",
        category: "hygiene",
        price: 600,
        cardImage: "images/пастыфон.png",
        boxImage: "images/пастымал.png"
    },

    {
        id: "peeling",
        name: "Пилинг-пэды",
        category: "face",
        price: 1200,
        cardImage: "images/пилингпэдыфон.png",
        boxImage: "images/пилингпэды.png"
    },

    {
        id: "makeup-base",
        name: "Основа под макияж",
        category: "makeup",
        price: 1000,
        cardImage: "images/базафон.png",
        boxImage: "images/база.png"
    },

    {
        id: "mascara",
        name: "Тушь для ресниц",
        category: "makeup",
        price: 1200,
        cardImage: "images/тушьфон.png",
        boxImage: "images/тушь.png"
    },

    {
        id: "bb-cream",
        name: "BB крем",
        category: "makeup",
        price: 700,
        cardImage: "images/ббкремфон.png",
        boxImage: "images/ббкрем.png"
    }

];


// ======================================
// ВАРИАНТЫ SOFT POPPY
// ======================================

const softPoppyVariants = [

    {
        id: "rose water",
        name: "rose water",
        price: 300,
        cardImage: "images/роза.png",
        boxImage: "images/роза.png"
    },

    {
        id: "soft poppy",
        name: "soft poppy",
        price: 300,
        cardImage: "images/софтпопи.png",
        boxImage: "images/софтпопи.png"
    },

    {
        id: "shea butter",
        name: "shea butter",
        price: 300,
        cardImage: "images/ши.png",
        boxImage: "images/ши.png"
    },

    {
        id: "citrus lemon",
        name: "citrus lemon",
        price: 300,
        cardImage: "images/цитруслимон.png",
        boxImage: "images/цитруслимон.png"
    }

];

//варианты бальзамов для рук

const BalmHandVariants = [

    {
        id: "marine",
        name: "marine",
        price: 300,
        cardImage: "images/синий.png",
        boxImage: "images/синий.png"
    },

    {
        id: "pure",
        name: "pure",
        price: 300,
        cardImage: "images/розовый.png",
        boxImage: "images/розовый.png"
    },

    {
        id: "butter",
        name: "butter",
        price: 300,
        cardImage: "images/желтый.png",
        boxImage: "images/желтый.png"
    }

];
// модальное окно бальзамов для рук

const handBalmModal = document.getElementById("handBalmModal");
const handBalmOptions = document.getElementById("handBalmOptions");

let selectedHandBalm = new Set();

function openHandBalmModal() {
    selectedHandBalm.clear();
    renderHandBalmOptions();
    handBalmModal.classList.add("active");
}

function renderHandBalmOptions() {
    handBalmOptions.innerHTML = "";

    BalmHandVariants.forEach(variant => {

        const option = document.createElement("div");

        option.className = "soft-poppy-option";

        if (selectedHandBalm.has(variant.id)) {
            option.classList.add("active");
        }

        option.innerHTML = `
            <img src="${variant.cardImage}" alt="${variant.name}">
            <p>${variant.name}</p>
            <span>${variant.price} ₽</span>
        `;

        option.addEventListener("click", () => {

            if (selectedHandBalm.has(variant.id)) {
                selectedHandBalm.delete(variant.id);
            } else {
                selectedHandBalm.add(variant.id);
            }

            renderHandBalmOptions();

        });

        handBalmOptions.appendChild(option);

    });
}

// добавить выбранные бальзамы

document.getElementById("addHandBalm").addEventListener("click", () => {

    if (selectedHandBalm.size === 0) {
        alert("сначала выбери хотя бы один бальзам");
        return;
    }

    BalmHandVariants.forEach(variant => {

        if (selectedHandBalm.has(variant.id)) {

            addToCart({
                id: "hand-balm-" + variant.id,
                name: "Бальзам для рук Atomy (" + variant.name + ")",
                price: variant.price,
                boxImage: variant.boxImage
            });

        }

    });

    handBalmModal.classList.remove("active");

});

// добавить все три бальзама

document.getElementById("addAllHandBalm").addEventListener("click", () => {

    BalmHandVariants.forEach(variant => {

        addToCart({
            id: "hand-balm-" + variant.id,
            name: "Бальзам для рук Atomy (" + variant.name + ")",
            price: variant.price,
            boxImage: variant.boxImage
        });

    });

    handBalmModal.classList.remove("active");

});

// закрытие окна

document.getElementById("closeHandBalmModal").addEventListener("click", () => {
    handBalmModal.classList.remove("active");
});

handBalmModal.addEventListener("click", event => {

    if (event.target === handBalmModal) {
        handBalmModal.classList.remove("active");
    }

});

// ======================================
// ПЕРЕМЕННЫЕ
// ======================================

let cart = {};

let currentCategory = "all";

let selectedSoftPoppy = new Set();


// ======================================
// ЭЛЕМЕНТЫ СТРАНИЦЫ
// ======================================

const productsContainer = document.getElementById("products");

const categoriesContainer = document.getElementById("categories");

const productCount = document.getElementById("productCount");

const selectedProducts = document.getElementById("selectedProducts");

const boxProducts = document.getElementById("boxProducts");

const emptyBox = document.getElementById("emptyBox");const productsPrice = document.getElementById("productsPrice");

const packagingPrice = document.getElementById("packagingPrice");

const totalPrice = document.getElementById("totalPrice");

const clearButton = document.getElementById("clearButton");

const orderButton = document.getElementById("orderButton");


// ======================================
// ОТОБРАЖЕНИЕ КАТАЛОГА
// ======================================

function renderProducts() {

    productsContainer.innerHTML = "";

    const filteredProducts = products.filter(product => {

        return currentCategory === "all" ||
            product.category === currentCategory;

    });

    productCount.textContent =
        filteredProducts.length + " товаров";

    filteredProducts.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.cardImage}"
                    alt="${product.name}"
                    onerror="this.style.display='none'"
                >

            </div>

            <div class="product-info">

                <p class="product-name">
                    ${product.name}
                </p>

                <p class="product-price">
                    ${product.type === "variants"
                        ? "от " + product.price + " ₽"
                        : product.price + " ₽"}
                </p>

                <button class="add-button">
                    ${product.type === "variants"
                        ? "выбрать вариант"
                        : "добавить в подарок"}
                </button>

            </div>

        `;

        card.querySelector(".add-button").addEventListener("click", () => {

    if (product.id === "soft-poppy") {

        openSoftPoppyModal();

    } else if (product.id === "hand-balm") {

        openHandBalmModal();

    } else {

        addToCart(product);

    }

});

        productsContainer.appendChild(card);

    });

}


// ======================================
// ПЕРЕКЛЮЧЕНИЕ КАТЕГОРИЙ
// ======================================

categoriesContainer.addEventListener("click", event => {

    const button = event.target.closest(".category");

    if (!button) return;

    document.querySelectorAll(".category").forEach(category => {

        category.classList.remove("active");

    });

    button.classList.add("active");

    currentCategory = button.dataset.category;

    renderProducts();

});


// ======================================
// ДОБАВЛЕНИЕ ТОВАРОВ
// ======================================

function addToCart(product) {

    if (!cart[product.id]) {

        cart[product.id] = {
            ...product,
            quantity: 0
        };

    }

    cart[product.id].quantity++;

    updateCart();

}


// ======================================
// УДАЛЕНИЕ ТОВАРОВ
// ======================================

function removeFromCart(id) {

    if (!cart[id]) return;

    cart[id].quantity--;

    if (cart[id].quantity <= 0) {

        delete cart[id];

    }

    updateCart();

}


// ======================================
// ОЧИСТКА КОРЗИНЫ
// ======================================

clearButton.addEventListener("click", () => {

    cart = {};

    updateCart();

});


// ======================================
// ОБНОВЛЕНИЕ КОРЗИНЫ
// ======================================

function updateCart() {

    renderSelectedProducts();

    renderBox();

    calculatePrice();

}


// ======================================
// СПИСОК ВЫБРАННЫХ ТОВАРОВ
// ======================================

function renderSelectedProducts() {

    selectedProducts.innerHTML = "";

    const items = Object.values(cart);

    if (items.length === 0) {

        selectedProducts.innerHTML = `
            <p class="empty-message">
                пока ничего не добавлено
            </p>
        `;

        return;

    }items.forEach(product => {

        const row = document.createElement("div");

        row.className = "selected-row";

        row.innerHTML = `

            <span class="selected-name">
                ${product.name}
            </span>

            <div class="quantity">

                <button class="minus">−</button>

                <span>${product.quantity}</span>

                <button class="plus">+</button>

            </div>

            <span class="selected-price">
                ${product.price * product.quantity} ₽
            </span>

        `;

        row.querySelector(".minus").addEventListener("click", () => {

            removeFromCart(product.id);

        });

        row.querySelector(".plus").addEventListener("click", () => {

            addToCart(product);

        });

        selectedProducts.appendChild(row);

    });

}


// ======================================
// ОТОБРАЖЕНИЕ ТОВАРОВ В КОРОБКЕ
// ======================================

function renderBox() {

    boxProducts.innerHTML = "";

    let hasProducts = false;

    Object.values(cart).forEach(product => {

        for (let i = 0; i < product.quantity; i++) {

            hasProducts = true;

            const item = document.createElement("div");

            item.className = "box-item";

            item.innerHTML = `

                <img
                    src="${product.boxImage}"
                    alt="${product.name}"
                >

            `;

            boxProducts.appendChild(item);

        }

    });

    emptyBox.style.display = hasProducts ? "none" : "block";

}


// ======================================
// ПОДСЧЁТ СТОИМОСТИ
// ======================================

function calculatePrice() {

    let sum = 0;

    Object.values(cart).forEach(product => {

        sum += product.price * product.quantity;

    });

    const packaging = PACKAGING_PRICE;

    productsPrice.textContent = sum + " ₽";

    packagingPrice.textContent = packaging + " ₽";

    totalPrice.textContent = (sum + packaging) + " ₽";

}


// ======================================
// МОДАЛЬНОЕ ОКНО крема
// ======================================

const softPoppyModal = document.getElementById("softPoppyModal");

const softPoppyOptions = document.getElementById("softPoppyOptions");

const closeModal = document.getElementById("closeModal");

const addSoftPoppy = document.getElementById("addSoftPoppy");

const addAllSoftPoppy = document.getElementById("addAllSoftPoppy");


function openSoftPoppyModal() {

    selectedSoftPoppy.clear();

    renderSoftPoppyOptions();

    softPoppyModal.classList.add("active");

}


function renderSoftPoppyOptions() {

    softPoppyOptions.innerHTML = "";

    softPoppyVariants.forEach(variant => {

        const option = document.createElement("div");

        option.className = "soft-poppy-option";

        option.innerHTML = `

            <img
                src="${variant.cardImage}"
                alt="Крем ${variant.name}"
            >

            <p>крем ${variant.name}</p>

            <span>${variant.price} ₽</span>

        `;

        option.addEventListener("click", () => {

            if (selectedSoftPoppy.has(variant.id)) {

                selectedSoftPoppy.delete(variant.id);

                option.classList.remove("active");

            } else {

                selectedSoftPoppy.add(variant.id);

                option.classList.add("active");

            }

        });

        softPoppyOptions.appendChild(option);

    });

}


// ======================================
// ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА
// ======================================

closeModal.addEventListener("click", () => {

    softPoppyModal.classList.remove("active");

});


softPoppyModal.addEventListener("click", event => {

    if (event.target === softPoppyModal) {

        softPoppyModal.classList.remove("active");

    }

});


// ======================================// ДОБАВИТЬ ВЫБРАННЫЕ КРЕМЫ
// ======================================

addSoftPoppy.addEventListener("click", () => {

    if (selectedSoftPoppy.size === 0) {

        alert("сначала выбери хотя бы один крем");

        return;

    }

    softPoppyVariants.forEach(variant => {

        if (selectedSoftPoppy.has(variant.id)) {

            addToCart({

                id: variant.id,

                name: "Атоми Набор Терапия для рук (" + variant.name + ")",

                price: variant.price,

                boxImage: variant.boxImage

            });

        }

    });

    softPoppyModal.classList.remove("active");

});


// ======================================
// ДОБАВИТЬ ВСЕ 4 КРЕМА
// ======================================

addAllSoftPoppy.addEventListener("click", () => {

    softPoppyVariants.forEach(variant => {

        addToCart({

            id: variant.id,

            name: "Атоми Набор Терапия для рук (" + variant.name + ")",

            price: variant.price,

            boxImage: variant.boxImage

        });

    });

    softPoppyModal.classList.remove("active");

});


// ======================================
// ОФОРМЛЕНИЕ ЗАКАЗА
// ======================================

orderButton.addEventListener("click", () => {

    const items = Object.values(cart);

    if (items.length === 0) {
        alert("сначала добавь товары в подарок");
        return;
    }

    let message = "здравствуйте! хочу заказать подарочный набор Atomy:\n\n";

    items.forEach(product => {
        message += `• ${product.name} — ${product.quantity} шт. — ${product.price * product.quantity} ₽\n`;
    });

    const sum = items.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);

    message += `\nподарочная упаковка: ${PACKAGING_PRICE} ₽`;
    message += `\nитого: ${sum + PACKAGING_PRICE} ₽`;
    message += "\n\nхочу уточнить детали заказа.";

    const telegramLink = "https://t.me/share/url?url=" +
        encodeURIComponent("https://t.me/polvyatomy") +
        "&text=" +
        encodeURIComponent(message);

    window.location.href = telegramLink;

});


// ======================================
// ЗАПУСК САЙТА
// ======================================

renderProducts();

updateCart();