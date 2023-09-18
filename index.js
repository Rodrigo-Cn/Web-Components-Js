class CardNews extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"})
        shadow.innerHTML = "<h1>Hello World</h1><button>Rodrigo</button>"
    }
}

customElements.define('card-news',CardNews)

class Card1 extends HTMLElement{
    constructor(){
        super();
        const shadow2 = this.attachShadow({mode:"open"});
        shadow2.innerHTML = "<h2>Rodrigo</h2>";
    }
}

customElements.define('card1',Card1);