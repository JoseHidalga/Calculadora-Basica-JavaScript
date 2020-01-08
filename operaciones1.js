

function escribir(n){
caja = document.f1.txtcaja.value;
document.f1.txtcaja.value=caja + n;
}

function operadores(m){
caja = document.f1.txtcaja.value;
document.f1.txtcaja.value=caja + m;
}

function Igual(){
caja = document.f1.txtcaja.value;
document.f1.txtcaja.value=eval(caja);
}

function sin(){
caja = document.f1.txtcaja.value;
document.f1.txtcaja.value=Math.sin(caja);
}
function cos(){
caja = document.f1.txtcaja.value;
document.f1.txtcaja.value=Math.cos(caja);
}
function sqrt(){
caja = document.f1.txtcaja.value;
document.f1.txtcaja.value=Math.sqrt(caja);
}
function tan(){
caja = document.f1.txtcaja.value;
document.f1.txtcaja.value=Math.tan(caja);
}
function sqrt(){
caja = document.f1.txtcaja.value;
document.f1.txtcaja.value=Math.sqrt(caja);
}
function borrar(){
caja = caja.substring(0,caja.length-1);
}



/*Funcion de Capturar, Almacenar datos y Limpiar campos*/
$(document).ready(function(){    
    $('#boton-guardar').click(function(){        
        /*Capturar los datos escrito */        
        var num = document.getElementById("nombretxt").value;
        /*Guardando los datos en el LocalStorage*/
        localStorage.setItem("Numero", num);
        /*Limpiar el campo*/
        document.getElementById("nombretxt").value = "";
    });   
});

/*Funcion Cargar y Mostrar datos*/
$(document).ready(function(){    
    $('#boton-cargar').click(function(){                       
        /*Para obtener los datos de la textbox llamada nombretxt*/
        var numero = localStorage.getItem("Numero");
        /*Para mostrar los datos almacenados*/      
        caja = document.f1.txtcaja.value;
	document.f1.txtcaja.value = numero;
    });   
});

