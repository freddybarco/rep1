/**
 * @author Freddy
 */

function principal()
{
	validar_nombre();
	validar_apellido();
	validar_email();
	validar_numero();
	//validar_fecha();
}
function validar_nombre(){
	
	var x = document.getElementById("nombre");
	
	var res = x.value.match(/[A-Za-z]/g);
	
	try{
	if(x.value===res.join("")){
		document.getElementById("demo").innerHTML="yes";}
	else{
		document.getElementById("demo").innerHTML="no";		}
		
	}
	catch (e) {
		document.getElementById("demo").innerHTML="no";	
	}
}

function validar_apellido(){
	
	var x = document.getElementById("apellido");
	//alert(x.value);
	var res = x.value.match(/[A-Za-z]/g);
	
	//alert(res.join(""));
	try{
	if(x.value===res.join("")){
		document.getElementById("demo2").innerHTML="yes";}
	else{
		document.getElementById("demo2").innerHTML="no";		}
	}catch(e)
	{
		document.getElementById("demo2").innerHTML="no";
	}
}


function validar_email(){
	
	var x = document.getElementById("email");
	
	var tamano=x.value.match(/@/g).join("").length;
	
	if(tamano===1){
		var posicion=x.value.indexOf('@');
		
		var res = x.value.substring(0,posicion).match(/[a-z0-9._%+-]/g);
		var tamanon=x.value.substring(posicion+1,x.value.length).match(/[.]/g).join("").length;
		
		var posicionn=x.value.lastIndexOf('.');
	
		if(tamanon<4)
		{
			var res2 = x.value.substring(posicion+1,posicionn).match(/[a-z0-9.-]/g);
			var res3 = x.value.substring(posicionn+1,x.value.length).match(/[a-z]{2,3}/g);
			if(x.value===res.join("")+"@"+res2.join("")+"."+res3.join(""))
			{
		document.getElementById("demo3").innerHTML="yes";}
	else{
		document.getElementById("demo3").innerHTML="no";		}			
		}
		else{
		document.getElementById("demo3").innerHTML="no";		}					
	}
	else{
		document.getElementById("demo3").innerHTML="no";		}
			
//alert(res.join("")+"@"+res2.join("")+"."+res3.join(""));

}

function validar_numero(){
	
	var x = document.getElementById("telefono");
	//alert(x.value);
	
	var res = x.value.match(/[0-9]/g);
	
	//alert(res.join(""));
	var longitud = res.join("").length;
	//alert(longitud);
	if(x.value===res.join("") && longitud <10 && longitud>6){
		document.getElementById("demo4").innerHTML="yes";}
	else{
		document.getElementById("demo4").innerHTML="no";		}
}

function validar_fecha()
{
	var dia=document.getElementById("nacimientodia");
	var mes=document.getElementById("nacimientomes");
	var ano=document.getElementById("nacimientoano");
	//alert(dia.value+""+mes.value+""+ano.value)
	if(ano.value<2015 && ano.value >1979 && mes.value<13 && mes.value >0)
	{
	if(mes.value===1 && mes.value===3 && mes.value===5 && mes.value===7 && mes.value===8 && mes.value===10 && mes .value===12)
	{document.getElementById("demo5").innerHTML="yes";}
	
	
	else{
		document.getElementById("demo5").innerHTML="no";		}
	
	if(mes.value===4 && mes.value===6 && mes.value===9 && mes.value===11 )
	{document.getElementById("demo5").innerHTML="yes";}
	
	
	else{
		document.getElementById("demo5").innerHTML="no";		}
	if(mes.value===2)
	
	{document.getElementById("demo5").innerHTML="yes";}
	
	
	else{
		document.getElementById("demo5").innerHTML="no";		}
	
	}
}
