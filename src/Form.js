/**
 * Created by agam on 23/3/17.
 */

import React from 'react';

export default class Form extends React.Component{

    constructor(){
        super();

        this.state={
            task:"",
            date:"",
        }

        this.val=this.val.bind(this);
    }


    val(e){
        this.setState({
            [e.target.name]:e.target.value,
        })
    }


    render(){
        return(
            <div className="formalign">
            <div className="container fluid ">
                <form className="form-inline">
                    <div className="form-group">
                        <label >TASK:&nbsp;&nbsp;</label>
                        <input type="text" className="form-control" name="task"
                               id="task" placeholder="TASK" onChange={this.val} value={this.state.task}/>&nbsp;&nbsp;
                    </div>
                    <div className="form-group">
                        <label >DATE:&nbsp;&nbsp;</label>

                        <input type="date" className="form-control"
                               id="date" name="date" onChange={this.val} value={this.state.date} />

                    </div>&nbsp;&nbsp;
                    <button type="button" className="btn btn-primary" onClick={() => {this.props.getdata(this.state.task, this.state.date)}}>
                        Save
                    </button>

                </form>
            </div>
                <hr/>
            </div>

        );
    }



}