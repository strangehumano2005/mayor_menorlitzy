let n1 = 0
let n2 = 0
let n3 = 0
let MAYOR = 0
let MEDIO = 0
let MENOR = 0
input.onButtonPressed(Button.A, function () {
    if (n1 == 0 && n2 == 0) {
        basic.showIcon(IconNames.No)
    } else {
        if (n1 > n2 && n1 > n3) {
            MAYOR = n1
            if (n2 > n2) {
                MEDIO = n2
                MENOR = n3
            } else {
                MEDIO = n3
                MENOR = n2
            }
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    n1 = randint(0, 9)
    n2 = randint(0, 9)
    n3 = randint(0, 9)
    if (n1 != n2 && n1 != n3 && n2 != n3) {
        basic.showIcon(IconNames.Yes)
        basic.showNumber(n1)
        basic.showNumber(n2)
        basic.showNumber(n3)
    } else {
        basic.showIcon(IconNames.No)
        n1 = 0
        n2 = 0
        n3 = 0
    }
})
