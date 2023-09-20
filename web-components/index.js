class CardNews extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    build(){
        const div = document.createElement("div");
        const carddiv = document.createElement("div");
        const h1 = document.createElement("h1");
        const image = document.createElement("img");

        h1.textContent = this.getAttribute("conteudo") || "Anônimo";
        image.src = this.getAttribute("photo") || "";

        div.appendChild(carddiv);
        div.appendChild(h1);
        div.appendChild(image);

        div.setAttribute("class","content");

        return div;
    }
    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .content{
            background-color:red;
        }
        
        `
        return style;
    }
}

customElements.define("card-news",CardNews);

class Card1 extends HTMLElement{
    constructor(){
        super();
        const shadow2 = this.attachShadow({mode:"open"});
        shadow2.innerHTML = "<h2>Rodrigo</h2>";
    }
}

customElements.define('card1',Card1);