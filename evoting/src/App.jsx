import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { id } from './constants/addresses'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
//import './App.css'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygonMumbai } from 'viem/chains'

// 1. Get projectId
const projectId = id

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [polygonMumbai];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })
import LandingPage from './Pages/LandingPage'
import RegistrationPage from './Pages/RegistrationForm'
import VotingPanel from './Pages/VotingPanel'
import RegistrationAcademicPage from './Pages/AccademicPage'
import RegistrationSportPage from './Pages/SportsAccademic'
import RegistrationDelegatePage from './Pages/DelegatePage'
import UpdatePage from './Pages/Update'
import UpdateAccademicPage from './Pages/updateAccademic'
import UpdateSportsPage from './Pages/updatesports'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <WagmiConfig config={wagmiConfig}>
     <Router>
      <Routes>
      <Route element={<LandingPage/>} path='/'/>
        <Route element={<LandingPage/>} path='/home'/>
        <Route element={<RegistrationPage/>} path='/registration'/>
        <Route element={<VotingPanel/>} path='/voting'/>
        <Route element={<RegistrationAcademicPage/>} path='/academic'/>
        <Route element={<RegistrationSportPage/>} path='/sport'/>
        <Route element={<RegistrationDelegatePage/>} path='/delegate'/>
        <Route element={<UpdatePage/>} path='/update'/>
        <Route element={<UpdateAccademicPage/>} path='/updateaccademic'/>
        <Route element={<UpdateSportsPage/>} path='/updatesport'/>
       
        

      </Routes>
    </Router>
   
    </WagmiConfig>
      {/* <div className='bg-blue-900 w-full  h-screen flex'>
        <VotingPanel/>
      </div> */}
    </>
  )
}

export default App
