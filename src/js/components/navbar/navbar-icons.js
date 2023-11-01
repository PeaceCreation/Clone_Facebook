const navbarIcons = `
    <section class="section__center">
        <div class="d-flex align-items-center justify-content-between">
            <i class="ri-home-fill"></i>
            <i class="ri-tv-2-line"></i>
            <i class="ri-store-3-line"></i>
            <i class="ri-user-line"></i>
            <i class="ri-gamepad-line"></i>
        </div>
    </section>
`;


class NavbarIcons extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = navbarIcons;
    }
}

window.customElements.define('navbar-icons', NavbarIcons);