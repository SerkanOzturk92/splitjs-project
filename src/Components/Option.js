import React from 'react';
import {optionData} from "../Utils/constant";
import {setOptionData} from "../Redux/actions";
import {connect} from "react-redux";
import OptionIcon from "../assets/options.svg";

class Option extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            option: optionData,
        };
        this.prepareCheckBox = this.prepareCheckBox.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
    }


    prepareCheckBox(){
        return this.state.option.map((col, index)=>{
            return <label key={index}><input
                key={index}
                type="checkbox"
                onChange={ this.handleChecked }
                id={col.key}
                value={col.val}
                defaultChecked={col.checked}
            />{col.val}</label>
        })
    }

    handleChecked(e) {
        let newColumns = this.state.option;
        newColumns.forEach((col,i) => {
            if(col.key === e.target.id) {
                newColumns[i].checked = e.target.checked;
            }
        });
        this.setState({option: newColumns});
        this.props.setOptionData(JSON.stringify(newColumns));
    }

    render() {
        return (
            <div className='option'>
                <div className='option-container'>
                    <img src={OptionIcon} className='small-icon' alt=''/>
                    <div className='option-box'>
                        {this.prepareCheckBox()}
                    </div>
                </div>
            </div>
        );
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        setOptionData: (info) => dispatch(setOptionData(info)),
    };
};

export default connect(null, mapDispatchToProps)(Option);
