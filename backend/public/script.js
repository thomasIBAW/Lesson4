// load articles
$(document).ready(function () {
    $.get('/article', function (data) {
        data.forEach(e => addToDom(e))
    })
})

function addToDom(product) {
    $('#grid').append(
        `<div class="col-sm-4">
          <form action="/cart/article/${product._id}" data-ajax-form>
            <div class="card">
              <img class="card-img-top" src="http://placehold.jp/350x150.png" alt="Card image cap">
              <div class="card-body">
                <div class="product-title">${product.title}</div>
                <div class="price">${product.price}</div>

                <button type="submit">
                <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          </form>
          </div>
          `
    )
}

// get cart initially
$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: '/cart',
        success: function (data) {
            updateCart(data)
        }
    })
})

// add to cart
$(document).on('submit', '[data-ajax-form]', e => {
    e.preventDefault()
    $.ajax({
        type: 'POST',
        url: event.target.action,
        success: function (data) {
            updateCart(data)
        }
    })
})

// remove from cart
$(document).on('submit', '.cart-item', e => {
    e.preventDefault()
    $.ajax({
        type: 'DELETE',
        url: event.target.action,
        success: function (data) {
            updateCart(data)
        }
    })
})

function updateCart(cartData) {
    console.log(cartData)
    $('#cart').empty()
    cartData.items.forEach(item =>
        $('#cart').append(`
          <form class="cart-item" action="/cart/article/${
            item.articleData._id
        }">
                <div class="cart-title">${item.quantity}x ${
            item.articleData.title
        }</div>
                <div class="cart-price">CHF ${item.price.toFixed(2)}</div>
                <button class="cart-item-remove fas fa-times"></button>
            </form>
        `)
    )
    $('#cart-total').html(cartData.totalAmount)
}
