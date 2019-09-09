import React from 'react';
import {connect} from 'react-redux';
import LayOutIcon from '../assets/layout.svg';
import SaveIcon from '../assets/save.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layOutIsChanged: false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.layOutIsChanged !== prevProps.layOutIsChanged) {
            console.log('changed');
            this.setState({
                layOutIsChanged: true,
            })
        }
    }


    render() {
        return (
            <div className='header'>
                <h1>EPİAŞ</h1>
                <img className='medium-icon' src={this.state.layOutIsChanged ? SaveIcon : LayOutIcon} alt=""/>
                <p className='short-name'>SÖ</p>
                <p className='header-name'>Merhaba, Serkan</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        layOutIsChanged: state.HomePageReducer.layOutIsChanged
    }
};
export default Header = connect(mapStateToProps)(Header);