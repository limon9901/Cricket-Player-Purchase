import  { type Dispatch, type SetStateAction } from 'react'
import type { PlayerDataType } from '../component/playerType'
import SelectPlayerCard from './SelectPlayerCard'
interface SelectedType {
    selected: PlayerDataType[];
    setselected:Dispatch<SetStateAction<PlayerDataType[]>>;
    coin: number;
    setcoin: Dispatch<SetStateAction<number>>
}
const Selected = ({ selected ,setselected, coin ,setcoin}: SelectedType) => {
    return (
        <div>
            {
                selected.map(player => <SelectPlayerCard key={player.playerName} player={player} coin={coin} setcoin={setcoin}
                     setselected={setselected} selected={selected} />)
            }
        </div>
    )
}

export default Selected