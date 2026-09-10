
import logo from '../assets/logo.png'
import { HiCurrencyDollar } from 'react-icons/hi'
interface NavPorps {
    coin:number
}

const Nav = ({coin}:NavPorps) => {
    return (
        <>
            <nav className='py-4'>
                <div className='container mx-auto flex items-center justify-between'>

                    <img src={logo} alt="" />


                    <div className='flex items-center justify-center gap-7'>
                        <ul className='flex items-center justify-center gap-6 text-[#131313]/70  font-medium text-lg'>

                            <li>Home</li>
                            <li>Fixture</li>
                            <li>Teams</li>
                            <li>Schedules</li>
                        </ul>
                        <h2 className='border px-5 py-4 border-[#131313]/10 rounded-xl flex items-center justify-center gap-2 text-3xl  '><span className=' font-semibold'>{coin}</span> <HiCurrencyDollar className='text-[#F39E09]' /></h2>
                    </div>



                </div>
            </nav>

        </>
    )
}

export default Nav