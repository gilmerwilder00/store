
function createProductCard(product) {
  return `
    <article class="fav-product-item">
    <img
      class="product-fav-img"
      src="${product.image}"
      alt="Macbook Pro"
    />

    <div class="product-fav-description">
      <span class="product-fav-title"
        >${product.title}</span
      >
      <span class="product-fav-description">${product.color}</span>
      
    </div>

    <div class="">$ ${product.price}</div>
    
  </article>
    
    `;
}

// Add favorites
function addFavorite(id) {
  console.log("Dentro de agregar favoritos")
  console.log(id);

  const found = cartProducts.find(product => product.id === id);

  const product = {
    id: id,
    title: found.title,
    price: Number(found.price),
    image: found.image,
    color: found.color
  };

  //favorites definition 
  const favorites = localStorage.getItem("favo") ? JSON.parse(localStorage.getItem("favo")) : [];

  //If exits a product with the same id  
  if (favorites.some( (favProduct) => favProduct.id === id )) {
    console.log("favorite product with same id already in favorites");
  } else {
    favorites.push(product);
  }

  localStorage.setItem("favo", JSON.stringify(favorites));
}



function printFavoriteProducts() {
  let productsTemplate = "";
  // Get favorites products
  const favorites = localStorage.getItem("favo") ? JSON.parse(localStorage.getItem("favo")) : [];

  console.log(favorites);

  for (const element of favorites) {
    productsTemplate = productsTemplate + createProductCard(element);
  }

  if (productsTemplate ===""){
    productsTemplate = `<p>No se encontraron productos  favoritos</p>`;
  } 

  // console.log(productsTemplate);

  const productsSelector = document.getElementById("fav-list-products");
  console.log(productsSelector);
  
  productsSelector.innerHTML = productsTemplate;
}

printFavoriteProducts();