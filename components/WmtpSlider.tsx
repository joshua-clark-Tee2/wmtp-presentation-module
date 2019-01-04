import * as React from 'react';
import Slider from '@material-ui/lab/Slider';
import {ChangeEvent} from "react";

/**
 * Slider Module Properties
 */
export interface IProps {
    /** Description for left side of slider */
    lowerTag: string
    /** Description for right side of slider */
    upperTag: string
    /** Title above slider */
    title?: string
    /** Number value of the sliders current state */
    value: number
    /** Handler function to handle what do do with the sliders state */
    handleChange: (event: ChangeEvent<{}>, value: number) => void
}

/**
 * Form WmtpSlider
 */
export class WmtpSlider extends React.Component<IProps> {
    render() {
        return (
            <div>
                <p style={{textAlign: 'center'}}>{this.props.title}</p>
                <span style={{float: 'left'}}>{this.props.lowerTag}</span>
                <span style={{float: 'right'}}>{this.props.upperTag}</span>
                <br/>
                <Slider
                    min={0}
                    max={100}
                    step={1}
                    value={this.props.value}
                    aria-labelledby="label"
                    onChange={this.props.handleChange}
                />
            </div>
        );
    }
}

export default WmtpSlider;