import { sample } from 'lodash-es'
import React from 'react'

type InputProps = {
    type: string
    name: string
    label: string
    onChange: any,
}

export const Input = ({type, name, label, onChange}: InputProps) => {
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor={name} className="text-gray-800">{label}</label>
            <input type={type} name={name} className="bg-gray-300 border border-gray-800 rounded shadow-sm text-gray-800 py-1 pl-2"
            onChange={onChange}/>
        </div>
    )
}

