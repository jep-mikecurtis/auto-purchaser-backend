import React from 'react'
import NumberFormat from 'react-number-format';

type InputProps = {
    type: string
    name: string
    label: string
    onChange: any,
    text_light?: boolean
}

export const Input = ({type, name, label, onChange, text_light}: InputProps) => {
    const textClass = text_light ? 'text-gray-100' : 'text-gray-800';
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor={name} className={textClass}>{label}</label>
            <input type={type} name={name} className="w-full bg-gray-300 border border-gray-800 rounded shadow-sm text-gray-800 py-1 pl-2"
            onChange={onChange}/>
        </div>
    )
}

export const InputMoney = ({type, name, label, onChange, text_light}: InputProps) => {
    const textClass = text_light ? 'text-gray-100' : 'text-gray-800';
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor={name} className={textClass}>{label}</label>
            <NumberFormat thousandSeparator={true} prefix={'$'}
                name={name} className="w-full bg-gray-300 border border-gray-800 rounded shadow-sm text-gray-800 py-1 pl-2"
            onChange={onChange}/>
        </div>

    )
}

