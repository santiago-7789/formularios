function ejercicio1(){


    var nombre;
    var edad;
    nombre=prompt('Ingrese su nombre:','');
    edad=prompt('Ingrese su edad:','');
    alert("Tu nombre es: "+ nombre);
    alert("Tu edad es: "+ edad);
  
  }
  
  function ejercicio2()
{
  var nom=document.getElementById('nombre').value;
  var ed=document.getElementById('edad').value;
  alert('Ingresó el nombre:' + nom);
  alert('Y la edad:' + ed);
}



function ejercicio3()
	 {
             n1 = parseFloat(document.getElementsByName("nume1")[0].value);
 	    n2 = parseFloat(document.getElementsByName("nume2")[0].value);
        

             sum = n1 + n2;
		
	document.getElementsByName("ImprimirResultado")[0].value = sum;
    }



    function ejercicio4()
	 {
             nu1 = parseFloat(document.getElementsByName("numer1")[0].value);
 	    nu2 = parseFloat(document.getElementsByName("numer2")[0].value);
       nu3 = parseFloat(document.getElementsByName("numer3")[0].value);

             prom=(nu1+nu2+nu3)/3;
		
	document.getElementsByName("ImprimirResultado4")[0].value = prom;
    }




    function ejercicio5()
	 {
             salar1 = parseFloat(document.getElementsByName("salar1")[0].value);
 	           porcentaje= 0.25
        

             resultado = salar1*porcentaje;
             nuevosalar= salar1+resultado
		
	document.getElementsByName("ImprimirResultado5")[0].value = nuevosalar;
    }

    function ejercicio6()
    {
              diner1 = parseFloat(document.getElementsByName("diner1")[0].value);
               porcentajediner= 0.10
         
 
              resultadodiner = diner1*porcentajediner;
              nuevosalardiner= diner1+resultadodiner
     
   document.getElementsByName("ImprimirResultado6")[0].value = nuevosalardiner;
     }


     




     







     function ejercicio7()
     {
               compra1 = parseFloat(document.getElementsByName("compra1")[0].value);
                porcentajecompra= 0.20
          
  
               resultadocompra = compra1*porcentajecompra;
               nuevo= compra1-resultadocompra
      
    document.getElementsByName("ImprimirResultado7")[0].value = nuevo;
      }




      function ejercicio8()
     {
               arti = parseFloat(document.getElementsByName("arti")[0].value);
               artiprecio= parseFloat(document.getElementsByName("artiprecio")[0].value);
                porcentajearti= 0.10
          
  
               resultadoarti = arti*artiprecio;
               descuentoarti= resultadoarti*porcentajearti
               totalarti= resultadoarti-descuentoarti
               
      
    document.getElementsByName("ImprimirResultado8.1")[0].value = resultadoarti;
    document.getElementsByName("ImprimirResultado8.2")[0].value = descuentoarti;
    document.getElementsByName("ImprimirResultado8.3")[0].value = totalarti;
      }


      function ejercicio9()
    {
              articulos = parseFloat(document.getElementsByName("articulos")[0].value);
               articulospr= parseFloat(document.getElementsByName("articulospr")[0].value);
         
 
              resultadoarticulos= articulos * articulospr
              
     
   document.getElementsByName("ImprimirResultado9")[0].value = resultadoarticulos;
     }