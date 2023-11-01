// friend Component
const friend = `
    <div class="users-logo">
        <a href="./friends.html" class="text-dark"> 
            <div class="users-logo__brands d-flex align-items-center">
                <i class="ri-group-2-line text-center"></i>
                <h6 class="ms-3 "> Friends</h6>
            </div>
        </a>
    </div> 
`;

class FriendComponent extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = friend;
    }
}
window.customElements.define('friend-component', FriendComponent);




