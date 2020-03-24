import React, { SFC } from 'react'
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/lab/Slider";

interface Props {
    value: number;
    max: number;
    onChange(e: any, value: number): void;
}
  
export const ImageSlider: SFC<Props> = ({ value, max, onChange, children }) => (
    <>
        <Typography id="label">
            {children}
        </Typography>
        <Slider
            min={0}
            max={max}
            value={value}
            step={1}
            onChange={onChange}
        />
    </>
)