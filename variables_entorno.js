// Creando una Variable de entorno
// el operador logico || sirve para darle un valor por defecto a nuestra variable
let secret = process.env.SECRET || "secreto no existe";
let web = process.env.WEB || "web no existe";

// ejemplo 
let token = process.env.SECURITY_TOKEN || "LAJSDBVF21347F62345F2B45F234Y5";

let github = process.env.GITHUB || "https://github.com/Zelechos";
console.error(`My Github => ${github}`);

// Aqui nos retorna undefined dado que no hay valor
console.log('My Secret => ',secret);
console.log('My Web => ',web);
console.log('My Token => ',token);

// Para asignarle un valor a nuestra variable TOKEN se escribe este comando en la consola : 
//TOKEN=asfup2oi353b54y45y node variables_entorno.js