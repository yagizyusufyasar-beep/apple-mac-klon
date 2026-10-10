let storeacmakapama = document.querySelector('#store-div')
let Store = document.querySelector('#Store')
let macacmakapama = document.querySelector('#mac-div')
let Mac = document.querySelector('#Mac')
let ipadacmakapama = document.querySelector('#İpad-div')
let İpad = document.querySelector('#İpad')
let body = document.querySelector('#body')
let main = document.querySelector('#body-main')
let iphoneacmakapama = document.querySelector('#İphone-div')
let İphone = document.querySelector('#İphone')
let watchacmakapama = document.querySelector('#Watch-div')
let Watch = document.querySelector('#Watch')
let airpodsacmakapama = document.querySelector('#Airpods-div')
let Airpods = document.querySelector('#Airpods')
let tvacmakapama = document.querySelector('#Tv-div')
let Tv = document.querySelector('#Tv')
let eğlenceacmakapama = document.querySelector('#Eğlence-div')
let Eğlence = document.querySelector('#Eğlence')
let aksesuaracmakapama = document.querySelector('#Aksesuarlar-div')
let Aksesuar = document.querySelector('#Aksesuar')
let destekacmakapama = document.querySelector('#Destek-div')
let Destek = document.querySelector('#Destek')
let airtag = document.querySelector('#airtag')
let ileri = document.querySelector('#ileri-1')
let kartsistem1 = document.querySelector('.kartsistem1')
let geri = document.querySelector('#geri-1')
let tümü = document.querySelector("#Tümü");
let Laptop = document.querySelector("#Laptop");
let Masaüstü = document.querySelector("#Masaüstü");
let Ekranlar = document.querySelector("#Ekranlar");
let activeBox = document.querySelector(".active-box");
let list1 = document.querySelector("#list-1")
let neo = document.querySelector("#Neo")
let ileri2 = document.querySelector("#ileri-2")
let geri2 = document.querySelector("#geri-2")
let Neo = document.querySelector("#Neo")
let MacAir = document.querySelector("#Macair")
let MacPro = document.querySelector("#MacPro")
let İmac = document.querySelector("#imac")
let MacMini = document.querySelector("#MacMini")
let MacStudio = document.querySelector("#MacStudio")
let StudioDisplay = document.querySelector("#StudioDisplay")
let StudioDisplayXDR = document.querySelector("#StudioDisplayXDR")
let list3 = document.querySelector("#list3")
let geri3 = document.querySelector("#geri-3")
let ileri3 = document.querySelector("#ileri-3")
let section1 = document.querySelector("#section-1")

function hareketEt(element) {
    activeBox.style.width = element.offsetWidth + "px";
    activeBox.style.left = element.offsetLeft + "px";
}

    hareketEt(tümü);
    
tümü.style.color = "white";
tümü.style.display =  "block";
tümü.style.position = "relative" ;
tümü.style.zİndex =  "999999";

tümü.addEventListener("click", function () {
    hareketEt(tümü);

tümü.style.color = "white";
tümü.style.display =  "block";
tümü.style.position = "relative" ;
tümü.style.zİndex =  "999999";

Laptop.style.color = "black";
Laptop.style.display =  "block";
Laptop.style.position = "relative" ;
Laptop.style.zİndex =  "999999";

Masaüstü.style.color = "black";
Masaüstü.style.display =  "block";
Masaüstü.style.position = "relative" ;
Masaüstü.style.zİndex =  "999999";

Ekranlar.style.color = "black";
Ekranlar.style.display =  "block";
Ekranlar.style.position = "relative" ;
Ekranlar.style.zİndex =  "999999";
 

Neo.style.display = "flex"
MacAir.style.display = "flex"
MacMini.style.display = "flex"
MacPro.style.display = "flex"
MacStudio.style.display = "flex"
StudioDisplay.style.display = "flex"
StudioDisplayXDR.style.display = "flex"
İmac.style.display = "flex"

ileri2.style.visibility = "visible"

});

Laptop.addEventListener("click", function () {
    hareketEt(Laptop);

    tümü.style.color = "black";
tümü.style.display =  "block";
tümü.style.position = "relative" ;
tümü.style.zİndex =  "999999";

Laptop.style.color = "white";
Laptop.style.display =  "block";
Laptop.style.position = "relative" ;
Laptop.style.zİndex =  "999999";

Masaüstü.style.color = "black";
Masaüstü.style.display =  "block";
Masaüstü.style.position = "relative" ;
Masaüstü.style.zİndex =  "999999";

Ekranlar.style.color = "black";
Ekranlar.style.display =  "block";
Ekranlar.style.position = "relative" ;
Ekranlar.style.zİndex =  "999999";

Neo.style.display = "flex"
MacAir.style.display = "flex"
MacMini.style.display = "none"
MacPro.style.display = "flex"
MacStudio.style.display = "none"
StudioDisplay.style.display = "none"
StudioDisplayXDR.style.display = "none"
İmac.style.display = "none"


ileri2.style.visibility = "hidden"
});

