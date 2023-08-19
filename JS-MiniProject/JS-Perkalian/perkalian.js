const angka1 = Math.ceil(Math.random() * 10)
const angka2 = Math.ceil(Math.random() * 10)

const soalDoc = document.getElementById("soal");
const inputDoc = document.getElementById("input");
const formDoc = document.getElementById("form");
const skorDoc = document.getElementById("skor");

let skor = JSON.parse(localStorage.getItem("skor"));

if (!skor) {
    skor = 0;
}

skorDoc.innerText = `Nilai : ${skor}`

soalDoc.innerText = `Apa hasil dari ${angka1} dikali ${angka2}?`

const benarJwb = angka1 * angka2;

formDoc.addEventListener("submit", () => {
    const userJwb = +inputDoc.value
    if (userJwb === benarJwb) {
        skor++;
        updateLocalStorage()
    } else {
        skor--;
        updateLocalStorage()
    }

});

function updateLocalStorage() {
    localStorage.setItem("skor", JSON.stringify(skor))
}