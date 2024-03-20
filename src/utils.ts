import {Tile} from "../public/tileLinks"

export function setTileColor(style: string){
    switch(style){
        case "spvr": return "linear-gradient(45deg,  #e570e7 0%,#c85ec7 47%,#a849a3 100%)";
            break;
        case "aro": return "linear-gradient(45deg,  #a7cfdf 0%,#23538a 100%)";
            break;
        case "general": return "linear-gradient(45deg,  #ffa84c 0%,#ff7b0d 100%)";
            break;
        case "pub": return "linear-gradient(45deg, #299a0b 0%,#299a0b 100%)";
            break;
        case "sfo": return "linear-gradient(45deg,  #ffd65e 0%,#febf04 100%)";
            break;
        case "doc": return "linear-gradient(45deg,  #ff3019 0%,#cf0404 100%)";
            break;
    }
}

export function sortTilesByName(tiles:Tile[]){
    const sorted:Tile[] = tiles.sort((a:Tile, b:Tile) => {
        const x:string = a.title
        const y:string = b.title
        return x > y ? 1 : x < y ? -1 : 0
    })
    return sorted
}