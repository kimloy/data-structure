class INode {
  public key: string;
  public value: string;
  public next: INode | null;

  constructor(key, value) {
    (this.key = key), (this.value = value);
  }
}

class LinkedList {
  public head: INode | null;
  public tail: INode | null;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public append(key, value) {
    const node = new INode(key, value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    ++this.length;
    return node;
  }

  public remove = (key) => {
    if (this.head == key) {
      if (this.head == this.tail) {
        this.head = null;
        this.tail = null;
        --this.length;
      } else {
        const secondNode = this.head.next;
        const thirdNode = secondNode.next;
        this.head.key = secondNode.key;
        this.head.value = secondNode.value;
        this.head.next = thirdNode;
        secondNode.next = null;
        --this.length;
      }
    }

    let prevNode = this.head;
    let currNode = this.head.next;

    while (currNode) {
      if (currNode.key == key) {
        if (currNode == this.tail) {
          this.tail = prevNode;
        }
        prevNode.next = currNode.next;
        currNode.next = null;
        --this.length;
        return;
      }
      return undefined;
    }
  };
}
