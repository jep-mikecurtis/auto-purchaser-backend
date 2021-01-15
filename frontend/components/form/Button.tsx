import React from 'react'

type ButtonType = {
    label: string,
    cb: () => void
}

export const SubmitBtn = ({label, cb}: ButtonType) => {
    return (
        <button onClick={cb}
            className="bg-blue-600 text--white py-1 px-4 text-sm rounded shadow cursor-pointer hover:bg-blue-800 hover:text-white"
            >{label}
        </button>
    )
}
