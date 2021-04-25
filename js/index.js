tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    });
  
     const pokemones = [];
     const eliminar = function(){
      //1. saber que boto tuvo la accion
      //this.nro
      //2. Sacar el nro del boton
      let nro = this.nro;
      //3. Elimnar el pokemon de la lista
      pokemones.splice(nro,1);
      //4.Recagar la tabla
      cargarTabla();
     };
     const cargarTabla = ()=>{
      //1- Una referencia a la tabla 
      let tbody = document.querySelector("#tbody-pokemon")
      // Antes del for es limpiar la tabla paa que no se repitan 
      tbody.innerHTML="";
      //2- por cada pokemon generar una fila
      for(let i=0; i < pokemones.length; ++ i){
        let p = pokemones[i];
        //Crea un elemento que no existe, pero no lo agrega a la pagina
        //Puedo crear cualquier etiqueta html aqui
        let tr = document.createElement("tr")
         //3- Por cada atributo de los pokemon (nombre,tipo, etc) generar una celda
        let tdNombre = document.createElement("td")
        let tdTipo = document.createElement("td")
        let tdDescripcion = document.createElement("td")
        let tdNro = document.createElement("td")
        let tdAcciones = document.createElement("td")

        tdNombre.innerText = p.nombre;
        // TODO: MOSTRAR EL ICONO, EN VEZ DE NUMERO
        let icono = document.createElement("i");
        if(p.tipo == "1"){
          //Agregar icono agua
          //<i class="fas fa-tint"></i>
          icono.classList.add("fas", "fa-tint", "text-primary" ,"fa-2x");
        } else if (p.tipo == "2"){
          //Agregar icono fuego
          //<i class="fas fa-fire"></i>
          icono.classList.add("fas", "fa-fire", "text-danger" ,"fa-2x");
        }else if (p.tipo == "3"){
          //Agregar icono planta
          //<i class="fas fa-envira"></i>
          icono.classList.add("fas", "fa-envira", "text-success" ,"fa-2x");
        }else{
          //icono de electrico
          //<i class="fas fa-bolt"></i>
          icono.classList.add("fas", "fa-bolt", "text-warning" ,"fa-2x");
        }
        
        tdTipo.classList.add("text-center");
        tdTipo.appendChild(icono);
        

        //TODO: esto no va a funcionar por mientras 
        tdDescripcion.innerHTML = p.descripcion;
        tdNro.innerText = i + 1;
        //TODO: como agrego un boton para las acciones?
        let boton = document.createElement("button");
        boton.nro = i; // guardar cualquier cosa en un elemnto html
        boton.addEventListener("click", eliminar);

        boton.innerText="Enviar al profe oak"

        boton.classList.add("btn","btn-danger");
        tdAcciones.classList.add("text-center");
        tdAcciones.appendChild(boton);


        tr.appendChild(tdNro);
        tr.appendChild(tdNombre);
        tr.appendChild(tdTipo);
        tr.appendChild(tdDescripcion);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr)
        console.log(p);
      }
     
      //4- Agregar esa fila a al tabla (Manipulando el DOM)

     };
  

    document.querySelector("#pokemon-form").addEventListener('submit', (e)=>{
        e.preventDefault();
        let nombre = document.querySelector("#nombre-txt").value; 
        let descripcion = tinymce.get("descripcion-txt").getContent();
        let legendario = document.querySelector("#legendario-si").checked;
        let tipo = document.querySelector("#tipo-select").value;
       

        let pokemon ={};
        pokemon.nombre = nombre; 
        pokemon.descripcion = descripcion;
        pokemon.legendario = legendario;
        pokemon.tipo = tipo;
        pokemones.push(pokemon);

        cargarTabla();
        Swal.fire("Registro Exitoso!","Pokemon Agregado", "info");

    });