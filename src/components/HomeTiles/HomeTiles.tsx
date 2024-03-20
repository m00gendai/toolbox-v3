import { homeTileData } from "../../../public/tileLinks"
import { Tile as TileType } from "../../../public/tileLinks"
import { sortTilesByName } from "../../utils"
import s from "./HomeTiles.module.css"
import Tile from "./Tile"

export default function HomeTiles(){

const tiles:TileType[] = sortTilesByName(homeTileData)

    return(
        <div className={s.container}>
            {tiles.map(tile=>{
        return <Tile data={tile} />
      })}
        </div>
    )
}