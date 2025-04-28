function mergeSort(arr, sortedArr){

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    console.log(right)
}

const array = [7, 2, 4, 1, 5, 11]

mergeSort(array)