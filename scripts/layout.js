const navbarSelector = document.getElementById("nav");

const options = [
  { title: "Ofertas de la semana", linkTo: "./outlet.html" },
  { title: "Como comprar", linkTo: "./how.html" },
  { title: "Costos y tarifas", linkTo: "./taxs.html" },
  { title: "Mis pedidos", linkTo: "./orders.html" },
  { title: "Garantía", linkTo: "./warranty.html" },
];

for (let option of options) {
  const anchor = document.createElement("a");
  const listItem = document.createElement("li");
  anchor.className = "nav-button";
  anchor.textContent = option.title;
  anchor.href = option.linkTo;

  listItem.appendChild(anchor);

  navbarSelector.appendChild(listItem);
}

const footerSelector = document.getElementById("footer");

const optionsFooter = [
  { title: "Ofertas de la semana", opts: ["Laptops", "Audio", "Auticulares"] },
  { title: "Cómo comprar", opts: ["Formas de pago", "Envio", "Devoluciones"] },
  { title: "Costos y tarifas", opts: ["Impuestos", "Facturación"] },
  { title: "Mis pedidos", opts: ["", ""] },
  { title: "Garantia de entrega", opts: [] },
];

// console.log(optionsFooter);

for (let option of optionsFooter) {
  const column = document.createElement("div");
  column.className = "col";

  const lista = document.createElement("ul");

  // console.log(optionsFooter.opts);

  const cabecera = document.createElement('li') ;
  cabecera.className = "col-main-item";
  const anchorCabecera = document.createElement("a");
  anchorCabecera.textContent = option.title;

  cabecera.appendChild(anchorCabecera);
  lista.appendChild(cabecera);


  for (let item of option.opts) {
    // console.log(item);

    const listItem2 = document.createElement("li");
    const anchor2 = document.createElement("a");
    anchor2.textContent = item;
    anchor2.href = "#";

    listItem2.appendChild(anchor2);
    lista.appendChild(listItem2);
  }

  column.appendChild(lista);
  footerSelector.appendChild(column);

}
