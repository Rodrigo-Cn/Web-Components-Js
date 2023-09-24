class TituloDinamico extends HTMLElement{
    constructor(){
        super();
        const titulo = this.attachShadow({mode:"open"});
        const componente = document.createElement("h1");
        componente.innerHTML = "Olá Chicken";
        const style1 = document.createElement("style");
        style1.innerHTML = `
        h1{
            color: red;
        }`;
        titulo.appendChild(componente);
        titulo.appendChild(style1); 
    }
}

customElements.define("title-dinamico", TituloDinamico);