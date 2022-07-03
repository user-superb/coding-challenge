function desafio1(){ // Imprimir del 1 al 10
    for (let i = 10; i >= 1; i--){
        console.log(i);
    }
}

function desafio2(){ // Imprimir impares del 1 al 100
    for (let i = 1; i <= 100; i += 2){
        console.log(i);
    }
}

function desafio3(){ // Imprimir la tabla de multiplicacion del 7
    const FACTOR = 7;
    for (let i = 1; i <= 10; i++){
        console.log(i * FACTOR);
    }
}

function desafio4(){ // Imprimir todas las tablas de multiplicacion del 1 al 9
    for (let i = 1; i <= 9; i++){
        for (let j = 1; j <= 10; j++){
            console.log(`${i} * ${j} = ${i * j}`)
        }
    }
}

function desafio5(){ // Calcular la suma de todos los valores de un array que va del 1 al 10
    const NUMEROS = [];
    let totalSuma = 0;
    for (let i = 1; i <= 10; i++){ // Inicializa el array
        NUMEROS[i-1] = i; // Podria hacer esto o usar NUMEROS.push(i), cualquiera de las dos funcionaria.
    }
    for (let i = 1; i <= 10; i++){ // Suma los valores del array en otra variable, como el array es hasta 10
        totalSuma += NUMEROS[i-1]; // entonces deberia dar 55 como suma total.
    }
    console.log(NUMEROS);
    console.log(`Total de la suma de todos los valores del array es ${totalSuma}.`);
}

function desafio6(){ // Calcular 10 factorial
    const VALOR = 10; // Valor factorial
    let resultado = 1;
    for (let i = 1; i <= VALOR; i++){
        resultado *= i;
    }
    console.log(resultado);
}

function desafio7(){ // Calcular la suma de todos los numeros impares de entre 10 y 30
    let totalSuma = 0;
    const DE = 11;
    const HASTA = 30;
    for (let i = DE; i < HASTA; i += 2){
        totalSuma += i;
    }
    console.log(totalSuma);
}

function desafio8(){ // Convertir de Celcius a Fahrenheit
    const VALOR_CELCIUS = 16;
    let resultado;

    resultado = (VALOR_CELCIUS * 9/5) + 32;

    console.log(`${VALOR_CELCIUS}C° convertido a Fahrenheit es ${resultado}F°.`);
}

function desafio9(){ // Convertir de Fahrenheit a Celcius
    const VALOR_FAHRENHEIT = 103;
    let resultado;

    resultado = (VALOR_FAHRENHEIT - 32) / (9/5);

    console.log(`${VALOR_FAHRENHEIT}F° convertido a Celcius es ${resultado}C°`);
}

function desafio10(){ // Calcular suma de todos los numeros de un Array
    const ARRAY_AUX = [5,5,5,5,5,5,5,5,5,5];
    let sumaTotal = 0;


    for (let i = 0; i < ARRAY_AUX.length; i++){
        sumaTotal += ARRAY_AUX[i];
    }
    console.log(sumaTotal);
}

function desafio11(){ // Calcular el promedio de los numeros de un Array
    const ARRAY_AUX = [1,3,4,5,2,3,4,5,888,55,33];
    let promedioTotal = 0;

    for (let i = 0; i < ARRAY_AUX.length; i++){
        promedioTotal += ARRAY_AUX[i];
    }

    promedioTotal = promedioTotal / ARRAY_AUX.length;

    console.log(`El promedio del Array es ${promedioTotal}`);
}

function desafio12(ARRAY){ // La funcion recibe un Array de numero y devuelve un array solo conteniendo numeros positivos
    for(let i = 0; i < ARRAY.length; i++){
        if (ARRAY[i] < 0) {
            ARRAY.splice(i,1); // Elimina 1 valor de la posicion i
            i--; // i retrocede un valor, podria hacer i = 0 pero esto haria que la iteracion haga todo el viaje de nuevo
        }
    }
    return ARRAY;
}

function desafio12_test(){
    const NUMEROS = [0,-1,1,-8,8,-16,16];
    let array_positivo;

    // Por alguna razon hacer ARRAY_1 = ARRAY_2 no es lo mismo que hacer ARRAY_1 = ARRAY_2.slice()
    // Basicamente hace apuntar a ARRAY_1 hacia lo mismo que este apuntando ARRAY_2, osea que no 
    // sirve para copiar los contenidos, es como si ambos estuviecen apuntando la misma estanteria,
    // si ARRAY_1 cambia un elemento, ARRAY_2 tambien se veria afectado por este cambio.
    // En resumen (ARRAY_1 = ARRAY_2.slice()) es distinto a (ARRAY_1 = ARRAY_2).
    console.log(NUMEROS);
    array_positivo = NUMEROS.slice(); // Copia el array 
    array_positivo = desafio12(array_positivo); // Llama a la funcion y esta elmina los numeros negativos del array.
    console.log(`Array sin alterar: ${NUMEROS} (${NUMEROS.length} elementos)`); // Para ver si modifico el Array original
    console.log(`Array positivo: ${array_positivo} (${array_positivo.length} elementos)`);
}

function desafio13(NUMEROS){ // Buscar el numero maximo de un array
    let maximo = -99999999;
    for (let i = 0; i < NUMEROS.length; i++){
        if (NUMEROS[i] > maximo){
            maximo = NUMEROS[i];
        }
    }
    return maximo;
}

function desafio14(){ // Imprimir los primeros 10 numeros de la serie de Fibonacci
    let a = 1;
    let b = 0;
    // console.log(b); // Imprime el 0, por si es que 0 se considera como el primer valor de la serie de Fibonacci.
    let c = 1;
    for (let i = 1; i <= 10; i++){
        console.log(c);
        c = a + b;
        b = a;
        a = c;
    }
}

