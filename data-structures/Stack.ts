class StackNode {
    private next: StackNode | null | undefined
    private value: string

    constructor(value: string, next: StackNode | null | undefined) {
        this.value = value
        this.next = next
    }

    public setValue(value: string) {
        this.value = value
    }

    public getValue() {
        return this.value
    }

    public setNext(nextNode: StackNode) {
        this.next = nextNode
    }

    public getNext() {
        return this.next
    }
}

class Stack {
    private top: StackNode | null | undefined

    constructor() {
        this.top = null
    }

    public push(value: string): Stack {
        if (this.top === null) {
            this.top = new StackNode(value, null)
        } else {
            this.top = new StackNode(value, this.top)
        }

        return this
    }

    public pop(): string | null | undefined {
        if (this.top === null) {
            return null
        }

        let deletedValue: string | null | undefined = this.top?.getValue()
        this.top = this.top?.getNext()

        return deletedValue
    }

}