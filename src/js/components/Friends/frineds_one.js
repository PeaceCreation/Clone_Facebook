const friends = `
    <div class="friends-logo my-3">
        <div class="friends-logo__brands d-flex align-items-center ">
            <img src="./images/france.jpg" alt="">
            <h6 class="ms-3"> Mansour ali </h6>
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


window.customElements.define('contacts-friendsone', ContactFriend);