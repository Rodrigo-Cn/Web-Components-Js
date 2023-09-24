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

var idade:number;

var persona:object = {
    nome:"Rodrigo",
    sobrenome:"Costa"
}

type persona2 = {
    nome:string;
    idade:number;
}

var conta:[string,number,number] = ["Rodrigo",100.0,136532552];

var conta2: (string | number)[] = ["Rodrigo", 13];

function pessoa(id: number): string | number {
    let nome: string = "Exemplo";
    return nome;
}

type bot1 = {
    readonly id:number;
    nome:string;
}

interface bot2 {
    readonly id:number,
    nome:string
}

const bot:bot1 = {
    id:1,
    nome:"Rodrigo"
}

const bott:bot2 = {
    id:1,
    nome:"Rodrigo"
}

class Batman implements bot1 {
    readonly id: number;
    nome: string;
    
    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
    }
}

class casa {
    rua: string;
    bairro: string;
    numero: number;
    constructor(rua:string,bairro:string,numero:number){
        this.rua = rua;
        this.bairro = bairro;
        this.numero = numero;
    }
}

class propietario extends casa{
    nome:string;
    constructor(nome:string,rua:string,bairro:string,numero:number){
        super(rua,bairro,numero);
        this.nome = nome;
    }
}

function itema(...item:any[]):any{
    return new Array().concat(...item);
}