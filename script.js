var cuentas = [
    { 
        nombre : 'Mali',
        pass : '1111',
        saldo : 200 
    },
    { 
        nombre : 'Gera',
        pass : '1212',
        saldo : 290 
    },
    { 
        nombre : 'Maui',
        pass : '0000',
        saldo : 67 
    }
    
  ];

  
/*function validacionPass (){
    let password = prompt ('Ingresa contraseña');
    cuentaActual = cuentas.find(cuenta => cuenta.nombre === cuentaSeleccionada); 

    if (password == cuentaSeleccionada.pass) {
        alert('contraseña correcta');
        edoCuenta();
    } else {
        alert ('contraseña incorrecta, intenta de nuevo');
        validacionPass ();
    }
}*/

function cuentaMali () {
    let cuentaSeleccionada = "Mali";
    let password = prompt ('Ingresa contraseña');
    cuentaActual = cuentas.find(cuenta => cuenta.nombre === cuentaSeleccionada); 

    if (password == cuentaActual.pass) {
        alert('contraseña correcta');
        edoCuenta();
    } else {
        alert ('contraseña incorrecta, intenta de nuevo');
        cuentaMali ();
    }
    
}


function cuentaGera () {
    var cuentaSeleccionada = "Gera";
let password = prompt ('Ingresa contraseña');
    cuentaActual = cuentas.find(cuenta => cuenta.nombre === cuentaSeleccionada); 

    if (password == cuentaActual.pass) {
        alert('contraseña correcta');
        edoCuenta();
    } else {
        alert ('contraseña incorrecta, intenta de nuevo');
        cuentaGera ();
    }
    
}

function cuentaMaui () {
    let cuentaSeleccionada = "Maui";
    let password = prompt ('Ingresa contraseña');
    cuentaActual = cuentas.find(cuenta => cuenta.nombre === cuentaSeleccionada); 

    if (password == cuentaActual.pass) {
        alert('contraseña correcta');
        edoCuenta();
    } else {
        alert ('contraseña incorrecta, intenta de nuevo');
        cuentaMaui ();
    }
    
}



function edoCuenta (){
    let main = document.getElementById("main");
    let info = `<div id="info">
        <h2>Bienvenido: <span> Nombre de cuenta</span></h2>
        <div id="opciones">
            <button onclick="consultarSaldo()">Consultar saldo</button>
            <button onclick="ingresarDinero()">Ingresar dinero</button>
            <button onclick="retirarDinero()">Retirar dinero</button>
            <button onclick="salirCuenta()">Salir de la cuenta</button>
        </div> 
    </div>`
    main.innerHTML = info;


}

function consultarSaldo(){
    alert ('El saldo actual es: $'+cuentaActual.saldo)

}


function ingresarDinero(){
    cuentaActual.saldo = prompt ('Ingresa cantidad:') + cuentaActual.saldo;
    consultarSaldo();
}

function retirarDinero(){

}

function salirCuenta(){
    let info = document.getElementById("info");
    let main = `<div id="main">
    <h2>Selecciona tu cuenta</h2>
    
        <button onclick="cuentaMali ();">Mali</button>
        <button onclick="cuentaGera ();">Gera</button>
        <button onclick="cuentaMaui ();">Maui</button>
        
    </div>`
    info.innerHTML = main;
}