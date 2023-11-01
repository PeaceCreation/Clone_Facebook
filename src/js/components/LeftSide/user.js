
const logo = `
    <div class="bg-white user py-2 my-2">
        <div class="users-logo ms-2 my-3">
            <div class="users-logo__brands d-flex align-items-center ">
                <img src="./images/dat.jpg" alt="imag">
                <input class="form-control serach-input ms-2 w-100" type="search" placeholder="What's on your mind, Mohamed?" aria-label="Search" required>
            </div>
            <hr class="line">
            <div class="user-add d-flex align-items-center justify-content-between mx-4">
                <div class="d-flex align-items-center gap-2">
                    <i class="ri-video-add-fill"></i>
                    <h6 class="text-muted"> Live Video</h6>
                </div>
                <div class="d-flex align-items-center gap-2">
                <i class="ri-image-add-fill"></i>
                    <h6 class="text-muted"> Photo/Video </h6>
                </div>
                <div class="d-flex align-items-center gap-2">
                <i class="ri-emotion-happy-line"></i>
                    <h6 class="text-muted"> Feeling/Activity</h6>
                </div>
           
                
            </div>
        </div>
    </div>

`;


class SliderComponent extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        this.innerHTML = logo;
    }
}

window.customElements.define('logo-user',SliderComponent);

console.log(" Component created")