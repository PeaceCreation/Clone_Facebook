const request = `
    <div class="friends__menus py-2 my-2 d-flex align-items-center justify-content-between ">
    <div class="request d-flex gap-5 d-flex align-items-center">
       
        <i class="ri-user-add-fill text-dark"></i>
        <h6>Friend Requests</h6>
    </div>
    <i class="ri-arrow-right-s-line"></i>
    </div>
`;


class FriendRequest extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = request;
    }
}

window.customElements.define('friend-request', FriendRequest)