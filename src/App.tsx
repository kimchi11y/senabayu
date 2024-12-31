import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  const iterate = () => {
    setCount(count+1);
  }

  return (
    <>
     <button onClick={iterate} className='text-2xl text-white font-bold flex justify-center bg-red-600 p-5 m-10 '>
            Press Me!
     </button>

     <div className='flex justify-center text-5xl  '>
      {count}
     </div>
    </>
  )
}

export default App
