
const user = `
        <div class="users-logo my-3">
            <div class="users-logo__brands d-flex align-items-center ">
                <img src="./images/dat.jpg" alt="imag">
                <h6 class="ms-3"> Mohamed</h6>
            </div>
        </div>

`;


class SliderComponent extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        this.innerHTML = user;
    }
}

window.customElements.define('user-logo',SliderComponent);

console.log(" Component created")