Masaüstü.addEventListener("click", function () {
    hareketEt(Masaüstü);


    tümü.style.color = "black";
tümü.style.display =  "block";
tümü.style.position = "relative" ;
tümü.style.zİndex =  "999999";

Laptop.style.color = "black";
Laptop.style.display =  "block";
Laptop.style.position = "relative" ;
Laptop.style.zİndex =  "999999";

Masaüstü.style.color = "white";
Masaüstü.style.display =  "block";
Masaüstü.style.position = "relative" ;
Masaüstü.style.zİndex =  "999999";

Ekranlar.style.color = "black";
Ekranlar.style.display =  "block";
Ekranlar.style.position = "relative" ;
Ekranlar.style.zİndex =  "999999";

Neo.style.display = "none"
MacAir.style.display = "none"
MacMini.style.display = "flex"
MacPro.style.display = "none"
MacStudio.style.display = "flex"
StudioDisplay.style.display = "none"
StudioDisplayXDR.style.display = "none"
İmac.style.display = "flex"

geri2.style.visibility = "hidden"
ileri2.style.visibility = "hidden"
});

Ekranlar.addEventListener("click", function () {
    hareketEt(Ekranlar);

    tümü.style.color = "black";
tümü.style.display =  "block";
tümü.style.position = "relative" ;
tümü.style.zİndex =  "999999";

Laptop.style.color = "black";
Laptop.style.display =  "block";
Laptop.style.position = "relative" ;
Laptop.style.zİndex =  "999999";

Masaüstü.style.color = "black";
Masaüstü.style.display =  "block";
Masaüstü.style.position = "relative" ;
Masaüstü.style.zİndex =  "999999";

Ekranlar.style.color = "white";
Ekranlar.style.display =  "block";
Ekranlar.style.position = "relative" ;
Ekranlar.style.zİndex =  "999999";

Neo.style.display = "none"
MacAir.style.display = "none"
MacMini.style.display = "none"
MacPro.style.display = "none"
MacStudio.style.display = "none"
StudioDisplay.style.display = "flex"
StudioDisplayXDR.style.display = "flex"
İmac.style.display = "none"

ileri2.style.visibility = "hidden"
geri2.style.visibility = "hidden"
});




storeacmakapama.classList.add('gizli')
macacmakapama.classList.add('gizli')
ipadacmakapama.classList.add('gizli')
iphoneacmakapama.classList.add('gizli')
watchacmakapama.classList.add('gizli')
airpodsacmakapama.classList.add('gizli')
eğlenceacmakapama.classList.add('gizli')
tvacmakapama.classList.add('gizli')
destekacmakapama.classList.add('gizli')
aksesuaracmakapama.classList.add('gizli')

Store.addEventListener("mouseenter", function () {

    console.log("asdas");

    storeacmakapama.classList.add('gorunur')
    storeacmakapama.classList.add('one-cıkma')
  section1.classList.add('bulanık')
    main.classList.add('bulanık')
  section1.classList.add('bulanık')

    
    iphoneacmakapama.classList.remove('gorunur-iphone')
    macacmakapama.classList.remove('gorunur-mac')
    ipadacmakapama.classList.remove('gorunur')
    airpodsacmakapama.classList.remove('gorunur-iphone')
    watchacmakapama.classList.remove('gorunur-Watch')
    eğlenceacmakapama.classList.remove('gorunur-Eğlence')
    tvacmakapama.classList.remove('gorunur-Tv')
    destekacmakapama.classList.remove('gorunur-Destek')
    aksesuaracmakapama.classList.remove('gorunur-aksesuar')

})

Mac.addEventListener("mouseenter", function () {

    console.log("asdas");

    macacmakapama.classList.add('gorunur-mac')
    macacmakapama.classList.add('one-cıkma')

    main.classList.add('bulanık')
  section1.classList.add('bulanık')


    storeacmakapama.classList.remove('gorunur')
    iphoneacmakapama.classList.remove('gorunur-iphone')
    ipadacmakapama.classList.remove('gorunur')
    airpodsacmakapama.classList.remove('gorunur-iphone')
    watchacmakapama.classList.remove('gorunur-Watch')
    eğlenceacmakapama.classList.remove('gorunur-Eğlence')
    tvacmakapama.classList.remove('gorunur-Tv')
    destekacmakapama.classList.remove('gorunur-Destek')
    aksesuaracmakapama.classList.remove('gorunur-aksesuar')
})


