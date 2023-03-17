function spy(func) {
    function wrap(...args) {
        wrap.calls.push(args);
        return func.apply(this, args);
    }
    wrap.calls = [];

    return wrap;
}

function work(a, b) {
    console.log(a + b);
}
  
work = spy(work);
  
work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log('call:' + args.join());
}