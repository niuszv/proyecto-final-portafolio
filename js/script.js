document.addEventListener("DOMContentLoaded", () => {
    const temabtn = document.getElementById("temabtn")
    const temaguardado = localStorage.getItem("tema")
     if (temaguardado === "claro") {
        document.body.classList.add("modo-claro")
     }
    
    if (temabtn) {
        temabtn.addEventListener("click", () => {
            document.body.classList.toggle("modo-claro");
            if (document.body.classList.contains("modo-claro")) {
                localStorage.setItem("tema", "claro");
            } else {
                localStorage.setItem("tema", "oscuro")
            }
        }); 
    }
    
    
    
    
    
    const borrarbtn = document.getElementById("borrarbtn");
    
    if (borrarbtn) {
        borrarbtn.addEventListener("click", () => {
            document.body.innerHTML = "";
        });
    }
});