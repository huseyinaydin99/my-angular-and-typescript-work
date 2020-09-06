const nesne = {
    ekle : function() {
        console.log(this); //this sözcüğü içinde bulunduğumuz nesneyi verir. ama fonksiyonun içindeyse o zaman fonksiyonun kendisini verir.
    }
}
nesne.ekle();