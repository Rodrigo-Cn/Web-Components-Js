class TituloAng extends HTMLElement{
    constructor(){
        super();
        const valor = this.attachShadow({mode:"open"});
        const texto = document.createElement("h1");
        texto.textContent = this.getAttribute("noticia");
        const estilo = document.createElement("style");
        estilo.textContent = `
        h1{
            color:red;
        }`
        valor.appendChild(texto);
        valor.appendChild(estilo);
    }
}

customElements.define("titulo-ang",TituloAng);