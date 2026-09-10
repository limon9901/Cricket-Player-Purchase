import  { Suspense, useState } from 'react'
import Nav from './component/Nav'
import Hero from './component/Hero'
import AllPlayear from './component/AllPlayear'
import type { PlayerDataType } from './component/playerType'
import Subcribe from './component/Subcribe'
import Footer from './component/Footer'

const playerrpromise = async (): Promise<PlayerDataType[]> => {
  const res = await fetch("/players.json")
  const data = await res.json()
  return data
}


const App = () => {
  const [playerPromise] = useState(() => playerrpromise())
  const [coin,setcoin]=useState<number>(600)
  return (
    < div className='font-sorafont'>
      <Nav  coin={coin} />
      <Hero />
      <Suspense
        fallback={
          <div className="flex min-h-75 items-center justify-center">
            <div className="flex flex-col items-center gap-4">

              {/* Spinner */}
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-[#DBF128]"></div>

              {/* Text */}
              <p className="animate-pulse text-sm font-medium text-[#131313]/60">
                Loading players...
              </p>

            </div>
          </div>
        }
      >
        <AllPlayear playerPromise={playerPromise} coin={coin} setcoin={setcoin} />
      </Suspense>
      <Subcribe/>
      <Footer/>

    </div>
  )
}

export default App