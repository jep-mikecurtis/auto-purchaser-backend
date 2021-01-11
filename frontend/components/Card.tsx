import React from 'react'

type CardProps = {
    header: string
    children: any
}

const Card: React.FunctionComponent<CardProps> = ({header, children}: CardProps) => {
    return (
        <div className="w-full max-w-2xl rounded overflow-hidden">
            {/* Header */}
            <div className="bg-gray-800 text-center py-2 text-xl">
                {header}
            </div>
            {/* Body */}
            <div className="p-4 bg-gray-300">
                {children}
            </div>
        </div>
    )
}

export default Card;
