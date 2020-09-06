abstract class KrediBase{
    constructor(){

    }

    kaydet():void{
        console.log("kaydedildi");
    }

    abstract hesapla():void;
}

class TuketiciKredi extends KrediBase{
    constructor(){
        super();
    }

    hesapla(): void {
        console.log("tuketici kredi hesaplandı");
    }
}

class MortgageKredi extends KrediBase{
    constructor(){
        super();
    }

    hesapla(): void {
        console.log("mortgage kredi hesaplandı");
    }
}

let tuketiciKredidisi = new TuketiciKredi();
tuketiciKredidisi.kaydet();
tuketiciKredidisi.hesapla();