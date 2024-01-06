const posttwo = `
<div class="posts__logos d-flex align-items-center align-items-center justify-content-between my-3">
    <div class="posts-logo my-3 d-flex ms-2">
        <div class="posts-logo d-flex align-items-center ">
                <img src="./images/cart13.jpg" alt="imag">
        </div>
        <div class="posts__time d-block">
            <h6 class="ms-3 mb-0"> Chebahi  </h6>
            <time datetime="02:23" class="text-muted">1h</time><i class="ri-group-fill mx-1 text-muted"></i>
        </div>
    </div>
    <div class="posts__close me-2">
        <i class="ri-more-line mx-2"></i>
        <i class="ri-close-fill"></i>
    </div>
</div>
<div class="posts__body">
        <p class="text-muted mx-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit,
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
    </div>
    <div class="posts__img text-center py-2">
        <img src="./images/back.jpg" class="w-100" alt="">
    </div>
    <div class="posts__comments mx-5">
    <div class="posts__comments__text d-flex align-items-center align-items-center justify-content-between text-muted">
        <i class="ri-heart-fill d-flex"> <p class="text-dark">520</p></i>
        <h6>320 Comments</h6>
    </div>
    <hr class="line">
    <div class="posts__comments__comment d-flex align-items-center align-items-center justify-content-around">
        <div class="like d-flex align-items-center">
            <i class="ri-thumb-up-line"></i>
            <h6 class="text-muted mx-2">like</h6>
        </div>
        <div class="comment d-flex align-items-center">
            <i class="ri-chat-3-line"></i>
            <h6 class="text-muted mx-2">Comments</h6>
        </div>
    </div>
    <hr class="line">
    <div class="posts__comments__details">
        <h6 class="text-muted">view more comments</h6>
        <div class="posts__comments__details--info">
            <single-comment></single-comment>
            <single-secondcomment></single-secondcomment>
            <single-secondcomment></single-secondcomment>
            <user-comment></user-comment>
        </div>
    </div>
</div>
`;

class PostsComponentTwo extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = posttwo;
    }
}


window.customElements.define('posts-component', PostsComponentTwo);