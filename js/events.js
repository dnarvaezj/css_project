document.addEventListener('DOMContentLoaded',function(){
  console.log('Ya fue generado el HTML!!');

  const boton = document.getElementById('boton');
  const boton2 = document.getElementById('boton2');
  const boton3 = document.getElementById('boton3');
  const titulo = document.getElementById('titulo');
  const teclas = document.getElementById('teclas');

  const h2 = document.querySelector('h2');

  boton.addEventListener('dblclick',alerta);

  function alerta(){
    alert('Eres el mejor!!!');
  }
  //Evento click
  boton2.addEventListener('click',function(event){
    if(h2.style.display != 'none'){
      h2.style.display = 'none';
      //boton2.textContent = 'Mostrar!';
      //event.target.textContent('Mostrar!');
      this.textContent('Mostrar!');
    }else{
      h2.style.display = 'block';
      //boton2.textContent = 'Ocultar!';
      //event.target.textContent('Ocultar!');
      this.textContent('Ocultar!');
    }
  });
  //Evento de ratón
  boton2.addEventListener('mouseenter',function(){
    boton2.style.backgroundColor = '#f5a2d6';
  });

  boton2.addEventListener('mouseout',function(){
    boton2.style.backgroundColor = '#f2f2f2';
  });

  boton3.addEventListener('click',function(){
    setTimeout((parametro1)=>{
      alert(parametro1);
    }, 3000, 'Ejecutado desde botón 3 luego de 3 segundos!!');
  });
  //Evento de teclado
  titulo.addEventListener('keyDown',function(event){
    console.log('Tecla presionada ('+event.key+')');
  });
  //Evento submit
  const form = document.getElementById('formulario');

  form.addEventListener('submit',function(e){
    e.preventDefault();
    let titulo = document.getElementById('titulo-form').value;

    console.log(titulo);
  });

  //Evento change (cambio de valor)
  const checkbox = document.getElementById('checkbox');

  checkbox.addEventListener('change',function(){
    console.log('El elemento ha cambiado!!');
  });

  for(let elements of document.querySelectorAll('*')){
    elements.addEventListener('click',show_messages);
  };

  function show_messages(e){
    console.log('etiqueta del elemento: '+ e.target.tagName);
    console.log('etiqueta del elemento: '+ this.tagName);
    console.log('\n');
    e.stopPropagation();
  };

  const ul = document.querySelector('ul');
  const li = document.querySelector('li');

  ul.addEventListener('click',function(e){
    console.log('elemento ul');
  })
  li.addEventListener('click',function(e){
    console.log('elemento li');
    e.stopPropagation();
  })

  const contCards = document.querySelector('.contCards');
  const formulario2 = document.getElementById('formulario2');
  formulario2.addEventListener('submit',function(e){
    e.preventDefault();

    let title = document.getElementById('title-form').value;
    let description = document.getElementById('descripcion-form').value;

    new_create_cards(title,description);
  });

  let div = null;

  function new_create_cards(title,description){
    div = document.createElement('div');
    div.className = 'cards'

    let dl = document.createElement('dl');
    let dt = document.createElement('dt');
    let h3 = document.createElement('h3');
    h3.textContent = title;
    let dd = document.createElement('dd');
    dd.textContent = description;
    let button = document.createElement('button');
    button.className ='btn_delete';
    button.textContent = 'Eliminar';

    button.addEventListener('click', () =>{
      contCards.removeChild(div);
    });

    dl.appendChild(dt);
    dt.appendChild(h3);
    dl.appendChild(dd);
    div.appendChild(dl);
    div.appendChild(button);

    contCards.appendChild(div)
  }

  function delete_card(){
    contCards.removeChild(div);
  }


  function create_cards(title,description){
    let newHTML = `<div>
                      <dl>
                        <dt><h3>${title}</h3></dt>
                        <dd>${description}</dd>
                      </dl>
                    </div>`;
    contCards.innerHTML += newHTML;
  }
});


/*
  Podemos usar dos formas para incluir métodos a nuestra página, para esto
  es necesario crear una función primero la cual se va a ejecutar, luego el disparador
  de este evento, el cual podemos agregarlo como propiedad del elemento html
  o desde el js directamente, eso depende del tipo de evento que vamos a implementar
  Un ejemplo es el evento click y dblclick que se ejecuta cuando se le da click
  y doble click a un elemento en particular
*/
/*
  Puede resultar de utilidad llamar al elemento target, en este caso el boton2
  con elemento target se habla de el elemento que dispara el evento, para obtener
  el mismo se puede hacer de dos formas, una es usando el parámetro de la función
  que ejecuta el evento el cual dentro de sí almacena el atributo target, solo hace
  falta hacer llamado del mismo y modificarlo, la otra forma es haciendo uso del
  elemento this que almacena el valor del objeto con el que la función trabaja, en
  este caso el boton2
*/
/*
  El evento de mouse permite ejecutar el evento cuando el mouse está encima o se
  retira de un elemento, esto mediante mouseenter y mouseout
*/
/*
  La función setTimeout pertenece al elemento window, esta permite ejecutar
  funciones luego de un tiempo en especifico definido en milisegundos, este
  método recibe como primer parámetro la función a ejecutar, luego el tiempo
  que demorará en ejecutarse la función, por último los parámetros que reciba
  la función dentro de setTimeout
*/
/*
  El evento submit se ejecuta normalmente sobre el formulario y no sobre el input
  del botón tipo submit, si queremos obtener el valor de un atributo y no el
  valor de referencia en este caso el id usamos .value, se puede prevenir el
  comportamiento default de un elemento usando el parámetro que almacena la función
  manejadora del evento y agregando el método preventDefault()
*/
/*
  El evento change permite detectar cuando se ha realizado algún cambio en algún
  elemento de tipo formulario, bien sea una lista de chequeo o un campo de texto
*/
/*
  Normalmente el archivo js se carga en el html al final del body, es decir,
  cuando ya ha sido generado todo el html y css, de lo contrario arrojaría error
  debido a que los elementos con los que interactua el js no han sido creados.
  para evitar esto hay un evento que podemos usar 'DOMContentLoaded' el cual
  permite llamar el js desde el comienzo del html en el head, sin embargo es
  recomendable cargarlo siempre hasta el final para no arruinar la experiencia
  del usuario
*/
/*
  El evento de propagación permite obtener el valor de las etiquetas padres
  de la que disparo el evento, este lo obtenemos mediante this, ya que this
  almacena el valor del elemento al que se hace referencia, con eso a medida
  que el ciclo se ejecuta tenemos el valor de cada elemento, caso contrario si
  usamos el parámetro que almacena el evento, este solo devuelve la atiqueta actual

  Podemos detener la propagación de un evento usando el parámetro que almacena
  el evento y añadiendo el método stopPropagation
*/
/*
  Tenemos dos formas de crear contenido html desde js, uno es usando innerHTML,
  este es recomendable cuando se trata de un html corto, cuando necesitamos crear
  un html de muchas líneas de código es recomendable usar los métodos createElement
  donde definimos el elemento a crear y appendChild para asociar el nuevo elemento
  a una etiqueta padre

  Podemos también eliminar los elementos creados, esto mediante la función removeChild
*/
