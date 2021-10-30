console.log("Hello Node");

// Simulando un error para probar conceptos de Node
let iterador = 0;
setInterval(function(){
    console.log(iterador);
    iterador++;

    if(iterador === 5){
        console.log("buugggg!!");
        let error = 99 + bug;
    }
}, 1000);