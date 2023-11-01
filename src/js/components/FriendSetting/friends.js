const friendSetting = `
    <div class="friends__menus ">
        <div class="home d-flex gap-5 py-2 my-2 d-flex align-items-center">
            <i class="ri-group-fill text-light"></i>
            <h6>Home</h6>
        </div>
    </div>
`;

class FriensSetting extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = friendSetting;
    }
}

window.customElements.define('friend-setting', FriensSetting)