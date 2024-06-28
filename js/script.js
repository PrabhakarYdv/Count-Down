const endDate = "1 January 2025 00:01 AM"
const inputes = document.querySelectorAll("input")
// console.log(endDate)
document.getElementsByTagName('h2')[0].innerText = endDate


const timer = () => {
    const endTime = new Date(endDate)
    const currentTIme = new Date()

    // console.log(endTime)
    // console.log(currentTIme)

    const diffrence = (endTime - currentTIme) / 1000
    if (diffrence < 0) {
        return
    }
    let days = Math.floor(diffrence / 3600 / 24)
    let hr = Math.floor(diffrence / 3600) % 24
    let min = Math.floor(diffrence / 60) % 60
    let sec = Math.floor(diffrence % 60)
    // console.log(days, hr, min, sec)

    inputes[0].value = days
    inputes[1].value = hr
    inputes[2].value = min
    inputes[3].value = sec

}
timer()

// For Repating 

setInterval(
    () => {
        timer()
    }, 1000
)