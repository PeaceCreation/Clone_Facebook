const navbarLogo = `
    <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="./images/logo.png" class="mx-3" alt="">
        <form action="" class="d-flex">
            <i class="ri-search-line"></i> <input class="form-control me-2" type="search" placeholder="Search Facebook" aria-label="Search" required>
        </form>
    </a>
`;

class NavbarLogo extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = navbarLogo;
    }
}


window.customElements.define('navbar-logo', NavbarLogo);