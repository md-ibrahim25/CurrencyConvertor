import { useState } from 'react'
import useCurrencyinfo from "./hooks/useCurrencyinfo.js";
import img from './assets/bgimg.jpg';
import './App.css'
import InputBox from "./components/InputBox.jsx";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [To, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const Currencyinfo = useCurrencyinfo(from);
  const options = Object.keys(Currencyinfo);
  const swap = () => {
    setFrom(To);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  const convert = () => {
    setConvertedAmount(amount * Currencyinfo[To])
  }

  return (
    <>
      <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='flex justify-center items-center bg-cover w-screen h-screen'>

        <div className='max-w-md w-full bg-white/30 rounded-lg p-3 mx-auto flex flex-col gap-4 '>
          <form action="" onSubmit={(e) => { e.preventDefault() }}>
            <div>
              <InputBox
                label='From'
                Amount={amount}
                CurrencyOptions={options}
                onAmountChange={(amount)=>setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                
              />
            </div>
            <div className='bg-blue-500 inline-block py-2 px-4 absolute text-white rounded-lg left-[45%] top-[45%] translate-x-1/2 translate-y-1/2'>
              <button onClick={swap}>swap</button>
            </div> 
            <div>
              <InputBox
                label='To'
                Amount={convertedAmount}
                CurrencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={To}
                amountDisable
              />
            </div>
            <div>
              <button type='submit' className='w-full bg-blue-600 text-white px-10 py-3 rounded-lg' onClick={convert}>Convert {from.toUpperCase()} To {To.toUpperCase()} </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
