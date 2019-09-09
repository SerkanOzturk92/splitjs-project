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
import {setLayOutState} from "../Redux/actions";
import Table from "../Components/Table";
import {optionData, tableData} from "../Utils/constant";


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionObj: optionData,
            positionOfMid: '65 , 32',
            positionOfTop: '63 , 33',
            positionOfBottom: '63 , 33',
            tableData: tableData,
            formIsVisible: false
        };
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            tableData: this.filterData(),
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.yearValue !== this.props.yearValue) {
            this.setState({
                tableData: this.filterData(),
            })
        }
        if (prevProps.optionObj !== this.props.optionObj) {
            this.setState({
                optionObj: this.props.optionObj ? JSON.parse(this.props.optionObj) : undefined
            });
        }
    }

    filterData() {
        return tableData.filter(dt => {
            if (!this.props.yearValue) {
                return dt.year === 2019
            }
            return dt.year === +this.props.yearValue
        });
    }

    onSizeChangedMid(e) {
        this.setState({
            positionOfMid: '' + e[0] + ' , ' + e[1]
        });
        this.props.setLayOutState(true);
    }

    onSizeChangedTop(e) {
        this.setState({
            positionOfTop: '' + e[0] + ' , ' + e[1]
        });
        this.props.setLayOutState(true);

    }

    onSizeChangedBottom(e) {
        this.setState({
            positionOfBottom: '' + e[0] + ' , ' + e[1]
        });
        this.props.setLayOutState(true);

    }

    onClick() {
        this.setState({
            formIsVisible: true,
        })
    }

    render() {
        const {positionOfTop, positionOfMid, positionOfBottom} = this.state;
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

                                <Table data={this.state.tableData} columns={this.state.optionObj}/>


                            </div>
                            <Location positions={[positionOfTop, positionOfMid, positionOfBottom]}/>
                        </Split>
                        <Split
                            className='split'
                            direction='horizontal'
                            sizes={[63, 33]}
                            onDragEnd={this.onSizeChangedBottom.bind(this)}
                        >
                            <div className='basic-form content ' id='cont3'>
                                <List/>
                                {
                                    this.state.formIsVisible &&
                                    <Form/>
                                }
                                <button onClick={this.onClick}>Yeni ekle</button>
                            </div>
                            <EmptyBox/>
                        </Split>
                    </Split>
                    <Footer/>
                </div>

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

const mapDispatchToProps = (dispatch) => {
    return {
        setLayOutState: (info) => dispatch(setLayOutState(info))
    }
};

export default HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
