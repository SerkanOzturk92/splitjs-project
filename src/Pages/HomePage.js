import React, {Component} from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import DropDown from "../Components/DropDown";
import {connect} from 'react-redux';
import Option from "../Components/Option";
import Form from "../Components/Form";
import List from "../Components/List";
import Split from 'react-split'
import EmptyBox from "../Components/EmptyBox";
import Location from "../Components/Location";


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionObj:  {}
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.optionObj !== this.props.optionObj){
            // TODO: burada gelen option datasına göre filtreleme yapılacak ve table hazırlanacak.
            this.setState({
                optionObj: JSON.parse(this.props.optionObj)
            });
        }
    }

    onSizeChangedMid(e) {
        console.log(e);
        this.setState({
            positionOfMid: '' + e[0] + ' , ' + e[1]
        });
        //this.props.getLayoutLocation('mid');
    }

    onSizeChangedTop(e) {
        console.log(e);
        this.setState({
            positionOfTop: '' + e[0] + ' , ' + e[1]
        });
        //this.props.getLayoutLocation('top');
    }

    onSizeChangedBottom(e) {
        console.log(e);
        this.setState({
            positionOfBottom: '' + e[0] + ' , ' + e[1]
        });
        //this.props.getLayoutLocation('bot');
    }

    render() {
        const {newFormData} = this.props;
         return (
            <div className='home-page'>
                <Header/>
                <div className='container'>
                    <Split
                        className='split'
                        direction='vertical'
                        sizes={[65, 32]}
                        onDragEnd={this.onSizeChangedMid.bind(this)}
                        minSize={[282, 200]}

                    >
                        <Split
                            className='split'
                            direction='horizontal'
                            sizes={[63, 33]}
                            onDragEnd={this.onSizeChangedTop.bind(this)}
                        >
                            <div className='filter-list content' id='cont1'>
                            <DropDown/>
                            <Option/>
                            </div>
                            <Location/>
                        </Split>
                        <Split
                            className='split'
                            direction='horizontal'
                            sizes={[63, 33]}
                            onDragEnd={this.onSizeChangedBottom.bind(this)}
                        >
                            <div className='basic-form content ' id='cont3'>
                                <List/>
                                <Form/>
                            </div>
                            <EmptyBox/>
                        </Split>


                    </Split>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        yearValue: state.HomePageReducer.yearValue,
        optionObj: state.HomePageReducer.optionObj,
        newFormData: state.HomePageReducer.newFormData,
    }
};
export default HomePage = connect(mapStateToProps)(HomePage);
