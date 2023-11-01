const friends = `
    <div class="friends-logo my-3">
        <div class="friends-logo__brands d-flex align-items-center ">
                <img src="./images/cart10.jpg" alt="imag">
                <h6 class="ms-3"> Dedahi </h6>
        </div>
    </div>
`;

class ContactFriend extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = friends;
    }
}


window.customElements.define('contacts-friends', ContactFriend);