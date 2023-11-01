const comment = `
    <div class="bg-white posts__user-comment pb-2">
        <div class="users-logo  my-3">
            <div class="users-logo__brands d-flex align-items-center ">
                <img src="./images/dat.jpg" alt="imag">
                <i class="ri-arrow-down-s-line"></i>
                <input class="form-control serach-input ms-2 w-100" type="search" placeholder="Write a comment..." aria-label="Search" required>
                
            </div>
        </div>
    </div>
`;


class UserComment extends HTMLElement{
    constructor (){
        super();
    }

    connectedCallback(){
        this.innerHTML= comment;
    }
} 


window.customElements.define('user-comment', UserComment);
