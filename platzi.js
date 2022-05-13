var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
   url: "tile.png",
   cargarOK: false
}

var vaca = {
   url: "vaca.png",
   cargarOK: false
};

var cerdo = {
   url: "cerdo.png",
   cargarOK: false
};

var pollo = {
   url: "pollo.png",
   cargarOK: false
};

var cantidad = aleatorio(1, 6);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
   fondo.cargarOK = true
   dibujar()
}

function cargarVacas()
{
   vaca.cargarOK = true
   dibujar()
}

function cargarCerdos()
{
   cerdo.cargarOK = true
   dibujar()
}

function cargarPollos()
{
   pollo.cargarOK = true
   dibujar()
}

function dibujar()
{
   if(fondo.cargarOK)
   {
      papel.drawImage(fondo.imagen, 0, 0);
   }
   if(vaca.cargarOK)
   {
      for (var v=0; v < cantidad; v++) 
      {
         var x = (aleatorio(0, 7)*60);
         var y = (aleatorio(0, 7)*60);
         papel.drawImage(vaca.imagen, x, y);
      }
   }
   if(cerdo.cargarOK)
   {
      for (var c=0; c < cantidad; c++) 
      {
         var x = (aleatorio(0, 7)*60);
         var y = (aleatorio(0, 7)*60);
         papel.drawImage(cerdo.imagen, x, y);
      }
   }
   if(pollo.cargarOK)
   {
      for (var p=0; p < cantidad; p++) 
      {
         var x = (aleatorio(0, 7)*60);
         var y = (aleatorio(0, 7)*60);
         papel.drawImage(pollo.imagen, x, y);
      }
         console.log("Cerdos: " + cantidad)
         console.log("Pollos: " + cantidad)
         console.log("Vacas: " + cantidad)
   }
}

function aleatorio(min, maxi)
{
   var resultado;
   resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
   return resultado;
}