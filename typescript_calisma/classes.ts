class Ev{
    public odaSayisi: number;
    private pencereSayisi: number;
    protected kat: number;
    constructor(odaSayisi: number,pencereSayisi: number,kat: number){
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }

    yemekYe(yemek: string) {
        console.log("Afiyet olsun " + yemek);
    }
}

let ev: Ev = new Ev(5,12,3);
ev.yemekYe("Kurufasulye");

class Kisi{
    private isim: string;
    kaydet(){
        console.log("kisi kaydedildi");
    }

    get getIsim():string{
        return this.isim;
    }

    set setIsim(ad: string){
        this.isim = ad;
    }
}
class Musteri extends Kisi{
    satisYap(urun: string){
        console.log("satis yapildi " + urun);
    }
}
class Personel extends Kisi{
    maasOde(maas: number){
        console.log("odendi " + maas);
    }
}
let musteri: Musteri = new Musteri();
musteri.kaydet();
musteri.satisYap("Kulaklık");

let personel: Personel = new Personel();
personel.kaydet();
personel.maasOde(2500);