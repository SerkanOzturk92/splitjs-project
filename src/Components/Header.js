import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layOutIsChanged:false
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.layOutIsChanged !== prevProps.layOutIsChanged) {
            console.log('changed');
            this.setState ({
                layOutIsChanged: true,
            })
        }
    }

    render() {
        return (
            <div className='header'>
                <p>Beeelllo header  --> is layout changed? --> {this.state.layOutIsChanged ? 'Yes': 'No'}</p>
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