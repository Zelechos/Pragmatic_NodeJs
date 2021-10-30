// En NodeJs "SI ALGO PUEDE SALIR MAL SALDRA MAL" hay que tener mucho cuidado con cada faceta del codigo!!!
console.log("Primera Instruccion de Node");

// Generando un error para probar conceptos de Node
let iterador = 0;
setInterval(function(){
    console.log(iterador);
    iterador++;

    // if(iterador === 5){
    //     console.log("buugggg!!");
    //     let error = 99 + bug;
    // }

    
}, 1000);

// Despues de nuestro error
console.log("Segunda Instruccion de Node");
console.log("Ultima Instruccion de Node");