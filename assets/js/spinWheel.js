let wheel = document.querySelector('.double-wheel .wheel')
let innerWheel = document.querySelector('.inner')
let spinBtn = document.querySelector('.double-wheel .spinBtn')

// Random Number generator function
let randomNumber = max => {
    return Math.floor(Math.random() * max)
}

let wheelValue = randomNumber(-3600)
let innerValue = randomNumber(3600)

// Click listner on double wheel
spinBtn.onclick = () => {
    wheel.style.transform = `rotate(${wheelValue}deg)`
    innerWheel.style.transform = `rotate(${innerValue}deg)`
    wheelValue += randomNumber(-3600)
    innerValue += randomNumber(3600)
}

// SINGLE WHEEL
let sWheel = document.querySelector(".single-wheel .wheel")
let sSpinBtn = document.querySelector(".single-wheel .spinBtn")
let sWheelValue = randomNumber(3600)

//click Listner on Single wheel
sSpinBtn.onclick = () => {
    sWheel.style.transform = `rotate(${sWheelValue}deg)`
    sWheelValue += randomNumber(3600)
}