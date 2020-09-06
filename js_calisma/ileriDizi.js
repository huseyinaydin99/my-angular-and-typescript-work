const dizi = [1,2,3,4];
const kareDizisi = [];

dizi.forEach(sayi=>{
    kareDizisi.push(sayi * sayi);
});

console.log(kareDizisi);

const mapDizi = dizi.map(sayi=>sayi*2);
console.log(mapDizi);

const filterDizi = dizi.filter(sayi => sayi>2);
console.log(filterDizi);

const toplam = dizi.reduce(acc,sayi=>{
    return acc + sayi;
},10);
console.log(toplam);