// No se resolverlo sin recursión. Check solution on Github.
// No, lo hice bien XDD

function desafio15(N){ // Dado un numero N busca si se encuentra en la serie de Fibonacci, devuelve un True o False
    let a = 1;
    let b = 0;
    let c = 1;
    while ((c !== N) && (c < N)){ // Mientras 'c' sea distinto a 'N' y 'c' sea menor que N ...
        c = a + b;
        b = a;
        a = c;
    }
    if (c === N) {
        return true;
    } else {
        return false;
    }

}

function desafio15_test(){
    const N = 0; // Numero a buscar
    console.log(`Se encontro ${N}? ${desafio15(N)}`);
}

function desafio16(N){ // Dado un numero retornar True o False dependiendo si es primo o no
    if (N === 1){
        return false;
    }
    for (let i = 2; i <= parseInt(N / 2); i++){
        if (N % i === 0){
            return false;
        }
    }
    return true;
}

function desafio16_test(){
    const N = 2; // Numero a evaluar
    console.log(`Es ${N} un numero primo? ${desafio16(N)}`);

    // Numeros Primos son aquellos divisibles por 1 y si mismos.
    // La contraparte de este tipo de numero son los Numeros Compuestos, estos numeros tienen
    // otro divisor aparte de 1 y si mismos, osea, tienen 3 o mas divisores.

}

function desafio17(N){ // Calcular la suma de los digitos de un Numero entero positivo
    let sumaTotal = 0;
    while (N !== 0){
        sumaTotal += N % 10; // N modulo 10 da el valor del ultimo digito
        N = parseInt(N / 10); // Se supone que parseInt es para pasar de STRING a Integer, pero por alguna razon, it works!
    }
    return sumaTotal;
}

function desafio17_test(){
    const N = 999 // Numero a descomponer

    console.log(`Suma de todos los digitos de ${N}: ${desafio17(N)}`);
}

function desafio18(){ // Imprimir los 100 primeros Numeros primos
    const NUMEROS_A_INFORMAR = 100;
    let numeroActual = 2;
    let numerosInformados = 0;
    while (numerosInformados < NUMEROS_A_INFORMAR) {
        if (desafio16(numeroActual) === true){ // Reutilizo el desafio16 para saber si un numero es Primo o no.
            console.log(numerosInformados + 1 + ': ' +numeroActual);
            numerosInformados++;
            numeroActual++;
        } else {
            numeroActual++
        };
    }
}

function desafio19(N_PRIMOS, N_INICIAL){ // Retornar un Array devolviendo los primeros numeros primos (N_PRIMOS) mayores que un numero dado (N_INICIAL)
    const ARRAY_GENERADO = [];
    let numerosGuardados = 0;
    let numeroActual = N_INICIAL;

    while (numerosGuardados < N_PRIMOS) {
        if (desafio16(numeroActual) === true){ // Reutilizo el desafio16 para saber si un numero es Primo o no.
            ARRAY_GENERADO.push(numeroActual);
            numerosGuardados++;
        }
        numeroActual++;
    }
    return ARRAY_GENERADO;
}

function desafio19_test(){
    const N_PRIMOS = 15; // Cantidad de numeros primos a informar
    const N_INICIAL = 1; // A partir de este numero.

    console.log(desafio19(N_PRIMOS,N_INICIAL));
}

function desafio20(ARRAY){ // Rotar una posicion de izquierda a derecha
    ARRAY.push(ARRAY.shift()); // .shift() Elimina el primer valor y devuelve lo que estaba ahi, y .push() recibe ese valor y lo inserta al final.
    return ARRAY;
}

function desafio21(ARRAY){ // Rotar una posicion de derecha a izquierda
    ARRAY.unshift(ARRAY.pop()); // .pop() Elimina el ultimo valor y devuelve lo que estaba ahi, y .unshift() recibe ese valor y lo inserta en la primera posicion.
    return ARRAY
}

function desafio22(ARRAY){ // Invertir un Array
    const ARRAY_GENERADO = []; // Array donde se van a guardar los valores

    for (let i = ARRAY.length - 1; i >= 0; i--){ // ARRAY.length - 1 sino empieza por la posicion 10, y como recordaras un Array comienza por la posicion 0
        ARRAY_GENERADO.push(ARRAY[i]);           // en este caso comienza por la posicion 0 y termina en la 9, osea tiene 10 posiciones. 0 1 2 3 4 5 6 7 8 9.
    }

    return ARRAY_GENERADO; // Devuelve el Array generado.
}

function desafio23(TEXTO){ // Invertir una cadena de caracteres
    let nuevo = '';

    for (let i = TEXTO.length; i >= 0; i--){
        nuevo += TEXTO.charAt(i); // .charAt(posicion) accede al caracter dada una posicion
    }
    return nuevo;
}

function desafio24(ARRAY_1, ARRAY_2){ // Dado 2 Arrays, combinarlos.
    const NUEVO_ARRAY = ARRAY_1.slice(); // Copia el array

    for (let i = 0; i < ARRAY_2.length; i++){
        NUEVO_ARRAY.push(ARRAY_2[i]);
    }

    return NUEVO_ARRAY;
}

function desafio25(ARRAY_1, ARRAY_2){ // Dado 2 Arrays, devolver un Array donde no esten presentes los numeros en comun (La diferencia)
    const NUEVO_ARRAY = []; // Array donde se van a guardar los valores

    for (let i = 0; i < ARRAY_1.length; i++){ // Recorre el primer Array
        if (ARRAY_2.indexOf(ARRAY_1[i]) === -1) { // Si indexOf() no encuentra el elemento de ARRAY_1[i], devuelve -1
            NUEVO_ARRAY.push(ARRAY_1[i]); // Entonces inserta el elemento en NUEVO_ARRAY.
        }
    }
    for (let i = 0; i < ARRAY_2.length; i++){ // Recorre el segundo Array
        if (ARRAY_1.indexOf(ARRAY_2[i]) === -1) { // Si indexOf() no encuentra el elemento de ARRAY_2[i], devuelve -1
            NUEVO_ARRAY.push(ARRAY_2[i]); // Entonces inserta el elemento en NUEVO_ARRAY.
        }
    }

    return NUEVO_ARRAY; // Devuelve NUEVO_ARRAY.
}

