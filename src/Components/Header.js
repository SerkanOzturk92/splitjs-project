import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return (
            <div className='header'>
                <p>Beeelllo header {}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        //layOutLocation: state.HomePageReducer.layOutLocation
    }
};
export default Header = connect(mapStateToProps)(Header);