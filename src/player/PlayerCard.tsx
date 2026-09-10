import { useState, type Dispatch, type SetStateAction } from 'react'
import { FaGlobeAsia, FaArrowRight } from 'react-icons/fa'
import type { PlayerDataType } from '../component/playerType'
import { Bounce, toast } from 'react-toastify';

interface PlayerTypes {
    player: PlayerDataType
    coin: number;
    setcoin: Dispatch<SetStateAction<number>>
    selected: PlayerDataType[];
    setselected: Dispatch<SetStateAction<PlayerDataType[]>>
}

const PlayerCard = ({ player, coin, setcoin, selected, setselected }: PlayerTypes) => {

    const [click, setclick] = useState<boolean>(false)
    const handlecoin = () => {
        if (coin >= player.price) {
            const newcoin = coin - player.price
            setcoin(newcoin)
            setclick(true)
            toast.success(`${player.playerName} Added`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })

        }
        else {
            
            toast.warn(`your coin ${coin} `, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return;


        }
        // Selected player 
        const newselected = [...selected, player]
        setselected(newselected)

    }
    return (
        <div className="group overflow-hidden rounded-2xl border border-[#E7E7E7] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.10)]">

            {/* Image Section */}
            <div className="relative h-64 overflow-hidden bg-[#F4F5F5] sm:h-72">

                <img
                    src={player.playerimg}
                    alt={player.playerName}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />

                {/* Player Type */}
                <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#131313] shadow-sm backdrop-blur-md">
                        {player.playertype}
                    </span>
                </div>

            </div>

            {/* Content */}
            <div className="p-5">

                {/* Name & Country */}
                <div className="mb-5">
                    <h3 className="text-xl font-bold text-[#131313]">
                        {player.playerName}
                    </h3>

                    <div className="mt-1.5 flex items-center gap-1.5 text-sm text-[#131313]/55">
                        <FaGlobeAsia className="text-[#DBF128]" />
                        <span>{player.origin}</span>
                    </div>
                </div>

                {/* Player Details */}
                <div className="grid grid-cols-2 gap-3">

                    {/* Batting */}
                    <div className="rounded-xl bg-[#F7F8F8] p-3 transition-colors duration-300 group-hover:bg-[#F3F5F5]">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-[#131313]/40">
                            Batting
                        </p>

                        <p className="mt-1.5 text-sm font-semibold text-[#131313]">
                            {player.battingStyle}
                        </p>
                    </div>

                    {/* Bowling */}
                    <div className="rounded-xl bg-[#F7F8F8] p-3 transition-colors duration-300 group-hover:bg-[#F3F5F5]">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-[#131313]/40">
                            Bowling
                        </p>

                        <p className="mt-1.5 text-sm font-semibold text-[#131313]">
                            {player.bowlingStyle}
                        </p>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="mt-5 flex items-center justify-between border-t border-[#EEEEEE] pt-4">

                    {/* Price */}
                    <div>
                        <p className="text-lg text-[#131313]/40">
                            Price
                        </p>

                        <p className="mt-0.5 text-xl font-bold text-[#131313]">
                            ${player.price.toLocaleString()}
                        </p>
                    </div>

                    {/* Button */}
                    <button
                        disabled={click}
                        onClick={handlecoin}
                        className={`group/btn flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-[#131313] transition-all duration-300
        
                                ${click ? " bg-gray-400"
                                : "bg-[#DBF128] hover:bg-[#cfe91d] hover:shadow-md active:scale-95"
                            }`}>
                        {click ? (
                            "Selected"
                        ) : (
                            <>
                                Choose
                                <FaArrowRight className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </>
                        )}
                    </button>

                </div>

            </div>
        </div>
    )
}

export default PlayerCard