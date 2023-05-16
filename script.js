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
   var cuentaActual = [];
   var suma = 0;



function usuario (user) {
    var cuentaSeleccionada = user;
let password = prompt ('Ingresa contraseña');
    cuentaActual = cuentas.find(cuenta => cuenta.nombre === cuentaSeleccionada); 

    if (password == cuentaActual.pass) {
        alert('contraseña correcta');
        edoCuenta();
    } else {
        alert ('contraseña incorrecta, intenta de nuevo');
        usuario (cuentaSeleccionada);
    }
    
}


function edoCuenta (){
    let main = document.getElementById("main");
    let info = `<div id="info">
        <h2>Bienvenido: <span>${cuentaActual.nombre}</span></h2>
        <div id="opciones">
            <button onclick="consultarSaldo()">Consultar saldo</button>
            <button onclick="movimiento('deposito')">Ingresar dinero</button>
            <button onclick="movimiento('retiro')">Retirar dinero</button>
            <button onclick="salirCuenta()">Salir de la cuenta</button>
        </div> 
    </div>`
    main.innerHTML = info;


}

function consultarSaldo(){
    alert ('El saldo actual es: $'+cuentaActual.saldo)
        
}

function movimiento(movimiento) {
    let saldoIngresado = parseFloat(prompt ('Ingresa cantidad:') ) ;
    
    if (movimiento === "deposito"){
        cuentaActual.saldo += saldoIngresado;
        if (cuentaActual.saldo >= 10 && cuentaActual.saldo <= 990){
            consultarSaldo ( );
            return
        } else {
            cuentaActual.saldo -= saldoIngresado;
            alert ("El saldo supera el limite maximo de 990") 
        }
        cantidad = consultarSaldo ( );
    } else if (movimiento === "retiro"){
        cuentaActual.saldo -= saldoIngresado;
        if (cuentaActual.saldo <= 10){
            cuentaActual.saldo += saldoIngresado;
            alert ("El saldo supera el limite inferior maximo de 10") 
        } else {
            consultarSaldo ( );
            return 
        }
        consultarSaldo ( );

    }
}

function salirCuenta(){
    let info = document.getElementById("info");
    let main = `<div id="main">
    <h2>Selecciona tu cuenta</h2>
    
        <button onclick="usuario ('Mali');">Mali</button>
        <button onclick="usuario ('Gera');">Gera</button>
        <button onclick="usuario ('Maui');">Maui</button>
        
    </div>`
    info.innerHTML = main;
}