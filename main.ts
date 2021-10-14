scene.onOverlapTile(SpriteKind.Projectile, assets.tile`poison pit`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.gravity_jump(MyMonkey)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, MyMonkey, 0, 0)
    projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
    animation.runImageAnimation(
    projectile,
    assets.animation`splode`,
    200,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(MyMonkey), CollisionDirection.Bottom), true)
    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(MyMonkey), CollisionDirection.Bottom), assets.tile`bounce`)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`orange bauble`, function (sprite, location) {
    info.changeScoreBy(15)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`skyblock`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest1`, function (sprite, location) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`poison pit`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`bounce`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
let projectile: Sprite = null
let MyMonkey: Sprite = null
scene.setBackgroundImage(assets.image`background`)
tiles.setTilemap(tilemap`level1`)
MyMonkey = sprites.create(assets.image`stand`, SpriteKind.Player)
controller.moveSprite(MyMonkey)
MyMonkey.ay = 500
scene.cameraFollowSprite(MyMonkey)
