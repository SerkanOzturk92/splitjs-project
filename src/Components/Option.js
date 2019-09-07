import React from 'react';
import {optionData} from "../Utils/constant";

export default class Option extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            option: optionData,
        };
        this.prepareCheckBox = this.prepareCheckBox.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
    }


    prepareCheckBox(){
        return this.state.columns.map((col, index)=>{
            return <label key={index}><input
                key={index}
                type="checkbox"
                onChange={ this.handleChecked }
                id={col.key}
                value={col.val}
                checked={col.checked}
            />{col.val}</label>
        })
    }

    handleChecked(e) {
        let newColumns = this.state.columns;
        newColumns.forEach((col,i) => {
            if(col.key === e.target.id) {
                newColumns[i].checked = e.target.checked;
            }
        });

        this.setState({columns: newColumns});
    }

    render() {
        return (
            <div className='option'>
                <div className='option-container'>
                    <span className='option-icon'>*</span>
                    <div className='option-box'>
                        {this.prepareCheckBox()}
                    </div>
                </div>
            </div>
        );
    }
}