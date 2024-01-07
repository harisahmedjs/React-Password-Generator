import React, { useState, useEffect } from "react";


function App(){
  const [password , setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [number , setNumber] = useState(false);
  const [symbol , setSymbol] = useState(false);

  function Generate(){
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (symbol) {
      str += '!@#$%^&*()}{[=+_]/'
    }
    
    if (number) {
      str += '123456789'
    }
  for (let i = 0; i < length; i++) {
    const randomnumber = Math.floor(Math.random()*str.length)
    let char = str.charAt(randomnumber)
    pass+= char
  }
  setPassword(pass)
}
useEffect(()=>{
  Generate()
},[number , length , symbol])

function Copypass(){
  navigator.clipboard.writeText(password)
}

  return(
    <>
    <div className='flex items-center justify-evenly mt-44 mb-9'>

<div className='flex items-center justify-start gap-[2rem] bg-[#ffffff] p-6 w-[50%] rounded-3xl'>
  <h2 className='text-[2.5rem] w-[80%]  overflow-hidden break-before-column text-black'>{password}</h2>
  <div className='flex items-center justify-center gap-[20px]'>
    <button onClick={Copypass} className="text-[1.7rem]"><i class="ri-file-copy-line"></i></button>
    <button onClick={Generate} className="text-[1.7rem]"><i class="ri-loop-left-line"></i></button>
  </div>
</div>

</div>

    <div className="bg-[#ffffff] m-auto w-[45%] p-6">
      <h1 className="text-2xl font-extrabold">Customize Your Password</h1>
      <div className='flex items-center justify-center mt-2'>
        <div className='border-b-[2px] border-[#c7c5c5ce] w-[100%]'>

        </div>
      </div>
      <h2 className="text-xl ml-4 mb-2 mt-2">Password length</h2>
    <label htmlFor="lenght" className='mr-[10px] border-[1px] border-[#b0b0b0c9] px-[20px] py-[3px] shadow-inner rounded-md text-[18px] font-bold'>{length}</label>
     <input type="range" id="length" min={1} max={20} onChange={(e) => setLength(e.target.value)} value={length} />
     <div className="text-black ml-[85%]">
    <label htmlFor="number" className="mr-2 text-xl">Number</label>
    <input type="checkbox"  onChange= {(e)=>  setNumber(e.target.checked)}/><br />
    <label htmlFor="symbol" className="mr-[15%] text-xl">Symbol</label>
    <input type="checkbox"  onChange= {(e)=>  setSymbol(e.target.checked)}/><br /> 
    </div>
   </div>
  
    </>
  )
}

export default App