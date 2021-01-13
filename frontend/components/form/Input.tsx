import React, { createRef, useRef, useState } from 'react'
import NumberFormat from 'react-number-format';

type InputProps = {
    type: string
    name: string
    label: string
    onChange: any
    text_light?: boolean
    minNumber?: number
    maxNumber?: number
    value?: number | string
}

// Regular Input 
// Good For Text / Dates
export const Input = ({type, name, label, onChange, text_light, value}: InputProps) => {
    return (
        <div className="flex-1 flex flex-col space-y-2">
            <label htmlFor={name} className="text-gray-100">{label}</label>
            <input type={type} name={name}
                value={value}
                className="w-full bg-gray-300 border border-gray-800 rounded shadow-sm text-gray-800 py-1 pl-2"
                onChange={onChange}/>
        </div>
    )
}

// Input Used For Numbers
export const InputNumber = ({name, label, onChange, text_light, minNumber, maxNumber}: InputProps) => {
    const textClass = text_light ? 'text-gray-100' : 'text-gray-800';

    // Check the value of the input
    // Insure not lower than min or greater than max
    const checkValue = (val: string) => {
        // Check for a min max before a return
        if(minNumber !== undefined && maxNumber !== undefined) {
            if(+val > maxNumber || +val < minNumber) {
                return ""
            } else {
                return val
            }
        }
        return val;
    }

    return (
        <div className="flex-1 flex flex-col space-y-2">
            <label htmlFor={name} className={textClass}>{label}</label>
            <NumberFormat name={name} 
                min={minNumber}
                max={maxNumber}
                format={checkValue}
                className="w-full bg-gray-300 border border-gray-800 rounded shadow-sm text-gray-800 py-1 pl-2"
                onChange={onChange}/>
        </div>
    )
}

// Money Format Input
export const InputMoney = ({type, name, label, onChange, text_light}: InputProps) => {
    const textClass = text_light ? 'text-gray-100' : 'text-gray-800';
    return (
        <div className="flex-1 flex flex-col space-y-2">
            <label htmlFor={name} className={textClass}>{label}</label>
            <NumberFormat thousandSeparator={true} prefix={'$'}
                name={name} className="w-full bg-gray-300 border border-gray-800 rounded shadow-sm text-gray-800 py-1 pl-2"
            onChange={onChange}/>
        </div>

    )
}

