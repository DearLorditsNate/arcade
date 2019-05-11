import React, { Component } from 'react';
import "./style.css";

export default class Cell extends Component {

    getValue() {
        const { value } = this.props;
        if(value.isFlagged) {
            return "🚩";
        }
        if (value.isMine) {
            return "💣";
        }
        if (value.neighbor === 0) {
            return null;
        }
        else{
            return value.neighbor; 
        }
        
    };

    render() {
        const { value, onClick, cMenu } = this.props;
        let className = "col"  + (value.isRevealed ? "" : " hidden") +
            (value.isMine ? " is-mine" : "") +
            (value.isFlagged ? " is-flag" : "");
        return (
            <div 
            onClick={onClick}
            className={className}
            onContextMenu={cMenu}
            >
            {this.getValue()}
            </div>
        )
    }
}
