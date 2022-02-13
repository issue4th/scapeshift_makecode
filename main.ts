namespace SpriteKind {
    export const campfire = SpriteKind.create()
    export const key = SpriteKind.create()
    export const secret = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    select_next_level()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    if (controller.A.isPressed()) {
        funling.setVelocity(0, -20)
    }
})
function start_campfires () {
    turn_marker_into_sprite(myTiles.tile19, sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . 8 2 2 b . . . . . . 
        . . . . . b 2 2 2 2 b . . . . . 
        . . . . 8 2 2 4 4 2 2 b . . . . 
        . . . 8 2 2 4 5 5 4 2 2 b . . . 
        . . . 2 2 4 4 5 5 4 4 2 2 . . . 
        d d d d e e e e e d d d d d e e 
        e e e e d d e e e e e e e e e d 
        d e d e e e e e d d e e e d d e 
        `, SpriteKind.campfire))
}
function start_secret_after_key_found () {
    for (let temporary of sprites.allOfKind(SpriteKind.secret)) {
        temporary.destroy()
    }
    for (let location of tiles.getTilesByType(assets.tile`myTile28`)) {
        temporary = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . . a . . a . . . . . . . 
            . . . . . a . . a . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.secret)
        temporary.startEffect(effects.halo)
        tiles.placeOnTile(temporary, location)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    if (controller.A.isPressed()) {
        funling.setVelocity(0, -20)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (funling.vy == 0) {
        funling.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    scene.setBackgroundImage(img`
        fffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffff
        fffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffff
        fffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffff
        fffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffff
        fffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffff
        fffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffff
        fffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffff
        fffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffff
        fffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffff
        fffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeeeeeefffffffffffffffffffffffeeeeeeeeeeeeeeefffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeeeeeefffffffffffffffffffffffeeeeeeeeeeeeeeefffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeeeeeefffffffffffffffffffffffeeeeeeeeeeeeeeefffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeeeeeefffffffffffffffffffffffeeeeeeeeeeeeeeefffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffeeeeeeeeeeefffffffffffffffffffffffffffeeeeeeeeeeefffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffeeeeeeeeeeefffffffffffffffffffffffffffeeeeeeeeeeefffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffeeeeeeeeeeefffffffffffffffffffffffffffeeeeeeeeeeefffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffeeeeeeeeeeefffffffffffffffffffffffffffeeeeeeeeeeefffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffeeeeefffffffffffffffffffffffffffffffffeeeeeffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffeeeeefffffffffffffffffffffffffffffffffeeeeeffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffeeeeefffffffffffffffffffffffffffffffffeeeeeffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffeeeeefffffffffffffffffffffffffffffffffeeeeeffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffeeefffffffffffffffffffffffffffffffffffeeefffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffeeefffffffffffffffffffffffffffffffffffeeefffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffeeefffffffffffffffffffffffffffffffffffeeefffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffeeffffffffffffffffffffffffffffffffffffeeffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffeeffffffffffffffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffeeeffffffffffffffccccfffffffffffffffffffeffffffffffffffffffffffffffffffffffffffffffffffefffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffeeefffffffffffffcccccffffffffffffffffffeefffffffffffffffffffffffffffffffffffffffffffffeefffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffeeeffffffffffffccccccfffffffffffffffffeeeffffffffffffffffffffffffffffffffffffffffffffeeefffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffeeeeefffffffffffcccccccffffffffffffffffeeeffffffffffffffffffffffffffffffffffffffffffffeeefffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffeeeeefffffffffcccccccccffffffffffffffffeeeffffffffffffffffffffffffffffffffffffffffffffeeefffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffeeeeefffffffffcccccccccfffffffffffffffeeeeeffffffffffffffffffffffffffffffffffffffffffeeeeeffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffeeeeefffffffffccccccccccffffffffffffffeeeeeffffffffffffffffffffffffffffffffffffffffffeeeeeffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffeeeeeeeeeeefffffcccccccccccffffffffffffffeeeeeffffffffffffffffffffffffffffffffffffffffffeeeeeffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeffffccccccccccccffffffffffffffeeeeeffffffffffffffffffffffffffffffffffffffffffeeeeeffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffeeeeeeeeeeefffccccccccccccccffffffffffeeeeeeeeeeeffffffffffffffffffffffffffffffffffffeeeeeeeeeeefffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeffcccccccccccccccffffffffffeeeeeeeeeeeffffffffffffffffffffffffffffffffffffeeeeeeeeeeefffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeccccccccccccccccfffffffffeeeeeeeeeeeffffffffffffffffffffffffffffffffffffeeeeeeeeeeefffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeccccccccccccccccfffffffffeeeeeeeeeeeffffffffffffffffffffffffffffffffffffeeeeeeeeeeefffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeecccccccccccccccccffffffeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeefffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeecccccccccccccccccffffffeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeefffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeecccccccccccccffffffeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeefffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeecccccccccccccffffffeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeefffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeccccccccccccccffeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffff
        ffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeecccccccccccccccfeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffff
        fffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccfeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffff
        fffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccfeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffff
        fffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffff
        ffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffff
        ffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffff
        ffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffff
        `)
    scene.setBackgroundColor(15)
})
function select_next_level () {
    level += 1
    select_level()
}
function turn_marker_into_sprite (marker_image: Image, mySprite: Sprite) {
    for (let temporary of sprites.allOfKind(mySprite.kind())) {
        temporary.destroy()
    }
    for (let location of tiles.getTilesByType(marker_image)) {
        temporary = sprites.create(mySprite.image, mySprite.kind())
        temporary.startEffect(effects.fire)
        tiles.placeOnTile(temporary, location)
    }
}
function create_tilemaps () {
    tilemaps = [
    tiles.createMap(tilemap`level19`),
    tiles.createMap(tilemap`level5`),
    tiles.createMap(tilemap`level13`),
    tiles.createMap(tilemap`level10`),
    tiles.createMap(tilemap`level17`),
    tiles.createMap(tilemap`level14`)
    ]
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    game.over(false)
})
function start_keys () {
    for (let temporary of sprites.allOfKind(SpriteKind.key)) {
        temporary.destroy()
    }
    for (let location of tiles.getTilesByType(assets.tile`myTile14`)) {
        temporary = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 5 . . . . . . . . . . . . 
            . . 5 4 5 . . . . . . . . . . . 
            . 5 4 . 4 5 5 5 5 5 . . . . . . 
            . 4 5 . 5 4 4 4 5 4 5 . . . . . 
            . . 4 5 4 . . . 4 . 4 . . . . . 
            . . . 4 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.key)
        temporary.startEffect(effects.halo)
        tiles.placeOnTile(temporary, location)
    }
}
function player_has_found_a_key () {
    start_secret_after_key_found()
}
function hide_start_position_and_spawn_player_in () {
    tiles.placeOnRandomTile(funling, assets.tile`myTile2`)
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
function select_level () {
    tiles.loadMap(tilemaps[level])
    scene.setBackgroundImage(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd1111111111111111111
        11111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd111111111111111111
        11111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd111111111111111111
        111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111
        11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
        11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
        1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
        1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
        111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111
        111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111
        11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
        11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
        11ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd111111
        1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
        1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
        1dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd111111
        ddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111dd
        dddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddd
        dddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddd
        ddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111ddddddddddddd
        ddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666dddddddddddddddddddddddd
        ddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999dd
        dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999
        9ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd999999999999
        999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999
        9999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd999999999999999
        99999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd9999999999999999
        999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999
        999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999
        9999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd9996999999999999999
        9999999996666666666699966999999999999999999999999666666666669996699999999999999999999999966666666666999669999999999999999999999996666666666699966999999999999999
        9999999666666666669999996699999999999999999999966666666666999999669999999999999999999996666666666699999966999999999999999999999666666666669999996699999999999999
        9999999996666666669999966999999999999999999999999666666666999996699999999999999999999999966666666699999669999999999999999999999996666666669999966999999999999999
        9999999996666666999999666699999999999999999999999666666699999966669999999999999999999999966666669999996666999999999999999999999996666666999999666699999999999999
        9999999966966666666996666669999999999999999999996696666666699666666999999999999999999999669666666669966666699999999999999999999966966666666996666669999999999999
        9999999999666666666699966999999999996999999999999966666666669996699999999999699999999999996666666666999669999999999969999999999999666666666699966999999999996999
        9999999966666666666996666669999999996999999999996666666666699666666999999999699999999999666666666669966666699999999969999999999966666666666996666669999999996999
        9996999666666666666966666666999999966699999699966666666666696666666699999996669999969996666666666669666666669999999666999996999666666666666966666666999999966699
        9996699999666666666666666699999999996699999669999966666666666666669999999999669999966999996666666666666666999999999966999996699999666666666666666699999999996699
        9966999966666666666666666666999999966999996699996666666666666666666699999996699999669999666666666666666666669999999669999966999966666666666666666666999999966999
        9996699666666666666666666666699999666699999669966666666666666666666669999966669999966996666666666666666666666999996666999996699666666666666666666666699999666699
        9966666666666666666666666669999999966669996666666666666666666666666999999996666999666666666666666666666666699999999666699966666666666666666666666669999999966669
        9996666666666666666666666666699999666699999666666666666666666666666669999966669999966666666666666666666666666999996666999996666666666666666666666666699999666699
        9996666666666666666666666666669996666669999666666666666666666666666666999666666999966666666666666666666666666699966666699996666666666666666666666666669996666669
        9966666666666666666666666666999999666699996666666666666666666666666699999966669999666666666666666666666666669999996666999966666666666666666666666666999999666699
        9666666666666666666666666666669966666669966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669
        9966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669966666666666666666666666666666996666666
        9966666666666666666666666666669966666666996666666666666666666666666666996666666699666666666666666666666666666699666666669966666666666666666666666666669966666666
        6666666666666666666666666666666966666666666666666666666666666666666666696666666666666666666666666666666666666669666666666666666666666666666666666666666966666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        `)
    hide_start_position_and_spawn_player_in()
    set_all_other_admin_objects_invisible()
    start_campfires()
}
function set_all_other_admin_objects_invisible () {
    for (let temporary of tiles.getTilesByType(assets.tile`myTile7`)) {
        tiles.setTileAt(temporary, assets.tile`transparency16`)
    }
    for (let temporary of tiles.getTilesByType(assets.tile`myTile9`)) {
        tiles.setTileAt(temporary, assets.tile`transparency16`)
    }
    for (let temporary of tiles.getTilesByType(assets.tile`myTile28`)) {
        tiles.setTileAt(temporary, assets.tile`transparency16`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    player_has_found_a_key()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    game.over(false)
})
let tilemaps: tiles.WorldMap[] = []
let temporary: Sprite = null
let funling: Sprite = null
let level = 0
level = 0
create_tilemaps()
funling = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 4 4 7 7 7 7 7 7 7 . . . . 
    . . . 4 4 4 1 1 1 7 7 7 . . . . 
    . . . 4 4 4 4 f 1 7 7 7 . . . . 
    . . . 4 4 4 4 1 1 7 7 7 . . . . 
    . . . 4 4 4 4 4 7 7 7 7 . . . . 
    . . . 4 4 4 4 4 7 7 7 7 . . . . 
    . . . 4 6 4 4 4 4 7 7 7 . . . . 
    . . . 4 4 6 6 4 4 4 7 7 . . . . 
    . . . 4 4 4 4 4 4 4 4 7 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
select_level()
controller.moveSprite(funling, 80, 0)
scene.cameraFollowSprite(funling)
game.onUpdate(function () {
    if (funling.tileKindAt(TileDirection.Center, assets.tile`myTile21`)) {
        controller.moveSprite(funling, 35, 0)
    } else {
        controller.moveSprite(funling, 80, 0)
    }
})
game.onUpdate(function () {
    if (funling.vy < 0) {
        funling.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 4 4 7 7 7 7 7 7 7 . . . . 
            . . . 4 4 4 1 1 1 7 7 7 . . . . 
            . . . 4 4 4 4 f 1 7 7 7 . . . . 
            . . . 4 4 4 4 1 1 7 7 7 . . . . 
            . . . 4 4 4 4 4 7 7 7 7 . . . . 
            . . . 4 4 4 4 4 7 7 7 7 . . . . 
            . . . 4 6 4 4 4 4 7 7 7 . . . . 
            . . . 4 4 6 6 4 4 4 7 7 . . . . 
            . . . 4 4 4 4 4 4 4 4 7 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (funling.vy > 0) {
        funling.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 4 4 7 7 7 7 7 7 7 . . . . 
            . . . 4 4 4 1 1 1 7 7 7 . . . . 
            . . . 4 4 4 4 f 1 7 7 7 . . . . 
            . . . 4 4 4 4 1 1 7 7 7 . . . . 
            . . . 4 4 4 4 4 7 7 7 7 . . . . 
            . . . 4 4 4 4 4 7 7 7 7 . . . . 
            . . . 4 6 4 4 4 4 7 7 7 . . . . 
            . . . 4 4 6 6 4 4 4 7 7 . . . . 
            . . . 4 4 4 4 4 4 4 4 7 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (funling.x % 2 == 0) {
        funling.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 4 4 7 7 7 7 7 7 7 . . . . 
            . . . 4 4 4 1 1 1 7 7 7 . . . . 
            . . . 4 4 4 4 f 1 7 7 7 . . . . 
            . . . 4 4 4 4 1 1 7 7 7 . . . . 
            . . . 4 4 4 4 4 7 7 7 7 . . . . 
            . . . 4 4 4 4 4 7 7 7 7 . . . . 
            . . . 4 6 4 4 4 4 7 7 7 . . . . 
            . . . 4 4 6 6 4 4 4 7 7 . . . . 
            . . . 4 4 4 4 4 4 4 4 7 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        funling.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 4 4 7 7 7 7 7 7 7 . . . . 
            . . . 4 4 4 1 1 1 7 7 7 . . . . 
            . . . 4 4 4 4 f 1 7 7 7 . . . . 
            . . . 4 4 4 4 1 1 7 7 7 . . . . 
            . . . 4 4 4 4 4 7 7 7 7 . . . . 
            . . . 4 4 4 4 4 7 7 7 7 . . . . 
            . . . 4 6 4 4 4 4 7 7 7 . . . . 
            . . . 4 4 6 6 4 4 4 7 7 . . . . 
            . . . 4 4 4 4 4 4 4 4 7 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (funling.vx < 0 || funling.isHittingTile(CollisionDirection.Left)) {
        funling.image.flipX()
        funling.setImage(funling.image)
    }
    funling.ay = 350
})
