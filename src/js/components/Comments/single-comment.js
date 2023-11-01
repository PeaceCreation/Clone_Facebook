const singleComment = `
    <div class="users-logo my-3">
        <div class="users-logo__brands d-flex align-items-center ">
            <img src="./images/cart16.jpg" alt="imag">
            <div class="user-info ms-1 p-1">
                <h6 class="ms-3"> Mohamed</h6>
                <p class="text-muted ms-3"> 
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </div>
        </div>
        <div class="user-feeling d-flex align-items-center gap-3 pt-2 ms-5">
            <h6 class="text-muted">6h</h6>
            <h6 class="text-muted">Like</h6>
            <h6 class="text-muted">Replay</h6>
        </div>
    </div>
`;


class SingleComment extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = singleComment;
    }
}

window.customElements.define('single-comment', SingleComment);