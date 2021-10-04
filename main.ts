basic.forever(function () {
    if (input.lightLevel() > 200) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        basic.showString("Buenos días")
    } else {
        basic.showLeds(`
            # # . # #
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . # # # #
            . . . # .
            . . # . .
            . # # # #
            `)
        basic.pause(200)
    }
})
