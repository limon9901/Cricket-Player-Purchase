import { use, useState, type Dispatch, type SetStateAction } from 'react'
import Available from '../player/Available'
import Selected from '../player/Selected'
import type { PlayerDataType } from './playerType'
export interface PlayerProps {
    playerPromise :Promise<PlayerDataType[]>
    coin:number;
    setcoin: Dispatch<SetStateAction<number>>

}


const AllPlayear = ({ playerPromise ,coin,setcoin } :PlayerProps) => {
    const player = use(playerPromise)
   
    const [availablebtn, setavailablebtn] = useState<"available" | "selected">("available")
    const handleavaileblebrn = (valuebutton: "available" | "selected") => {
        setavailablebtn(valuebutton)
    }
    const [selected,setselected]= useState<PlayerDataType[]>([])
    return (
        <div className='container mx-auto mt-15'>
            <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-bold'>Available Players</h2>
                <div className='flex items-center justify-center' >
                    <button onClick={() => handleavaileblebrn("available")} className={` px-7 py-3  border border-[#E7E7E7]  rounded-l-lg ${availablebtn == "available" ? "bg-[#DBF128] font-bold text-[#131313] " : "bg-white text-[#131313]/60 "} `} >Available</button>
                    <button onClick={() => handleavaileblebrn("selected")} className={` px-7 py-3  border border-[#E7E7E7]  rounded-r-lg ${availablebtn == "selected" ? "bg-[#DBF128] font-bold text-[#131313] " : "bg-white text-[#131313]/60 "} `} >Selected</button>
                </div>

            </div>
            {
                availablebtn === "available" ? <Available player={player} coin={coin} setcoin={setcoin} selected={selected} setselected={setselected} /> : <Selected  selected={selected} setselected={setselected} coin={coin} setcoin={setcoin} />
            }
        </div>
    )
}

export default AllPlayear