const arrow = `
    <div class="users-logo py-2">
        <div class="users-logo__brands d-flex align-items-center">
            <i class="ri-arrow-drop-down-line text-center"></i>
        </div>
    </div> 
`;

class ArrowComponent extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = arrow;
    }
}

window.customElements.define('arrow-component', ArrowComponent);