document.addEventListener("DOMContentLoaded", () => {
    const borrarbtn = document.getElementById("borrarbtn");
    
    if (borrarbtn) {
        borrarbtn.addEventListener("click", () => {
            document.body.innerHTML = "";
        });
    }
});