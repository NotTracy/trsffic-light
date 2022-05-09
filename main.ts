input.onButtonPressed(Button.A, function () {
    if (distance <= 5) {
        GREEN()
        basic.pause(5000)
        music.playTone(262, music.beat(BeatFraction.Quarter))
        doSomething()
        OFF()
        basic.pause(1000)
        YELLOW()
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.pause(2000)
        OFF()
        basic.pause(1000)
        RED()
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.pause(1000)
        OFF()
        basic.pause(1000)
        basic.clearScreen()
    }
})
function RED () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.showIcon(IconNames.No)
}
function OFF2 () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function GREEN () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
}
function doSomething () {
    count = 20
    for (let index = 0; index < 20; index++) {
        basic.showNumber(count)
        count += -1
        basic.clearScreen()
    }
}
function light2 () {
	
}
function OFF () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function YELLOW () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let count = 0
let range: neopixel.Strip = null
let distance = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
strip.setBrightness(30)
RED()
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(4)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(4)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P0, PulseValue.High) / 58
    basic.pause(2000)
})
