import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
    static defaultProps = { 
        numBoxes: 18,
        allColors: ["#2bc0e4", "#ee9ca7", "#c31432", "#f12711", "#c6ffdd", "#fffc00", "#1e9600", "#0f2027", "#8e2de2", "#da4453", "#d3cce3", "#ff0099", "#eb5757", "#667db6"] 
    };
    render(){
        const boxes = Array.from({length: this.props.numBoxes}).map(() => (<Box colors={this.props.allColors} />));
        return (
            <div className="BoxContainer">{boxes}</div>
        )
    }
}

export default BoxContainer;