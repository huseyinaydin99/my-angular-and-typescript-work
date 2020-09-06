var kullanicilar = [
    {email:"huseyinaydin99@gmail.com",sifre:"123"},
    {email:"ysn5115@gmail.com",sifre:"123"}
];

var twitler = [
    {email:"huseyinaydin99@gmail.com",twit:"selam1"},
    {email:"ysn5115@gmail.com",twit:"selam2"}
];

var email = prompt("Email?");
var sifre = prompt("Sifre?");
giris();

function giris(){
    if((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) || (email == kullanicilar[0].email && sifre == kullanicilar[0].sifre))
        console.log(twitler);
    else
        console.log("kullanıcı adı veya şifre hatalı!");
}