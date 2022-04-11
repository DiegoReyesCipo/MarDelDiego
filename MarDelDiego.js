console.log(' Mar Del Diego');
let productos = [
    {id: 1, titulo: 'Cebollita Soñador', precio: 10000, stock: 15, superficie: 200},
    {id: 2, titulo: 'Napolitano Ganador', precio: 12000, stock: 10, superficie: 250},
    {id: 3, titulo: 'Campeon Mexico 86', precio: 15000, stock: 10, superficie: 300},
]

let precio = 10000;
let valor = 10000;
let interes = 1.3;
let precioFinanciado = 0;

const URL= 'https://criptoya.com/api/dolar'

const dropDown = document.getElementById('opcionTerreno')
const btn = document.getElementById('btn')
let valorInput= 0;

// llamar dato del select y traer precio
dropDown.onchange = (e) => {
    valorInput = e.target.value
    console.log(e.target.value)// Trae el texto dependiendo el del select
}
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
console.log("valor fuera onclick",valor);/// En su momento probe con precio como variable aca y en la fx. pero no funciono

//guardar productos en local Storage
localStorage.setItem( "Listaproductos", JSON.stringify(productos));
productos=JSON.parse(localStorage.getItem("Listaproductos"));
console.log(typeof(productos));

  //prueba aplicar after input para cuotas      
  function addElementToList (){
    const inputRef = document.getElementById('inputPago');
    const value = inputRef.value;
    
    if (value !== '1'&& value !== '6' && value !== '10'){
        Swal.fire (' Ingrese 1, 6 o 10')
      }
      else if (value == 1) {
            
                
               resultado.innerText = 'Total a pagar por el lote'+ valor//cambie alert por DOM innerText resultado
               console.log(value);
      }
      else if (value == 6 || value == 10){
          
        precioFinanciado = valor * interes// precio la tengo que actualizar a valor
        
      resultado.innerText = 'el precio financiado es: $' +(  precioFinanciado);//calcular cuotas
// falta calcular valor cuotas y mostrarlo en DOM
        
     //funcion flecha no Me funcionaba
        
        let totalCuotas = valor/value
         
         console.log (totalCuotas );
      }
    }

     //peticion a la API Crypto ya para obtener valor dolar
     fetch (URL)
     .then(respuesta => respuesta.json())
     .then (datos => {
         
         console.log("Console log datos.blue", + datos.blue);
         let totalBlue = datos.blue;
     
           // agregarNameAlDOM()// recien aca llamo la funcion para modificar DOM
     
     });
     //console.log(typeof(datos));
     console.log("total", precio * datos.blue );
     const fetchBlue = () => {
         fetch (URL)
         .then(res=> res.json())
         .then( datos => {
             let totalBlue = datos.blue;
             console.log('console log fetch.Blue', totalBlue );
         }) 
     };
    
     

     window.onload=function(){
      document.getElementById('contenido').style.display="none";
      }
   function contenido()
   {
          
       document.getElementById("contenido").style.display="block";
   }

