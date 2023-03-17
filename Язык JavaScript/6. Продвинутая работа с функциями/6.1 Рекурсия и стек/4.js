function printList(list) {
    let temp = list;

    while (temp) {
        console.log(list.value);
        temp = list.next;
    }
}

function printListRec(list) {
    console.log(list.value);
    
    if (list.next)
        printListRec(list.next);
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

  //printList(list);
  printListRec(list);