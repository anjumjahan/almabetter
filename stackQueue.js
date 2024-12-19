//Stack and Queues --> IMP

//Stack--> LIFO
//Restriction of stack - you can add or remove only from the top (this is one major restriction of stack)
//Stack is a ds so its going to hold data
//2 Operations in stack -> 1) add data (Pushing)   2) remove data (Popping)

//Class, Constructor, Object, this keyword is required for stack
class Stack {
  // its good practice to name class in first letter capital
  constructor() {
    //constructor is a function
    this.items = [];
  }

  add(element) {
    this.items.push(element); // adds element at the end
  }

  size() {
    return this.items.length;
  }

  remove() {
    return this.items.pop(); //pop removes element from the end
  }

  peek() {
    // to see, look, will return the last element
    let lastIndex = this.items.length - 1;
    return this.items[lastIndex];
  }
}

let stack1 = new Stack();
stack1.add(7);
stack1.add(14);
stack1.add(1);
// console.log(stack1.items);
stack1.add(23);
stack1.add(28);
console.log(stack1.items);
console.log(stack1.size());
stack1.remove();
console.log(stack1.items);
stack1.remove();
console.log(stack1.items);
stack1.peek();
console.log(stack1.peek());

//closing and opening of tabs in browser done using stack - example of stack

//Queue - this is also a linear ds ---> here it is FIFO

//Entering from one end is adding (rear), exiting from another end is removing(front).
//additiion is called Enqueue, remove is called Dequeue

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue(element) {
    if (this.isEmpty) {
      return;
    } else {
      return this.items.shift();
    }
  }

  front() {
    // to return the first element
    if (!this.isEmpty()) {
      return this.items[0];
    }
  }

  isEmpty() {
    // will check if my queue is empty or not
    if (this.items.length > 0) {
      return false;
    } else {
      return true;
    }
  }
}

let Queue1 = new Queue();
Queue1.enqueue(14);
Queue1.enqueue(15);
Queue1.enqueue(6);
Queue1.enqueue(21);
Queue1.enqueue(45);
console.log(Queue1.items);

Queue1.dequeue();
console.log(Queue1.items);
console.log(Queue1.front());
console.log(Queue1.isEmpty());
