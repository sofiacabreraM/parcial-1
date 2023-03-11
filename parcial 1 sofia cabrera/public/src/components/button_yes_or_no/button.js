class button extends HTMLElement {
    static get observedAttributes(){
        this.return["yes or No"]
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(PropName, OldValue, NewValue){
        this[PropName] = NewValue;
        this.return();

    }

    return(){
        this.shadowRoot.innerHTML = `<section>
       <button>$(yes)</button>
       <button>$(No)</button>
        </section>`
       
    }
} 
customElements.define["button_yes_or_No", button];
export default button
