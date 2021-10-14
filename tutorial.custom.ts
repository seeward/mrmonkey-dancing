namespace sprites {
    //% block="make $thisSprite=variables_get(mySprite) gravity jump"
        export function gravity_jump (thisSprite: Sprite) {
        if (thisSprite.isHittingTile(CollisionDirection.Bottom)) {
            thisSprite.vy = -200
        }
    }
}