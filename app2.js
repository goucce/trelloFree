$( document ).ready( function () { //Con el ready se consigue que la funcion se ejecute cuando documento se cree.
    let addListInput = $( '.addListWrapper input' ); //acedemos a la clase de html addListWrapper y al selector input

    const generateId = namespace => `${namespace}-${Date.now()}-${Math.ceil(Math.random()*100)}`
    //la constante generarId es igual a la funcion namespace que return un string (gracias a las comillas nuevas `)
    //dentro de estas cogerá primero "namespace- fecha de ahora-numero random de 1 a 100"
    const createListString = name =>

        `<div class="list" id="${generateId('list')}">
            <div class="listHeader">
                <h4>T${name}</h4>
                <button>X</button>
            </div>
            <div class="tasks">

            </div>
            <div class="addTask">
                <input type="text">
                <button>Add task</button>
            </div>
        </div>`


      // la constante recibe un nombre y dentro de ese nombre copiará en el index.html todo el supuesto string, con todo el codigo.
      //En este caso se considera un string, pero dentro del Index funcionará como codigo html.

    const appendNewList = () => { //constante de creacion de lineas
         //  cogemos el text del input
         //Guardamos en listName con .val(), lo que escribimos en la WEB
         let listName = addListInput.val();

         if(listName === ''){  //si el listName, esta vacia te devuelve return
           // changePlaceholder(); //funcion que cambiará el placeholder donde ponia Add List
           return;
         }

         // creamos el nodo .list
         let list = $( createListString( listName ) );

         // añadimos el node al DOM
         $( '.lists' ).append( list )

         // Limpiamos el texto del input
         addListInput.val( '' );
    }


    const createTaskString = name2 => //Añadimos al dDOM EL nombre de la nueva tarea

    `<div class="tasks">
      <h4>${name2}</h4>
    </div>`

      // Listeners
     addListInput.on( 'keyup', function ( event ) {
        if ( event.keyCode === 13 ) {
           appendNewList();
        }

    } )


    //Como el elemeento ya está creado en un primer momento no hay que indicar  que en otra clase estará
    //simplemente indicar   cuando se ejecuta el .on se ejecutará con el click del boton
    $('.adderButton').on('click', function(event) {
        appendNewList(); //la constante que creea las listas
    })


    //Tipo de funcion cuando el elemento no está creado, por esa razon despues del click hay otra coma indicando
    //donde se encontrará el elemento que se creará en el futuro
     $('.lists').on('click', '.listHeader button', function(event) {
        let listNode = $(event.target.parentNode.parentNode);
        listNode.detach(); //detach lo elimina del DOM
     })



     $('.lists').on('click', '.addTask button', function(event) {
        let taskNode = $(event.target.parentNode.previousSibling);
        //
        let taskName = $(event.target.parentNode).val();
        let task = $(createTaskString(taskName));
        taskNode.append(task); //detach lo elimina del DOM

     })

} )







//-------------------------------------------------------------------------------------------------------------NEW TASK START

const createTaskString = name =>
  ` <div class="tasks">
        <h4>${name}</h4>
        <button>X</button>
        </div>`

const appendNewTask = () => {
  //  cogemos el text del input
  let taskName = addTaskInput.val();//---------------------------- ?¿?¿?¿ como accedo al valor del input de algo que aun no existe
  //  si el nombre de la lista esta vacio no pueda añadir lista
  if (taskName === '') {
    return; }
  // creamos el nodo .list
  let task = $(createTaskString(taskName));
  // añadimos el node al DOM
  $('.tasks').append(task);//--------------------------?¿?¿?¿ como cuadno se acceda ya estará creado el .task accedemos a el?¿?¿¿¿??¿
  // Limpiamos el texto del input
  addTaskInput.val(''); //---------------------------- ?¿?¿?¿ como accedo al valor del input de algo que aun no existe
}

// Listeners

$('.addTask').on( 'keyup', function ( event ) {
   if ( event.keyCode === 13 ) {
      appendNewTask();
   }
} )

('.adderTask').on('click', function(event) {
    appendNewTask(); //la constante que creea las listas
})




//-------------------------------------------------------------------------------------------------------------NEW TASK END
