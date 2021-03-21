function rotateLeft(d, arr) {
    for (let i = 0; i < d; i++) {
        arr.push(arr.shift())
    }

    return arr
}

let d = 2
let arr = [3, 4, 5, 6, 7]
rotateLeft(d, arr)
