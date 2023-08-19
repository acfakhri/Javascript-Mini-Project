const textareaEl = document.getElementById("realtime")

const totalCounterEl = document.getElementById("total-counter")

const remainCounterEl = document.getElementById("remain-counter")
textareaEl.addEventListener("keyup", () => {
    updateCounter()
});
updateCounter()

function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length
    remainCounterEl.innerText =
        textareaEl.getAttribute("maxLength") -
        textareaEl.value.length;


}