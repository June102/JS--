function throttle(f, ms) {
    let isCooldown = false,
        savedArgs = null,
        savedThis = null;

    return function wrap() {
        if(isCooldown) {
            isFunc = true;
            savedArgs = arguments;
            savedThis = this;
            return;
        } 
        
        f.apply(this, arguments);

        isCooldown = true;
        setTimeout(() => {
            isCooldown = false;
            if (savedArgs) {
                wrap.apply(savedThis, savedArgs);
                savedThis = null;
                savedArgs = null;
            }
        }, ms);
    }
}