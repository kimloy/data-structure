import { LinkedList } from "./LinkedList";

class HashTable {
  public table: LinkedList[];
  public size: number;

  constructor(size) {
    this.table = [size];
    this.size = size;

    for (let i = 0; i < size; i++) {
      this.table[i] = new LinkedList();
    }
  }

  private generateHashCode = (key: string) => {
    let stringSum = 0;
    for (let i = 0; i < key.length; i++) {
      stringSum += key.charCodeAt(i);
    }
    return stringSum % this.size;
  };

  public insert(key: string, value: string) {
    const hashCode = this.generateHashCode(key);
    const tableIndex = hashCode % this.size;
    this.table[tableIndex].append(key, value);
  }

  public get(key: string) {
    const hashCode = this.generateHashCode(key);
    const tableIndex = hashCode % this.size;
    const indexNode = this.table[tableIndex];

    const reqNode = indexNode.findNode(key, indexNode);
    return reqNode;
  }

  public remove(key: string){
    const hashCode = this.generateHashCode(key);
    const tableIndex = hashCode % this.size;
    const indexNode = this.table[tableIndex];

    indexNode.remove(key, indexNode);
    
  }
}

const ht = new HashTable(20);

ht.insert("Paul", "1234");
ht.insert("Amanda", "1234");

console.log(ht.get("Amanda"));

ht.remove("Amanda");
console.log(ht)

