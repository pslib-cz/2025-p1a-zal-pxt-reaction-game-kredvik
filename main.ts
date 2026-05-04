// ReactionGame – instrukce v README.md
let dobaCekani = randint(3,6)

function presypaciHodiny() {
basic.clearScreen()
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(2, 0)
    led.plot(3, 0)
    led.plot(4, 0)
    led.plot(2, 1)
    led.plot(1, 2)
    led.plot(2, 2)
    led.plot(3, 2)
    led.plot(2, 3)
    led.plot(0, 4)
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
    led.plot(4, 4)
}
input.onButtonPressed(Button.AB, function(){
    presypaciHodiny()
    music.playTone(340, 500)
    basic.pause(dobaCekani * 1000)
})

function viteznyTonA() {
    music.playTone(4000,500)
}
function viteznyTonB() {
    music.playTone(2000,500)
}
if (input.buttonIsPressed(Button.A)) {
    viteznyTonB()
}
if (input.buttonIsPressed(Button.B)) {
    viteznyTonA()
}
if (input.buttonIsPressed(Button.AB)) {
    music.playTone(500, 250)
    music.playTone(250, 250)
    basic.showIcon(IconNames.Sad)
}