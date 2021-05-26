//loops
//1 
var i=1;
var n=prompt("ingresar numero")
while (i<=n){
    document.write(i)
    i++
}

//2 
var i=1;
var n=(+(prompt("ingresar numero")))
while (i<=n){
    i=(i+2)
    document.write(i)
}

//3 

var i=1;
var n=prompt("ingresar numero")

while (n>=i){
    document.write(n)
    n=n-1
}

//4
//Escribir utilizando console.log la tabla del 9 hasta 9x10.

function tablaDelNueve(){
    var i=1;
    while(i<=10){
        console.log("9 x", i, "=", 9 * i)
        i++
    }
}

//5 Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras.

var num=prompt("introducir numero");
var acumulador=0;
for (var i=0; i< num.length;i++){
    if(!isNaN(+(num[i]))) {
    acumulador += +num[i]
    document.write(num[i])
        console.log("es un numero")
    }
    else {
        console.log("es una letra")
    }
}
console.log(acumulador)

//6 Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.

var n=(+(prompt("ingresar un numero")));
var m=(+(prompt("ingresar un numero")));

    if (n%2 ===0 && m%2 ===0){
        console.log(parseInt(n)+ parseInt(m))
    }
    else {
        document.write("no es par")
    }

    //7 Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario.

    var n=prompt("ingresar N numeros")
    var i=0;
    var acumulador=0;

    while (i<=n){
       acumulador += i
       document.write(i)
        i++
    }
    console.log(acumulador)


    //Realizar el factorial de los primeros N números.
    var N=5;
    var i= 1;
    var acumulador=N;
    while(i<N){
        acumulador= acumulador * i
        i++
    }
    console.log(acumulador)