function desafio26(ARRAY_1, ARRAY_2){ // Operacion resta entre 2 Arrays, como si fueran conjuntos, eliminar los elementos que se encuentran de ARRAY_2 en ARRAY_1
    const NUEVO_ARRAY = ARRAY_1.slice(); // Array donde se guarda una copia del ARRAY_1 (Para no modificar el original)

    for (let i = 0; i < ARRAY_1.length; i++){
        if (ARRAY_2.indexOf(NUEVO_ARRAY[i]) !== -1){ // Si indexOf(elemento) devuelve un valor distinto a -1 (osea que encontro el elemento) entonces
            NUEVO_ARRAY.splice(i,1); // Elimina el elemento en NUEVO_ARRAY
            i--; // i retrocede 1 valor, si no hace esto entonces i se saltearia el nuevo valor que esta en su posicion, si ese nuevo valor fuese otro elemento a eliminar se lo saltearia y no seria eliminado.
        }
    }

    return NUEVO_ARRAY; // Devuelve NUEVO_ARRAY.
}

function desafio27(ARRAY){ // Dado un Array devolver el Array en donde solo hay elementos diferentes
    const NUEVO_ARRAY = ARRAY.slice(); // Crea copia del Array
    let pos; // Pos guarda la posicion del elemento a eliminar

    for (let i = 0; i < NUEVO_ARRAY.length; i++){
        pos = NUEVO_ARRAY.indexOf(NUEVO_ARRAY[i],i + 1); // Pos es igual a la posicion del elemento a eliminar
        if (pos !== -1){ // Si pos es distinto a -1 (osea que encontro el elemento) entonces
            NUEVO_ARRAY.splice(pos,1); // se elimina el elemento
            i--; // i disminuye un valor
        }
    }

    return NUEVO_ARRAY; // Devuelve NUEVO_ARRAY
}

function desafio28(){ // Calcular la suma de los primeros 100 Numeros Primos
    const NUMEROS_A_SUMAR = 100;
    let numerosSumados = 0;
    let totalSuma = 0;
    let numeroActual = 2;

    while (numerosSumados < NUMEROS_A_SUMAR){  // Mientras la cantidad de numeros sumados sea menor que la constante NUMEROS_A_SUMAR, entonces
        if (desafio16(numeroActual) === true){ // si numeroActual es primo... // Reutilizo el desafio16 para saber si un numero es primo o no.
            totalSuma += numeroActual;
            numerosSumados++;
            numeroActual++;
        } else {
            numeroActual++;    
        }
    }
    return totalSuma; // Devuelve la suma total de numeros primos
}

function desafio29(N){ // Imprimir la distancia entre los primeros 100 Numeros Primos
    let ant = 2; // Guarda el numero primo anterior
    let numeroActual = ant + 1;
    let numerosEncontrados = 0;

    while (numerosEncontrados < N){ // Mientras numerosEncontrados sea menor que N
        if (desafio16(numeroActual) === true){
            console.log((numeroActual - ant) + ' ACTUAL: ' + numeroActual);
            ant = numeroActual; // Guarda el numero primo anterior
            numerosEncontrados++;
            numeroActual++;
        } else {
            numeroActual++;
        }
    }
}

// function desafio30(){} // No entiendo el enunciado

function desafio31a(TEXTO){ // Devuelve el numero de palabras en un texto
    let ant; // Anterior
    let act = ' '; // Actual
    let contadorPalabras = 0;

    for (let i = 0; i < TEXTO.length; i++){
        ant = act; // Anterior toma el valor de Actual
        act = TEXTO.charAt(i); // Actual toma un nuevo valor
        if ((act !== ' ') && (ant === ' ')){ // Si actual es distinto a espacio y anterior es igual a espacio entonces...
            contadorPalabras++;
        }
    }

    return contadorPalabras; // Devuelve contadorPalabras
}

function desafio31b(TEXTO){ // Mismo que el anterior, unica diferencia es que utiliza otra funcion que comprueba si la letra actual y la anterior son ciertos caracteres 
    let ant;
    let act = ' ';
    let contadorPalabras = 0;

    for (let i = 0; i < TEXTO.length; i++){
        ant = act;
        act = TEXTO.charAt(i);
        if ((!esNuevaPalabra(act)) && (esNuevaPalabra(ant))) {
            contadorPalabras++;
        }
    }

    return contadorPalabras;
}

function esNuevaPalabra(caracter){ // Comprueba si caracter se encuentra en el Array declarado
    let caracteres = [' ', ';', ',', '.', '!', '?', '\n', '\r', '\t'];
    return caracteres.includes(caracter); // array.includes(x) es para ver si lo que esta como parametro se encuentra en el array. Devuelve True o False
}

// console.log(desafio31b('Esto es una prueba! Como podras ver esta funcionando correctamente.'))

function desafio32(TEXTO){
    let ant; // Caracter anterior
    let act = ' '; // Caracter actual
    let texto_nuevo = ''; // Genera un nuevo texto

    for (let i = 0; i < TEXTO.length; i++){ // Esto lo que hace es sumar 1 en 1 cada caracter a la nueva variable, si nota que se forma una nueva palabra, pasa la primera letra de la nueva palabra a mayuscula
        ant = act;
        act = TEXTO.charAt(i);
        if ((!esNuevaPalabra(act)) && (esNuevaPalabra(ant))){ // Si actual no es un "separador" y anterior es un "separador" entonces
            act = act.toUpperCase(); // Actual pasa a mayusculas
        }
        texto_nuevo += act; // Suma actual al nuevo texto
    }
    
    return texto_nuevo; // Devuelve texto_nuevo.
}

