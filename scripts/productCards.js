const productsSelector = document.getElementById("products");

// let productsTemplate = ` <article class="product-card" id="products">
// <a class="product-card" href="./details.html">
//   <img
//     class="product-img"
//     src="assets/mock1.jpg"
//     alt="Macbook Pro"
//   />
//   <div class="product-info">
//     <span class="product-title">Macbook Pro 15'4</span>
//     <span class="product-description">Space Gray</span>
//     <div class="product-price-block">
//       <span class="price">$750.000</span>
//       <span class="discount">50% Off</span>
//     </div>
//     <div class="product-tax-policy">
//       Incluye impuesto País y percepción AFIP
//     </div>
//   </div>
// </a>
// </article>

// <article class="product-card">
// <a class="product-card" href="./details.html">
//   <img
//     class="product-img"
//     src="assets/mock1.jpg"
//     alt="Macbook Pro"
//   />
//   <div class="product-info">
//     <span class="product-title">Macbook Pro 15'4</span>
//     <span class="product-description">Space Gray</span>
//     <div class="product-price-block">
//       <span class="price">$750.000</span>
//       <span class="discount">50% Off</span>
//     </div>
//     <div class="product-tax-policy">
//       Incluye impuesto País y percepción AFIP
//     </div>
//   </div>
// </a>
// </article>

// <article class="product-card">
// <a class="product-card" href="./details.html">
//   <img
//     class="product-img"
//     src="assets/mock1.jpg"
//     alt="Macbook Pro"
//   />
//   <div class="product-info">
//     <span class="product-title">Macbook Pro 15'4</span>
//     <span class="product-description">Space Gray</span>
//     <div class="product-price-block">
//       <span class="price">$750.000</span>
//       <span class="discount">50% Off</span>
//     </div>
//     <div class="product-tax-policy">
//       Incluye impuesto País y percepción AFIP
//     </div>
//   </div>
// </a>
// </article>

// <article class="product-card">
// <a class="product-card" href="./details.html">
//   <img
//     class="product-img"
//     src="assets/mock1.jpg"
//     alt="Macbook Pro"
//   />
//   <div class="product-info">
//     <span class="product-title">Macbook Pro 15'4</span>
//     <span class="product-description">Space Gray</span>
//     <div class="product-price-block">
//       <span class="price">$750.000</span>
//       <span class="discount">50% Off</span>
//     </div>
//     <div class="product-tax-policy">
//       Incluye impuesto País y percepción AFIP
//     </div>
//   </div>
// </a>
// </article>

// <article class="product-card">
// <a class="product-card" href="./details.html">
//   <img
//     class="product-img"
//     src="assets/mock1.jpg"
//     alt="Macbook Pro"
//   />
//   <div class="product-info">
//     <span class="product-title">Macbook Pro 15'4</span>
//     <span class="product-description">Space Gray</span>
//     <div class="product-price-block">
//       <span class="price">$750.000</span>
//       <span class="discount">50% Off</span>
//     </div>
//     <div class="product-tax-policy">
//       Incluye impuesto País y percepción AFIP
//     </div>
//   </div>
// </a>
// </article>

// <article class="product-card">
// <a class="product-card" href="./details.html">
//   <img
//     class="product-img"
//     src="assets/mock1.jpg"
//     alt="Macbook Pro"
//   />
//   <div class="product-info">
//     <span class="product-title">Macbook Pro 15'4</span>
//     <span class="product-description">Space Gray</span>
//     <div class="product-price-block">
//       <span class="price">$750.000</span>
//       <span class="discount">50% Off</span>
//     </div>
//     <div class="product-tax-policy">
//       Incluye impuesto País y percepción AFIP
//     </div>
//   </div>
// </a>
// </article>

// <article class="product-card">
// <a class="product-card" href="./details.html">
//   <img
//     class="product-img"
//     src="assets/mock1.jpg"
//     alt="Macbook Pro"
//   />
//   <div class="product-info">
//     <span class="product-title">Macbook Pro 15'4</span>
//     <span class="product-description">Space Gray</span>
//     <div class="product-price-block">
//       <span class="price">$750.000</span>
//       <span class="discount">50% Off</span>
//     </div>
//     <div class="product-tax-policy">
//       Incluye impuesto País y percepción AFIP
//     </div>
//   </div>
// </a>
// </article> 
// `;

function createCard(product) {

  // <a class="product-card" href="./details.html?id=${product.id}"></a>
  return `<article class="product-card">
            <a class="product-card" href="./details.html?id=${product.id}">
              <img
                class="product-img"
                src="${product.img}"
                alt="${product.name}"
              />
              <div class="product-info">
                <span class="product-title">${product.name}</span>
                <span class="product-description">${product.description}</span>
                <div class="product-price-block">
                  <span class="price">${product.price}</span>
                  <span class="discount">${product.discount}</span>
                </div>
                <div class="product-tax-policy">
                  ${product.taxes}
                </div>
              </div>
            </a>
    </article>` ;
}



function printCards(arrayOfProducts, idSelector) {
//   console.log(arrayOfProducts);  

  let productsTemplate = "";
  for (const element of arrayOfProducts) {
    // console.log(element);
    // let template = createCard(element);
    // console.log(template);
    productsTemplate = productsTemplate + createCard(element);
  }

//   console.log(productsTemplate);

  const productsSelector = document.getElementById(idSelector);
  productsSelector.innerHTML = productsTemplate;

}

printCards(products, "products");
