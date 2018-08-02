$( document ).ready( function () { //NADA MAS CREARSE EL DOCUMENTO LA FUNCION SE EJECUTA
    let addListInput = $( '.addListWrapper input' );//ACCEDEMOS A LA CLASE HTML ADDLISTWEAPPER Y AL SELECTOR INPUT (YA ESTAN CREADOS INICIALMENTE)
    const generateId = namespace => `${namespace}-${Date.now()}-${Math.ceil(Math.random()*100)}` //GENERA UNA ID ALEATORA EN UN STRING

    //-------------------------------------------------------------------------------------------------------------NEW LIST START
    //STRING CON todo el CODGIO HTML DE LA NUEVA LISTA DONDE EL VALOR QUE RECIBE SERÁ EL NOMBRE DE LA LISTA.
    const createListString = name =>
      //creo el let addTaskInput porque supuestamente el codigo ya estará creado y existirá
      //` let addTaskInput = $( '.addTask input' );
        `<div class="list" id="${generateId('list')}">
            <div class="listHeader">
                <h4 class="nameList">${name}</h4>
                <button class="buttonList">X</button>
            </div>
            <div class="tasks">

            </div>
            <div class="addTask">
                <input class="btn btn-outline-secondary inputAdd" type="text">
                <button type="button" class="btn btn-dark" id="adderTask">+</button>
            </div>
        </div>`


    const appendNewList = () => {
         //  cogemos el text del input
         let listName = addListInput.val();
         //  si el nombre de la lista esta vacio no pueda añadir lista
         if(listName === ''){
           return;}
         // creamos el nodo .list
         let list = $( createListString( listName ) );
         // añadimos el node al DOM
         $( '#lists' ).append( list )
         // Limpiamos el texto del input
         addListInput.val( '' );
    }
    // Listeners
    // CUANDO OCURRA EL EVENTO, SE EJECUTARÁ LA CONSTANTE "appendNewList" donde guarda el input y devuelve el string con el HTML.

    // MEDIANTE LA TECLA ENTER
     addListInput.on( 'keyup', function ( event ) {
        if ( event.keyCode === 13 ) {
           appendNewList();
        }
    } )
    // MEDIANTE CLICK EN EL BOTÓN.
    $('#adderButton').on('click', function(event) { //clase bootstrap necesidad de ID
        appendNewList(); //la constante que creea las listas
    })

    //---------------------------------------------------------------------------DELETE BUTTON START

     $('#lists').on('click', '.listHeader button', function(event) {
        let listNode = $(event.target.parentNode.parentNode);
        listNode.detach();
     })
     //---------------------------------------------------------------------------DELETE BUTTON END



    //-------------------------------------------------------------------------------------------------------------NEW LIST END

    //-------------------------------------------------------------------------------------------------------------NEW TASK START

    const createTaskString = name =>
      ` <div class="task">
            <h4 class="nameTask">${name}</h4>
            <button>X</button>
            </div>`

    const appendNewTask = (taskName, taskNode) => {  //le podemos enviar todas las variables que queramos utilzar dentro de la función.
       //  cogemos el text del input
      // ?¿?¿?¿ como accedo al valor del input de algo que aun no existe
      //Para coger el valor del input nos tenemos que posicionar dentro de esta desde el evento.

      //  si el nombre de la lista esta vacio no pueda añadir lista
      if (taskName === '') {
        return; }
      // creamos el nodo .list
      let task = $(createTaskString(taskName));
      // añadimos el node al DOM
      taskNode.append(task);//--------------------------?¿?¿?¿ como cuadno se acceda ya estará creado el .task accedemos a el?¿?¿¿¿??¿
      //Si que accedemos a el, pero para ello tenemos que enviarlo a la función como se ve en la parte de arriba.

    }

    // MEDIANTE LA TECLA ENTER
    $('#lists').on( 'keyup','.addTask input', function ( event ) {
       if ( event.keyCode === 13 ) {
         let taskNode = $(event.target.parentNode.previousElementSibling); //Nos posicionamos en la clase tasks
         let taskName = $(event.target).val();//nos posicionamos en le mismo evento que es el input.
         appendNewTask(taskName,taskNode);
         taskName = $(event.target).val(''); //despues de enviar el nombre del input, vaciar otra vez el addTask
       }
    } )

    // MEDIANTE CLICK
    $('#lists').on('click','.addTask button', function(event) {
        let taskNode = $(event.target.parentNode.previousElementSibling); //Nos posicionamos en la clase tasks
        let taskName = $(event.target.previousElementSibling).val(); //Nos posicionamos en inputo que esta una posicion por encima del boton.
        appendNewTask(taskName,taskNode); //la constante que creea las listas
        taskName = $(event.target.previousElementSibling).val(''); //despues de enviar el nombre del input, vacia otra vez el addTask
    })

    //---------------------------------------------------------------------------DELETE BUTTON START
    $('#lists').on('click', '.task button', function(event) {
       let listNode = $(event.target.parentNode);
       listNode.detach();
     })

      //**************PROBLEMA DE BORRAR EN CUALQUEIR PARTE DEL INPUT*******
     $('#lists').on('keyup','.addTask input ', function(event) {
       if ( event.keyCode === 8 || event.keyCode === 46 ) { //keyCode del delete, 8 en mac 32 en PC
        let listNode = $(event.target.parentNode.previousElementSibling.lastChild);
        listNode.detach();
      }
      })
     //---------------------------------------------------------------------------DELETE BUTTON END
    //-------------------------------------------------------------------------------------------------------------NEW TASK END




} )
