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

function kullaniciVarmi(email,sifre){
    for(i = 0; i < kullanicilar.length; i++){
        if(kullanicilar[i].email == email && kullanicilar[i].sifre == sifre){
            return true;
        }
    }
    return false;
}

function giris(){
    if((kullaniciVarmi(email,sifre)))
        console.log(twitler);
    else
        console.log("kullanıcı adı veya şifre hatalı!");
}