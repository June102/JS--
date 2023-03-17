function printListRec(list) {
    if (list.next)
        printListRec(list.next);

    console.log(list.value);
}

function printList(list) {
    let arr = [];
    let temp = list;

    while (temp) {
        arr.push(list.value);
        temp = list.next;
    }

    for (let i = arr.length - 1; i >= 0; i++) {
        console.log(arr[i]);
    }
}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  //printListRec(list);
  printList(list);