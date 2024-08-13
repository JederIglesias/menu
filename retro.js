var si,i,d,des2,sf,n;
var cant,opc;

let sal=0;
var desc1=0;
var descuni=0
var cante=0;
var cantg=0;


			document.write('<b>PLANILLA DE EMPLEADOS</b><br><br>');
			document.write('<table border=1>');
			document.write('<tr><td>Número obrero</td><td>Nombre Obrero</td><td>Salario inicial</td><td>Descuento</td><td>Salario final</td></tr>');
var numeroEmpleados=prompt('Digite el numero de empleados a registrar','');
			for (i=1;i<=numeroEmpleados;i++)
                
				{
					n=prompt('Digite el nombre del obrero número '+i+'');
					si=prompt('Digite el salario inicial del empleado','');
                    if(si<356){
                        si=prompt('El salario inicial debe ser mayor a 356. Digite el salario inicial del empleado','');
                    }
    opc=prompt("Tienes cargo de gerente \n 1-Si \n 2-No");
    while(opc<1||opc>2) 
    {
        opc=prompt("Tienes cargo de gerente \n 1-Si \n 2-No");
    }               
    if(opc==1){
        des2=si*0.05;
        cantg++
    }else{
        des2=si*0.025;
        cante++
    }
     d=si*0.05;
     sf=si-d;
     sal=sal+sf;
     desc1=desc1+d;
     descuni=descuni+des2
                    document.write('<tr><td>'+i+'</td><td>'+n+'</td><td>$'+si+'</td><td>$'+d+'</td><td>$'+sf+'</td></tr>');
                }
    document.write('</table>');
    document.write('<br><br><br> TOTAL DE MONTOS</br><br><br>');            
    document.write('<table border=1>');
    document.write('<tr><td>Monto total de salarios</td><td>Monto total de descuentos</td><td>Monto total descuetno por uniforme</td><td>Cantidad de gerentes</td><td>Cantidad de empleados</td></tr>');
    document.write('<tr><td>$'+sal.toFixed(2)+'</td><td>$'+desc1.toFixed(2)+'</td><td>$'+descuni.toFixed(2)+'</td><td>'+cantg+'</td><td>'+cante+'</td></tr>');