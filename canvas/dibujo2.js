var c = document.getElementById("seleccionarColor");
var cuadro = document.getElementById("areaDibujo");
var papel = cuadro.getContext("2d");
cuadro.addEventListener("mousedown", lineaInicial);
cuadro.addEventListener("mouseup", finLinea);
cuadro.addEventListener("mousemove", lineaMovimiento);
console.log(addEventListener);
var colorPincel = c;
let mouse = false;
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle= colorPincel;
    lienzo.lineWidth = 1;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function lineaInicial()
{
    mouse = true;
}

function finLinea()
{
    mouse = false;
}
function lineaMovimiento(event)
{
    if(mouse == true){
        dibujarLinea("colorPincel", event.layerX - 1, event.layerY - 1, event.layerX + 1, event.layerY + 1, papel);
    }
}
