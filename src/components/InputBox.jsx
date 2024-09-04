import React from 'react'
import { useId } from "react";

function InputBox({
    label ,
    Amount ,
    onAmountChange,
    onCurrencyChange,
    CurrencyOptions = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,
    className='',
}) {
    const amountInputId = useId();

    return (
        <div className={`bg-white w-11/12 mx-auto rounded-md text-md flex p-4 gap-[2%] ${className} m-3`}>
            <div className='w-[49%] flex flex-col gap-4'>
            <label htmlFor={amountInputId} className='text-black/40'>{label}</label>
            <input type="number" id={amountInputId} className='outline-none w-full bg-transparent py-1.5 rounded hover:bg-gray-200 cursor-pointer'placeholder='Amount'value={Amount} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} disabled={amountDisable}/>
            </div>
            <div className='w-[49%] flex flex-col gap-4 items-end'>
            <label htmlFor="CurrencyType" className='text-black/40'>Currency Type</label>
            <select name="" id="CurrencyType" className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none' value={selectCurrency} onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
                {CurrencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
            </div>
        </div>
    )
}

export default InputBox

