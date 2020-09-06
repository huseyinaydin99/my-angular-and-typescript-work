//DOM(DATA OBJECT MODEL) MANİPÜLASYONU


// document.getElementById("bio").innerHTML = "Merhaba Dünya!";

// var intro1 = document.getElementById("intro1");
// var mesaj = document.getElementById("mesaj");

// mesaj.innerHTML = mesaj.innerHTML;

// var tumListeler = document.getElementsByTagName("ul");
// var sehirler = tumListeler[0];
// var tumElemanlar = sehirler.getElementsByTagName("li");
// for(i = 0; i < tumElemanlar.length; i++){
//     alert(tumElemanlar[i].innerHTML);
// }

//---------------

// var classElemanları = document.getElementsByClassName("intro1");
// alert(classElemanları[0].innerHTML);

//---------------

// var queryElemanlari = document.querySelectorAll("p.intro1"); // p lerde intro1 class'ı uygulananları al
// alert(queryElemanlari.length);

//---------------

// var isimElemanlari = document.getElementsByName("musteriAdi");
// alert(isimElemanlari[0].value);

//--------------

// var huso = document.getElementById("huso").addEventListener("click",rengiDegistir);
// function rengiDegistir(){
//     //alert('selam');
//     document.getElementById("div1").style.backgroundColor = "red";
//     var isimElemanlari = document.getElementsByName("musteriAdi");
//     isimElemanlari[0].value="Merhabalar kardeş";
// }

//--------------

// var node = document.getElementById("agac");
// alert(node.childNodes[0].nodeValue);

//--------------

// var baslik = document.createElement("h1");
// var node = document.createTextNode("Merhaba Java Script");
// baslik.appendChild(node);

// var div1 = document.getElementById("div1");
// var p2 = document.getElementById("p2");
// div1.insertBefore(baslik,p2);

// div1.removeChild(p2);

// var p1 = document.getElementById("p1");
// div1.replaceChild(baslik,p1);