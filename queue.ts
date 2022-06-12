interface IQueue<T> {
  enQueue(item: T): boolean;
  deQueue(): boolean;
  isEmpty(): boolean;
}


class Queue<T> implements IQueue<T> {
  private list: T[] = [];

  public enQueue(item: T): boolean {
    this.list.push(item);

    return true
  }

  public deQueue(): boolean {
    this.list.shift();

    return true;
  }

  public isEmpty(): boolean {
    return !Boolean(this.list.length)
  }
}

class Task {
  constructor(public title: string){}
}

const tasksQueue = new Queue();
console.log(tasksQueue, tasksQueue.isEmpty());

tasksQueue.enQueue(new Task("To learn data structures."));
console.log(tasksQueue, tasksQueue.isEmpty());

tasksQueue.enQueue(new Task("To make a cup of coffee."));
console.log(tasksQueue, tasksQueue.isEmpty());

tasksQueue.deQueue();
console.log(tasksQueue, tasksQueue.isEmpty());

tasksQueue.deQueue();
console.log(tasksQueue, tasksQueue.isEmpty());
