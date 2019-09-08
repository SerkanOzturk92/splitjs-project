import React from 'react';
import {connect} from "react-redux";
import {setNewListData} from "../Redux/actions";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newFormData: ['', '', ''],
        };

        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    submit() {
        const newData = [...this.state.newFormData];
        this.props.setNewListData(newData)
    }

    onChange(e) {
        let data = this.state.newFormData;
        data[e.target.id] = e.target.value;
        this.setState({
            newFormData: data
        });
    }

    render() {
        return (
            <div className='form'>
                <div>
                    <input type="text" key='00' id="0" onChange={this.onChange}/>
                    <input type="text" key='01' id="1" onChange={this.onChange}/>
                    <input type="text" key='02' id="2" onChange={this.onChange}/>
                    <input type="submit" key='03' value="Submit" onClick={this.submit}/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNewListData: (info) => dispatch(setNewListData(info))
    }
};

export default connect(null, mapDispatchToProps)(Form);