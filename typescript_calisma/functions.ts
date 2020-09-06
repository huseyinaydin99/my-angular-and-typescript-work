function topla(sayi1: number, sayi2: number):number{
    return sayi1 + sayi2;
}
let toplayıcı = function topla2(sayi1: number, sayi2: number):number{
    return sayi1 + sayi2;
}
let toplam = topla(10,5);
let toplam2 = toplayıcı(10,4);
console.log(toplam);
console.log(toplam2);

function topla3(sayi1: number,sayi2?: number):number{
    if(!sayi2){
        return 0;
    }
    return sayi1 + sayi2;
}
function topla4(sayi1: number,sayi2: number=40):number{
    return sayi1 + sayi2;
}
console.log(topla3(10));
console.log(topla4(10));
function davetEt(ilkDavetli: string,...digerleri: string[]){
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log(davetEt("Hüseyin","Rümeysa","Yasin","Ömer"));