// console.log(desafio32('Esto es una prueba! Como podras ver esta funcionando correctamente.'))

function desafio33(TEXTO){ // Calcular la suma de los numeros que se encuentras en un STRING en los cuales estan separados por comas
    const VALORES = TEXTO.split(','); // .split() se encarga de dividir un STRING, se le indica el caracter (o caracteres) para que la funcion sepa donde tiene que "cortar" el STRING y devuelve un Array con los elementos separados.
    let sumaTotal = 0;
    
    for (let i = 0; i < VALORES.length; i++){
        sumaTotal += parseFloat(VALORES[i]); // parseFloat() es diferente a Number() ya que este ultimo cuando tiene que convertir un STRING en donde hay caracteres distintos a numeros devuelve un NaN, sin importar que haya numeros en el STRING, en cambio parseFloat() no le importan los caracteres (a menos que comienze con uno) y te devuelve los numeros que se encuentren dentro.
        // En lo posible, utilizar parseFloat() / parseInt() en ves de Number(), ya que dan errores, pero menos errores.
    }

    return sumaTotal;
}

function desafio34(TEXTO){ // Crear una funcion que devuelva un Array con palabras de un texto
    const ARRAY_PALABRAS = [];
    
    let act = ' ';
    let ant;
    let comienzo;

    for (let i = 0; i < TEXTO.length; i++){
        ant = act;
        act = TEXTO.charAt(i);
        if ((!esNuevaPalabra(act)) && (esNuevaPalabra(ant))){ // Este if marca el comienzo de una palabra
            comienzo = i; // guarda la posicion en esta variable
        }
        if ((esNuevaPalabra(act)) && (!esNuevaPalabra(ant))){
            ARRAY_PALABRAS.push(TEXTO.substring(comienzo,i)); // substring() recibe 2 parametros, uno de comienzo y otro del final, esta funcion sirve para extraer los Caracteres que se encuentran dentro de esas dos posiciones en un String. push() crea un elemento con lo generado por substring() y lo pone al final del Array
            comienzo = -1; // Asigna -1 a la variable comienzo para saber si una palabra cerro o no.
        }
    }
    if (comienzo !== -1) { // Comprueba de que no se saltee la ultima palabra, osea que si comienzo es distinto a -1 significa que le quedo una palabra sin cerrar.
        ARRAY_PALABRAS.push(TEXTO.substring(comienzo,TEXTO.length));
    }

    return ARRAY_PALABRAS;
}

function desafio35(CSV){ // Convertir de texto CSV a Array
    let CSV_ARRAY = CSV.split('/n'); // Divide el String recibido por cada '/n' que se encuentre y lo devuelve como Array

    for (let i = 0; i < CSV_ARRAY.length; i++){
        let linea = CSV_ARRAY[i].split(';'); // Divide el Elemento i del Array por cada ';' que se encuentre y lo devuelve como Array
        CSV_ARRAY[i] = linea; // CSV_ARRAY[i] pasa a apuntar la variable hecha en la linea anterior
    }

    return CSV_ARRAY; // Devuelve CSV_ARRAY (Matriz)
}

function desafio35_test(){
    const CSV = 'Roberto;20;Argentina/nChinchulin;35;Alemania/nUser;70;Nueva Zelanda/n';

    console.log(CSV);
    console.log(desafio35(CSV));
}

function desafio36(TEXTO){ // Convertir un String a un Array de caracteres
    // const ARRAY_TEXTO = Array.from(TEXTO); // Podria hacer esto y me ahorraria de hacer la iteracion de abajo. No lo hice porque no conocia la funcion.
    const ARRAY_TEXTO = [];

    for (let i = 0; i < TEXTO.length; i++){
        ARRAY_TEXTO.push(TEXTO[i]);
    }

    // Diferencia entre funcion y metodo: Ambos son lo mismo, unica diferencia es que un metodo siempre va a estar ligado a un objeto (e.g. objeto.metodo())

    return ARRAY_TEXTO;
}

function desafio37(TEXTO){ // Convertir un String a un Array contieniendo el codigo ASCII de cada caracter
    const ARRAY_ASCII = [];

    for (let i = 0; i < TEXTO.length; i++){
        ARRAY_ASCII.push(TEXTO.charCodeAt(i)); // .charCodeAt(indice) sirve para obtener el codigo (Estandar de Codificacion UTF-16) del caracter indicado con el indice
    }

    return ARRAY_ASCII;
}

function desafio38(ARRAY){ // Convertir un Array contieniendo elementos en Codigo ASCII a caracteres
    let TEXTO = '';

    for (let i = 0; i < ARRAY.length; i++){
        let caracter = String.fromCharCode(ARRAY[i]);
        TEXTO += caracter;
    }

    return TEXTO;
}

function desafio39(){ // Implementar el cifrado Ceasar
    const enCero = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; // Array base
    const DESPLAZAMIENTO = 4; // Cuanto se va a desplazar

    let TEXTO = 'Esto es una prueba!'

    let encriptado = desafio39_cifrar(TEXTO,DESPLAZAMIENTO,enCero)

    console.log(encriptado);
    console.log(desafio39_descifrar(encriptado,DESPLAZAMIENTO,enCero));

}

