function purchaseProduct() {
    console.log('u bought something');
}

$(function() {
    for ($i = 0; $i < 10; $i++) {
        $.get('ajax/product.html', function(data) {
            $(data).appendTo('.product-list')
        });

        $.get('ajax/list-item.html', function(data) {
            $(data).appendTo('.product-search .list')
        });
    }
});