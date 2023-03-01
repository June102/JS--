function getSecondsToday() {
    let now = new Date();
    let dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    return Math.round((now - dayStart) / 1000);
}