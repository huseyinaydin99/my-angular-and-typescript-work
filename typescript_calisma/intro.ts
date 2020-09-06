function greet(mesaj: string):string{
    return "Merhaba Dünya " + mesaj;
}
let mesaj: string = greet("Selamlar");
console.log(mesaj);

let sayi:number = 10;
let msg:string = "Niğde";
let dogruMu:boolean = true;
let sayilar:number[] = [1,2,3,4];
let sayilar2: Array<number> = [1,2,3,4];
let dizi:[number,string] = [10,"Merhaba"];
enum Renk{
    mavi=1,kirmizi,yesil
}

let renk:Renk = Renk.kirmizi;
let deger:any = "Ankara";
let def:void = undefined;
function yaz(mesaj:string):void{
    console.log(mesaj);
}
let referans = null; //null değer değildir. referanstır.