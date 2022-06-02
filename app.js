function principal(){
     /* recopilando datos a las variables*/
    empleado = document.getElementById('empleado').value;
    cedula = document.getElementById('cedula').value;
    salario = document.getElementById('salario').value;
    seccion= document.getElementById('seccion').value;
    cargo = document.getElementById('cargo').value;
    fecha = document.getElementById('fecha').value;
    ordinarias = document.getElementById('ordinarias').value;
    festivas = document.getElementById('festivas').value;
    extras = document.getElementById('extras').value;
    extrasfestivas = document.getElementById('extrasfestivas').value;
    nocturnas = document.getElementById('nocturnas').value;
    extrasnocturnas = document.getElementById('horas_noc_extras').value;
    extnocfes = document.getElementById('extnocfes').value;
    subtransporte = 58586;
     
    

    /*logica contable*/
     pago1 =  Number((salario) / 30 / 8 * ordinarias  ).toFixed(0);
     festivo = Number((salario) / 30 / 8 * 1.75 * festivas   ).toFixed(0);
     horasextras = Number((salario) / 30 / 8 * 1.25 * extras   ).toFixed(0);
     horasextfes = Number((salario) / 30 / 8 * 2.0 * extrasfestivas  ).toFixed(0);
     horasnocturnas = Number((salario) / 30 / 8 * 0.35 * nocturnas  ).toFixed(0);
     horasextnoc = Number((salario) / 30 / 8 * 2.1 * extrasnocturnas  ).toFixed(0);
     horasextnocfes =  Number((salario) / 30 / 8 * 2.5 * extnocfes   ).toFixed(0);

     alert("VALORES AGREGADOS CORRECTAMENTE");

   }
      

 function verificarpago(){

      pesos="$"; 

       acumulado = pago1;

       pagoantes = parseInt(acumulado) + parseInt(festivo) + parseInt(horasextras) +parseInt(horasextfes)          
       + parseInt(horasnocturnas) +  parseInt(horasextnoc) + parseInt(horasextnocfes) + " ";
      
       if(pagoantes>=1000001){

         subtransporte=0;
       }

        
       pen_sal = 8;

       deduccion = parseInt(pagoantes) / 100 * pen_sal;

       pago2 = parseInt(pagoantes) + parseInt(subtransporte);

       devengado = document.getElementById("devengado").value=parseInt(pagoantes);

       transporte = document.getElementById("transporte").value=parseInt(subtransporte); 

       pension = document.getElementById("pension").value=parseInt(deduccion) / 2;

       salud =  document.getElementById("salud").value=parseInt(deduccion) / 2;

       pagofinal = parseInt(pago2)   - parseInt(deduccion);

       document.getElementById("totalapagar").value = parseInt(pagofinal)+ " " + "$";

    
       
    alert("LA BASE DEL SALARIO DEVENGADO ES : " + devengado);

    alert("LAS NOVEDADES SON ="+" " +"FESTIVO/DOMINICAL"+" "+"$"+festivo+"$"+" " + "HORAS EXTRAS"+" "+"$"+horasextras+"$"+" "+" "+"EXTRAS FESTIVAS"+" "+"$"+horasextfes+"$"+" ");
      
    alert("LAS NOVEDADES SON ="+" " +"RECARGO NOCTURNO"+" "+"$"+horasnocturnas+"$"+" "+"EXTRAS NOCTURNAS"+" "+"$"+horasextnoc+"$"+" "+" "+"EXTRAS FESTIVAS NOCTURNAS"+" "+"$"+horasextnocfes+"$"+" ");

   }


   function informacion(){

    fes = festivo;
    ext = horasextras;
    extrafest = horasextfes;
    nocturna = horasnocturnas;
    extranocturna = horasextnoc; 
    extranochefestiva = horasextnocfes;



    alert('LAS NOVEDADES SON LAS SIGUIENTES');

     
    
  
       document.getElementById('informacion').innerHTML=
          `<div>
           <span>Las Novedades Son:</span><br>
           <span>Festivo o Dominical:${fes}</span><br>
           <span>Horas Extras:${ext}</span><br>
           <span>Extras Festivas:${extrafest}</span><br>
           <span>Recargo Nocturno:${nocturna}</span><br>
           <span>Extras Nocturnas:${extranocturna}</span><br>
           <span>Extra Nocturna Festiva:${extranochefestiva}</span><br>
     `
  
          
  }
    

function realizarpago(){

      pesos="$"; 

      acumulado = pago1;

      pagoantes = parseInt(acumulado) + parseInt(festivo) + parseInt(horasextras) +parseInt(horasextfes)          
      + parseInt(horasnocturnas) +  parseInt(horasextnoc) + parseInt(horasextnocfes) + " " ;
      
      if(pagoantes>=1000001){

         subtransporte=0;
       }

       pen_sal = 8;

       deduccion = parseInt(pagoantes) / 100 * pen_sal;

       pago2 = parseInt(pagoantes) + parseInt(subtransporte);

       devengado = document.getElementById("devengado").value=parseInt(pagoantes);

       tranporte = document.getElementById("transporte").value=parseInt(subtransporte); 


       pension = document.getElementById("pension").value=parseInt(deduccion) / 2;

       salud =  document.getElementById("salud").value=parseInt(deduccion) / 2;


       pagofinal = parseInt(pago2)   - parseInt(deduccion);

       document.getElementById("totalapagar").value = parseInt(pagofinal)+" " + "$";

       alert("PAGO REALIZADO CON EXITO");

       

    }

    
function generar(){

      document.getElementById('netoapagar').value = pagoneto;
        

        alert('realizado');
    }
   
      
function actualizar(){
  
      setTimeout('document.location = document.location');
     }



     


    
    
 












 

     



   






    
     











   







    
     
   





















    




















