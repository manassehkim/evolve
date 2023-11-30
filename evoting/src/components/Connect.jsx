import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useNavigate } from 'react-router-dom'

export default function ConnectButton() {
  const navigate = useNavigate();

  // 4. Use modal hook
  const { open } = useWeb3Modal();

  const handleLogin = async () => {
    await open();
    navigate("/registration");
  };

  return (
    <>
      <div className='flex justify-around items-center h-20'>
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}
