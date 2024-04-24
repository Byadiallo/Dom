document.addEventListener('DOMContentLoaded', function () {
    const articles = document.querySelectorAll('.article');
    let grandTotal = calculateInitialGrandTotal();


    const grandTotalElement = document.querySelector('.totalprice span:last-child');
    grandTotalElement.textContent = grandTotal.toFixed(1);

    articles.forEach(article => {
        const minusBtn = article.querySelector('.buttonminus-btn');
        const plusBtn = article.querySelector('.buttonplus-btn');
        const quantityElement = article.querySelector('.quantity-btn');
        const priceElement = article.querySelector('.price');
        const totalElement = article.querySelector('.Total');
        const likeBtn = article.querySelector('.like-Btn');
        const deleteBtn = article.querySelector('.delete-btn');

        let quantity = parseFloat(quantityElement.textContent);
        let price = parseFloat(priceElement.textContent);

        plusBtn.addEventListener('click', function () {
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });

        minusBtn.addEventListener('click', function () {
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });

        deleteBtn.addEventListener('click', function () {
            let montant = article.querySelector('.Total')
            article.remove();
            updateTotalPrice(montant);
        });

        function updateTotalPrice() {
            const articleTotalPrice = quantity * price;
            totalElement.textContent = articleTotalPrice.toFixed(1);
            calculateGrandTotal();
        }

        function updateTotalPrice(update) {
            let articleTotalPrice = quantity * price;
            articleTotalPrice -= update;
            totalElement.textContent = articleTotalPrice.toFixed(1);
            calculateGrandTotal();
        }

        likeBtn.addEventListener('click', function () {
            if (likeBtn.style.color == 'red') {
                likeBtn.style.color = 'black';
            }
            else {
                likeBtn.style.color = 'red';
            }


        });
    });

    function calculateGrandTotal() {
        grandTotal = 0;
        articles.forEach(article => {
            const totalElement = article.querySelector('.Total');
            grandTotal += parseFloat(totalElement.textContent);
        });
        grandTotalElement.textContent = grandTotal.toFixed(1);
    }

    function calculateInitialGrandTotal() {
        let initialGrandTotal = 0;
        articles.forEach(article => {
            const totalElement = article.querySelector('.Total');
            initialGrandTotal += parseFloat(totalElement.textContent);
        });
        return initialGrandTotal;
    }


});
