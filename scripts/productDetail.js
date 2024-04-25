
// console.log(location);
const query = location.search;
// console.log(query);
const params = new URLSearchParams(query);
const id = params.get('id');
console.log(id);


function printDetails(id) {
    const product = products.find((each) => each.id === id);

    const detailsTemplate = `
    <div class="columns-container">
          
          <!-- bloque de imágenes -->
          <div class="product-images-block">

            ${product.images.map(each => 
                ` <div class="thumbnail-container">
                    <img  src="${each}" alt="Mackbok" /> 
                  </div>`
            
            ).join("")}

            <img class="main-image" src="../assets/mock1.jpg" alt="Macbok 1" />
            
          </div>

          <!-- bloque de descripción -->
          <div class="product-description-block">
            <h1 class="title"> ${product.name}  </h1>

            <form class="selector">
              <fieldset>
                <label class="label" for="color">Color</label>

                <select type="text" placeholder="Selecciona un color">
                ${product.colors.map((each) => `<option value=${each}>${each}</option>`).join("")}
                </select>

              </fieldset>
            </form>

            <div class="detail-description">
              <h1>Descripción:</h1>
              <p class="eje123">
                ${product.description}
              </p>
            </div>
          </div>

          <!-- bloque de checkout -->
          <div class="product-checkout-block">
            <span class="checkout-total-label">Total:</span>
            <h2 class="checkout-total-price">${product.price}</h2>
            <p class="checkout-description">
              ${product.taxes}
            </p>

            <ul class="checkout-policy-list">
              <li>
                <span class="policy-icon"
                  ><img src="../assets/truck.png" alt="Truck"
                /></span>
                <span class="policy-desc"
                  >Agrega el producto al carrito para conocer los costos de
                  envío</span
                >
              </li>
              <li>
                <span class="policy-icon"
                  ><img src="../assets/plane.png" alt="Plane"
                /></span>
                <span class="policy-desc"
                  >Recibí aproximadamente entre 10 y 15 días hábiles,
                  seleccionando envío normal</span
                >
              </li>
            </ul>

            <div class="checkout-process">
              <div class="top">
                <input type="number" value="1" />
                <button class="btn-primary">Comprar</button>
              </div>
              <div class="bottom">
                <button class="btn-outline">Añadir al Carrito</button>
              </div>
            </div>
          </div>

        </div>

        <div class="sales-title">
          <h2>Productos recomendados</h2>
        </div>

        <div class="sales-block">
          <article class="product-card">
            <a class="product-card" href="./details.html">
              <img
                class="product-img"
                src="assets/mock1.jpg"
                alt="Macbook Pro"
              />
              <div class="product-info">
                <span class="product-title">Macbook Pro 15'4</span>
                <span class="product-description">Space Gray</span>
                <div class="product-price-block">
                  <span class="price">$750.000</span>
                  <span class="discount">50% Off</span>
                </div>
                <div class="product-tax-policy">
                  Incluye impuesto País y percepción AFIP
                </div>
              </div>
            </a>
          </article>

          <article class="product-card">
            <a class="product-card" href="./details.html">
              <img
                class="product-img"
                src="assets/mock1.jpg"
                alt="Macbook Pro"
              />
              <div class="product-info">
                <span class="product-title">Macbook Pro 15'4</span>
                <span class="product-description">Space Gray</span>
                <div class="product-price-block">
                  <span class="price">$750.000</span>
                  <span class="discount">50% Off</span>
                </div>
                <div class="product-tax-policy">
                  Incluye impuesto País y percepción AFIP
                </div>
              </div>
            </a>
          </article>

          <article class="product-card">
            <a class="product-card" href="./details.html">
              <img
                class="product-img"
                src="assets/mock1.jpg"
                alt="Macbook Pro"
              />
              <div class="product-info">
                <span class="product-title">Macbook Pro 15'4</span>
                <span class="product-description">Space Gray</span>
                <div class="product-price-block">
                  <span class="price">$750.000</span>
                  <span class="discount">50% Off</span>
                </div>
                <div class="product-tax-policy">
                  Incluye impuesto País y percepción AFIP
                </div>
              </div>
            </a>
          </article>
        </div>
       
    `;

    const detailsSelector = document.querySelector("#details");
    detailsSelector.innerHTML = detailsTemplate;
 }

 printDetails(id);