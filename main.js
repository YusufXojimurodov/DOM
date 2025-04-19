let ism = prompt("Ismingizni kiriting")
let yosh = prompt("Yoshingizni kiriting")
let bal = +prompt("Ballingizni kiriting")

let malumot = " Ism: " + ism + "<br>" + " Yosh: " + yosh + "<br>" + " Ball: " + bal

let malumotchiq = document.getElementById("malumot").innerHTML = malumot


if (bal >= 80) {
    document.getElementById("kirdingiz").innerHTML = "Siz imtihondan o'tdingiz"
} else {
     document.getElementById("kirdingiz").innerHTML = "Siz imtihondan o'ta olmadingiz"
}



