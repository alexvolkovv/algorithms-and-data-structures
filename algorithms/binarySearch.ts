const sourceArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const findingNumber: number = 0

function binarySearch(arr: number[], findingElement: number): number {
    let low: number = 0
    let high: number = arr.length - 1
    let mid: number = 0

    while(high >= low) {
        mid = Math.floor( (high + low) / 2)
        let currentElement: number = arr[mid]

        if (findingElement === currentElement) {
            return mid
        } else if (findingElement > currentElement) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return -1
}

const result: number = binarySearch(sourceArray, findingNumber)

