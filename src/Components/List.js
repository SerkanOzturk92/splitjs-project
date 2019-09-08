import React from 'react';
import {listData} from "../Utils/constant";
import {connect} from "react-redux";

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listData: listData,
        };
        this.createTable = this.createTable.bind(this);
    }

    componentDidMount() {
        this.createTable();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.newListData !== prevProps.newListData) {
            const newData = this.state.listData;
            newData.push([...this.props.newListData]);
            this.setState({
                listData: newData,
            })
        }
    }

    createTable() {
        return this.state.listData.map(
            (line, i) => {
                return <tr key={i}>{this.addTable(line)}</tr>
            }
        )
    }

    addTable(data) {
        return data.map((el, i) => {
            return <td key={i}>{el}</td>
        })
    }

    render() {
        return (
            <div className='list'>
                <table>
                    <tbody>
                    {this.createTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        newListData: state.HomePageReducer.newListData,
    }
};

export default List = connect(mapStateToProps)(List);