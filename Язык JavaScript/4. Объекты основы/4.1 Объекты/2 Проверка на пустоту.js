function isEmpty(obj) {
    for (let param in obj) {
        return false;
    }
    return true;
}