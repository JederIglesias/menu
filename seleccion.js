 //declarando las variables
 var servicio;
 var costo;
 var forma;
 var tarjeta;
 
 //captura de datos
 alert("servicios disponibles: ");
 servicio=parseInt(prompt("Ingrese\n 1. para alisado \n 2. para uñas\n 3. para tinte \n 4. masaje \n 5.pestañas"));
 while(servicio<1 || servicio >5)
  {
     servicio=parseInt(prompt("Ingrese\n 1. para alisado \n 2. para uñas\n 3. para tinte \n 4. masaje \n 5.pestañas"));
 
  }   
  forma=parseInt(prompt("Ingrese \n 1- para Credito \n 2- para Efectivo"));
  while(forma <1 || forma >2)
 
     {
         forma=parseInt(prompt("Ingrese \n 1- para Credito \n 2- para Efectivo")); 
     }
     alert("Posee tarjeta de cliente frecuente?") 
     tarjeta=parseInt(prompt("Respuesta: \n 1- S I \n 2- N O ")); 
     while(tarjeta<1 || tarjeta>2)  
     {
       
      tarjeta=parseInt(prompt("Respuesta: \n 1- S I \n 2- N O "));   
     }   
 
     //procesos
     switch(servicio)
     {
     case 1:
     {
         costo=50;
         break;
     }
     case 2:
         {
             costo=25;
             break;
         }
     case 3 :
         {
             costo=35;
             break;  
         }
     case 4 :
            {
         costo=25;
        break;  
            }
     case 5 :
                {
        costo=15;
        break;  
                }     
     }
     //Impresion
 
     if(forma==1 && servicio==1 && tarjeta==1) 
     {
     document.write("Usted se hizo un alisado<br>");
     document.write("Usted ha cancelado con tarjeta de credito<br>");
     document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
     document.write("Se le hara un recargo del 10% <br>"+(costo*0.10).toFixed(2)+ "<br>");
     document.write("El Pago total sera de: <br>"+(costo*1.10).toFixed(2));
     document.write("Por tu tarjeta de cliente frecuente recibes un descuento de : <br>"+(costo*1.10)*0.75.toFixed(2));


 }else if (forma==1 && servicio==2&&tarjeta==1){
     
     document.write("Usted se hizo unas uñas <br>");
     document.write("Usted ha cancelado con tarjeta de credito<br>");
     document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
     document.write("Se le hara un recargo del 10% <br>"+(costo*0.10).toFixed(2)+ "<br>");
     document.write("El Pago total sera de: <br>"+(costo*1.10).toFixed(2));
     document.write("Por tu tarjeta de cliente frecuente recibes un descuento de : <br>"+(costo*1.10)*0.75.toFixed(2));
 }else if (forma==1 && servicio==3 && tarjeta==1){
    
     document.write("Usted se hizo un tinte<br>");
     document.write("Usted ha cancelado con tarjeta de credito<br>");
     document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
     document.write("Se le hara un recargo del 10% <br>"+(costo*0.10).toFixed(2)+ "<br>");
     document.write("El Pago total sera de: <br>"+(costo*1.10).toFixed(2));
     document.write("Por tu tarjeta de cliente frecuente recibes un descuento de : <br>"+(costo*1.10)*0.75.toFixed(2));

 
 }
 else if (forma==1 && servicio==4 && tarjeta==1){
    
    document.write("Usted se hizo un tinte<br>");
    document.write("Usted ha cancelado con tarjeta de credito<br>");
    document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
    document.write("Se le hara un recargo del 10% <br>"+(costo*0.10).toFixed(2)+ "<br>");
    document.write("El Pago total sera de: <br>"+(costo*1.10).toFixed(2));
    document.write("Por tu tarjeta de cliente frecuente recibes un descuento de : <br>"+(costo*1.10)*0.75.toFixed(2));

}
else if (forma==1 && servicio==5 && tarjeta==1){
    
    document.write("Usted se hizo un tinte<br>");
    document.write("Usted ha cancelado con tarjeta de credito<br>");
    document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
    document.write("Se le hara un recargo del 10% <br>"+(costo*0.10).toFixed(2)+ "<br>");
     document.write("El Pago total sera de: <br>"+(costo*1.10).toFixed(2));
     document.write("Por tu tarjeta de cliente frecuente recibes un descuento de : <br>"+(costo*1.10)*0.75.toFixed(2));

}
    else if(forma==2 && servicio==1&& tarjeta==1){
     document.write("Usted se hizo un alisado<br>");
     document.write("Usted ha cancelado con efectivo<br>");
     document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
     document.write("El Pago total sera de: <br>"+(costo));
     document.write("Por tu tarjeta de cliente frecuente recibes un descuento de : 25% <br>"+(costo)*0.75.toFixed(2));
 }
 else if(forma==2 && servicio==2&& tarjeta==1){
     document.write("Usted se hizo un alisado<br>");
     document.write("Usted ha cancelado con efectivo<br>");
     document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
     document.write("El Pago total sera de: <br>"+(costo));
     document.write("Por tu tarjeta de cliente frecuente recibes un descuento de : 25% <br>"+(costo)*0.75.toFixed(2));
 }
 else if(forma==2 && servicio==3&& tarjeta==1){
     document.write("Usted se hizo un alisado<br>");
     document.write("Usted ha cancelado con efectivo<br>");
     document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
     document.write("El Pago total sera de: <br>"+(costo));
     document.write("Por tu tarjeta de cliente frecuente recibes un descuento de : 25% <br>"+(costo)*0.75.toFixed(2));
 }
 else if(forma==2 && servicio==4&& tarjeta==1){
    document.write("Usted se hizo un alisado<br>");
    document.write("Usted ha cancelado con efectivo<br>");
    document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
    document.write("El Pago total sera de: <br>"+(costo));
    document.write("Por tu tarjeta de cliente frecuente recibes un descuento de : 25% <br>"+(costo)*0.75.toFixed(2));
}
else if(forma==2 && servicio==5&& tarjeta==1){
    document.write("Usted se hizo un alisado<br>");
    document.write("Usted ha cancelado con efectivo<br>");
    document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
    document.write("El Pago total sera de: <br>"+(costo));
    document.write("Por tu tarjeta de cliente frecuente recibes un descuento de : 25% <br>"+(costo)*0.75.toFixed(2));
}
//-------------------------------------------------------------------------------------------------------------------------------------
 
