import React, { SFC } from 'react'

interface IProps {
    name: string
    value: number
}

export const Parameters: SFC<IProps> = ({ name, value }): JSX.Element => <p className="parameters-style">{ name }: { value } px</p>
