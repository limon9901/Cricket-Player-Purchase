import  { type Dispatch, type SetStateAction } from 'react'
import type { PlayerDataType } from '../component/playerType'
import PlayerCard from './PlayerCard'
interface AvailableProps {
    player: PlayerDataType[];
    coin: number;
    setcoin: Dispatch<SetStateAction<number>>
    selected:PlayerDataType[];
    setselected:Dispatch<SetStateAction<PlayerDataType[]>>
}

const Available = ({ player, coin, setcoin ,selected ,setselected }: AvailableProps) => {
   
    return (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {
                player.map(player => <PlayerCard key={player.playerName} player={player} coin={coin} setcoin={setcoin}  selected={selected} setselected={setselected} />)
            }


        </div>
    )
}

export default Available