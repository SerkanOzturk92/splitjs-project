import React, {Component} from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import DropDown from "../Components/DropDown";
import {connect} from 'react-redux';

class HomePage extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return (
            <div className='home-page'>
                <Header/>
                <div className='body'>
                    <DropDown/>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        yearValue: state.HomePageReducer.yearValue,
    }
};
export default HomePage = connect(mapStateToProps)(HomePage);
