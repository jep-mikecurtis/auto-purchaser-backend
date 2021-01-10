import React from 'react'

type ButtonType = {
    label: string,
    cb: any
}

export const SubmitBtn = ({label, cb}: ButtonType) => {
    return (
        <button onClick={cb}
            className="border border-blue-700 text-blue-700 py-1 px-4 text-sm rounded shadow cursor-pointer hover:bg-blue-700 hover:text-white"
            >{label}
        </button>
    )
}
