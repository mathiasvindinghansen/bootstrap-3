function purchaseProduct() {
    console.log("bought");
}

function removeProduct(productElement) {
    $(productElement).parent().parent().remove();
}

$(function() {
    for ($i = 0; $i < 10; $i++) {
        $.get('ajax/product.html', function(data) {
            $(data).appendTo('.product-list');
        });

        $.get('ajax/list-item.html', function(data) {
            $(data).appendTo('.product-search .list');
        });

        $.get('ajax/cart-item.html', function(data) {
            $(data).appendTo('.cart-items');
        });
    }

    $('#cart a').on('click', function() {
        $('#cart .cart').toggleClass('hidden');
    }).children().on('click', function() { //ignore children of cart
        return false;
    });
});