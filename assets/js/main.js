//ejecutar scripts desde el boton del html mediante onclick
const ejercicio = () => {

    // validar que el numero este en el rango entre 1 y 20
    const validar = (num) => {
        if (num >= 1 && num <= 20) {
            return true;
        } else {
            return false;
        }
    }

    // funcion para multiplicar el numero indicado
    const multiplicar = (a) => {
        for (let i = 1; i <= a; i++) {
            console.log(`${i} x ${num} =`, i * a);
        }
    }

    // funcion para obtener el factorial del numero indicado
    //Correccion for Anidado
    const factorial = (a) => {
        for (let i = 1; i <= a; i++) {
            let res = 1;
            for (let j = 1; i >= j ; j++) {
                res *= j;
            }
            console.log(`factorial de ${i} es : ${res}`);
        }
    }

    // Solicitar el numero y almacenar en variable para obtner los resultados mediante las funciones
    var num = prompt("Ingresae Numero entre el rango (1 - 20)", 5);

    // Verificar si numero es mayo igual a 1 y menor igual que 20
    if (validar(num) == false) {
        alert("Numero fuera del rango, intenta nuevamente con otro num ( 1 - 20)");

    } else {
        multiplicar(num);
        factorial(num);
    }
}