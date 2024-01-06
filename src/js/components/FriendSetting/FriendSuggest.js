const suggest = `
    <div class="friends__menus py-2 my-2 d-flex align-items-center justify-content-between ">
    <div class="request d-flex gap-5 d-flex align-items-center">
        <i class="ri-user-fill text-dark"></i>
        <h6></h6>
    </div>
    <i class="ri-arrow-right-s-line"></i>
    </div>
`;


class FriendRequest extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = suggest;
        this.querySelector('h6').innerText = this.getAttribute('title');
    }
}

window.customElements.define('friend-suggest', FriendRequest)