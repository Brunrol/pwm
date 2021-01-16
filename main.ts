input.onButtonPressed(Button.A, function () {
    if (Power < 255) {
        Power += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    Power = 128
})
input.onButtonPressed(Button.B, function () {
    if (Power > 0) {
        Power += -1
    }
})
let Power = 0
let Count = 0
Power = 128
let Dir = 0
basic.forever(function () {
    basic.showNumber(Power)
    if (Count < Power) {
        pins.digitalWritePin(DigitalPin.P3, 1)
        Count += 1
    } else if (Count < 255) {
        pins.digitalWritePin(DigitalPin.P3, 0)
        Count += 1
    } else {
        pins.digitalWritePin(DigitalPin.P3, 0)
        Count = 0
    }
})
