enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Sword = SpriteKind.create()
}
let myEnemy: Sprite = null
let mySprite: Sprite = null
let projectile: Sprite = null
let myEnemy3: Sprite = null
function Spawn_Enemies () {
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        myEnemy = sprites.create(, SpriteKind.Enemy)
        tiles.placeOnTile(myEnemy, value)
        myEnemy.follow(mySprite, 60)
        tiles.setTileAt(value, sprites.castle.tileGrass2)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(, mySprite, 0, -150)
})
game.onUpdate(function () {
    Spawn_Enemies()
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        myEnemy3 = sprites.create(, SpriteKind.Enemy)
        tiles.placeOnTile(myEnemy3, value)
        myEnemy3.follow(mySprite, 60)
        tiles.setTileAt(value, sprites.dungeon.purpleOuterWest2)
        tiles.setTileAt(value, sprites.dungeon.purpleOuterEast2)
    }
})
game.onUpdate(function () {
    Spawn_Enemies()
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        myEnemy3 = sprites.create(, SpriteKind.Enemy)
        tiles.placeOnTile(myEnemy3, value)
        myEnemy3.follow(mySprite, 60)
        tiles.setTileAt(value, sprites.dungeon.darkGroundSouthEast1)
    }
})
