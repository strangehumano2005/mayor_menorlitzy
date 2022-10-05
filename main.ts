let N1 = 0
let N2 = 0
let N3 = 0
let MAYOR = 0
let MEDIO = 0
let MENOR = 0
input.onButtonPressed(Button.A, function () {
    if (N1 == 0 && N2 == 0) {
        basic.showIcon(IconNames.No)
    } else {
        if (N1 > N2 && N1 > N3) {
            MAYOR = N1
            if (N2 > N3) {
                MEDIO = N2
                MENOR = N3
            } else {
                MEDIO = N3
                MENOR = N2
            }
        }
        basic.showNumber(MAYOR)
        basic.showNumber(MEDIO)
        basic.showNumber(MENOR)
    }
    if (N2 > N1 && N2 > N3) {
        MAYOR = N2
        if (N1 > N3) {
            MEDIO = N1
            MENOR = N3
        } else {
            MEDIO = N3
            MENOR = N1
        }
        basic.showNumber(MAYOR)
        basic.showNumber(MEDIO)
        basic.showNumber(MENOR)
    }
    if (N3 > N1 && N3 > N2) {
        MAYOR = N3
        if (N1 > N2) {
            MEDIO = N1
            MENOR = N2
        } else {
            MEDIO = N2
            MENOR = N1
        }
        basic.showNumber(MAYOR)
        basic.showNumber(MEDIO)
        basic.showNumber(MENOR)
    }
})
input.onGesture(Gesture.Shake, function () {
    N2 = randint(0, 9)
    N2 = randint(0, 9)
    N3 = randint(0, 9)
    if (N1 != N2 && N1 != N3 && N2 != N3) {
        basic.showIcon(IconNames.Yes)
        basic.showNumber(N1)
        basic.showNumber(N2)
        basic.showNumber(N3)
    } else {
        basic.showIcon(IconNames.No)
        N1 = 0
        N2 = 0
        N3 = 0
    }
})
