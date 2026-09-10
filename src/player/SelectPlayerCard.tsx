import  { type Dispatch, type SetStateAction } from 'react'
import type { PlayerDataType } from '../component/playerType'
import { FaTrash } from 'react-icons/fa'
import { HiCurrencyDollar } from 'react-icons/hi'

interface SelectedCardType {
    player: PlayerDataType;
    coin: number;
    setcoin: Dispatch<SetStateAction<number>>;
    selected: PlayerDataType[];
    setselected: Dispatch<SetStateAction<PlayerDataType[]>>;
}

const SelectPlayerCard = ({ player, coin, setcoin, selected, setselected }: SelectedCardType) => {
    console.log(selected)
    const handleDelete = () => {
        const newcoin = coin + player.price
        setcoin(newcoin)
        const delet = selected.filter(playrername => playrername.playerName != player.playerName)
       setselected(delet)
       
    }
    return (
        <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-lime-400 hover:shadow-md">

            {/* Image */}
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                <img
                    src={player.playerimg}
                    alt={player.playerName}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Player Info */}
            <div className="flex-1">
                <h2 className="text-sm font-bold text-gray-900">
                    {player.playerName}
                </h2>

                <div className="mt-1 flex items-center gap-1 text-[11px] text-gray-400">
                    <span>{player.origin}</span>
                    <span>•</span>
                    <span>{player.playertype}</span>
                </div>

                <p className="mt-1 text-[11px] text-gray-400">
                    {player.battingStyle}
                </p>
            </div>

            {/* Price */}
            <div className="mr-2 text-right">
                <span className="block text-[10px] text-gray-400">
                    Price
                </span>

                <strong className=" font-bold text-gray-800 flex items-center justify-center gap-1 text-lg">
                    <HiCurrencyDollar className='text-black' />{player.price}
                </strong>
            </div>

            {/* Delete */}
            <button onClick={handleDelete}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-400 transition hover:bg-red-500 hover:text-white"
            >
                <FaTrash size={11} />
            </button>

        </div>
    )
}

export default SelectPlayerCard 