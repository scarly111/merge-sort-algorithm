function mergeSort(arr, sortedArr) {

    if (arr.length <= 1) {
        // if there is only single value push directly inside an array
        sortedArr.push(...arr)
        return
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    let sortedLeft = [];
    let sortedRight = [];

    mergeSort(left, sortedLeft);
    mergeSort(right, sortedRight);

    let i = 0
    let j = 0
    
    while (i < sortedLeft.length && j < sortedRight.length) {
        if (sortedLeft[i] < sortedRight[j]) {
            sortedArr.push(sortedLeft[i])
            i++
        } else {
            sortedArr.push(sortedRight[j])
            j++
        }
    }

    while (i < sortedLeft.length) {
        sortedArr.push(sortedLeft[i])
        i++
    }
    while (j < sortedRight.length) {
        sortedArr.push(sortedRight[j])
        j++
    }
}

const arr = [34, 7, 23, 32, 5, 62]
const sortedArr = []
mergeSort(arr, sortedArr)
console.log(sortedArr)
