type hero = {
    nome:string;
    sobrenome:string;
};
console.log("Hi");

function tipoObjeto(pessoa:hero){
    console.log(pessoa);
}

tipoObjeto({
    nome:"Rodrigo",
    sobrenome:"Costa"
})