function desafio39_cifrar(TEXTO, DESPLAZAMIENTO, enCero){
    const enDesplazamiento = enCero.slice(); // Copia el Array base
    let texto_encriptado = '';
    let posicion;
    let caracter;

    for (let i = 0; i < DESPLAZAMIENTO; i++){ // Se encarga de desplazar los elementos segun hasta las veces que DESPLAZAMIENTO lo indique
        enDesplazamiento.unshift(enDesplazamiento.pop()); // Mueve el ultimo elemento al principio
    }
    
    TEXTO = TEXTO.toUpperCase(); // Pasa el texto a mayusculas
    for (let i = 0; i < TEXTO.length; i++){
        caracter = TEXTO.charAt(i);
        posicion = enCero.indexOf(caracter); // Busca la posicion del caracter en el Array base (enCero) y la guarda en una variable
        if (posicion !== -1){ // Si la posicion es distinto a -1 (osea que lo encontro en el Array base) entonces
            texto_encriptado += enDesplazamiento[posicion]; // a texto_encriptado se le suma el caracter ubicado en la posicion de enCero en enDesplazamiento
        } else if (caracter === ' '){ // Si caracter es igual a espacio entonces
            texto_encriptado += ' '; // Suma espacio
        }
    }

    return texto_encriptado; // Devuelve el texto encriptado
}

function desafio39_descifrar(TEXTO, DESPLAZAMIENTO, enCero){
    const enDesplazamiento = enCero.slice(); // Copia el array base
    let texto_desencriptado = '';
    let posicion;
    let caracter;

    for (let i = 0; i < DESPLAZAMIENTO; i++){ // Desplaza el Array copiado
        enDesplazamiento.unshift(enDesplazamiento.pop());
    }

    for (let i = 0; i < TEXTO.length; i++){
        caracter = TEXTO.charAt(i);
        posicion = enDesplazamiento.indexOf(caracter); // Busca la posicion del caracter en enDesplazamiento
        if (posicion !== -1){
            texto_desencriptado += enCero[posicion]; // Suma el caracter ubicado en el indice de enCero donde se encontraba el caracter en enDesplazamiento
        } else if (caracter === ' ') {
            texto_desencriptado += ' ';
        }
    }

    return texto_desencriptado; // Devuelve el texto desencriptado
}

function desafio40(ARRAY){ // Aplicar el algoritmo de ordenado "Bubble" en un Array de numeros
    const ARRAY_ORDENADO = ARRAY.slice(); // Hace una copia de ARRAY
    let huboCambios = true; // Guarda si hubo cambio o no
    let elementoAnterior; // Guarda el elemento anterior
    let elementoActual; // Guarda el elemento actual

    while (huboCambios === true){ // Mientras haya cambio
        huboCambios = false; // huboCambios pasa a ser falso, si no hubo cambios entonces sigue quedando en falso, pero si hubo cambios entonces pasa a ser verdadero y va a seguir iterando hasta que no haya cambios
        for (let i = 1; i < ARRAY_ORDENADO.length; i++){
            elementoAnterior = ARRAY_ORDENADO[i - 1];
            elementoActual = ARRAY_ORDENADO[i];
            if (elementoActual < elementoAnterior){ // Si el elemento actual es menor que su anterior entonces
                ARRAY_ORDENADO[i] = elementoAnterior; // El elemento actual es igual a su anterior
                ARRAY_ORDENADO[i - 1] = elementoActual; // El anterior es igual al elemento actual
                huboCambios = true;
            }
        }
    }

    return ARRAY_ORDENADO;
}

function desafio40_test(){
    const ARRAY = [9999,9998,888,222,222,33,1,2,3,10,4,5,9,6,7,8];

    console.log(ARRAY);
    console.log(desafio40(ARRAY));
}

function desafio41(puntoA, puntoB){ // Calcular la distancia entre dos puntos definidos con cordenadas X y Y
    let a = puntoB[0] - puntoA[0];
    let b = puntoB[1] - puntoA[1];

    return Math.sqrt((a * a) + (b * b)); // Formula = Raiz cuadrada de ((x2 - x1)^2 + (y2 - y1)^2)

    // NOTA: ESTO ES EL TEOREMA DE PITAGORAS

}

function desafio41_test(){
    const puntoA = [3,1]; // [cordX, cordY]
    const puntoB = [5,1]; // [cordX, cordY]

    console.log(desafio41(puntoA, puntoB));
}

function desafio42(circuloA, circuloB){ // Crear una function que devuelva verdadero si dos circulos definidos por un centro de coordenadas y radio se intersectan 
    return (desafio41(circuloA, circuloB) <= circuloA[2] + circuloB[2]); // Si la distancia entre ellos es menor o igual a la suma de sus radios entonces devuelve true, sino false
}

function desafio42_test(){
    const circuloA = [3,1,1]; // [cordX, cordY, Radius]
    const circuloB = [5,1,1];

    // Sumar el radio de los dos circulos seria igual a la distancia que formaria si pusiera los dos circulos uno al lado del otro
    // Osea que si la distancia entre los dos centros de coordenada es mayor que la suma de los dos radios significaria que
    // los dos circulos no estan intersectandose. Sumar los radios se podria considerar como un "maximo" de hasta donde pueden
    // alejarse los centros antes de que dejen de intersectarse.

    console.log(desafio42(circuloA, circuloB));
}

function desafio43(ARRAY, NUMERO){ // Crear una funcion que reciba una matriz y que devuelva la columna del numero especificado

 //      COLUMNAS  
 // F  0 1 2 3 4 5 6
 // I  1 x x x x x x
 // L  2 x x x x x x  MATRIZ[Fila][Columna]
 // A  3 x x x x x x
 // S  4 x x x x x x

    const COLUMNA = [];

    for (let i = 0; i < ARRAY.length; i++){
        COLUMNA.push(ARRAY[i][NUMERO]);
    }

    return COLUMNA;
}

function desafio43_test(){
    const ARRAY = 
    [["Chimichurri","170"],
     ["Vinager","160"],
     ["Ravioles","180"]
    ];

    console.log(desafio43(ARRAY,0));
}

