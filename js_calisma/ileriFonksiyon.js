let f1 = () => console.log("selam");
let f2 = () =>{
    console.log("selam");
    console.log("selam 2");
} 

let topla = (sayi1,sayi2) =>{
    return sayi1 + sayi2;
} 

f1();
f2();
var toplam = topla(10,10);
console.log(toplam);