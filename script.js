document.addEventListener('DOMContentLoaded', function() {
    const decreaseBtn = document.getElementById('decrease-btn');
    const increaseBtn = document.getElementById('increase-btn');
    const quantityInput = document.getElementById('quantity-input');

    decreaseBtn.addEventListener('click', function() {
        decreaseQuantity();
    });

    increaseBtn.addEventListener('click', function() {
        increaseQuantity();
    });

    function decreaseQuantity() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    }

    function increaseQuantity() {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    }
});
function setColor(color) {
    // Reset all color options
    document.querySelectorAll('.color-option').forEach(function(option) {
        option.removeAttribute('selected');
    });

    // Set selected color
    document.querySelector('.color-option.color-' + color).setAttribute('selected', '');

    // Update hidden input value
    document.getElementById('color-value').value = color;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.add-to-cart').addEventListener('click', () => {
        const color = document.getElementById('color-value').value;
        const size = document.querySelector('input[name="size"]:checked').value;
        const quantity = document.getElementById('quantity-input').value;
        const title = document.querySelector('.product-title').innerText;
        alert(`Added ${quantity} ${title} (Color: ${color}, Size: ${size}) to cart!`);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.add-to-cart').addEventListener('click', function() {
        alert('Product added to cart!');
    });
});
