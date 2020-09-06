var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }
    Ev.prototype.yemekYe = function (yemek) {
        console.log("Afiyet olsun " + yemek);
    };
    return Ev;
}());
var ev = new Ev(5, 12, 3);
ev.yemekYe("Kurufasulye");
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Kisi.prototype.kaydet = function () {
        console.log("kisi kaydedildi");
    };
    Object.defineProperty(Kisi.prototype, "getIsim", {
        get: function () {
            return this.isim;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kisi.prototype, "setIsim", {
        set: function (ad) {
            this.isim = ad;
        },
        enumerable: false,
        configurable: true
    });
    return Kisi;
}());
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri.prototype.satisYap = function (urun) {
        console.log("satis yapildi " + urun);
    };
    return Musteri;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasOde = function (maas) {
        console.log("odendi " + maas);
    };
    return Personel;
}(Kisi));
var musteri = new Musteri();
musteri.kaydet();
musteri.satisYap("Kulaklık");
var personel = new Personel();
personel.kaydet();
personel.maasOde(2500);
