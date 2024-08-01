export interface IStack<dataType> {
    push(dataItem: dataType): void;
    pop(): dataType | null | undefined;
    peek(): dataType | null;
    isEmpty(): boolean;
    isFull(): boolean;
    size(): number;
    printStack(): void;
 }