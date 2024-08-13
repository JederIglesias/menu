var inicio=parseInt(prompt("Ingrese el valor inicial de la tabla"));
var fin=parseInt(prompt("Ingrese el valor final de la tabla"));

function tablita(inicio,fin){
    var valor=parseInt(prompt("Ingrese la tabla de multipplicar que desee obtener"))

    if(inicio<=fin){
        document.write("mostrando el contenido de forma ascendente<br>")
        for(let f=inicio;f<=fin; f++){
        var tabla= f*valor;

       document.write(f+"*"+valor+"="+tabla+'<br>')
    }
    }
else{
    document.write("mostrando el contenido de forma descendente<br>")
    for(let f=inicio;f>=fin; f--){
    var tabla= f*valor;

   document.write(f+"*"+valor+"="+tabla+'<br>')

}
}
}















/*var inicio=parseInt(prompt("Ingrese el valor inicial de la tabla"));
var fin=parseInt(prompt("Ingrese el valor final de la tabla"));

function tablita(inicio,fin){
    var valor=parseInt(prompt("Ingrese la tabla de multipplicar que desee obtener"))


    for(let f=inicio;f<=fin; f++){
 var tabla= f*valor;
document.write(f+"*"+valor+"="+tabla+'<br>')
    }
}

function Tablita(){
    let valor=parseInt(prompt("ingrese la tabla de multiplicar que quiere obtener"))
    for(let f=1;f<=10; f++){
let tabla= f*valor;
document.write(f+"*"+valor+"="+tabla+'<br>')
    }
}
*/