if(forma==1 && servicio==1 && tarjeta==2) 
{
document.write("Usted se hizo un alisado<br>");
document.write("Usted ha cancelado con tarjeta de credito<br>");
document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
document.write("Se le hara un recargo del 10% <br>"+(costo*0.10)+ "<br>");
document.write("El Pago total sera de: <br>"+(costo*1.10));
document.write("No posees tarjeta de cliente frecuente : <br>"+(costo*1.10).toFixed(2));


}else if (forma==1 && servicio==2&&tarjeta==2){

document.write("Usted se hizo unas uñas <br>");
document.write("Usted ha cancelado con tarjeta de credito<br>");
document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
document.write("Se le hara un recargo del 10% <br>"+(costo*0.10)+ "<br>");
document.write("El Pago total sera de: <br>"+(costo*1.10));
document.write("No posees tarjeta de cliente frecuente : <br>"+(costo*1.10).toFixed(2));
}else if (forma==1 && servicio==3 && tarjeta==2){

document.write("Usted se hizo un tinte<br>");
document.write("Usted ha cancelado con tarjeta de credito<br>");
document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
document.write("Se le hara un recargo del 10% <br>"+(costo*0.10)+ "<br>");
document.write("El Pago total sera de: <br>"+(costo*1.10));
document.write("No posees tarjeta de cliente frecuente : <br>"+(costo*1.10).toFixed(2));

}
else if (forma==1 && servicio==4 && tarjeta==1){

document.write("Usted se hizo un tinte<br>");
document.write("Usted ha cancelado con tarjeta de credito<br>");
document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
document.write("Se le hara un recargo del 10% <br>"+(costo*0.10)+ "<br>");
document.write("El Pago total sera de: <br>"+(costo*1.10));
document.write("No posees tarjeta de cliente frecuente : <br>"+(costo*1.10).toFixed(2));;

}
else if (forma==1 && servicio==5 && tarjeta==1){

document.write("Usted se hizo un tinte<br>");
document.write("Usted ha cancelado con tarjeta de credito<br>");
document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
document.write("Se le hara un recargo del 10% <br>"+(costo*0.10)+ "<br>");
document.write("El Pago total sera de: <br>"+(costo*1.10));
document.write("No posees tarjeta de cliente frecuente : <br>"+(costo*1.10).toFixed(2));

}
else if(forma==2 && servicio==1&& tarjeta==1){
document.write("Usted se hizo un alisado<br>");
document.write("Usted ha cancelado con efectivo<br>");
document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
document.write("El Pago total sera de: <br>"+(costo));
document.write("No posees tarjeta de cliente frecuente : <br>"+(costo));
}
else if(forma==2 && servicio==2&& tarjeta==1){
document.write("Usted se hizo un alisado<br>");
document.write("Usted ha cancelado con efectivo<br>");
document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
document.write("El Pago total sera de: <br>"+(costo));
document.write("Por tu tarjeta de cliente frecuente recibes un descuento de : 25% <br>"+(costo)*0.7);
}
else if(forma==2 && servicio==3&& tarjeta==1){
document.write("Usted se hizo un alisado<br>");
document.write("Usted ha cancelado con efectivo<br>");
document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
document.write("El Pago total sera de: <br>"+(costo));
document.write("Por tu tarjeta de cliente frecuente recibes un descuento de : 25% <br>"+(costo)*0.75);
}
else if(forma==2 && servicio==4&& tarjeta==1){
document.write("Usted se hizo un alisado<br>");
document.write("Usted ha cancelado con efectivo<br>");
document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
document.write("El Pago total sera de: <br>"+(costo));
document.write("Por tu tarjeta de cliente frecuente recibes un descuento de : 25% <br>"+(costo)*0.75);
}
else if(forma==2 && servicio==5&& tarjeta==1){
document.write("Usted se hizo un alisado<br>");
document.write("Usted ha cancelado con efectivo<br>");
document.write("El costo inicial del servicio es de: <br>"+costo+"<br>");
document.write("El Pago total sera de: <br>"+(costo));
document.write("Por tu tarjeta de cliente frecuente recibes un descuento de : 25% <br>"+(costo)*0.75); 
 }
