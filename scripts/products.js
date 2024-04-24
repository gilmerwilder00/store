
class Product {

    constructor(title, description, price, discount, taxes, img){
        this.title= title;
        this.description= description;
        this.price= price;
        this.discount= discount;
        this.taxes = taxes;
        this.img = img;
    }
}


const prod1 =  new Product("Cuaderno Pro 15.1", "Space Gray", "$750", "%51 Off", "Incluye impuesto País y percepción AFIP", './assets/mock1.jpg');
const prod2 =  new Product("Lapiz Pro 15.2", "Space Gray2", "$750", "%52 Off", "Incluye impuesto País y percepción AFIP", './assets/mock1.jpg');
const prod3 =  new Product("Tajador Pro 15.3", "Space Gray3", "$750", "%53 Off", "Incluye impuesto País y percepción AFIP", './assets/mock1.jpg');
const prod4 =  new Product("Celular Pro 15.3", "Space Gray4", "$750", "%54 Off", "Incluye impuesto País y percepción AFIP", './assets/mock1.jpg');
const prod5 =  new Product("Laptop Pro 15.5", "Space Gray5", "$750", "%55 Off", "Incluye impuesto País y percepción AFIP", './assets/mock1.jpg');
const prod6 =  new Product("teclado Pro 15.6", "Space Gray6", "$750", "%56 Off", "Incluye impuesto País y percepción AFIP", './assets/mock1.jpg');

const products = [prod1, prod2, prod3, prod4, prod5, prod6];