function desafio44(BINARIO){ // Crear una funcion que convierta un STRING conteniendo un Numero Binario a Numero Decimal
    let numeroDecimal = 0; // Guarda los valores que se vayan sumando
    let bitActual = BINARIO.length - 1; // Guarda la posicion del bit actual 

    for (let i = 0; i < BINARIO.length; i++){
        if (BINARIO.charAt(i) === '1'){ // Si el binario es === '1' entonces
            numeroDecimal += Math.pow(2, bitActual); // numeroDecimal se le suma 2 con exponente bitActual
        }
        bitActual--; // A bitActual es restado 1
    }

    return numeroDecimal; // Se devuelve numeroDecimal
}

function desafio44_test(){
    const BINARIO = '10101010';

    console.log(desafio44(BINARIO));
}

function desafio45(ARRAY){ // Crear una funcion que calcule la suma de todos los numeros dentro de un "Array dentado" (Array que contiene numeros o otros Arrays como elementos)
    let sumaTotal = 0;
    let valorActual;

    for (let i = 0; i < ARRAY.length; i++){
        valorActual = ARRAY[i];
        if (Array.isArray(valorActual) === true) { // Si el valor actual es un Array entonces
            sumaTotal += desafio45(ARRAY[i]); // vuelve a ejecutar la funcion y devuelve lo que sumo, la funcion puede autoinvocarse hasta 99 veces despues de su primera ejecucion.
        } else sumaTotal += valorActual; // Sino es un Array entonces suma el valor actual a la variable sumaTotal.
    }
    
    return sumaTotal; // Devuelve sumaTotal
}

function desafio45_test(){
    const ARRAY = [1,2,[[[30],30,[[[[30]],100]]]],3,4];

    console.log(desafio45(ARRAY));
}

function desafio46(ARRAY){ // Encontrar el numero maximo dentro de un "Array dentado"
    let MAXIMO = -Infinity; // Infinito negativo
    let valorActual;
    
    for (let i = 0; i < ARRAY.length; i++){
        valorActual = ARRAY[i];

        if (Array.isArray(valorActual) === true){ // Si el valor actual es un Array entonces
            valorActual = desafio46(valorActual); // valorActual va a ser igual a lo que devuelva la funcion desafio46 (recursion)
        }
        if (valorActual > MAXIMO) { // Si el valorActual es mayor que MAXIMO entonces
            MAXIMO = valorActual; // MAXIMO es igual a valorActual
        }
    }

    return MAXIMO;
}

function desafio46_test(){
    const ARRAY = [1,2,3,[6,7,8,9,[10]],4,5];

    console.log(desafio46(ARRAY));
}

function desafio47(ARRAY){ // Copiar un Array Dentado
    let new_ARRAY = [];
    let valorActual;

    for (let i = 0; i < ARRAY.length; i++){
        valorActual = ARRAY[i];
        if (Array.isArray(valorActual) === true){ // Se encarga de descomponer el valorActual para que luego sea concatenado directamente
            valorActual = desafio47(valorActual);
        }
        new_ARRAY = new_ARRAY.concat(valorActual); // Array.concat.() devuelve la concatenacion de "Array" con otro elemento (Puede ser otro Array)
    }

    return new_ARRAY;
}

function desafio47_test(){
    const ARRAY = [0,1,2,3,[6,7,8,[9]],4,5];

    console.log(desafio47(ARRAY));
}

function desafio48(TEXTO){ // Crear una funcion que devuelva la palabra(s) mas grande(s) de un String
    const TEXTO_DESCOMPUESTO = desafio48_descomponer(TEXTO); // Descompone el String en Palabras y devuelve un Array
    let new_ARRAY = []; // Donde se van a guardar la/s palabra/s con mayor cantidad de caracteres
    let PALABRA; // Palabra actual
    let MAXIMO = 0; // Maximo

    for (let i = 0; i < TEXTO_DESCOMPUESTO.length; i++){ // Recorre todas las palabras
        PALABRA = TEXTO_DESCOMPUESTO[i]; // PALABRA toma la palabra actual
        if (PALABRA.length > MAXIMO){ // Si palabra actual es mayor que el maximo entonces
            MAXIMO = TEXTO_DESCOMPUESTO[i].length; // Maximo pasa a tener un valor mas alto
            new_ARRAY = [PALABRA]; // new_Array se sobreescribe y toma el valor de la palabra actual, sino
        } else if (PALABRA.length === MAXIMO){ // Si palabra actual es igual a maximo entonces
            new_ARRAY.push(PALABRA); // sumar la palabra a new_Array
        }
    }

    return new_ARRAY; // Devolver new_ARRAY
} 

function desafio48_descomponer(TEXTO){ // Se encarga de descomponer el TEXTO y devuelve un Array con las palabras separadas
    const new_ARRAY = [];
    let inicio = -1;

    for (let i = 0; i <= TEXTO.length; i++){
        let letra = (i < TEXTO.length) ? TEXTO[i] : ' '; // NUEVO: letra = (CONDICION) ? (si es true) : (sino)
        
        if ((!esUnSeparador(letra)) && (inicio < 0)){ // Si letra actual no es un separador y inicio es menor que 0 (osea que no hay palabra comenzada)
            inicio = i;
        }
        if ((esUnSeparador(letra)) && (inicio >= 0)){ // Si letra actual es un separador y el inicio es mayor o igual a 0 entonces
            new_ARRAY.push(TEXTO.substring(inicio,i)); // Agregar nuevo elemento (palabra) a new_Array del texto entre los indices INICIO y i
            inicio = -1; // Con que inicio sea -1 significa que no hay ninguna palabra siendo tenido en cuenta
        }
    }

    return new_ARRAY; // Devuelve new_ARRAY
}

