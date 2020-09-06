var sehirler = ["Niğde","Ankara","İstanbul"];
for(i = 0; i < sehirler.length; i++){
    console.log(sehirler[i]);
}

var i = 0;

do{
    console.log(i);
    i++;
}
while(i < 10);

sehirler.forEach(element => {
    console.log(element);
});