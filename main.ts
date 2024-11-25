let getal = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(0)
        getal += 1
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(getal)
        getal += -1
    }
})