function esUnSeparador(CARACTER){
    const SEPARADORES = [' ','.',',',';','?','!','/n','/t','/r']; // n = new line, t = tab, r = return?
    
    return SEPARADORES.includes(CARACTER); // variable.includes(param) devuelve true si "param" se encuentra dentro de "variable"
}

function desafio49(ARRAY){ // Mezclar un Array de Strings
    let indiceRandom;

    for (let i = ARRAY.length - 1; i > 0; i--){
        indiceRandom = Math.floor(Math.random() * (i + 1)); // Math.floor() se encarga de redondear para abajo un numero. Math.random() devuelve un numero "aleatorio" (no lo es realmente) del 0 a 1 (excluyendo 1)  
        [ARRAY[i], ARRAY[indiceRandom]] = [ARRAY[indiceRandom], ARRAY[i]]; // NUEVO: permite asignar todo en una sola linea, al hacer esto pierde la necesidad de hacer una 3ra variable cuando se necesita intercambiar el valor de 2 variables
    }

    return ARRAY;
}

// console.log(desafio49(['No ','Ma ','Me ','Mi ','Mo ','Mu ']));

function desafio50(n){ // Crear una funcion que reciba un valor n y devuelva un array de n numeros unicos de 1 hasta n
    const new_ARRAY = [];
    let numeroRandom;
    let minimo = 1;

    for (let i = 1; i <= n; i++){
        new_ARRAY.push(i);
    }
    pescador(new_ARRAY);

    return new_ARRAY;
}

function pescador(new_ARRAY){ // Algoritmo de Fisher-Yates, muy utilizado en juegos de azar
    let numeroAzar;
    
    for (let i = new_ARRAY.length - 1; i > 0; i--){ // new_Array.length - 1 sino i toma el valor de un indice que no existe, un array tiene X cantidad de posiciones, pero siempre va a ser X - 1
        numeroAzar = obtenerNumeroRandom(0,i); // Obtiene un numero al azar
        [new_ARRAY[i], new_ARRAY[numeroAzar]] = [new_ARRAY[numeroAzar], new_ARRAY[i]]; // Intercambia posiciones
    }

    return new_ARRAY; // Devolver new_ARRAY
}

function obtenerNumeroRandom(min, max){ // Se encarga de obtener un numero aleatorio dado un rango
    const RANGO = (max - min + 1); // Calcular la diferencia entre max y min mas su siguiente sirve para saber la cantidad de numeros posibles entre estos rangos
    return Math.floor(Math.random() * (RANGO)) + min; // Math.floor() en este caso sirve para redondear para abajo el numero y que me de un entero
}

function desafio51(TEXTO){ // Dado un STRING informar la frecuencia de los caracteres, devolver como un array de objetos (???)
    const new_ARRAY = [];

    for (let chrActual of TEXTO){ // NUEVO: for(variable of iterable). Iteracion que ejecuta para cada elemento de una variable iterable
        desafio51_contar(new_ARRAY, chrActual);
    }

    return new_ARRAY;
}

function desafio51_contar(ARRAY,chrActual){ // Cuenta las veces en las que aparece el caracter dado
    let seEncontro = false;

    for (let i = 0; i < ARRAY.length; i++){
        if(ARRAY[i].chr === chrActual){
            ARRAY[i].cont++;
            seEncontro = true;
        }
    }
    if (seEncontro === false) { // Si no se encontro el caracter en el Array entonces
        ARRAY.push({chr : chrActual, cont : 1}); // Crear un nuevo objeto
    }
}


/* Repaso

function repasoFibonacci(n){
    let sum;
    let n1 = 0;
    let n2 = 1;

    if (n === 0){
        return 0;
    } else if (n > 0){
        for (let i = 1; i < n; i++){
            sum = n1 + n2;
            n1 = n2;
            n2 = sum;
        }
    }

    return sum;
}

console.log(repasoFibonacci(500));

*/

function desafio52(n){ // Calcular el numero 500 de Fibonacci con alta precision
    let n1 = '0';
    let n2 = '1';
    let sum;

    if (n === 0){ // Si n es exactamente 0 entonces devolver '0'
        return '0';
    }
    for (let i = 1; i < n; i++){
        sum = desafio52_add(n1,n2); // sum va a ser un STRING
        n1 = n2; // n1 toma el valor anterior de sum
        n2 = sum; // n2 toma el valor de sum
    }

    return sum;
}

