// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`11001000030202020202020202020202020202020a01080000000000000000000000000000090105070000000000000000000000000009010000050000000007050000000000000901000000050005000000070500000000090100000000000000000000000005000009010000050005050500000507050000000901050000000000000000000000000000090100050000000000000000000000000009010000000507050705000000000000000901000000000000000005000000000000090100000500000000000000050000000009010500000000000005050505070705000901000505050505000000000000000000090100000000000005000000000000000009040606060606060606060606060606060b`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . . 2 
2 . . 2 . . . . . 2 . . . . . . 2 
2 . . . 2 . 2 . . . . 2 . . . . 2 
2 . . . . . . . . . . . . 2 . . 2 
2 . . 2 . 2 2 2 . . 2 . 2 . . . 2 
2 2 . . . . . . . . . . . . . . 2 
2 . 2 . . . . . . . . . . . . . 2 
2 . . . 2 . 2 . 2 . . . . . . . 2 
2 . . . . . . . . 2 . . . . . . 2 
2 . . 2 . . . . . . . 2 . . . . 2 
2 2 . . . . . . 2 2 2 2 . . 2 . 2 
2 . 2 2 2 2 2 . . . . . . . . . 2 
2 . . . . . . 2 . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.floorDark1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.floorDarkDiamond,sprites.castle.tileGrass2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
