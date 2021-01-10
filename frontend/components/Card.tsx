import React from 'react'

type CardProps = {
    header: string
    children: any
}

const Card: React.FunctionComponent<CardProps> = ({header, children}: CardProps) => {
    return (
        <div className="max-w-2xl bg-gray-300">
            {/* Header */}
            <div className="bg-blue-800 text-center py-2 text-xl">
                {header}
            </div>
            {/* Body */}
            <div className="p-4">
                {children}
            </div>
        </div>
    )
}

export default Card;
