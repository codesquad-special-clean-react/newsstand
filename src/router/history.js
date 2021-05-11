class History{
    location = null;

    constructor() {
        this.location = window.location;
        this.history = window.history;
    }

    push(to) {
        this.history.pushState({ path: to }, 'News stand', to);
        this.location.pathname = to;
    }
}

function createHistory() {
    return new History();
}

export { createHistory };