/*MUTABILIDAD:

Se refiere a la característica de un objeto (en este caso, un arreglo) de poder ser modificado o alterado después de su creación. Cuando usas un método mutable, el arreglo original cambia directamente en la memoria.


INMUTABILIDAD:

Se refiere a la característica de un objeto de no poder ser cambiado una vez creado. Cuando aplicas una operación "inmutable" a un arreglo, el arreglo original se mantiene intacto y el método devuelve una nueva copia con los cambios aplicados.

3 EJEMPLOS DE METODOS MUTABLES Y 3 EJEMPLOS DE METODOS INMUTABLES:

MUTABLES:
1. push(): Agrega uno o más elementos al final de un arreglo y modifica el arreglo original.
2. pop(): Elimina el último elemento de un arreglo y modifica el arreglo original.
3. splice(): Cambia el contenido de un arreglo eliminando, reemplazando o agregando elementos y modifica el arreglo original.

INMUTABLES:
1. slice(): Devuelve una copia superficial de una porción del arreglo en un nuevo arreglo sin modificar el original.
2. concat(): Devuelve un nuevo arreglo que es la combinación de dos o más arreglos sin modificar los originales.
3. map(): Crea un nuevo arreglo con los resultados de la llamada a una función proporcionada aplicada a cada elemento del arreglo original, sin modificarlo.


PROGRAMACION IMPERATIVA VS PROGRAMACION DECLARATIVA:

Programación Imperativa:

Se centra en describir cómo se debe realizar una tarea mediante una serie de instrucciones detalladas. En este paradigma, el programador especifica cada paso necesario para lograr un resultado.   

Programación Declarativa:

Se centra en describir qué resultado se desea obtener sin especificar los pasos detallados para lograrlo. En este paradigma, el programador expresa la lógica del programa sin describir su control de flujo.


(nombre de funcion o variable )const sumar = (parametros)(a, b) => {
(accion para parametros y retorno) return a + b;
};

sumar(3, 4); invocacion de la funcion y argumentos

¿Por qué son preferidas en métodos de arreglos? Al usar métodos como .map(), .filter(), o .reduce(), las funciones de flecha son el estándar por dos razones principales:

Concisión y Limpieza: Permiten escribir "one-liners" (código en una sola línea). Esto hace que las transformaciones de datos sean mucho más fáciles de leer.

Retorno Implícito: No necesitas escribir return explícitamente para operaciones simples, lo que reduce el ruido visual.

side efects: Un efecto secundario (side effect) es cualquier cambio en el estado del sistema o interacción con el mundo exterior que ocurre fuera del alcance de una función o expresión. En programación, los efectos secundarios pueden incluir la modificación de variables globales, la escritura en archivos, la impresión en la consola, o la modificación de estructuras de datos externas.

DEFINICION find(), findIndex(), includes():
find(): Es un método de arreglos en JavaScript que devuelve el primer elemento del arreglo que cumple con una condición especificada en una función de prueba proporcionada. Si ningún elemento cumple con la condición, devuelve undefined.

findIndex(): Es un método de arreglos en JavaScript que devuelve el índice del primer elemento del arreglo que cumple con una condición especificada en una función de prueba proporcionada. Si ningún elemento cumple con la condición, devuelve -1.

includes(): Es un método de arreglos en JavaScript que determina si un arreglo contiene un elemento específico, devolviendo true o false según corresponda.

diferencia entre forEach() y map():

forEach(): Se utiliza para ejecutar una función proporcionada una vez por cada elemento del arreglo. No devuelve un nuevo arreglo, simplemente itera sobre los elementos del arreglo original.

map(): Se utiliza para crear un nuevo arreglo con los resultados de la llamada a una función proporcionada aplicada a cada elemento del arreglo original. Devuelve un nuevo arreglo con los valores transformados.      


*/


/*ejercicio #1 gestion de pilas mutable */

let herramientas = ["martillo", "destrornillador"]

herramientas.push("taladro");
console.log(herramientas);

herramientas.unshift("sierra");
console.log(herramientas);

herramientas.pop();
console.log(herramientas);

/*ejercicio 2 modificacion de indice mutable:*/

let colores = ["rojo", "verde", "azul", "amarillo"]

console.log(colores);

colores.splice(0,1,"naranja");
console.log(colores);

colores.splice(2,1,"morado");
console.log(colores);

/*ejercico 3 transformacion declarativa inmutable*/

let temperaturas = [15,20,25,30]

let farenheit = temperaturas.map((temp) => (temp * 9/5) + 32);

let farenheit2 = temperaturas.map(function(temp) {
    return (temp * 9/5) + 32;
});


console.log(temperaturas);
console.log(farenheit);

console.log(farenheit2);

/*ejercicio 4 filtrado selectivo inmutable*/

let inventario = [5,12,8,130,44]

let inventarioFiltrado = inventario.filter((item) => item >= 10);

let inventarioFiltrado2 = inventario.filter(function(item) {
    return item >= 10;
});

console.log(inventario);
console.log(inventarioFiltrado);
console.log(inventarioFiltrado2);
