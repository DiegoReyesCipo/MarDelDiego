console.log(' Mar Del Diego');
let productos = [
    {id: 1, titulo: 'Cebollita Soñador', precio: 10000, stock: 15, superficie: 200},
    {id: 2, titulo: 'Napolitano Ganador', precio: 12000, stock: 10, superficie: 250},
    {id: 3, titulo: 'Campeon Mexico 86', precio: 15000, stock: 10, superficie: 300},
]
//Variables
let precio = 10000;
let valor = 10000;
let interes = 1.3;
let precioFinanciado = 0;
let datos= 0;
let  seleccionAve= 0 ;
let  seleccionCalle= 0 ;
// Api Dolar
const URL= 'https://criptoya.com/api/dolar'

////DECLARE ARRAY  Avenidas
const avenidas = ['Diego Armando Maradona','Argentina', 'Mexico 86', 'Dalma', 'Gianina','Segurola y Habana','Mano de Dios','La pelota no se mancha'];
//DECLARE VARIABLE ,  FOREACH list options
let innerSelectAve = '';
avenidas.forEach((avenida, index) => innerSelectAve += `<option value='${index}'>${avenida}</option>`)
//add SELECT Y listen EVENT CHANGE
$('body #theForm').prepend(`<select id="selectAvenida">${innerSelectAve}</select>`);

//DECLARE ARRAY DE Calles
const calles = ['Me cortaron las piernas', 'Se te escapo la tortuga', 'Lastima a nadie', 'Claudia','Don Diego','Futbol'];
//DECLARE VARIABLE ,  FOREACH list options
let innerSelectCalle = '';
calles.forEach((calle, index) => innerSelectCalle += `<option value='${index}'>${calle}</option>`)
//add SELECT Y listen EVENT CHANGE
$('body #theForm').prepend(`<select id="selectCalle">${innerSelectCalle}</select>`);





const elegAve = document.getElementById('selectAvenida')
elegAve.onchange = (e) => {
seleccionAve = avenidas[e.target.value]
avenidaElegida.innerText = 'Has seleccionado como nombre de Avenida : '+ (seleccionAve);

 console.log(typeof(seleccionAve))// Cambiar al DOM en lugar de console log
 localStorage.setItem('SeleccionDeAvenida',seleccionAve)
}

const elegCal = document.getElementById('selectCalle')
elegCal.onchange = (e) => {
seleccionCalle = calles[e.target.value]
calleElegida.innerText = 'Has seleccionado como nombre de Calle : '+ (seleccionCalle);

 console.log(typeof(seleccionCalle))// Cambiar al DOM en lugar de console log
 localStorage.setItem('SeleccionDeCalle',seleccionCalle)
}


//Button show form
$('#search').on('click', function(){
  $('#theForm').show();
})

const dropDown = document.getElementById('opcionTerreno')
const btn = document.getElementById('btn')
let valorInput= 0;

// capture dropbox value
dropDown.onchange = (e) => {
    valorInput = e.target.value
    console.log(e.target.value)
}
//btn onclick function compare value select with array
btn.onclick = (e)=> {
    const existe = productos.find(x => x.titulo === valorInput);// comparo los dos textos 
    existe ?  valor = existe.precio : console.log('NO hay Nada');
    document.getElementById("valorDeSelect").value = valor ; 
    console.log("valor dentro del onclick", valor);
         Swal.fire(
 'El precio esta expresado en Dolares!',
 'USD '+ valor, 
 'success'
 
  );
}


//Store List of products in local Storage 
localStorage.setItem( "Listaproductos", JSON.stringify(productos));
productos=JSON.parse(localStorage.getItem("Listaproductos"));
console.log(typeof(productos));

  //function get parcels and price     
  function addElementToList (){
    const inputRef = document.getElementById('inputPago');
    const value = inputRef.value;
    
    if (value !== '1'&& value !== '6' && value !== '10'){
        Swal.fire (' Ingrese 1, 6 o 10')
      }
      else if (value == 1) {
            
                
               resultado.innerText = 'Total a pagar por el lote'+ valor
               console.log(value);
      }
      else if (value == 6 || value == 10){
          
        precioFinanciado = valor * interes// precio la tengo que actualizar a valor
        
      resultado.innerText = 'el precio financiado es: $' +(  precioFinanciado);
     

        
     //funcion flecha no Me funcionaba
        
        let totalCuotas = valor/value
         
         console.log (totalCuotas );
      }
    }

     //peticion a la API Crypto ya para obtener valor dolar
     fetch (URL)
     .then(respuesta => respuesta.json())
     .then (datos => {
         
      
      dolar.innerText = 'Cotizacion del dolar hoy: $' +(datos.blue);
         let totalBlue = datos.blue;
         console.log("total pesos $", valor * datos.blue );
           
     });

    