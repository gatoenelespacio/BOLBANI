const colorDeFondo=prompt("Dime un color");
document.body.style.backgroundColor= colorDeFondo;
ocument.querySelectorAll("a").forEach((element) => {
    element.style.color="purple";   
    });

    let resultado=confirm("Bienvenido a mi página");

    if(resultado) {
        console.log("el usuario aceptó")
    }
    else {
        console.log("el usuario canceló.")
    }


function registroHermanos() {
    const cantidadDeHermanos= Number (prompt("Ingresa la cantidad de hermanos:"))
    const ListaHermanos=[]
    let contador= 0;
    while(cantidadDeHermanos>contador)
    { let nombreDeHermanos= prompt("Ingrese el nombre del hermano"+ contador);
        ListaHermanos.push(nombreDeHermanos);
        contador++;
    }   
    for(list of ListaHermanos)
    {
        console.log(list);
    }
}
function colorAleatorio () {
    let caracteres= "0123456789ABCDEF"
    let color="#"
    for (let i= 0 ; i < 6; i++){
        color += caracteres[Math.floor(Math.random() *16)];
    }
        return color;
}

function generadorDeCuadrados() {
    const cantidadDeCubos= prompt("Ingrese la cantidad de cubos:");

    let contador= 0; 
    while (cantidadDeCubos > contador)
    {
        const newDiv=document.createElement(div);
        newDiv.style.height="100px";
        newDiv.style.width="100px";
        newDiv.style.backgroundColor=colorAleatorioHex();

        document.querySelector("body").appendChild(newDiv)

        contador++;

    }
}

function yanquenpo () {
    const opcionesUsuario=prompt("Elige: piedra , papel , tijera").toLowerCase(); 

    function elegirOpcionAleatoria() {
        const opciones= ["piedra", "papel", "tijera"];
        const indiceAleatorio = Math.floor(Math.random()* opciones
        .length);
        return opciones[indiceAleatorio];
    } 

    function determinarResultado(usuario, computadora) {
        if(usuario === computadora) {
            return "Empate";
        } else if (
            (usuario === "piedra" && computadora === "tijera") ||
            (usuario === "tijera" && computadora === "papel") ||
            (usuario === "papel" && computadora === "piedra")
        ) {
    
            return "Ganaste";
     }   else {
        return "Perdiste";
    }
}
const opcionComputadora = elegirOpcionAleatoria(); // No duplicado
const resultado = determinarResultado(opcionesUsuario, opcionComputadora);

alert(`Tu elección: ${opcionesUsuario}\nLa elección de la computadora: ${opcionComputadora}\nResultado: ${resultado}`);
}
 