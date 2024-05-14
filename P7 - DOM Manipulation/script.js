count = document.getElementById("count")
error = document.getElementById("error")
function counter(val) {
    value = parseInt(count.innerHTML) + val
    if (value<0) {
        count.innerHTML = 0
        error.innerHTML = "Error: Cannot go below 0"
    }
    else {
        count.innerHTML = value
        error.innerHTML = ""
    }
}

function clearCount() {
    count.innerHTML = 0
    error.innerHTML = ""
}