İpad.addEventListener("mouseenter", function () {

    console.log("asdas");

    ipadacmakapama.classList.add('gorunur')
    ipadacmakapama.classList.add('one-cıkma')
    main.classList.add('bulanık')
  section1.classList.add('bulanık')
    storeacmakapama.classList.remove('gorunur')
    iphoneacmakapama.classList.remove('gorunur-iphone')
    macacmakapama.classList.remove('gorunur-mac')
    airpodsacmakapama.classList.remove('gorunur-iphone')
    watchacmakapama.classList.remove('gorunur-Watch')
    eğlenceacmakapama.classList.remove('gorunur-Eğlence')
    tvacmakapama.classList.remove('gorunur-Tv')
    destekacmakapama.classList.remove('gorunur-Destek')
    aksesuaracmakapama.classList.remove('gorunur-aksesuar')
})



İphone.addEventListener("mouseenter", function () {

    console.log("asdas");

    iphoneacmakapama.classList.add('gorunur-iphone')
    iphoneacmakapama.classList.add('one-cıkma')
    main.classList.add('bulanık')
  section1.classList.add('bulanık')
    storeacmakapama.classList.remove('gorunur')
    macacmakapama.classList.remove('gorunur-mac')
    ipadacmakapama.classList.remove('gorunur')
    airpodsacmakapama.classList.remove('gorunur-iphone')
    watchacmakapama.classList.remove('gorunur-Watch')
    eğlenceacmakapama.classList.remove('gorunur-Eğlence')
    tvacmakapama.classList.remove('gorunur-Tv')
    destekacmakapama.classList.remove('gorunur-Destek')
    aksesuaracmakapama.classList.remove('gorunur-aksesuar')
})

Watch.addEventListener("mouseenter", function () {

    console.log("asdas");

    watchacmakapama.classList.add('gorunur-Watch')
    watchacmakapama.classList.add('one-cıkma')
    main.classList.add('bulanık')
  section1.classList.add('bulanık')
    storeacmakapama.classList.remove('gorunur')
    iphoneacmakapama.classList.remove('gorunur-iphone')
    macacmakapama.classList.remove('gorunur-mac')
    ipadacmakapama.classList.remove('gorunur')
    airpodsacmakapama.classList.remove('gorunur-iphone')
    eğlenceacmakapama.classList.remove('gorunur-Eğlence')
    tvacmakapama.classList.remove('gorunur-Tv')
    destekacmakapama.classList.remove('gorunur-Destek')
    aksesuaracmakapama.classList.remove('gorunur-aksesuar')
})

Airpods.addEventListener("mouseenter", function () {

    console.log("asdas");

    airpodsacmakapama.classList.add('gorunur-iphone')
    airpodsacmakapama.classList.add('one-cıkma')
    main.classList.add('bulanık')
  section1.classList.add('bulanık')
    storeacmakapama.classList.remove('gorunur')
    iphoneacmakapama.classList.remove('gorunur-iphone')
    macacmakapama.classList.remove('gorunur-mac')
    ipadacmakapama.classList.remove('gorunur')
    watchacmakapama.classList.remove('gorunur-Watch')
    eğlenceacmakapama.classList.remove('gorunur-Eğlence')
    tvacmakapama.classList.remove('gorunur-Tv')
    destekacmakapama.classList.remove('gorunur-Destek')
    aksesuaracmakapama.classList.remove('gorunur-aksesuar')
})

Tv.addEventListener("mouseenter", function () {

    console.log("asdas");

    tvacmakapama.classList.add('gorunur-Tv')
    tvacmakapama.classList.add('one-cıkma')
    main.classList.add('bulanık')
  section1.classList.add('bulanık')
    storeacmakapama.classList.remove('gorunur')
    iphoneacmakapama.classList.remove('gorunur-iphone')
    macacmakapama.classList.remove('gorunur-mac')
    ipadacmakapama.classList.remove('gorunur')
    airpodsacmakapama.classList.remove('gorunur-iphone')
    watchacmakapama.classList.remove('gorunur-Watch')
    eğlenceacmakapama.classList.remove('gorunur-Eğlence')
    destekacmakapama.classList.remove('gorunur-Destek')
    aksesuaracmakapama.classList.remove('gorunur-aksesuar')
})

Eğlence.addEventListener("mouseenter", function () {

    console.log("asdas");
  section1.classList.add('bulanık')
    eğlenceacmakapama.classList.add('gorunur-Eğlence')
    eğlenceacmakapama.classList.add('one-cıkma')
    main.classList.add('bulanık')

    storeacmakapama.classList.remove('gorunur')
    iphoneacmakapama.classList.remove('gorunur-iphone')
    macacmakapama.classList.remove('gorunur-mac')
    ipadacmakapama.classList.remove('gorunur')
    airpodsacmakapama.classList.remove('gorunur-iphone')
    watchacmakapama.classList.remove('gorunur-Watch')
    tvacmakapama.classList.remove('gorunur-Tv')
    destekacmakapama.classList.remove('gorunur-Destek')
    aksesuaracmakapama.classList.remove('gorunur-aksesuar')
})