function desafio52_add(n1, n2){ // Se encarga de sumar
    let maxSize = Math.max(n1.length, n2.length); // Saca el tamaño maximo

    let num1 = n1.padStart(maxSize, 0); // Math.padStart(size) rellena un numero hasta cumplir con el tamaño dado, comenzando de izquierda a derecha
    let num2 = n2.padStart(maxSize, 0); // Esto es para evitar que cuando luego se haga una suma (como por ej: 8 + 13) asi el programa pueda sumar 0 y cualquier numero y no se rompa intentando sumar un NaN o Undefined con un numero
                                        // Lo que si no entiendo porque en la solucion, x.padStart(maxSize, 0) el 0 estaba como un caracter en ves de un numero, al probarlo funciona igual, es mas intuitivo que sea un numero que un caracter, luego es convertido a caracter en la iteracion
    let valorActual = '';
    let carry = 0; // Carry papu
    let suma; // Guarda la suma de los digitos + carry
    let digito1;
    let digito2;
    
    for (let i = maxSize - 1; i >= 0; i--){ // Segun entendi... esto resolveria la suma de una manera tradicional
        digito1 = parseInt(num1[i]); // Los digitos son convertidos de STRING a INTEGER
        digito2 = parseInt(num2[i]); // Hay que sumarlos luego, porque sumar 2 strings como "2" y "3" daria "23"
        suma = digito1 + digito2 + carry; // Carry vendria a guardar lo que sobro de la suma anterior
        sumaDigito = suma % 10; // Toma el valor del numero a la derecha
        carry = suma >= 10 ? 1 : 0; // Si la suma de los digitos es mayor o igual a 10 entonces carry pasa a valer 1, sino vale 0
        valorActual = sumaDigito.toString() + valorActual; // Suma el digito a la suma total (Lo convierte a String)

        // NOTA: ¿Porque la suma esta en String? Como recordaras, en Javascript (Sucede en cualquier lenguaje) los numeros tienen un limite (2^(52) - 1)...
        //      La unica forma posible de representar un numero tan grande como el numero de Fibonacci(500) es mediante un String (O utilizando BigInt, pero soy un cavernario),
        //      Dentro de esta iteracion se trata de emular una forma de suma tradicional como la que enseñan en las escuelas.
        //      Ya que al sumar el digito mas grande por si mismo nunca valdra mas que 18 (9 + 9 me refiero), entonces Carry nunca sera mayor que 1.

    }
    if (carry > 0){ // Por si se le escapa el Carry luego de sumar los ultimos digitos
        valorActual = carry + valorActual; // El orden aca es importante, no es lo mismo "carry + valorActual" que "valorActual + carry"
    }
    return valorActual; // NOTA: Intenta hacerlo de nuevo en otra función, va a ser util para el ultimo desafio. Mañana por supuesto kkkkkk
}

// console.log(desafio52(10));

/*
　　　　　　　　　 ,ｰ､　　　＿＿　　　　,ｰ､
　　　　　　　　. / ﾍ 〉, -´ｰ･ー ､ ｀ヽ/ ﾍ 〉
　　 　 　　　　〈〈.／:::::: i:::ヽ〈〈 ⌒ヽ
　　　　　　　　i :/,::: 人:::ﾄ､::::::゛ :: i
　　　　　　　　!〃::／　.ヽ :!　ヽ::::i、::: |
　　　　　　　　|ﾚ! / ●　　 ﾘ ●   ﾙ::!┐ ::::: |
　　　　　　　　|: Vl⊃　､_,､_,　⊂⊃::/ .」|::::}
　 　 　 　 /⌒ヽﾍ ﾍ　　 ゝ._）　 　j,./⌒i!::::i
　　　　　　＼ //:::＼＞,､ __,　イァ.i´⌒ヽ|:::::i
.　　　　　 　 //::::/ ｀V{__}V´==.  |/ 7.|:::::|
　　　　　　　゛‐--　´　　 .ハ　　　 |ｰ-/　; :::: ﾉ
*/

function sumar(n1, n2){ // Suma tradicional
    let maxSize = Math.max(n1.length, n2.length);

    let cNum1 = n1.padStart(maxSize, 0);
    let cNum2 = n2.padStart(maxSize, 0);

    let sumaDigitos;
    let sumaTotal = '';
    let suma;
    let carry = 0;

    for (let i = maxSize - 1; i >= 0; i--){
        let iNum1 = parseInt(cNum1[i]);
        let iNum2 = parseInt(cNum2[i]);
        suma = iNum1 + iNum2 + carry;
        sumaDigitos = suma % 10;
        carry = suma >= 10 ? 1 : 0;
        sumaTotal = sumaDigitos.toString() + sumaTotal;
    }

    if (carry > 0){
        sumaTotal = carry + sumaTotal;
    }

    return sumaTotal;
}

//

function desafio53(n){ // Calcular 70! con precision alta
    if (n === 0){
        return '1';
    }
    let resultado = '1';
    for (let i = 1; i <= n; i++){
        resultado = desafio53_factor(resultado, i.toString());
    }

    return resultado;
}

function desafio53_factor(valor1, valor2){ // Se encarga de multiplicar tradicionalmente

    if ((valor1 === 0) || (valor2 === 0)){ // Para ahorrarse que el codigo corra al dope
        return 0;
    }

    let d1; // Guarda el digito actual del valor1
    let d2; // Guarda el digito actual del valor2
    let k = -1; // Guarda cuantas veces itero j, esto sirve para saber cuantos CEROs agregarle a resultado
    let size; // Guarda el tamaño el cual deberia ser la variable resultado para sumarse con resultadoTotal
    let multiply; // Guarda el resultado de la multiplicacion de d1 y d2 mas el carry de la operacion anterior
    let multiplyDigit; // Saca el ultimo digito de la variable multiply
    let resultadoTotal = ''; //

    for (let j = valor1.length - 1; j >= 0; j--){
        let resultado = ''; // Reinicia resultado 
        let carry = 0; // Reinicia el carry
        d1 = parseInt(valor1[j]);
        for (let i = valor2.length - 1; i >= 0; i--){ // Esta iteracion se encarga de hacer una multiplicacion tradicionalmente
            d2 = parseInt(valor2[i]);
            multiply = d1 * d2 + carry;
            multiplyDigit = multiply % 10;
            carry = (multiply >= 10) ? Math.floor(multiply / 10) : 0; // Math.floor(multiply / 10) saca el valor mas a la izquierda, puedo hacer esta operacion con seguridad ya que ningun digito multiplicado con otro puede dar mas de 81
            resultado = multiplyDigit.toString() + resultado;
        }
        if (carry > 0){ // Por si se le escapo el carry al iterar por ultima vez
            resultado = carry.toString() + resultado;
        }
        k++;
        size = resultado.length + k;
        resultado = resultado.padEnd(size, '0'); // A resultado se le agrega un CERO segun el tamaño de size
        resultadoTotal = desafio52_add(resultadoTotal, resultado); // Utilizando la funcion creada para el desafio52 se suma resultadoTotal con resultado
    }

    return resultadoTotal;
}

// console.log(desafio53(70));