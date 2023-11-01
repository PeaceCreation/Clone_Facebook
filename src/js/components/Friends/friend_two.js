const friendstwo = `
    <div class="friends-logo my-3">
        <div class="friends-logo__brands d-flex align-items-center ">
            <img src="./images/cart16.jpg" alt="image">
            <h6 class="ms-3"> Cheikh Mohamed </h6>
        </div>
    </div>
`;

class ContactFriends extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = friendstwo;
    }
}


window.customElements.define('contacts-friendstwo', ContactFriends);