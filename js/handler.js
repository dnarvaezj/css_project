let elementID = document.getElementById('id');
console.log(elementID);
elementID.innerHTML = '<p>Modificando contenido de etiqueta usando su id!!</p>';


let elementClass = document.getElementsByClassName('Clase');
for (var i = 0; i < elementClass.length; i++) {
  let recorrido = elementClass[i]
  recorrido.innerHTML = 'Modificando elemento clase!!';
}

let elementTag = document.getElementsByTagName('h2');

for (var i = 0; i < elementTag.length; i++) {
  let recorrido = elementTag[i];
  recorrido.style.background = '#54AD45';
}

const elementQuery = document.querySelector('p');
elementQuery.style.background = '#54AD45';


const elementQueryAll = document.querySelectorAll('p');
for (var i = 0; i < elementQueryAll.length; i++) {
  let recorrido = elementQueryAll[i];
  recorrido.style.background = '#54AD45';
  console.log(recorrido.children[i]);
}

const query = document.querySelectorAll('div');
for (var i = 0; i < query.length; i++) {
  let elementosHijos = query[i];
  console.log(elementosHijos.children[i]);
}

let nodes = document.getElementById('id');
console.log(nodes.childNodes.length);
/*
  Para obtener elementos mediante clase o etiqueta es requerido realizar un
  ciclo que permita recorrer el elemento que lo almacena y almacenar los resultados
  en un arreglo así se trate de un solo elemento, esto es por el motivo de
  que en cuanto a clases y etiqueta hay muchos elementos que pueden poseer la misma,
  por el contrario para obtener el elemento por id no hace falta debido a que se supone
  que el id es único para cada elemento.
  Para llamar el id de un elemento mediante js es necesario que el script se ejecute
  cuando el elemento ha sido creado, de lo contrario va a indicar error, por lo tanto
  se debe dejar el script en la parte inferior del html
*/
/*
  Es posible utilizar una función que permite retornar cualquier elemento html
  mediante id, clase o etiqueta, esto usando el querySelector y querySelectorAll
  si requerimos de el id basta con anteponer #, si es una clase . y si es etiqueta
  el nombre de la misma, querySelectorAll retorna todos los valores que cumplan la
  condición
*/
/*
  Es posible también trabajar con los elementos hijos de una etiqueta
  En este caso son las etiquetas que están dentro de otra y de esta forma
  saber cuantos elementos hay o simplemente ejecutar funciones sobre las mismas
  para esto se usa el método children, para contarlos usamos childElementCount,
  Para obtener el primero sería con firstElementChild y el último con
  lastElementChild
*/
/*
  Así como podemos obtener los elementos hijos también lo podemos hacer con los
  elementos padres o hermanos, esto usando parentElement de la misma forma que el child,
  Si queremos ir al elemento padre del padre solo debemos repetir la sentencia.
  Para acceder a los elementos hermanos usamos nextElementSibling para el elemento
  siguiente o previousElementSibling para el elemento anterior
*/
/*
  Se puede acceder también al contenido de una etiqueta que no tiene hijos,
  en este caso usando childNodes, esto teniendo en cuenta que un nodo representa
  todo dentro de una etiquete que no sea otra etiqueta, ejemplo saltos de línea
  y texto plano
*/
/*
  La propiedad innerHTML permite tanto obtener el contenido de una etiqueta como
  modificarlo, con lo cual se pueden agregar más etiquetas o quitarlas según se
  haga la modificación. Si queremos utilizar no el elemento html sino su contenido
  en texto plano debemos usar una propiedad que permite acceder directamente al nodo,
  sería en este caso textContent.
*/
