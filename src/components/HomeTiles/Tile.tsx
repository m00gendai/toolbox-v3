import { Tile } from "../../../public/tileLinks"
import {setTileColor} from "../../utils"
import s from "./Tile.module.css"
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'

interface Props{
    data: Tile
}

export default function Tile({data}:Props){
    return(
        <Card background={setTileColor(data.style)} className={s.tile}>
        <div className={s.iconContainer}>
            <img src={`Assets/${data.img}`} className={s.icon} />
        </div>
        <div className={s.title}>
            {data.title}
        </div>
      </Card>
    )
}