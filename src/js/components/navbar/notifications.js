const notification = `
    <div class="navbar-side d-flex align-items-center justify-content-end">
        <i class="ri-menu-fill mx-2"></i>
        <i class="ri-messenger-line mx-2"></i>
        <i class="ri-notification-2-fill mx-2"></i>
        <a class="navbar-brand d-flex align-items-center" href="#">
            <img src="./images/dat.jpg" class="mx-2" alt="image">
        </a>
    </div>
`;

class NavbarNotification extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = notification;
    }
}


window.customElements.define('navbar-notification', NavbarNotification);