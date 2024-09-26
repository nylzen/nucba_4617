// Función individual para crear el template html de un producto.
export const createProductTemplate = (product) => {
  const { id, name, bid, user, userImg, cardImg } = product;
  return `
    <div class="product">
        <img src=${cardImg} alt=${name} />
        <div class="product-info">

            <div class="product-top">
                <h3>${name}</h3>
                <p>Current Bid</p>
            </div>

            <div class="product-mid">
                <div class="product-user">
                    <img src=${userImg} alt="user" />
                    <p>@${user}</p>
                </div>
                <span>${bid} eTH</span>
            </div>


            <div class="product-bot">
                <div class="product-offer">
                    <div class="offer-time">
                        <img src="/img/fire.png" alt="" />
                        <p>05:12:07</p>
                    </div>
                    <button class="btn-add"
                    data-id='${id}'
                    data-name='${name}'
                    data-bid='${bid}'
                    data-img='${cardImg}'>Add</button>
                </div>
            </div>
        </div>
    </div>`;
};