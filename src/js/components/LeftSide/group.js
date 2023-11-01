// Group Component

const group = `
    <div class="users-logo py-2">
        <div class="users-logo__brands d-flex align-items-center">
            <i class="ri-team-fill text-center"></i>
            <h6 class="ms-3 "> Group</h6>

        </div>
    </div> 
`

class GroupComponent extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = group;
    }
}

window.customElements.define('group-component', GroupComponent);
