export const createCartProductHTML = (cartProduct) => {
  const { id, name, bid, img, quantity } = cartProduct;

  return `
      <div class="cart-item">
            <img src="${img}" alt="${name}" />
            <div class="item-info">
              <h3 class="item-title">${name}</h3>
              <p class="item-bid">Current bid</p>
              <span class="item-price">${bid} ETH</span>
            </div>
            <!-- Handler qty -->
            <div class="item-handler">
              <span class="quantity-handler down" data-id='${id}'>-</span>
              <span class="item-quantity">${quantity}</span>
              <span class="quantity-handler up" data-id='${id}'>+</span>
            </div>
          </div>
  `;
};

export const renderCart = () => {
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito</p>`;
    return;
  }
  productsCart.innerHTML = cart.map(createCartProductHTML).join("");
};