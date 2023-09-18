class CardNews extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"})
        shadow.innerHTML = "<h1>Hello World</h1><button>Rodrigo</button>"
    }
}

customElements.define('card-news',CardNews)

class cardOne extends HTMLElement{
    constructor(){
        super();
        const shadow2 = this.attachShadow({mode:"open"})
        shadow2.innerHTML = "<h2>teste2</h2>"
    }
}

customElements.define("card-news2",cardOne)