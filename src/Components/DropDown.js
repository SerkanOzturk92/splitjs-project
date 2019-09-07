import React from 'react';
import {selectData} from "../Utils/constant";
import {setYearValue} from "../Redux/actions";
import {connect} from "react-redux";

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueYear: selectData
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            valueYear: e.target.value,
        });
        this.props.setYearValue(e.target.value);
    }

    render() {
        return (
            <div className='dropdown'>
                <div className='select'>
                    <select onChange={this.handleChange}>
                        <option value={undefined}>Yıl Seçiniz...</option>
                        {
                            selectData.map(el => {
                                return <option key={el} value={el}>{el}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setYearValue: (info) => dispatch(setYearValue(info)),
    };
};

export default connect(null, mapDispatchToProps)(DropDown);
