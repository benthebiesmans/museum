let getal = 0
basic.forever(function () {
    basic.showNumber(getal)
    if (input.buttonIsPressed(Button.A)) {
        getal += 1
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(getal)
        getal += -1
    }
})
