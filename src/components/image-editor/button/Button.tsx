import React, { SFC } from 'react'

interface IProps {
    className: string
    name: string
    onClick: () => void | void
}

export const Button: SFC<IProps> = ({ className, name, onClick }): JSX.Element => ( 
    <div className={className}>
        <button className="custom-button" onClick={onClick}>
            { name }
        </button>
    </div>
)
