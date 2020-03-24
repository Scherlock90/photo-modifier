import React, { SFC } from 'react'

interface IProps {
    className: string
    alt: string
    src: string
    style?: object
    onClick?: () => void
}

export const ContainerImage: SFC<IProps> = ({ className, src, style, onClick, alt }): JSX.Element => 
    <img {...{src, className, onClick, alt, style }} /> 