Aksesuar.addEventListener("mouseenter", function () {

    console.log("asdas");

    aksesuaracmakapama.classList.add('gorunur-aksesuar')
    main.classList.add('bulanık')
  section1.classList.add('bulanık')
    storeacmakapama.classList.remove('gorunur')
    iphoneacmakapama.classList.remove('gorunur-iphone')
    macacmakapama.classList.remove('gorunur-mac')
    ipadacmakapama.classList.remove('gorunur')
    airpodsacmakapama.classList.remove('gorunur-iphone')
    watchacmakapama.classList.remove('gorunur-Watch')
    eğlenceacmakapama.classList.remove('gorunur-Eğlence')
    tvacmakapama.classList.remove('gorunur-Tv')
    destekacmakapama.classList.remove('gorunur-Destek')
})

Destek.addEventListener("mouseenter", function () {

    console.log("asdas");

    destekacmakapama.classList.add('gorunur-Destek')
    main.classList.add('bulanık')
  section1.classList.add('bulanık')
    storeacmakapama.classList.remove('gorunur')
    iphoneacmakapama.classList.remove('gorunur-iphone')
    macacmakapama.classList.remove('gorunur-mac')
    ipadacmakapama.classList.remove('gorunur')
    airpodsacmakapama.classList.remove('gorunur-iphone')
    watchacmakapama.classList.remove('gorunur-Watch')
    eğlenceacmakapama.classList.remove('gorunur-Eğlence')
    tvacmakapama.classList.remove('gorunur-Tv')
    aksesuaracmakapama.classList.remove('gorunur-aksesuar')
})

main.addEventListener("mouseenter", function () {

    console.log("asdras");

    storeacmakapama.classList.remove('gorunur')
    main.classList.remove('bulanık')
  section1.classList.remove('bulanık')
    iphoneacmakapama.classList.remove('gorunur-iphone')
    macacmakapama.classList.remove('gorunur-mac')
    ipadacmakapama.classList.remove('gorunur')
    airpodsacmakapama.classList.remove('gorunur-iphone')
    watchacmakapama.classList.remove('gorunur-Watch')
    eğlenceacmakapama.classList.remove('gorunur-Eğlence')
    tvacmakapama.classList.remove('gorunur-Tv')
    destekacmakapama.classList.remove('gorunur-Destek')
    aksesuaracmakapama.classList.remove('gorunur-aksesuar')

})


function para(params) {
    airtag.classList.add("mavis")
}

para()

ileri.addEventListener("click", () => {
    kartsistem1.scrollBy({
        left: 150,
    });
});

geri.addEventListener("click", () => {
    kartsistem1.scrollBy({
        left: -152,

    });
});

kartsistem1.addEventListener('scroll', function (params) {

    if (kartsistem1.scrollLeft + kartsistem1.clientWidth >= kartsistem1.scrollWidth - 5) {

        ileri.style.visibility = "hidden";
    } else {
        ileri.style.visibility = "visible";
    }
    if (kartsistem1.scrollLeft > 0) {
        geri.style.visibility = "visible";

    }
    else {
        geri.style.visibility = "hidden";
    }
})

geri.style.visibility = "hidden";


Laptop.addEventListener('click', function (params) {
    Laptop.classList.add("active")
    tümü.classList.remove("active")
    Masaüstü.classList.remove("active")
    Ekranlar.classList.remove("active")
})  

tümü.addEventListener('click', function (params) {
    Laptop.classList.remove("active")
    tümü.classList.add("active")
    Masaüstü.classList.remove("active")
    Ekranlar.classList.remove("active")
})  
Masaüstü.addEventListener('click', function (params) {
    Laptop.classList.remove("active")
    tümü.classList.remove("active")
    Masaüstü.classList.add("active")
    Ekranlar.classList.remove("active")
})  
Ekranlar.addEventListener('click', function (params) {
    Laptop.classList.remove("active")
    tümü.classList.remove("active")
    Masaüstü.classList.remove("active")
    Ekranlar.classList.add("active")
})  

ileri3.addEventListener("click", () => {
    list3.scrollBy({
        left: 344,
    });
});

geri3.addEventListener("click", () => {
    list3.scrollBy({
        left: -344,
    });
});

list3.addEventListener('scroll', function (params) {

    if (list3.scrollLeft + list3.clientWidth >= list3.scrollWidth - 5) {

        ileri3.style.visibility = "hidden";
    } else {
        ileri3.style.visibility = "visible";
    }
    if (list3.scrollLeft > 0) {
        geri3.style.visibility = "visible";

    }
    else {
        geri3.style.visibility = "hidden";
    }
})

geri.style.visibility = "hidden";
    geri3.style.visibility = "hidden";
        geri2.style.visibility = "hidden";