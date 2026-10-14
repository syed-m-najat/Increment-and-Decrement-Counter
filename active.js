let count = 0

function increment() {
    count++
    document.querySelector('h1').innerHTML = count
}

function decrement() {
    if (count > 0) {
        count--
        document.querySelector('h1').innerHTML = count
    }
}