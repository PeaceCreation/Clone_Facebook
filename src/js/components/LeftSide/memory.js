// memory Component
const memory = `
    <div class="users-logo">
        <div class="users-logo__brands d-flex align-items-center">
            <i class="ri-history-line text-center"></i>
            <h6 class="ms-3 "> Memories</h6>
        </div>
    </div> 
`;

class MemoryComponent extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = memory;
    }
}
window.customElements.define('memory-component', MemoryComponent);