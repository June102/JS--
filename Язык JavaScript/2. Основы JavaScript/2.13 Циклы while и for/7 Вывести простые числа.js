let n = 15;
if(n>1) {
    console.log(2);
    for_i: for (let i = 3; i<=n; i+=2) {
        for (let j = 2; j<i; j++) {
            if (i%j==0)
                continue for_i;
        }
        console.log(i);
    }
}