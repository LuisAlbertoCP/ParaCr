function moverPosicionRamdom(elm){
    elm.style.position = "absolute";
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + "px";
    elm.style.top = Math.random() * (window.innerWidth - elm.offsetWidth) + "px";


}

let btnSi = document.getElementById("btn_si")
let btnNo = document.getElementById("btn_no")
let divModoSexo = document.getElementsByClassName("modo_sexo")[0]

btnNo.addEventListener("mouseenter", function(e){ moverPosicionRamdom(e.target)})

btnSi.addEventListener("click", function(e) {
    alert("Sabia que dirias que si, casemonos y tengamos hijos")
    divModoSexo.style.display = "block";
    const cancion = new Audio("03 - J Balvin - Rojo.mp3");
    cancion.play();

}
)