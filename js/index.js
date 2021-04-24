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
        tdTipo.innerText = p.tipo;
        //TODO: esto no va a funcionar por mientras 
        tdDescripcion.innerHTML = p.descripcion;
        tdNro.innerText = i + 1;
        //TODO: como agrego un boton para las acciones?
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
        Swal.fire("Pokemon Agregado");

    });