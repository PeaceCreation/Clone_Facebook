const video = `
    <div class="users-logo">
        <div class="users-logo__brands d-flex align-items-center">
            <i class="ri-folder-video-fill text-center"></i>
            <h6 class="ms-3 "> Video</h6>
        </div>
`;


class VideoComponent extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = video;
    }
}

window.customElements.define('video-component', VideoComponent);