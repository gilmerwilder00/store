
class Product {

    constructor(id, name, description, price, discount, taxes, img,colors, images ){
        this.id = id;
        this.name= name;
        this.description= description;
        this.price= price;
        this.discount= discount;
        this.taxes = taxes;
        this.img = img;
        this.colors = colors;
        this.images = images;
    }
}


const prod1 =  new Product('PR001',"Cuaderno Pro 15.1", "Space Gray", 100, "%51 Off", "Incluye impuesto País y percepción AFIP", './assets/mock1.jpg', ["Blue", "Gray","Green" ], ["../assets/mock1.jpg", "../assets/gilmer.png"] );
const prod2 =  new Product('PR002',"Lapiz Pro 15.2", "Space Gray2", 200, "%52 Off", "Incluye impuesto País y percepción AFIP", './assets/mock1.jpg', ["Blue", "Gray" ], ["../assets/mock1.jpg", "../assets/gilmer.png"] );
const prod3 =  new Product('PR003',"Tajador Pro 15.3", "Space Gray3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatibus nihil hic voluptates. Asperiores recusandae, laudantium soluta natus in eos non, repellendus maxime totam quae doloremque illum officiis, fuga et?", 300, "%53 Off", "Incluye impuesto País y percepción AFIP", './assets/mock1.jpg', ["Blue", "Gray" ], ["../assets/mock1.jpg", "../assets/gilmer.png"] );
const prod4 =  new Product('PR004', "Celular Pro 15.3", "Space Gray4", 400, "%54 Off", "Incluye impuesto País y percepción AFIP", './assets/mock1.jpg', ["Blue", "Gray" ], ["../assets/mock1.jpg", "../assets/gilmer.png"] );
const prod5 =  new Product('PR005',"Laptop Pro 15.5", "Space Gray5", 500, "%55 Off", "Incluye impuesto País y percepción AFIP", './assets/mock1.jpg', ["Blue", "Gray" ], ["../assets/mock1.jpg", "../assets/gilmer.png"] );
const prod6 =  new Product('PR006', "teclado Pro 15.6", "Space Gray6 ", 600, "%56 Off", "Incluye impuesto País y percepción AFIP", './assets/mock1.jpg', ["Blue", "gray" ], ["../assets/mock1.jpg", "../assets/gilmer.png"]);

const products = [prod1, prod2, prod3, prod4, prod5, prod6];
