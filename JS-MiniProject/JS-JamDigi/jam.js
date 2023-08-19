const jamDoc = document.getElementById("jam");
const menitDoc = document.getElementById("menit");
const deticDoc = document.getElementById("detik");

function updateJam() {
    let j = new Date().getHours();
    let m = new Date().getMinutes();
    let d = new Date().getSeconds();


    j = j < 10 ? "0" + j : j;
    m = m < 10 ? "0" + m : m;
    d = d < 10 ? "0" + d : d;

    jamDoc.innerText = j;
    menitDoc.innerText = m;
    deticDoc.innerText = d;
    setTimeout(() => {
        updateJam();
    }, 1000)
}
updateJam()