const save = `
    <div class="users-logo py-2">
        <div class="users-logo__brands d-flex align-items-center">
            <i class="ri-save-line text-center"></i>
            <h6 class="ms-3 "> Saves</h6>
        </div>
    </div> 
`;

class SaveComponent extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = save;
    }
}


window.customElements.define('save-component', SaveComponent);




