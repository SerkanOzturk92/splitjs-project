import React from "react";

export default class Table extends React.Component {

    constructor(props) {
        super(props);
        this.getHeader = this.getHeader.bind(this);
    }

    getHeader (){
        return this.props.columns.map((col)=>{
            return col.checked ? <th key={col.key}>{col.val}</th> : null
        })
    }

    getRowsData(){
        return this.props.data.map((dt, index)=>{
            return <tr key={index}>{this.renderRow(dt)}</tr>
        })
    }

    renderRow(dt) {
        return this.props.columns.map((col)=>{
            return col.checked ? <td key={dt[col.key]}>{dt[col.key]}</td> : null
        })
    }

    render() {
        return (
            <div className='table-container'>
                <table>
                    <thead>
                    <tr>{this.props.columns && this.getHeader()}</tr>
                    </thead>
                    <tbody>
                    {this.props.data && this.getRowsData()}
                    </tbody>
                </table>
            </div>
        );
    }
}