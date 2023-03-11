class tarjet extends HTMLElement {
    static get observedAttributes(){
        this.return["Destino","Duración en Dias", "Costo", "Descripción","Actividades" , "Está reservado: si / no"]
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
        <h1>$(this.Destino)</h1>
        <p>$(this.Duracion en dias)</P>
        <p>$(this.Costo)</P>
        <p>$(this.Descripcion)</P>
        <p>$(this.Actividades)</P>
        <p>$(this.Está reservado: si / no)</P>
        </section>`
       
    }
    
} 
customElements.define["My_tarjet", tarjet];
export default tarjet

