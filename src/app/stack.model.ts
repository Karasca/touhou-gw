import { IStack } from "../interfaces/IStack";

export class Stack implements IStack<any> {
    stackSize = 0;
    data = new Array;

    constructor(size: number) {
        this.stackSize = size;
    }
    push(dataItem: any): void {
        if (this.data.length === this.stackSize) {
            // throw error
         }
         this.data.push(dataItem);
    }
    pop() {
        return this.data.pop();
    }
    peek() {
        return this.data[this.size() - 1];
    }
    isEmpty(): boolean {
        return this.data.length <= 0;
    }
    isFull(): boolean {
        let result = this.data.length >= this.stackSize;
        return result;
    }
    size(): number {
        return this.data.length;
    }

    printStack(): void {
        this.data.forEach((dataItem) => {
            // print dataItem
         });
    }

}
