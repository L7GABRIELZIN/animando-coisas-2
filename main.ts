basic.forever(function () {
    basic.showIcon(IconNames.Square)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        . # # # .
        . # # # .
        `)
    basic.pause(500)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
