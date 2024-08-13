
var dias =[ "lunes", "martes", "miercoles","jueves","viernes", "sabado", "domingo "];
//concepto de arreglo inicializado

function semanita()
{
   for (let index=0; index<dias.length;index ++){
    document.write(dias[index]+"<br>");

   }
}
//fin semanita
//llamando la funcion

//semanita();


//CREAR UNA FUNCION QUE IMPRIMA 10 VECES UNA FRASE;

var texto="buenos dias";
var k=1;
function frase(){
while(k<=10)
{
document.write(texto+"<br>");
k++;
}
}

//crear una funcion de imprima los valores de 10000 hasta 100000, en rangos de 1000

var inicio=10000;
var fin=100000;

function serie(){

    for (let index= inicio; index<=fin; index=index+1000){
    document.write(index+"--")
    }
}

//crear una funcion de imprima los valores de 100000 hasta 10000, en rangos de 1000



function alreves(){

    
    for (let index=fin; index>=inicio; index=index-1000){
    document.write(index+"--")
    }
}
