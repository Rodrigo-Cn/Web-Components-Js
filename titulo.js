class TituloDinamico extends HTMLElement{
    constructor(){
        super();
        const titulo = this.attachShadow({mode:"open"});
        const componente = document.createElement("p");
        componente.textContent = "Olá Chicken";
        const style1 = document.createElement("style");
        style1.textContent = `
        p{
            color: red;
        }
        `
        titulo.appendChild(componente);
        titulo.appendChild(style1); 
    }
}

customElements.define("tdnmc",TituloDinamico);