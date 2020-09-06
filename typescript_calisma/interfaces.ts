interface Product {
    id: number;
    name: string;
    unitPrice: number;
}

class Product2{
    id: number;
    name: string;
    unitPrice: number;
    constructor(id: number = 1,name: string = "Laptop",unitPrice: number = 3000){
        this.id = id;
        this.name = name;
        this.unitPrice = unitPrice;
    }
}

function save(product: Product) {
    console.log(product);
}

function save2(product: Product) {
    console.log(product);
}

save({ id: 1, name: "Laptop", unitPrice: 2500 });
save2(new Product2());

interface IUrunService{
    save();
}
class UrunServiceImpl implements IUrunService{
    save() {
        console.log("kaydedildi");
    }

}